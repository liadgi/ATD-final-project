const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Post = require('../models/post');
const Comment = require('../models/comment');
const Profile = require('../models/profile');
const Followers = require('../models/followers');

// Dashboard
router.get('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    // Post.getAllPosts((err, posts) => {
    //     if (err) throw err;
    //     res.json({ posts: posts });
    // });
    Followers.getFeed(req.user.username, (err, posts) => {
        if (err) throw err;
        res.json({ posts: posts });
    });
});

// Top posts
router.get('/top', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Post.getTopPosts((err, posts) => {
        if (err) throw err;
        res.json({ posts: posts });
    });
});

// User posts
router.get('/user/:username', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Post.getUserPosts(req.params.username, (err, posts) => {
        if (err) throw err;
        res.json({ posts: posts });
    });
});

// search
router.get('/search/:query', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    let query = req.params.query;

    Post.searchByText(query, (err, posts) => {
            if (err) {
                res.json({ success: false, msg: 'Failed to search by title or description' });
            } else {
                res.json({ success: true, posts: posts});
            }
    });
});

// create post
router.post('/createpost', passport.authenticate('jwt', { session: false }), (req, res, next) => {
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
        if (err) res.json({ success: false, msg: 'Failed to upload recipe.' });
        else res.json({ success: true, msg: 'Congratulations! You recipe was successfully uploaded.' });
    });
});

// add comment
router.post('/addComment', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    let postId = req.body.postId;
    let newComment = new Comment({
        user: req.user.username,
        text: req.body.text,
        creationTime: Date.now(),
    });

    Post.addComment(postId, newComment, (err, post) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to upload comment.' });
        }
        else {
            res.json({ success: true, comment: newComment });
        }
    });
});

// delete post
router.post('/deletePost', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    let postId = req.body.postId;
    
    Post.getPostById(postId, (err, post) => {
        if (err) {
            res.json({ success: false, msg: 'Could not find post to remove.' });
        } else {
            if (post.author === req.user.username) {
                Post.deletePost(postId, (errDel, delPost) => { 
                    if (errDel) {
                        res.json({ success: false, msg: 'Failed to remove document.' });
                    } else {
                        res.json({ success: true, msg: 'Successfully removed document.' });
                    }
                });
            } else {
                res.json({ success: false, msg: 'No permissions to delete others posts' });
            }
        }
    });

});


// change like
router.post('/changeLike', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    let username = req.user.username;
    let postId = req.body.postId; 

    // TODO: add authentication?
    Post.getPostById(postId, (err, post) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to change like status.' });
        }
        else {
            if (post.likes.includes(username)) { // do dislike
                Post.setDislike(postId, username, () => {
                    if (err) {
                        res.json({ success: false, msg: 'Could not dislike.' });
                    } else {
                        res.json({ success: true, likeStatus: false, likedUser: username });
                    }     
                });
            } else { // do like
                Post.setLike(postId, username, () => {
                    if (err) {
                        res.json({ success: false, msg: 'Could not like.' });
                    } else {
                        res.json({ success: true, likeStatus: true, likedUser: username });
                    }     
                });
            }
        }
    });
});

module.exports = router;