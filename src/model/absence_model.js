require('express');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    absence_datatime: { type: String, require: true },
    class_name: { type: String, require: true },
    reason: { type: String, require: true },
});
module.exports = mongoose.model('Absence', userSchema);
