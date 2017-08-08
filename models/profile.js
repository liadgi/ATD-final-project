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

const profiles = [
    {  $lookup: 
     {
       "from": "followers",
       "localField": "username",
       "foreignField": "follower",
       "as": "followed"
     }},

     {
         $unwind: 
         {
           "path": "$followed",
           "preserveNullAndEmptyArrays": true
         }
     },

    { $group: {
        "_id": "$username",
        "following": {
            $push: "$followed.following" 
        }
    }},

     {  $lookup: 
     {
       "from": "followers",
       "localField": "_id",
       "foreignField": "following",
       "as": "followings"
     }},

     {
         $unwind: 
         {
           "path": "$followings",
           "preserveNullAndEmptyArrays": true
         }
     },

     { $group: {
        "_id": { "username": "$_id" , "following" : "$following" }, 
        
        "followers" : {
            $push: "$followings.follower" 
        }
        
    }},

    {
        $project : {
            "_id": 0,
            "username": "$_id.username",
            "following": "$_id.following",
            "followers" : 1,
            "numFollowers": { $size: "$followers" }
        }
    }
]

const Profile = module.exports = mongoose.model('Profile', ProfileSchema);

module.exports.registerProfile = function(newProfile, callback) {
    newProfile.save(callback);
}

module.exports.getProfiles = function(username, callback) {
    let match = {  $match : {
        "username": {'$regex' : username, '$options' : 'i'}
    }};

    let query = [match].concat(profiles);

    Profile.aggregate(query, callback);
}

module.exports.getTopProfiles = function(username, callback) {
    let sort = {
        $sort : {"numFollowers": -1}
    };

    let query = profiles.concat(sort);

    Profile.aggregate(query, callback);
}


module.exports.getProfile = function(username, callback) {
    let match = {  $match : {
        "username": username
    }};

    let query = [match].concat(profiles);

    Profile.aggregate(query, callback);
}
