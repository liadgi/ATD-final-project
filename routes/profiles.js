const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Profile = require('../models/profile');
const utils = require('../models/utils');


// Top profiles
router.get('/top', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    Profile.getTopProfiles(utils.getPageFromReq(req), '', (err, profiles) => {
        if (err) {
            res.json({ success: false, msg: 'Could not retrieve top profiles.' });
        } else {
            res.json({ profiles: profiles });
        }
    });
});

// search profiles
router.get('/search/:query', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    let query = req.params.query;
    Profile.getProfiles(utils.getPageFromReq(req), query, (err, profiles) => {
        if (err) {
            res.json({ success: false, msg: 'Could not find profiles.' });
        } else {
            res.json({ success: true, profiles: profiles });
        }
    });
});

module.exports = router;