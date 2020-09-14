require('mongoose');
const jwt = require('jsonwebtoken');
const Contact=require('../model/contact_model')
exports.ContactF=async(req,res,next)=>{
    res.json({
        "success":false
    });
}