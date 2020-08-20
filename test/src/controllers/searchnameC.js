const mongoose = require('mongoose');
exports.searchnameF=async(req,res,next)=>{
    const userSchema = new mongoose.Schema({
        name: { type: String, require: true, unique: true },
        id: { type: String, require: true, unique: true },
        ps: { type: String, require: true },
        to: { type: String, require: true },
        text: { type: String, require: true }
        
    });
    const User = mongoose.model('User', userSchema);
    const user_name=req.body.name;
    // DBからnameでユーザーを検索する
    try {
        const user = await User.find({
            name:user_name
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
*/