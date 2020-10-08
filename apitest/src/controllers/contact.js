require('mongoose');
//const get=require('../middleware/token')
const jwt = require('jsonwebtoken');
const Contact=require('../model/contact_model')
exports.Contact=async(req,res,next)=>{
    const {
        title,
        content
    } = req.body;
    Contact.create({
        title,content
    },function(err){
        if(err) return next(err);
    });
    res.status(200).json({
        "success":true
    });
}

const Absence=require('../model/absence_model')
exports.Absence=async(req,res,next)=>{
    const {
        oa_datetime,
        class_name,
        reason
    } = req.body;
    Absence.create({
            oa_datetime,
            class_name,
            reason
    },function(err){
            if(err) return next(err);
    });
    res.status(200).json({
        "success":true
    });
}

const Oa=require('../model/oa_model')
exports.Oa=async (req,res)=>{
    const {
        oa_datetime,
        class_name,
        reason
    } = req.body;
    Oa.create({
            oa_datetime,
            class_name,
            reason
    },function(err){
            if(err) return next(err);
    });
    res.status(200).json({
        "success":true
    });
}