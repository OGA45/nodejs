const mongoose = require('mongoose');
require('dotenv').config();
const User = require('../model/user_model')
const Token = require('../model/token_model')
const jwt = require('jsonwebtoken');
//const get=require('../middleware/token')

//アカウント作成
exports.Signup = async (req, res, next) => {
    const {
        email,
        password
    } = req.body;
    await User.create({
        email,
        password
    }, function (err) {
        if (err) return next(err);
    });
    res.status(200).json({
        success: true,
        toke: ""
    });
};

//ログイン処理
exports.Login = async (req, res, next) => {
    const {
        email,
        password
    } = req.body;
    await User.find({
        email: email,
        password: password
    }, function (err, data) {
        if (err) return next(err);
        if (!data[0]) return next(new Error("ユーザーが見つからない"));
        const payload = {//中に入れるデータ
            id: data[0]._id,
        };
        const options = { expiresIn: "5m" };//有効時間
        const token = jwt.sign(payload, process.env.JwtSecret, options);
        Token.updateOne({ email: email }, { token: token }, { upsert: true }, function (err, data) {
            if (err) return next(err);
            res.status(200).json({
                success: true,
                token: token
            });
        });
    });
};

//パスワード変更
exports.UpdatePassword = async (req, res, next) => {
    const id = mongoose.Types.ObjectId(res.locals.id);
    User.updateOne({ _id: id }, { password: req.body.password }, function (err) {
        if (err) return next(err);
        res.status(200).json({
            success: true
        });
    });
}

//ログアウト処理
exports.Logout = async (req, res, next) => {
    Token.deleteOne({ token: token }, function (err) {
        if (err) return next(err);
    });
    
    res.status(200).json({
        success: true
    });
}