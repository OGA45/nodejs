const express = require('express');
const router = express.Router();

const{
    Me,
    Attendance,
}=require('../controllers/me');

router.route('/v1/me').get(Me);
router.route('/v1/me/attendance').get(Attendance);
module.exports = router;