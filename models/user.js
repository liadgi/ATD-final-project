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
    followers_count:{
        type: Number,
        required: true
    },   
    following: {
        type: [String],
        required: false
    },
    following_count:{
        type: Number,
        required: true
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
   this.hashPassword(newUser.password, (err, hash) => {
       if(err) throw err;
       newUser.password = hash;
       newUser.save(callback);
   });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, callback);
}

module.exports.validatePassword = function(userId, userPassword, callback) {
    this.getUserById(userId, (err, user) => {
        if(err) callback(err);
        if(!user) callback(null, false);
        else {
            callback(null, user.password == userPassword);
        }
    });
}

module.exports.updateUser = function(change, username, userPassword, callback){
    User.update({ 'username': username, 'password': userPassword }, change, callback);
}


// Update Username
module.exports.updateUsername = function(newUsername, username, userPassword, callback) {
    this.updateUser({$set: {'username': newUsername }}, username, userPassword, callback);
}


// Update Password
module.exports.updatePassword = function(newPassword, userId, userPassword, callback) {
    this.hashPassword(newPassword, (err, hash) => {
       if(err) callback(err);
       this.updateUser({ $set: {'password': hash }}, userId, userPassword, callback);
    });
}


// Update First Name
module.exports.updateFirstName = function(newFname, userId, userPassword, callback) {
    this.updateUser({$set: {'fname': newFname }}, userId, userPassword, callback);
}

// Update Last Name
module.exports.updateLastName = function(newLname, userId, userPassword, callback) {
    this.updateUser({$set: {'lname': newLname }}, userId, userPassword, callback);
}


// Update Email
module.exports.updateEmail = function(newEmail, userId, userPassword, callback) {
    this.updateUser({$set: {'email': newEmail }}, userId, userPassword, callback);
}

// Update Birthday
module.exports.updateBirthday = function(newEmail, userId, userPassword, callback) {
    this.updateUser({$set: {'birthday': newBirthday }}, userId, userPassword, callback);
}

// Update Profile picture
module.exports.updateProfilePic = function(newPic, userId, userPassword, callback) {
    this.updateUser({ $set: {'profile_pic': newPic }}, userId, userPassword, callback);
}



// Follow user
module.exports.followUser = function(username, follower, followerPassword, callback){
    if(username === follower) callback('Cant follow yourself.');
    else this.updateUser({$addToSet: {'following': username}, $inc: { 'following_count': 1 }},
        follower,
        followerPassword,
        (err, raw) => {
            if (err) callback(err);
            else if (!raw.ok || ! raw.n || !raw.nModified) callback('Error updating follower.');
            else User.update(
                { 'username': username},
                { $addToSet: {'followers': follower}, $inc: { 'followers_count': 1 }},
                callback);
        });
}


// Unfollow user
module.exports.unfollowUser = function(username, follower, followerPassword, callback){
    if(username === follower) callback('Cant follow yourself.');
    else this.updateUser({$pull: {'following': username}, $inc: { 'following_count': -1 }},
        follower,
        followerPassword,
        (err, raw) => {
            if (err) callback(err);
            else if (!raw.ok || ! raw.n || !raw.nModified) callback('Error updating follower.');
            else User.update(
                { 'username': username},
                { $pull: {'followers': follower}, $inc: { 'followers_count': -1 }},
                callback);
        });
}


module.exports.getUsers = function(page, username, callback) {
    const qury = {"username": {'$regex' : username, '$options' : 'i'}};
    utils.getPage(page,User.find(qury)).exec(callback);
}

module.exports.getTopUsers = function(page, callback) {
    utils.getPage(page, User.find().sort({ followers_count: -1 })).exec(callback);  
}

