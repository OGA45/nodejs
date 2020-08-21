const express = require('express');
const router = express.Router();

const{
    loginF,
}=require('../controllers/loginC');

router.route('/Login').post(loginF);

module.exports = router;