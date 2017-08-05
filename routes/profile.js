const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Profile = require('../models/profile');

// profile
router.get('/:user', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    let user = req.params.user;
    Profile.getProfile(user, (err, profile) => {
        if (err) {
            res.json({ success: false, msg: 'Could not get user profile' });
        } else {
            res.json({ success: true, profile: profile});
        }
    });
});

module.exports = router;