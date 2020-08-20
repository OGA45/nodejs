const express = require('express');
const router = express.Router();

const{
    chatF,
}=require('../controllers/chatC');

router.route("/chat").post(chatF);

module.exports = router;