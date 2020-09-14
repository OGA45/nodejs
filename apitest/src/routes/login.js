const express = require('express');
const router = express.Router();

const{
    LoginF,
}=require('../controllers/loginC');

router.route('/v1/auth/login').post(LoginF);
module.exports = router;