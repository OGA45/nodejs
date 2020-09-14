require('express');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    password: { type: String, require: true, unique: true },
    new_password: { type: String, require: true },
});
module.exports = mongoose.model('Pass', userSchema);
