
const express = require('express');
const router = express.Router();
const multer = require('multer');
const User = require('../models/user');

router.post('/profile-pic/:id', (req, res, next) => {
    const dest = './uploads/images/profile_pics/' + req.params.id;
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
            User.updateProfilePic(req.params.id, path, req.headers.authorization, (err) => {
                if (err) {
                    console.log(err);
                    res.status(422).json({ 'success': false, 'err': err });
                }        
                else return res.json({ 'success': true, 'path': path });               
            });
        }
    });           
});


//Post
router.post('/post-pic/:id', (req, res, next) => {
    const dest = './uploads/images/post_pics/' + req.params.id;
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
            // User.updatePostPic(req.params.id, path, (err) => {
            //     if (err) {
            //         console.log(err);
            //         res.status(422).json({ 'success': false, 'err': err });
            //     }        
            //     else return res.json({ 'success': true, 'path': path });               
            // });
        }
    });           
});

module.exports = router;