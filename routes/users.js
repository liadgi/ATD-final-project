const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Followers = require('../models/followers');
const utils = require('../models/utils');

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

// Get a user by Id
router.get('/profile/:user', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    // User.getUserById(req.params.id, (err, user) => {
    //     if (err) return res.json({ success: false, msg: err });
    //     if (!user) return res.json({ success: false, msg: 'User not found.' });
    //     res.json({
    //         success: true,
    //         user: {
    //             '_id': user._id,
    //             'username': user.username,
    //             'password': '',
    //             'fname': user.fname,
    //             'lname': user.lname,
    //             'email': user.email,
    //             'birthday': user.birthday,
    //             'profile_pic': user.profile_pic,
    //             'followers': user.followers,
    //             'following': user.following
    //         }
    //     });
    // });


    let user = req.params.user;
    User.getUser(user, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'Could not get user profile' });
        } else {
            if (!user) {
                return res.json({ success: false, msg: 'User not found.' });
            } else {
                res.json({ success: true, user: user[0] });
            }
        }
    });

});

function createMsgCallback(res, msg) {
    return (err, user) => {
        if (err) return res.json({ 'success': false, 'msg': err });
        if (!user) return res.json({ 'success': false, 'msg': 'User not found.' });
        return res.json({ 'success': true, 'msg': msg });
    }
}

// TODO : verify requesting user, so that no one could spoof requests
// Update Username
router.post('/update/username/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.updateUsername(req.params.id, req.body.username, createMsgCallback(res, 'Username Updated!'));
});

// Update Password
router.post('/update/password/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.updatePassword(req.params.id, req.body.password, createMsgCallback(res, 'Password Updated!'));
});

// Update First Name
router.post('/update/fname/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.updateFirstName(req.params.id, req.body.fname, createMsgCallback(res, 'First Name Updated!'));
});

// Update First Name
router.post('/update/lname/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.updateLastName(req.params.id, req.body.lname, createMsgCallback(res, 'Last Name Updated!'));
});

// Update Email
router.post('/update/email/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.updateEmail(req.params.id, req.body.email, createMsgCallback(res, 'Email Updated!'));
});

// Update Birthday
router.post('/update/birthday/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.updateBirthday(req.params.id, req.body.birthday, createMsgCallback(res, 'Birthday Updated!'));
});



////////////////////////////////////////////////

function createUsersCallback(res) {
    return (err, users) => {
        if (err) return res.json({ 'success': false, 'msg': err });
        if (!users) return res.json({ 'success': false, 'msg': 'Could not find Users' });
        return res.json({ 'success': true, 'users': users });
    }
}

// All Users
router.get('/all', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.getUsers('', createUsersCallback(res));
});

// Top Users
router.get('/top', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.getTopUsers(utils.getPageFromReq(req), '', createUsersCallback(res));
});

// search Users
router.get('/search/:query', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    let query = req.params.query;
    User.getUsers(utils.getPageFromReq(req), query, createUsersCallback(res));
});

//////////////////////////


// User
// router.get('/profile/:user', passport.authenticate('jwt', { session: false }), (req, res, next) => {
//     let user = req.params.user;
//     User.getUser(user, (err, user) => {
//         if (err) res.json({ success: false, msg: 'Could not get user' });
//         else res.json({ success: true, user: user });
//     });
// });

router.post('/setFollow', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    let follower = req.user.username;
    let following = req.body.username;

    if (follower === following) {
        res.json({ success: false, msg: 'Cannot follow yourself.' });
    } else {
        Followers.get(follower, following, (err, pair) => {
            if (err) {
                res.json({ success: false, msg: 'Failed to retrieve follower/following pair' });
            } else {
                if (!pair) { // check if row exists
                    let tuple = new Followers({ follower: follower, following: following });
                    Followers.follow(tuple, (err, pair) => {
                        if (err) {
                            res.json({ success: false, msg: 'Failed to follow.' });
                        } else {
                            res.json({ success: true, isFollowing: true });
                        }
                    });
                } else {
                    Followers.unfollow(pair, (err, pair) => {
                        if (err) {
                            res.json({ success: false, msg: 'Failed to unfollow.' });
                        } else {
                            res.json({ success: true, isFollowing: false });
                        }
                    });
                }
            }
        });
    }
});



module.exports = router;