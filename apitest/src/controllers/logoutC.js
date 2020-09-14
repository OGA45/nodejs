require('mongoose');
const jwt = require('jsonwebtoken');
//const Pass=require('../model/password_model')
exports.LogoutF=async(req,res,next)=>{
    res.json({
        "success":false
    });
}