const mongoose = require('mongoose');
const config = require('../config/database');
const utils = require('./utils');

// Followers schema

const FollowersSchema = mongoose.Schema({
    follower: {
        type: String,
        required: true
    },

    following: {
        type: String,
        required: true
    },
})

const Followers = module.exports = mongoose.model('Followers', FollowersSchema);



module.exports.get = function (follower, following, callback) {
    Followers.findOne({ 'follower': follower, 'following': following }, callback);
}

module.exports.follow = function (followers, callback) {
    followers.save(callback);
}

module.exports.unfollow = function (followers, callback) {
    followers.remove(callback);
}

module.exports.getFeed = function (page, username, callback) {
    
    utils.getPage(
        utils.sortByTime(
            Followers.aggregate([
                { $match: { "follower": username } },
                {
                    $lookup: {
                        "from": "posts",
                        "localField": "following",
                        "foreignField": "author",
                        "as": "posts"
                    }
                },
                { $unwind: "$posts" },
                {
                    $project: {
                        "_id": "$posts._id",
                        "author": "$posts.author",
                        "title": "$posts.title",
                        "description": "$posts.description",
                        "creationTime": "$posts.creationTime",
                        "updateTime": "$posts.updateTime",
                        "likes": "$posts.likes",
                        "comments": "$posts.comments",
                        "instructions": "$posts.instructions",
                        "images": "$posts.images",
                        "ingredients": "$posts.ingredients",
                    }
                }])),
        page,
        callback);
}