require('mongoose');
const G=require('./token_get')
const F=require('./token_check')
const jwt = require('jsonwebtoken');
const Oa=require('../model/oa_model')
exports.OaF=(req,res,next)=>{
    const token=G.Token_Get(req,res);
    const t=F.Tokencheck(req,res,token);//ここの値が戻ってくるまで待ちたい
    const {
        oa_datetime,
        class_name,
        reason
    } = req.body;
    try {
        const oa = Oa.create({
            oa_datetime,
            class_name,
            reason
        });
    }catch(err){
        res.json({
            "success":false
        });
    }
    console.log(t);
    res.json({
        "success":true
    });
}