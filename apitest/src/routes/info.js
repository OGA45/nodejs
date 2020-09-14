const express = require('express');
const router = express.Router();

const{
    InfoF,
}=require('../controllers/infoC');

router.route('/v1/info').get(InfoF);
module.exports = router;