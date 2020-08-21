const express = require('express');
const router = express.Router();

const{
    chatF,
    gchatF
}=require('../controllers/chatC');

router.route('/chat').post(ChatF);
router.route('/chat').get(GchatF);
module.exports = router;