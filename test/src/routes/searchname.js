const express = require('express');
const router = express.Router();
const{
    searchnameF,
}=require('../controllers/searchnameC');
router.route('/searchname').get(Search_nameF);
module.exports = router;