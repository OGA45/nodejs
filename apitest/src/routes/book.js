const express = require('express');
const router = express.Router();

const{
    Book_addF,
    Book_searchF
}=require('../controllers/bookC');

router.route('/v1/book').post(Book_addF);//登録
router.route('/v1/book').get(Book_searchF);//紹介・検索

module.exports = router;