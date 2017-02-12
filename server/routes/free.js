/**
 * Created by Life on 2017-02-10.
 */
/**
 * Created by Life on 2017-02-10.
 */
var express = require('express');
var Free = require('../model/free');
var pub = require('../public');
var multer = require('multer');
var fs =require('fs');
var router = express.Router();

//이미지 업로드
var img = multer({
    dest: 'public/img/free/'
});

//파일 업로드
var file = multer({
    dest: 'public/file/free/'
});

router.get('/',function(req,res){
    console.log("?");
    var page = req.query.page;
    if(page == null){
        page = 1;
    }
    var skipSize = (page-1)*1;
    var limitSize = 1;
    var pageNum = 1;
    var sendData = {};
    var pageNum = 1;
    sendData = pub.loginCheck(req);
    Free.count(function(err,totalCount){
        pageNum = Math.ceil(totalCount/limitSize);

        Free.find().sort({date:-1}).skip(skipSize).limit(limitSize).exec(function(err,frees){
            if(frees == ""){
                sendData.pagination = pageNum;
                sendData.free = null;
            }else{
                sendData.pagination = pageNum;
                sendData.free = frees;
                console.log(pageNum);
            }
            res.render('free',sendData,function(err,result){
                if(!err){
                    res.end(result);
                }else{
                    res.end('에러가 뜸!!');
                    console.log(err);
                }
            });
        });
    });
});

module.exports = router;