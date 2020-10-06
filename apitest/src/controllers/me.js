require('mongoose');
const jwt = require('jsonwebtoken');
//const Contact=require('../model/contact_model')
exports.Me=async(req,res,next)=>{
    res.json({
        "success":false
    });
}

exports.Attendance=async(req,res,next)=>{
    res.json({
        "success":false
    });
}