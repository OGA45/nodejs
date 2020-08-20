const express = require('express');
const router = express.Router();

const{
    loginF,
}=require('../controllers/loginC');

router.route("/login").post(loginF);

module.exports = router;