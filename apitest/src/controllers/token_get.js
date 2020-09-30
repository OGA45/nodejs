const jwt = require('jsonwebtoken');
exports.Token_Get= async function (req,res){
    try {
        var token=req.headers.authorization.split(' ')[1]; //ヘッダーから取ってくる
        return token;
    }catch(err){//無ければエラー
        console.log(err.name);
        return res.json({
            success: false,
            msg: 'トークンが見つかりません'
        });
    };
};
