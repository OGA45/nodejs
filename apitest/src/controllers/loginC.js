require('mongoose');
const jwt = require('jsonwebtoken');
const User=require('../model/user_model')
const Token=require('../model/token_model')
exports.LoginF=async(req,res,next)=>{
    const {
        email,
        password
    } = req.body;
    try {
        await User.find({email,password});
    }catch(err){
            res.json({
                "success": false,
                "token": ""
            });
    }
    const token = jwt.sign(req.body,req.body.email, {expiresIn: "5m"});
    await Token.updateOne({email:email},{token:token},{upsert: true}
        ,function(err,data) {
            if(err) throw err; 
            res.json({
                "success": true,
                "token": token
            });
    });
};