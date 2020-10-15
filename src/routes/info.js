const express = require('express');
const router = express.Router();

const{
    Info,
}=require('../controllers/info');

router.route('/v1/info').get(Info);
module.exports = router;