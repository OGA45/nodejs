const jwt = require('jsonwebtoken');
exports.Tokencheck=function (req,res){
    //token = req.body.token; //トークンを取ってくる
    token=req.auth.token; //ヘッダーから取ってくる
    if (!token) {//なければエーラ
      return res.status(403).send({
        success: false,
        msg: 'No token provided'
      });
    }
    jwt.verify(token, req.body.email, (err, decoded) => {
      // tokenが駄目だから拒否
      if (err) {
        console.log(err);
        return res.json({
          success: false,
          msg: 'Invalid token'
        });
      }
    });
  };