const express = require('express');
const router = express.Router();

const{
    Contact,
    Absence,
    Oa,
}=require('../controllers/contact');

router.route('/v1/contact').post(Contact);
router.route('/v1/contact/absence').post(Absence);
router.route('/v1/contact/oa').post(Oa);
module.exports = router;