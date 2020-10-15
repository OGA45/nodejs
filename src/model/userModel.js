const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter email'],
    unique: true,
    validate: [validator.isEmail, 'Please enter valid email address'],
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ['user', 'developer', 'business'],
    message: 'Please select correct role',
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'Please enter password for your account'],
    minLength: [8, 'Your password must be at least 8 characters long'],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpireF: Date,
});

// パスワードが入力されている場合、ハッシュ化して保存する
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const pepperPassword = this.password + process.env.PEPPER;
  this.password = await bcrypt.hash(pepperPassword, 12);
});

// パスワードの検証
userSchema.methods.comparePassword = async function (password) {
  const pepperPassword = password + process.env.PEPPER;
  return await bcrypt.compare(pepperPassword, this.password);
};

userSchema.methods.getJwtToken = function () {
  return jwt.sign(
    {
      id: this.own_id,
      role: this.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_TIME,
    }
  );
};

module.exports = mongoose.model('User', userSchema);