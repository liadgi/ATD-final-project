const mongoose = require('mongoose');
const config = require('../config/database');

// Instruction schema
const InstructionSchema =  mongoose.Schema({
    images: {
        type: [String],
         required: true
    },
    text: {
        type: String,
        required: true,
    }
});

const Instruction = module.exports = mongoose.model('Instruction', InstructionSchema);
