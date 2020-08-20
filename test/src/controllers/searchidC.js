const mongoose = require('mongoose');
require('../model/user_model')
exports.searchidF=async(req,res,next)=>{
    const user_id=req.body.id;
    // DBからidでユーザーを検索する
    try {
        const user = await User.find({
            id:user_id
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
}
/*
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
*/