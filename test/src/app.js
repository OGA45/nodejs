const express =require('express');
const bodyParser = require('body-parser');
const app=express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
    name : { type: String, require: true, unique: true }, 
    id   : { type: String, require: true, unique: true },
    ps : { type: String, require: true }
});
const UserModel = mongoose.model('test', User);
const data =new UserModel();
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
app.listen(3000,()=>{console.log('P3000')});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    console.log(req.query);
    res.status(200).send('OK');
});
app.get('/;id',(req,res)=>{
    console.log(req.params);
    res.status(200).send('OK');
});
app.post('/login',(req,res)=>{
    console.log(req.body);
    console.log(req.body.id);
    console.log(req.body.ps);
    console.log(req.body.name);
    data.id=req.body.id;
    data.ps=req.body.ps;
    data.name=req.body.name;
    data.save(function(err) {
        if (err) { console.log(err); }
    });
    res.status(200).send('OK');
});