require('mongoose');
const jwt = require('jsonwebtoken');
const User=require('../model/user_model')
exports.LoginF=async(req,res,next)=>{
    const {
        email,
        password
    } = req.body;
    try {
        const user = await User.find({
            email,
            password
        },function(err,data) {
            if(err) throw err;
            const token = jwt.sign(req.body, req.body.email, {expiresIn: 240});
            res.json({
                "success": true,
                "token": token
            });
        });
    }catch(err){
        res.json({
            "success": false,
            "token": ""
        });
    }
};