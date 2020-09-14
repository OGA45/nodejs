const express = require('express');
const router = express.Router();

const{
    LogoutF,
}=require('../controllers/logoutC');

router.route('/v1/auth/logout').post(LogoutF);
module.exports = router;