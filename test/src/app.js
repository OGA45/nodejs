const PORT = process.env.PORT || 3000;
const DB_LOCAL_URL = process.env.DB_LOCAL_URL || 'mongodb://localhost:27017/test';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const jwt = require('jsonwebtoken');
//サバーポート情報
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
// ミドルウェア
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//ルーティング
const signup = require('./routes/signup');
const login = require('./routes/login');
const chat = require('./routes/chat');
const searchname = require('./routes/searchname');
const searchid = require('./routes/searchid');
//接続先
app.use(signup);
app.use(login);
app.use(chat);
app.use(searchname);
app.use(searchid);