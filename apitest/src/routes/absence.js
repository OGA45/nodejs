const express = require('express');
const router = express.Router();

const{
    AbsenceF,
}=require('../controllers/absenceC');

router.route('/v1/contact/absence').post(AbsenceF);
module.exports = router;