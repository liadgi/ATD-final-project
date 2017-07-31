const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Post = require('../models/post');

// Dashboard
router.get('/', passport.authenticate('jwt', {session: false}), (req, res, next) => {
   Post.getAllPosts((err, posts) => {
       if(err) throw err;
       res.json({posts: posts});
    });
});

// create post
router.post('/createpost', (req, res, next)=>{
    let newPost = new Post({
        author: req.body.author,
        title: req.body.title,
        description: req.body.description,
        ingredients: req.body.ingredients,
        images: req.body.images,
        instructions: req.body.instructions,   
        likes: req.body.likes,
        comments: req.body.comments,
        creationTime: req.body.creationTime,
        updateTime: req.body.updateTime
    });

     Post.addPost(newPost, (err, post) => {
        if(err) res.json({success: false, msg:'Failed to upload recipe.'});
        else res.json({success: true, msg:'Congratulations! You recipe was successfully uploaded.'}); 
    });
});

module.exports = router;