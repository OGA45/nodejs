require('mongoose');
const F=require('./tokecheck')
const jwt = require('jsonwebtoken');
const Oa=require('../model/oa_model')
exports.OaF=async(req,res,next)=>{
    F.Tokencheck(req,res);
    const {
        oa_datetime,
        class_name,
        reason
    } = req.body;
    try {
        const oa = await Oa.create({
            oa_datetime,
            class_name,
            reason
        });
    }catch(err){
        res.json({
            "success":false
        });
    }
    res.json({
        "success":true,
        "toke":""
    });
}