const express = require('express');
const router = express.Router();

const{
    MeF,
}=require('../controllers/meC');

router.route('/v1/me').get(MeF);
module.exports = router;