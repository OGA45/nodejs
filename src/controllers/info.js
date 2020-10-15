require('mongoose');
const jwt = require('jsonwebtoken');
const Info = require('../model/info_model')
exports.Info = async (req, res, next) => {
    Info.find({

    }, function (err, info) {
        if (err) return next(err);
        res.status(200).json({
            success: true,
            info
        })
    })
}