require('mongoose');
const jwt = require('jsonwebtoken');
const G=require('./token_get')
const F=require('./token_check')
const Token=require('../model/token_model');
const { exit } = require('process');
exports.LogoutF=async(req,res,next)=>{
    const token=G.Token_Get(req,res);
    const t=F.Tokencheck(req,res,token);
    if(t){
        try{
            const tokens=Token.deleteOne({token:token},
                function(err){
                    if(err) throw err;
                });
                res.json({
                    "success":true
                });
        }catch(err){
            res.json({
                "success":false
            });
        }
    }
}