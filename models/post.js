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
    comments: [{ user: String, text: String, creationTime: Date}],
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

// TODO: might extract in a simpler way
function objectIdQuery(postId) {
    var ObjectId = mongoose.Types.ObjectId;
    let y =  new ObjectId(postId);
    let x = {_id: y};
    return x;
}

module.exports.getAllPosts = function(callback){
    Post.find({}, callback);
}

module.exports.getPostById = function(id, callback){
    Post.findById(id, callback);
}

module.exports.searchByAuthor = function(query, callback) {
    Post.find({author: query}, callback);
}

module.exports.searchByText = function(query, callback) {
    Post.find({ $or: [{title: { '$regex' : query, '$options' : 'i' }},
                            {description: { '$regex' : query, '$options' : 'i' }}]}
    , callback);
}

module.exports.addPost = function(newPost, callback){
    newPost.save(callback);
}

module.exports.addComment = function(postId, newComment, callback){
    Post.findOneAndUpdate(objectIdQuery(postId), {$push: {comments: newComment }}, callback);
}

module.exports.setLike = function(postId, username, callback) {
    Post.update(objectIdQuery(postId), { $push: { likes: username } }, callback);
}

module.exports.setDislike = function(postId, username, callback) {
    Post.update(objectIdQuery(postId), { $pull: { likes: username } }, callback);
}

module.exports.deletePost = function(postId, callback) {
    Post.remove(objectIdQuery(postId), callback);
}