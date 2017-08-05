const mongoose = require('mongoose');
const config = require('../config/database');

// Profile schema

const ProfileSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    following: {
        type: [String],
        required: false
    },

    followers: {
        type: [String],
        required: false
    }
});

const Profile = module.exports = mongoose.model('Profile', ProfileSchema);

module.exports.registerProfile = function(newProfile, callback) {
    newProfile.save(callback);
}


module.exports.getProfiles = function(username, callback) {
    Profile.findOne({}, callback);
}

module.exports.findProfiles = function(username, callback) {
    Profile.find({'username': { '$regex' : username, '$options' : 'i' }}, callback);
}

module.exports.getProfile = function(username, callback) {
    Profile.findOne({'username': username}, callback);
}
