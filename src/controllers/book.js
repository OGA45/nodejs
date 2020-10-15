require('mongoose');
const jwt = require('jsonwebtoken');
const Book=require('../model/book_model')
exports.BookAdd=async(req,res,next)=>{
    const {
        title,
        tags
    } = req.body;
    if(!title||!tags) {
        return next(new Error("タイトルもしくはタグが空白です"));
    }
    await Book.create({
        title,tags
    },function(err){
        if(err) return next(err);
    });
    res.status(200).json({
        success:true,
        book:{
            bookid:"",
            title:title,
            tags:tags
        }
    });
}
exports.BookSearch=async(req,res,next)=>{
    if(!req.body.search){//title?
        Book.find({//全部出す
        },function(err,books){
            if(err||!books) return next(new Error("見つかりませんでした"));
            res.status(200).json({
                success:true,
                books
            })
        })
    }else{
        Book.find({
            title:req.body.search
        },function(err,book){
            if(err||!book) return next(new Error("見つかりませんでした"));
            res.status(200).json({
                success:true,
                book
            });
        });
    }
}