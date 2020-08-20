const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const userSchema = new mongoose.Schema({
    name: { type: String, require: true, unique: true },
    id: { type: String, require: true, unique: true },
    ps: { type: String, require: true },
    to: { type: String, require: true },
    text: { type: String, require: true }
});
module.exports = mongoose.model('User', userSchema);
