const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Profile = require('../models/profile');

// All profiles
router.get('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Profile.getProfiles('', (err, profiles) => {
        if (err) throw err;
        res.json({ profiles: profiles });
    });
});

// search profiles
router.get('/:query', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    let query = req.params.query;
    Profile.getProfiles(query, (err, profiles) => {
        if (err) {
            res.json({ success: false, msg: 'Could not find profiles' });
        } else {
            res.json({ success: true, profiles: profiles});
        }
    });
});

module.exports = router;