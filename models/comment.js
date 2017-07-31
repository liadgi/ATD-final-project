const mongoose = require('mongoose');
const config = require('../config/database');

// Comment schema
const CommentSchema =  mongoose.Schema({
    user: {
        type: String,
         required: true
    },
    text: {
        type: String,
        required: true,
    }
});

const Comment = module.exports = mongoose.model('Comment', CommentSchema);
