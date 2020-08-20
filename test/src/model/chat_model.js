const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const chatSchema = new mongoose.Schema({
    to: { type: String, require: true },
    text: { type: String, require: true },
    times: { type: String, require: true },
    from: { type: String, require: true },
    id: { type: String, require: true }
  });
module.exports = mongoose.model('Chat', chatSchema);