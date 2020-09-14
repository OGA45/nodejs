require('mongoose');
const jwt = require('jsonwebtoken');
//const Oa=require('../model/oa_model')
exports.AttendanceF=async(req,res,next)=>{
    res.json({
        "success":false
    });
}