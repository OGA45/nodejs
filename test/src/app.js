const PORT = process.env.PORT || 3000;
const DB_LOCAL_URL = process.env.DB_LOCAL_URL || 'mongodb://localhost:27017/test';


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const jwt = require("jsonwebtoken");

app.listen(PORT, () => { console.log(`Listning port ${PORT}`) });
app.set("superSecret", "kiukiu");

// MongoDBの接続情報
const connectDatabase = () => {
    mongoose.connect(DB_LOCAL_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(con => {
        console.log(`MongoDB Database connected with host: ${con.connection.host}`);
    })
};

// MongoDBに接続
connectDatabase();

// ユーザースキーマの設定
const userSchema = new mongoose.Schema({
    name: { type: String, require: true, unique: true },
    id: { type: String, require: true, unique: true },
    ps: { type: String, require: true },
    to: { type: String, require: true },
    text: { type: String, require: true }
    
});
const chatSchema = new mongoose.Schema({
    to: { type: String, require: true },
    text: { type: String, require: true }  
});

const User = mongoose.model('User', userSchema);
const Chat = mongoose.model('Chat', chatSchema);


// ミドルウェア
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// 新規登録
app.post('/signup', async (req, res) => {
    const {
        id,
        ps,
        name
    } = req.body;

    // DBにユーザーを登録する
    try {
        const user = await User.create({
            id,
            ps,
            name
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('DBに保存できませんでした');
    }
    res.status(200).send('OK');
});

app.post('/Searchname', async (req, res) => {
    const {
        name
    } = req.body;
    // DBからnameでユーザーを検索する
    try {
        const user = await User.find({
            name
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
});

app.post('/Searchid', async (req, res) => {
    const {
        id
    } = req.body;
    // DBからidでユーザーを検索する
    try {
        const user = await User.find({
            id
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
});

app.post('/login', async (req, res) => {
    const {
        id,
        ps
    } = req.body;
    // DBからでユーザーを検索する
    try {
        const user = await User.find({
            id,
            ps
        },function(err,data) {
            if(err) throw err;
            const token = jwt.sign(req.body, app.get("superSecret"), {expiresIn: 240});
            res.json({
                success: true,
                id: id,
                token: token
              });
            console.log("HIT");
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('失敗しました');
    }
});

app.use((req, res, next) => {
    token = req.body.token; //トークンを取ってくる
    if (!token) {//なければエーラ
        return res.status(403).send({
          success: false,
          msg: "No token provided"
        });
    }
    jwt.verify(token, app.get(superSecret), (err, decoded) => {
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
});

/*app.get('/chat', async (req, res) => {
    
    // DBにユーザーを登録する
    try {
        const user = await User.create({
            id,
            ps,
            name
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('DBに保存できませんでした');
    }
    res.status(200).send('OK');
});*/
