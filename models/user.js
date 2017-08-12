const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User schema
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
       type: String,
       required: true 
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
      type: String,
      required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    profile_pic: {
       type: String,
       required: true 
    },
    followers: {
        type: [String],
        required: false
    },
     following: {
        type: [String],
        required: false
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
    User.findOne({'username': username}, callback);
}

module.exports.registerUser = function(newUser, callback){
    bcrypt.genSalt(10, (err,salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, callback);
}

// Update Profile picture
module.exports.updateProfilePic = function(userId, newPic, callback) {
    // TODO: delete old pic from fs
    User.update({ _id: userId }, { $set: {'profile_pic': newPic }}, callback); 
}

// Update Username
module.exports.updateUsername = function(userId, newUsername, callback) {
    User.update({ _id: userId }, { $set: {'username': newUsername }}, callback);
}

// Update Password
module.exports.updatePassword = function(userId, newPassword, callback) {
    User.update({ _id: userId }, { $set: {'password': newPassword }}, callback);
}

// Update First Name
module.exports.updateFirstName = function(userId, newFirstName, callback) {
    User.update({ _id: userId }, { $set: {'fname': newFirstName }}, callback);
}

// Update Last Name
module.exports.updateLastName = function(userId, newLastName, callback) {
    User.update({ _id: userId }, { $set: {'lname': newLastName }}, callback);
}

// Update Email
module.exports.updateEmail = function(userId, newEmail, callback) {
    User.update({ _id: userId }, { $set: {'email': newEmail }}, callback);
}

// Update Birthday
module.exports.updateBirthday = function(userId, newBirthday, callback) {
    User.update({ _id: userId }, { $set: {'birthday': newBirthday }}, callback);
}


///////////////////////////////////


const users = [
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



module.exports.getUsers = function(username, callback) {
    let match = {  $match : {
        "username": {'$regex' : username, '$options' : 'i'}
    }};

    let query = [match].concat(users);

    User.aggregate(query, callback);
}

module.exports.getTopUsers = function(username, callback) {
    let sort = {
        $sort : {"numFollowers": -1}
    };

    let query = User.concat(sort);

    User.aggregate(query, callback);
}


module.exports.getUser = function(username, callback) {
    let match = {  $match : {
        "username": username
    }};

    let query = [match].concat(users);

    Profile.aggregate(query, callback);
}