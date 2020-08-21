const express = require('express');
const router = express.Router();

const{
    searchidF,
}=require('../controllers/searchidC');

router.route('/searchid').get(Search_idF);

module.exports = router;