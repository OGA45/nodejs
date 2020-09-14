require('mongoose');
const jwt = require('jsonwebtoken');
//const Contact=require('../model/contact_model')
exports.InfoF=async(req,res,next)=>{
    res.json({
        "success":false
    });
}