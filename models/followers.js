const mongoose = require('mongoose');
const config = require('../config/database');

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



module.exports.get = function(follower, following, callback) {
    Followers.findOne({'follower': follower, 'following': following }, callback);
}

module.exports.follow = function(followers, callback) {
    followers.save(callback);
}

module.exports.unfollow = function(followers, callback) {
    followers.remove(callback);
}
