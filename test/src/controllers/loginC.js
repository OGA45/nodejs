const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
exports.loginF=async(req,res,next)=>{
    const {
        id,
        ps
    } = req.body;
    const userSchema = new mongoose.Schema({
        name: { type: String, require: true, unique: true },
        id: { type: String, require: true, unique: true },
        ps: { type: String, require: true },
        to: { type: String, require: true },
        text: { type: String, require: true }
        
    });
    const User = mongoose.model('User', userSchema);
    //app.set("superSecret", "kiukiu");
    try {
        const user = await User.find({
            id,
            ps
        },function(err,data) {
            if(err) throw err;
            const token = jwt.sign(req.body, req.body.id, {expiresIn: 240});
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
};

/*app.post('/login', async (req, res) => {
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
});*/