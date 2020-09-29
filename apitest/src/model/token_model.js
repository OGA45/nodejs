require('express');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: { type: String, require: true, unique: true },
    token: { type: String, require: true, unique: true },
});
module.exports = mongoose.model('Token', userSchema);
