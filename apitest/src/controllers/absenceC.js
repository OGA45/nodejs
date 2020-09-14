require('mongoose');
const jwt = require('jsonwebtoken');
const Absence=require('../model/absence_model')
exports.AbsenceF=async(req,res,next)=>{
    res.json({
        "success":false
    });
}