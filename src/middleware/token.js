require('dotenv').config();
const jwt = require('jsonwebtoken');
const Token=require('../model/token_model');
//const ErrorHandler=require('../utils/errorhandler');

module.exports =(req,res,next) => {
  try {
    var token=req.headers.authorization.split(' ')[1]; //ヘッダーから取ってくる
  }catch(err){//無ければエラー
    return next(err);
    //return next(new ErrorHandler('トークンが見つからなくてエラー', 404));
  };
  Token.find({token:token},function(err,data){//DBからトークンを探す
    if(err) {
      return next(err);
    }
    if(!data[0]) return next(new Error("DBからトークンが見つからなくてエラー")); 
    jwt.verify(token,process.env.JwtSecret, (err, decoded) => {//取ってきたトークンを確認
      if(err){//合わなかったらだめ
        return next(err);
        //return next(new ErrorHandler('デコードでエラー', 404));
      }else{
        console.log("認証完了");
        res.locals.id=decoded.id;
        return next();
      }
    });
  });
}

/*
exports.TokenCheck= async function (res,token,next){
  Token.find({token:token},function(err,data){//DBからトークンを探す
    if(err) {
      //throw new Error("DBでエラー");
      return next(new ErrorHandler('DBでエラー', 404));
    }
    if(!data[0]) throw Error("トークンが見つからなくてエラー");
    jwt.verify(token,process.env.JwtSecret, (err, decoded) => {//取ってきたトークンを確認
      if(err){//合わなかったら期限切れ
        console.log(err.name);
        return next(new ErrorHandler('デコードでエラー', 404));
      }else{
        console.log("完了");
        return true;
      }
    });
  });
};

exports.TokenGet= async function (req,res){
  try {
    var token=req.headers.authorization.split(' ')[1]; //ヘッダーから取ってくる
    return token;
  }catch(err){//無ければエラー
    console.log(err.name);
    return next(new ErrorHandler('トークンが見つからなくてエラー', 404));
  };
};
*/