const PORT = process.env.PORT || 3000;
const DB_LOCAL_URL = process.env.DB_LOCAL_URL || 'mongodb://localhost:27017/testapi';

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
const tokencheck = require('./middleware/token');//トークン認証
const err =require('./middleware/err');//エラー受け取り
//ルーティング
/*
const signup = require('./routes/signup');//新規登録
const login = require('./routes/login');//ログイン
const password = require('./routes/password');//パソワード変更
const logout = require('./routes/logout');//ログアウト
const book = require('./routes/book');//書籍の紹介・検索・登録
const absence = require('./routes/absence');//欠席連絡
const oa = require('./routes/oa');//公欠届け
const contact = require('./routes/contact');//問い合わせ
const info = require('./routes/info');//お知らせ機能
const me = require('./routes/me');//ユーザー情報
const attendance = require('./routes/attendance');//出席率の表示
*/
const public = require('./routes/public');//認証なし
const private = require('./routes/private');//認証有り
const book = require('./routes/book');
const contact = require('./routes/contact');
const info = require('./routes/info');
const me = require('./routes/me');
/*
const auth=require('./routes/auth');
const book = require('./routes/book');
const contact = require('./routes/contact');
const info = require('./routes/info');
const me = require('./routes/me');
*/
//接続先
/*
app.use(signup);
app.use(login);
app.use(password);
app.use(logout);
app.use(book);
app.use(absence);
app.use(oa);
app.use(contact);
app.use(info);
app.use(me);
app.use(attendance);
*/

app.use(public);
app.use(tokencheck);//認証を挟む
app.use(private);
app.use(book);
app.use(contact);
app.use(info);
app.use(me);
app.use(err);//エラー受け取り
/*
app.use(auth);
app.use(book);
app.use(contact);
app.use(info);
app.use(me);
*/
