const express = require('express');
const router = express.Router();

const{
    signupF,
}=require('../controllers/signupC');

router.route("/signup").post(signupF);

module.exports = router;