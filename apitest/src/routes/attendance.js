const express = require('express');
const router = express.Router();

const{
    AttendanceF,
}=require('../controllers/attendanceC');

router.route('/v1/me/attendance').get(AttendanceF);
module.exports = router;