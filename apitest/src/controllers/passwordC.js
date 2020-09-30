require('mongoose');
const G=require('./token_get')
const F=require('./token_check')
const jwt = require('jsonwebtoken');
const User=require('../model/user_model')
const Token=require('../model/token_model');
exports.PasswordF=async (req,res,next)=>{
    const token= await G.Token_Get(req,res);
    const t= await F.Tokencheck(req,res,token);//ここの値が戻ってくるまで待ちたい
    if(t){
        Token.find({token:token},function(err,data){
            console.log("探した");
            if(err){
                res.json({
                    "success":false,
                    "toke":""
                });
            }
            User.updateOne({email:data[0].email},{password:req.body.password},function(err){
                if(err){
                    res.json({
                        "success":false,
                        "toke":""
                    });
                }
                res.json({
                    "success":true,
                    "toke":""
                });
            });
        });
    }
}
