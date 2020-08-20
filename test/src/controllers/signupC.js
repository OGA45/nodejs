const mongoose = require('mongoose');
exports.signupF=async (req, res,next) => {
    const {
        id,
        ps,
        name
    } = req.body;
    const userSchema = new mongoose.Schema({
        name: { type: String, require: true, unique: true },
        id: { type: String, require: true, unique: true },
        ps: { type: String, require: true },
        to: { type: String, require: true },
        text: { type: String, require: true }
        
    });
    const User = mongoose.model('User', userSchema);
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
};

// 新規登録
/*app.post('/signup', async (req, res) => {
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
});*/
