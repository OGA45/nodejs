const express = require('express');
const router = express.Router();

const{
    chatF,
    gchatF
}=require('../controllers/chatC');

router.route("/chat").post(chatF);
router.route("/chat").post(gchatF);
module.exports = router;