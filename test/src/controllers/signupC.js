require('mongoose');
const User=require('../model/user_model')
exports.signupF=async (req, res,next) => {
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
