const PORT = process.env.PORT || 3000;
const DB_LOCAL_URL = process.env.DB_LOCAL_URL || 'mongodb://localhost:27017/test';


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const jwt = require("jsonwebtoken");

app.listen(PORT, () => { console.log(`Listning port ${PORT}`) });


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
/*const userSchema = new mongoose.Schema({
    name: { type: String, require: true, unique: true },
    id: { type: String, require: true, unique: true },
    ps: { type: String, require: true },
    to: { type: String, require: true },
    text: { type: String, require: true }
    
});
const chatSchema = new mongoose.Schema({
    to: { type: String, require: true },
    text: { type: String, require: true }  
});*/

// ミドルウェア
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//ルーティング
const signup = require('./routes/signup');
const login = require('./routes/login');
const chat = require('./routes/chat');


app.use(signup);
app.use(login);
app.use(chat);


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