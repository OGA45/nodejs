require('mongoose');
const jwt = require('jsonwebtoken');
const F=require('./tokecheck')
const Token=require('../model/token_model');
const { exit } = require('process');
exports.LogoutF=async(req,res,next)=>{
    try {
        var token=req.headers.authorization.split(' ')[1]; //ヘッダーから取ってくる
    }catch(err){//無ければエラー
        console.log(err.name);
          return res.json({
            success: false,
            msg: 'トークンが見つかりません'
        });
    };
F.Tokencheck(req,res,token);
    if(token){
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