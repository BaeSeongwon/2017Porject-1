/**
 * Created by Life on 2017-02-10.
 */
var express = require('express');
var Notice = require('../model/notice');
var pub = require('../public');
var multer = require('multer');
var fs =require('fs');
var router = express.Router();

//이미지 업로드
var img = multer({
    dest: 'public/img/notice/'
});

//파일 업로드
var file = multer({
    dest: 'public/file/notice/'
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
    Notice.count(function(err,totalCount){
        pageNum = Math.ceil(totalCount/limitSize);

        Notice.find().sort({date:-1}).skip(skipSize).limit(limitSize).exec(function(err,notices){
            if(notices == ""){
                sendData.pagination = pageNum;
                sendData.notice = null;
            }else{
                sendData.pagination = pageNum;
                sendData.notice = notices;
                console.log(pageNum);
            }
            res.render('notice',sendData,function(err,result){
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