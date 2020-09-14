const express = require('express');
const router = express.Router();

const{
    OaF,
}=require('../controllers/oaC');

router.route('/v1/contact/oa').post(OaF);
module.exports = router;