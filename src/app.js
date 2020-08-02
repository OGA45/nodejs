const exprees=require('express');
const app=exprees();
const port = 8080;
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const bodyParser = require('body-parser')
const documents = [
    { a: 1 }
]
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.post('/r/',(req,res)=>{
    console.log(req.body);
    res.send("Received POST Data!");  
    MongoClient.connect('mongodb://localhost:27017/test', (err, db) => {//接続
    if (err) throw err;//エラー確認
    console.log('接続完了')
    const dbName = db.db("test");//接続するDB名前の決定
    dbName.collection('test').insertMany([req.body],function(err, dbdata){//testDBに受け取った中身を書き込む
        if (err) throw err;
      })
    console.log('書き込み完了')
    db.close();//DBを閉じる
    })
})
app.post('/w/',(req,res)=>{
    console.log(req.body);
    MongoClient.connect('mongodb://localhost:27017/test', (err, db) => {//接続
    if (err) throw err;//エラー確認
    console.log('接続完了')
    const dbName = db.db("test");//接続するDB名前の決定
    dbName.collection("test").find(req.body).toArray(function(err, dbdata){//testDB上のtestコレクションの中から受け取ったものを探す
      if (err) throw err;
      console.log('完了')
      console.log(dbdata);
      res.send(dbdata); //受け取ったのを返す
    })
    db.close();//DBを閉じる
    })
})
app.post('/test/',(req,res)=>{
    console.log(req.body);
    res.send("Received POST Data!");  
    MongoClient.connect('mongodb://localhost:27017/test', (err, db) => {//接続
    if (err) throw err;//エラー確認
    console.log('接続完了')
    const dbName = db.db("test");//接続するDB名前の決定
    dbName.collection("test").find({"test":"AAA"}).toArray(function(err, dbdata) {//testDB上のtestコレクションの中のtestの中がAAAのを出す
      if (err) throw err;
      console.log(dbdata);//受け取ったのを流す
    })
    console.log('接続完了2')
    /*dbName.collection('test').insertMany(documents, function(err, res){//testDBにdocumentsの中身を書き込む
      if (err) throw err;
    })
    console.log('接続完了3')*/
    dbName.collection('test').insertMany([req.body], function(err, res){//testDBに受け取った中身を書き込む
        if (err) throw err;
      })
    console.log('接続完了4')
    db.close();//DBを閉じる
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))