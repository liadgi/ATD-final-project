const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Profile = require('../models/profile');

const defult_profile_pic = 'http://localhost:8080/profile_pics/defult_profile_pic.jpg'

// Register
router.post('/register', (req, res, next) => {
    const newUser = new User({
        'username': req.body.username,
        'password': req.body.password,
        'fname': req.body.fname,
        'lname': req.body.lname,
        'email': req.body.email,
        'birthday': req.body.birthday,
        'profile_pic': defult_profile_pic
    });

    // TODO: add field validation.

    // Check whether a user with this username already exists and if not create the new user
    User.getUserByUsername(newUser.username, (err, user) =>{
        if(err) res.json({success: false, msg:'Failed to register user: '+err});
        if(user) return res.json({success: false, msg: 'Sorry, this username is taken. try anotherone.'});
        User.registerUser(newUser, (err, user) => {
            if(err) res.json({success: false, msg:'Failed to register user: '+err});
            else res.json({success: true, msg:'Congratulations! You are now registered.'});
        });
    });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    // TODO: add field validation.

    // Get user by username and authenticate it's password
    User.getUserByUsername(username, (err, user) =>{
        if(err) throw err;
        if(!user) return res.json({success: false, msg: 'User not found.'});
        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) return res.json({success: false, msg: err});
            if(isMatch){
                const token = jwt.sign(user, config.secret, {expiresIn: 604800 /* 1 week */ });
                res.json({
                    success: true,
                    token: 'JWT '+token,
                    credentials: {
                        _id: user._id,
                        username: user.username,
                    }
                });
            } 
            else res.json({success: false, msg: 'Wrong password.'});
        });
    });
});

// Get a user by Id
router.get('/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {  
    User.getUserById(req.params.id, (err, user) =>{
        if(err) return res.json({success: false, msg: err});
        if(!user) return res.json({success: false, msg: 'User not found.'});
        res.json({
            success: true,
            user: {
                '_id': user._id,
                'username': user.username,
                'password': '',
                'fname': user.fname,
                'lname': user.lname,       
                'email': user.email,
                'birthday': user.birthday,
                'profile_pic': user.profile_pic,
                'followers': user.followers,
                'following': user.following
            }
        });
    });
});

function createCallback (res, msg) {
    return (err, user)  => {
        if (err) return res.json({'success': false, 'msg': err});
        if (!user) return res.json({'success': false, 'msg': 'User not found.'});
        return res.json({'success': true, 'msg': msg});
    }
}

// Update Username
router.post('/update/username/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    User.updateUsername(req.params.id, req.body.username, createCallback(res,'Username Updated!'));
});

// Update Password
router.post('/update/password/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    User.updatePassword(req.params.id, req.body.password, createCallback(res,'Password Updated!'));
});

// Update First Name
router.post('/update/fname/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    User.updateFirstName(req.params.id, req.body.fname, createCallback(res,'First Name Updated!'));
});

// Update First Name
router.post('/update/lname/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    User.updateLastName(req.params.id, req.body.lname, createCallback(res,'Last Name Updated!'));
});

// Update Email
router.post('/update/email/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    User.updateEmail(req.params.id, req.body.email, createCallback(res,'Email Updated!'));
});

// Update Birthday
router.post('/update/birthday/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    User.updateBirthday(req.params.id, req.body.birthday, createCallback(res,'Birthday Updated!'));
});


// // Update user
// router.post('/update/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
//     console.log('!!!!!!!!!!!!!!!');
//     console.log(req.body.token);
//     console.log('!!!!!!!!!!!!!!!');
//     console.log(req.body.user);
//     User.updateUser(user, (err, user) => {
//         if (err) return res.json({success: false, msg: err});
//         if (!user) return res.json({success: false, msg: 'User not found.'});
//         return res.json({success: true, msg: 'User Updated!'});
//     });
// });

module.exports = router;