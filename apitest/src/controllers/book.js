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
    res.json({
        success:true,
        book:{
            bookid:"",
            title:title,
            tags:tags
        }
    });
}
exports.BookSearch=async(req,res,next)=>{
    if(req.body.search){
        Book.find({
            title:req.body.search
        },function(err,data){
            if(err||!data) return next(new Error("見つかりませんでした"));
            res.json({
                success:true,
                book:{
                    bookid:data.bookid,
                    title:data.title,
                    tags:data.tags
                }
            });
        });
    }else{
        res.json({
            success:true,
        });
    }
}