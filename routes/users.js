const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Profile = require('../models/profile');



// Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    let newProfile = new Profile({
        username: req.body.username,
        following: [],
        followers: []
    });

    // TODO: add field validation.

    // Check whether a user with this username already exists and if not create the new user
    User.getUserByUsername(newUser.username, (err, user) =>{
        if(err) throw err;
        if(user) return res.json({success: false, msg: 'Sorry, this username is taken. try anotherone.'});
        User.registerUser(newUser, (err, user) => {
            if(err) res.json({success: false, msg:'Failed to register user.'});
            else {
                Profile.registerProfile(newProfile, (err, profile) => {
                    if (err) {
                        res.json({success: false, msg:'Failed to register profile.'});
                    } else {
                        res.json({success: true, msg:'Congratulations! You are now registered.'});
                    }
                })
            } 
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
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user, config.secret, {expiresIn: 604800 /* 1 week */ });
                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                        id: user._id,
                        fname: user.fname,
                        lname: user.lname,
                        username: user.username,
                        email: user.email
                    }
                });
            } 
            else res.json({success: false, msg: 'Wrong password.'});
        });
    });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.json({user: req.user});
});

module.exports = router;