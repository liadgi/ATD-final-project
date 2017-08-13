const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const utils = require('../models/utils');

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
    },
    token: {
        type: { token: String},
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

module.exports.hashPassword = function(password, callback) {
    bcrypt.genSalt(10, (err,salt) => {
        if(err) callback(err);
        else bcrypt.hash(password, salt, callback);
    });
}
 

module.exports.registerUser = function(newUser, callback) {
   this.ashPassword(newUser.password, (err, hsah) => {
       if(err) throw err;
       newUser.password = hash;
       newUser.save(callback);
   });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, callback);
}

module.exports.validateToken = function(userId, token, callback) {
    this.getUserById(userId, (err, user) => {
        if(err) callback(err);
        if(!user) callback(null, false);
        else {
            callback(null, user.token == token);
        }
    });
}

module.exports.updateToken = function(userId, token, callback){
    User.update({ _id: userId }, { $set: {'token': token }}, callback);
}



module.exports.updateUser = function(userId, authToken, change, callback){

    this.validateToken(userId, authToken, (err, isValid) => {
        if(err) callback(err);
        else if (!isValid) callback('Cant Change Someone alses info!'); 
        else User.update({ _id: userId }, change, callback);      
    });
}


// Update Password
module.exports.updatePassword = function(userId, newPassword, authToken, callback) {
    this.hashPassword(newPassword, (err, hash) => {
       if(err) callback(err);
       this.updateUser(userId, authToken, { $set: {'password': hash }}, callback);
    });
}

// Update Profile picture
module.exports.updateProfilePic = function(userId, newPic, authToken, callback) {
    // TODO: remove old pic from fs
    console.log(userId);
    console.log(newPic);
    this.updateUser(userId, authToken, { $set: {'profile_pic': newPic }}, callback);
}

// Update Username
module.exports.updateUsername = function(userId, newUsername, authToken, callback) {
    this.updateUser(userId, authToken,  {$set: {'username': newUsername }}, callback);
}

// Update First Name
module.exports.updateFirstName = function(userId, newFirstName, authToken, callback) {
    this.updateUser(userId, authToken,  {$set: {'fname': newFirstName }}, callback);
}

// Update Last Name
module.exports.updateLastName = function(userId, newLastName, authToken, callback) {
    this.updateUser(userId, authToken,  {$set: {'lname': newLastName }}, callback);
}

// Update Email
module.exports.updateEmail = function(userId, newEmail, authToken, callback) {
    this.updateUser(userId, authToken,  {$set: {'email': newEmail }}, callback);
}

// Update Birthday
module.exports.updateBirthday = function(userId, newBirthday, authToken, callback) {
    User.update({ _id: userId }, { $set: {'birthday': newBirthday }}, callback);
    this.updateUser(userId, authToken,  {$set: {'birthday': newBirthday }}, callback);
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
        "fname": {$first : "$fname"},
        "lname": {$first : "$lname"},
        "email": {$first : "$email"},
        "birthday": {$first : "$birthday"},
        "profile_pic": {$first : "$profile_pic"},
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
        "fname": {$first : "$fname"},
        "lname": {$first : "$lname"},
        "email": {$first : "$email"},
        "birthday": {$first : "$birthday"},
        "profile_pic": {$first : "$profile_pic"},
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
            "numFollowers": { $size: "$followers" },
            "fname": "$fname",
            "lname": "$lname",
            "email": "$email",
            "birthday": "$birthday",
            "profile_pic": "$_id.profile_pic"
        }
    }
]



module.exports.getUsers = function(page, username, callback) {
    let match = {  $match : {
        "username": {'$regex' : username, '$options' : 'i'}
    }};
    let query = [match].concat(users);
    utils.getPage(User.aggregate(query), page, callback);
}

module.exports.getTopUsers = function(page, username, callback) {
    let sort = {$sort : {"numFollowers": -1}};
    let query = users.concat(sort);
    utils.getPage(User.aggregate(query), page, callback);
}


module.exports.getUser = function(username, callback) {
    let match = {  $match : {
        "username": username
    }};

    let query = [match].concat(users);

    User.aggregate(query, callback);
}