const express = require('express');
const router = express.Router();

const{
    PasswordF,
}=require('../controllers/passwordC');

router.route('/v1/auth/password').put(PasswordF);
module.exports = router;