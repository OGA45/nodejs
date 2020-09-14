require('mongoose');
const User=require('../model/user_model')
exports.SignupF=async (req, res,next) => {
    const {
        email,
        password
    } = req.body;
    try {
        const user = await User.create({
            email,
            password
        });
    }catch(err){
        console.log(err.message);
        res.json({
            "success":false,
            "toke":""
        });
    }
    res.json({
        "success":true,
        "toke":""
    });
};