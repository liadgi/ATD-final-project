const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Post = require('../models/post');
const Comment = require('../models/comment');
const Followers = require('../models/followers');
const utils = require('../models/utils');
const app = require('../app.js');

function createPostsCallback(res) {
    return (err, posts) => {
        // console.log('err?: '+err);
        // console.log('GOT POSTS: ',posts);
        if (err) return res.json({ 'success': false, 'msg': err });
        if (!posts) return res.json({ 'success': true, 'posts': [] });
        return res.json({ 'success': true, 'posts': posts });
    }
}

function createMsgCallback(res, msg) {
    return (err, raw) => {
        if (err) return res.json({ 'success': false, 'msg': err });
        //if (!raw.ok || !raw.n) return res.json({ 'success': false, 'msg': 'post not found.' });
        return res.json({ 'success': true, 'msg': msg });
    }
}


// Home - get feed
router.get('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Post.getFeed(utils.getPageFromReq(req), req.user._id, createPostsCallback(res));
});

// Top posts
router.get('/top', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Post.getTopPosts(utils.getPageFromReq(req), createPostsCallback(res));
});

// User posts
router.get('/user/:username', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Post.getUserPosts(utils.getPageFromReq(req), req.params.username, createPostsCallback(res));
});


// search
router.get('/search/:query', passport.authenticate('jwt', { session: false }), (req, res, next) => { 
    Post.searchByText(utils.getPageFromReq(req), req.params.query, createPostsCallback(res));
});

// create post
router.post('/createpost', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    if (req.user.username == req.body.post.author) {
        let newPost = new Post({
            title: req.body.post.title,            
            author: req.body.post.author,
            description: req.body.post.description,
            ingredients: req.body.post.ingredients,
            images: req.body.post.images,
            instructions: req.body.post.instructions,
            //likes: req.body.likes,
            likes_count: 0, 
            comments: req.body.post.comments,
            creationTime: req.body.post.creationTime,
            updateTime: req.body.post.updateTime,
            coauthors: req.body.post.coauthors
        });

        Post.savePost(newPost, (err, post) => {
            if (err) res.json({ success: false, msg: 'Failed to upload recipe: '+err });
            else {res.json({ success: true, msg: 'Congratulations! Your recipe was successfully uploaded.' });
            }
        });
    } else  res.json({ success: false, msg: 'Cannot create recipe on behalf of someone else.' });
});


// edit post
router.post('/editPost', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Post.updatePost(req.body.post, req.user.username, createMsgCallback(res, 'Post Updated!'));
});


// add comment
router.post('/addComment', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    console.log('addComment:',)
    let newComment = new Comment({
        user: req.user.username,
        text: req.body.comment.text,
        creationTime: Date.now(),
    });
    Post.addComment(req.body.postId, newComment, (err, post) => {
        if (err) res.json({ success: false, msg: 'Failed to upload comment.' });
        else res.json({ success: true, comment: newComment });
    });
});


// delete post
router.post('/deletePost', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Post.deletePost(req.body.postId,req.user.username, createMsgCallback(res, 'Post Deleted!'));
    // Post.getPostById(req.body.postId, (err, post) => {
    //     if (err) {
    //         res.json({ success: false, msg: 'Could not find post to remove.' });
    //     } else {
    //         if (post.author === req.user._id) {
    //             Post.deletePost(req.body.postId, (errDel, delPost) => {
    //                 if (errDel) {
    //                     res.json({ success: false, msg: 'Failed to remove post.' });
    //                 } else {
    //                     res.json({ success: true, msg: 'Successfully removed post.' });
    //                 }
    //             });
    //         } else {
    //             res.json({ success: false, msg: 'No permissions to delete others posts' });
    //         }
    //     }
    // });

});


// change like
router.post('/changeLike', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    let postId = req.body.postId;

    // TODO: add authentication?
    Post.getPostById(postId, (err, post) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to change like status.' });
        }
        else {
            if (post.likes.includes(req.user._id)) { // do dislike
                Post.setDislike(postId, req.user._id, () => {
                    if (err) {
                        res.json({ success: false, msg: 'Could not dislike.' });
                    } else {
                        res.json({ success: true, likeStatus: false, likedUser: req.user._id });
                    }
                });
            } else { // do like
                Post.setLike(postId, req.user._id, () => {
                    if (err) {
                        res.json({ success: false, msg: 'Could not like.' });
                    } else {
                        res.json({ success: true, likeStatus: true, likedUser: req.user._id });
                    }
                });
            }
        }
    });
});

module.exports = router;