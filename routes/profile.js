const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Profile = require('../models/profile');
const Followers = require('../models/followers');

// profile
router.get('/:user', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    let user = req.params.user;
    Profile.getProfile(user, (err, profile) => {
        if (err) {
            res.json({ success: false, msg: 'Could not get user profile' });
        } else {
            res.json({ success: true, profile: profile });
        }
    });
});

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