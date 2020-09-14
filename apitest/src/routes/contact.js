const express = require('express');
const router = express.Router();

const{
    ContactF,
}=require('../controllers/contactC');

router.route('/v1/contact').post(ContactF);
module.exports = router;