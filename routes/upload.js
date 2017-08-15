const express = require('express');
const router = express.Router();
const passport = require('passport');
const fs = require('fs');
const multer = require('multer');
const User = require('../models/user');

const defaultProfilePicUrl = 'http://localhost:8080/defult_profile_pic.jpg';

// Upload Profile Picture
router.post('/profile-pic', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    const dest = './uploads/images/profile_pics/' + req.user._id;
    const storage = multer.diskStorage({
        destination: dest,
        filename: (req, file, callback) => {
            callback(null, file.fieldname + '-' + Date.now() + '.' + file.mimetype.split('/').pop());
        }
    });

    const upload = multer({storage: storage}).single('image');
    upload(req, res, (err) => {
        if (err) res.status(422).json({ 'success': false, 'err': err });
        else if(req.user.profile_pic == defaultProfilePicUrl) {
            const path = 'http:\\\\localhost:8080'+req.file.path.split("images")[1];
            User.updateProfilePic(path, req.user._id, req.user.password , (err) => {
                if (err) res.status(422).json({ 'success': false, 'err': err });     
                else res.json({ 'success': true, 'path': path });               
            });
        } else fs.unlink(dest+'/'+req.user.profile_pic.split('\\').pop(), (err) => {
            if(err) res.status(422).json({ 'success': false, 'err': err });
            else {
                const path = 'http:\\\\localhost:8080'+req.file.path.split("images")[1];
                User.updateProfilePic(path, req.user._id, req.user.password , (err) => {
                    if (err) res.status(422).json({ 'success': false, 'err': err });     
                    else res.json({ 'success': true, 'path': path });               
                });
            }
        });  
    });           
});


// Upload Post Picture
router.post('/post-pic', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    const dest = './uploads/images/post_pics/' + req.user._id;
    const storage = multer.diskStorage({
        destination: dest,
        filename: (req, file, callback) => {
            callback(null, file.fieldname + '-' + Date.now() + '.' + file.mimetype.split('/').pop());
        }
    });

    const upload = multer({storage: storage}).single('image');
    upload(req, res, (err) => {
        if (err) res.status(422).json({ 'success': false, 'err': err });
        else {
            const path = 'http:\\\\localhost:8080'+req.file.path.split("images")[1];
            return res.json({ 'success': true, 'path': path });
        }
    });           
});

module.exports = router;