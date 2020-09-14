require('express');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    title: { type: String, require: true},
    content: { type: String, require: true },
});
module.exports = mongoose.model('Contact', userSchema);
