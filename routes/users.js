const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Followers = require('../models/followers');
const utils = require('../models/utils');

const defult_profile_pic = 'http://localhost:8080/defult_profile_pic.jpg'

function createMsgCallbackForDelete(res, msg) {
    return (err, raw) => {
        if (err) return res.json({ 'success': false, 'msg': err });
        
        return res.json({ 'success': true, 'msg': msg });
    }
}

// Register
router.post('/register', (req, res, next) => {
    const newUser = new User({
        'username': req.body.username,
        'password': req.body.password,
        'fname': req.body.fname,
        'lname': req.body.lname,
        'email': req.body.email,
        'birthday': req.body.birthday,
        'profile_pic': defult_profile_pic,
        'followers_count': 0,
        'following_count': 0
    });

    // TODO: add field validation.

    // Check whether a user with this username already exists and if not create the new user
    User.getUserByUsername(newUser.username, (err, user) => {
        if (err) res.json({ success: false, msg: 'Failed to register user: ' + err });
        if (user) return res.json({ success: false, msg: 'Sorry, this username is taken. try anotherone.' });
        User.registerUser(newUser, (err, user) => {
            if (err) res.json({ success: false, msg: 'Failed to register user: ' + err });
            else res.json({ success: true, msg: 'Congratulations! You are now registered.' });
        });
    });
});


// Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    // TODO: add field validation.
    
    // Get user by username and authenticate it's password
    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({ success: false, msg: 'User not found.' });
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) return res.json({ success: false, msg: err });
            if (isMatch) {
                const token = jwt.sign(user, config.secret, { expiresIn: 604800 /* 1 week */ });
                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    credentials: {
                        _id: user._id,
                        username: user.username,
                    }
                }); 
            }
            else res.json({ success: false, msg: 'Wrong password.' });
        });
    });
});


// Get a user
router.get('/profile/:username', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.getUserByUsername(req.params.username, (err, user) => {
        if (err) return res.json({ success: false, msg: 'Could not get user profile: '+err });
        else if (!user) return res.json({ success: false, msg: 'User not found.' });
        else {
            // console.log('@@@', user);
            res.json({ 
            success: true,
            user: {
                '_id': user._id,
                'username': user.username,
                'password': '',
                'fname': user.fname,
                'lname': user.lname,
                'email': user.lname,
                'birthday': user.birthday,
                'profile_pic': user.profile_pic,
                'followers': user.followers,
                'followers_count': user.followers_count,
                'following': user.following,
                'followeing_count': user.following_count,
            }});
        }
    });
});


function createMsgCallback(res, msg) {
    return (err, raw) => {
        if (err) return res.json({ 'success': false, 'msg': err });
        if (!raw.ok || !raw.n) return res.json({ 'success': false, 'msg': 'User not found.' });
        return res.json({ 'success': true, 'msg': msg });
    }
}


function createUsersCallback(res) {
    return (err, users) => {
        if (err) return res.json({ 'success': false, 'msg': err });
        if (!users) return res.json({ 'success': false, 'msg': 'Could not find Users' });
        return res.json({ 'success': true, 'users': users });
    }
}


// Update Username
router.post('/update/username', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.updateUsername(req.body.newUsername, req.user._id, req.user.password ,createMsgCallback(res, 'Username Updated!'));
});

// Update Password
router.post('/update/password', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.updatePassword(req.body.newPasword, req.user._id, req.user.password, createMsgCallback(res, 'Password Updated!'));
});

// Update First Name
router.post('/update/fname', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.updateFirstName(req.body.newFname, req.user._id, req.user.password, createMsgCallback(res, 'First Name Updated!'));
});

// Update First Name
router.post('/update/lname', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.updateLastName(req.body.newLname, req.user._id, req.user.password, createMsgCallback(res, 'Last Name Updated!'));
});

// Update Email
router.post('/update/email', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.updateEmail(req.body.newEmail, req.user._id, req.user.password, createMsgCallback(res, 'Email Updated!'));
});

// Update Birthday
router.post('/update/birthday', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.updateBirthday(req.body.newBirthday, req.user._id, req.user.password, createMsgCallback(res, 'Birthday Updated!'));
});


// Follow User
router.post('/follow', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.followUser(req.body.username, req.user.username, req.user.password, createMsgCallbackForDelete(res, 'Could not follow requested user.'));
});

// Unfollow User
router.post('/unfollow', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.unfollowUser(req.body.username, req.user.username, req.user.password, createMsgCallbackForDelete(res, 'Could not follow requested user.'));
});





// Get All Users
router.get('/all', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.getUsers('', createUsersCallback(res));
});

// Get Top Users
router.get('/top', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.getTopUsers(utils.getPageFromReq(req), createUsersCallback(res));
});

// Search Users
router.get('/search/:query', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.getUsers(utils.getPageFromReq(req), req.params.query, createUsersCallback(res));
});



module.exports = router;