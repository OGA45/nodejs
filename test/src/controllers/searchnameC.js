require('mongoose');
const User=require('../model/user_model')
exports.Search_nameF=async(req,res,next)=>{
    const user_name=req.body.name;
    // DBからnameでユーザーを検索する
    try {
        const user = await User.find({
            name:user_name
        },function(err,data){
            if(err) throw err;
            console.log(data[0].name);
            console.log(data[0].id);
            res.json({
                name: data[0].name,
                id: data[0].id
            });
        });
    }catch(err){
        console.log(err.message);
        res.status(500).send('失敗しました');
    }
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