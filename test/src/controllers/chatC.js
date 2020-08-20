const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
require('date-utils');
const chatSchema = new mongoose.Schema({
    to: { type: String, require: true },
    text: { type: String, require: true },
    times: { type: String, require: true },
    from: { type: String, require: true },
    id: { type: String, require: true }
});
const Chat = mongoose.model('Chat', chatSchema);
exports.chatF = async (req, res, next) => {
    token = req.body.token; //トークンを取ってくる
    if (!token) {//なければエーラ
        return res.status(403).send({
            success: false,
            msg: "No token provided"
        });
    }
    jwt.verify(token, req.body.id, (err, decoded) => {
        // tokenが駄目だから拒否
        if (err) {
            console.log(err);
            return res.json({
                success: false,
                msg: "Invalid token"
            });
        }
    });
    const {
        to,
        text
    } = req.body;
    time = new Date();
    times = time.toFormat('YYYY/MM/DD HH24時MI分SS秒');
    from = req.body.id
    try {
        const chat = await Chat.create({
            to,
            from,
            text,
            times
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('DBに保存できませんでした');
    }
    res.status(200).send('OK');
};

exports.gchatF = async (req, res, next) => {
    token = req.body.token; //トークンを取ってくる
    if (!token) {//なければエーラ
        return res.status(403).send({
            success: false,
            msg: "No token provided"
        });
    }
    jwt.verify(token, req.body.id, (err, decoded) => {
        // tokenが駄目だから拒否
        if (err) {
            console.log(err);
            return res.json({
                success: false,
                msg: "Invalid token"
            });
        }
    });
    const id = req.body.id;
    try {
        const user = await Chat.find({
            to: id
        }, function (err, data) {
            if (err) throw err;
            console.log(data[0].name);
            console.log(data[0].id);
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('失敗しました');
    }
    res.status(200).send('OK');
}

/*app.post('/Searchid', async (req, res) => {
  const {
      id
  } = req.body;
  // DBからidでユーザーを検索する
  try {
      const user = await User.find({
          {to:id}
      },function(err,data) {
          if(err) throw err;
          console.log(data[0].name);
          console.log(data[0].id);
      });
  } catch (err) {
      console.log(err.message);
      res.status(500).send('失敗しました');
  }
  res.status(200).send('OK');
});*/

/*app.use((req, res, next) => {
    token = req.body.token; //トークンを取ってくる
    if (!token) {//なければエーラ
        return res.status(403).send({
          success: false,
          msg: "No token provided"
        });
    }
    jwt.verify(token, app.get("superSecret"), (err, decoded) => {
        // tokenが駄目だから拒否
        if (err) {
          console.log(err);
          return res.json({
            success: false,
            msg: "Invalid token"
          });
        }
        // 正しいのでOK
        req.decoded;
        next();
      });
    });

app.post('/chat', async (req, res) => {
    const {
        to,
        text
    } = req.body;
    // DBにユーザーを登録する
    try {
        const chat = await Chat.create({
            to,
            text
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('DBに保存できませんでした');
    }
    res.status(200).send('OK');
});*/
