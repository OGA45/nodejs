const express = require('express');
const router = express.Router();

const{
    chatF,
    gchatF
}=require('../controllers/chatC');

router.route("/chat").post(chatF);
router.route("/chat").get(gchatF);
module.exports = router;