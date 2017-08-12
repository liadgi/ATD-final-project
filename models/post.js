const mongoose = require('mongoose');
const config = require('../config/database');
const utils = require('./utils');

// Post schema
const PostSchema = mongoose.Schema({
    author: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    ingredients: {
        type: [String],
        required: false
    },
    images: {
        type: [String],
        required: false
    },
    instructions: [{ images: [String], text: String }],
    likes: {
        type: [String],
        required: false
    },
    comments: [{ user: String, text: String, creationTime: Date }],
    creationTime: {
        type: Date,
        required: false
    },
    updateTime: {
        type: Date,
        required: false
    },
    coauthors: {
        type: [String],
        required: false
    },

});

const Post = module.exports = mongoose.model('Post', PostSchema);

// NOTE: extract in a simpler way
function objectIdQuery(postId) {
    var ObjectId = mongoose.Types.ObjectId;
    let y = new ObjectId(postId);
    let x = { _id: y };
    return x;
}

module.exports.getAllPosts = function (callback) {
    Post.find({}, callback);
}

module.exports.getTopPosts = function (page, callback) {

    utils.getPage(
        Post.aggregate([
            {
                $project:
                {
                    "author": 1,
                    "title": 1,
                    "description": 1,
                    "creationTime": 1,
                    "updateTime": 1,
                    "comments": 1,
                    "likes": 1,
                    "instructions": 1,
                    "images": 1,
                    "ingredients": 1,
                    "coauthors": 1,
                    "numLikes": { $size: "$likes" }
                }
            },
            { $sort: { "numLikes": -1 } }]),
        page,
        callback);
}

module.exports.getUserPosts = function (page, username, callback) {
    utils.getPage(
        utils.sortByTime(
            Post.find({
                $or:
                [
                    { author: username },
                    { coauthors: username }
                ]
            })),
        page,
        callback);
}

module.exports.getPostById = function (id, callback) {
    Post.findById(id, callback);
}

module.exports.searchByText = function (page, query, callback) {
    utils.getPage(
        Post.find(
            {
                $text: { $search: query }
            },
            { score: { $meta: "textScore" } }
        ).sort({ score: { $meta: "textScore" } }
            ),
        page,
        callback);
}

module.exports.savePost = function (post, callback) {
    post.save(callback);
}

module.exports.editPost = function (postId, editedPost, callback) {
    let query = objectIdQuery(postId);
    Post.findOneAndUpdate(query, editedPost, { returnNewDocument: true }, callback);
}

module.exports.addComment = function (postId, newComment, callback) {
    Post.findOneAndUpdate(objectIdQuery(postId), { $push: { comments: newComment } }, callback);
}

module.exports.setLike = function (postId, username, callback) {
    Post.update(objectIdQuery(postId), { $push: { likes: username } }, callback);
}

module.exports.setDislike = function (postId, username, callback) {
    Post.update(objectIdQuery(postId), { $pull: { likes: username } }, callback);
}

module.exports.deletePost = function (postId, callback) {
    Post.remove(objectIdQuery(postId), callback);
}

module.exports.addPostPics = function (postId, images, callback) {
    Post.update({ _id: postId }, {$push: {'images': images}}, callback);
}

module.exports.removePostPic = function (postId, image, callback) {
    Post.update({ _id: postId }, {$pull: {'image': image}}, callback);
}