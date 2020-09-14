const express = require('express');
const router = express.Router();

const{
    SignupF,
}=require('../controllers/signupC');

router.route('/v1/auth/signup').post(SignupF);
module.exports = router;