const mongoose = require('mongoose');
const config = require('../config/database');

// Post schema
const PostSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
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
    instructions: [{ images: [String], text: String}],
    likes: {
        type: [String],
        required: false
    },
    comments: [{ user: String, text: String}],
    creationTime: {
        type: Date,
        required: false
    },
    updateTime: {
        type: Date,
        required: false
    }
});

const Post = module.exports = mongoose.model('Post', PostSchema);

module.exports.getAllPosts = function(callback){
    Post.find({}, callback);
}

module.exports.getPostById = function(id, callback){
    Post.findById(id, callback);
}

module.exports.addPost = function(newPost, callback){
    newPost.save(callback);
}