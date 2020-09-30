const jwt = require('jsonwebtoken');
const Token=require('../model/token_model');
exports.Tokencheck= async function (req,res,token){

       Token.find({token:token},function(err,data){//DBからトークンを探す
        if(err){
          console.log(err.name);
          return res.json({
            success: false,
            msg: 'データベースエラー'
          });
        }
        try{
          if(!data[0]) throw Error();//空だったら無いからエラー
          jwt.verify(token,data[0].email, (err, decoded) => {//取ってきたトークンを確認
            if(err){//合わなかったら期限切れ
              console.log(err.name);
              return res.json({
                success: false,
                msg: 'トークンの有効期限が切れています'
              });
            };
            return true;
          });
        }catch(err){//トークンが無い
          console.log(err.name);
          return res.json({
            success: false,
            msg: 'トークンが存在しない'
          });
        }
      });
};
