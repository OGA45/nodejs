const express = require('express');
const router = express.Router();

const{
    UpdatePassword,
    Logout,
}=require('../controllers/auth');

router.route('/v1/auth/password').put(UpdatePassword);
router.route('/v1/auth/logout').post(Logout);
module.exports = router;