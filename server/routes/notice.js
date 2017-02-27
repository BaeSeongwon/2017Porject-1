var express = require('express');
var Notice = require('../model/notice');
var Auth = require('../method/auth');
var Create = require('../method/create');
var Read = require('../method/read');
var Update = require('../method/update');
var Del = require('../method/delete');
var File = require('../method/fileUpload');

var pub = require('../method/auth');
var multer = require('multer');
var fs = require('fs');
var router = express.Router();

//이미지 업로드
var img = multer({
    dest: 'public/img/notice/'
});

//파일 업로드
var file = multer({
    dest: 'public/file/notice/'
});

router.get('/write',function(req,res){
    res.render('write',function(err,result){
        if(!err){
            res.end(result);
        }else{
            res.end("에러 가 뜸!!");
            console.log(err);
        }
    });
});

router.get('/',function(req,res){
    Read
        .read(req,Notice,Auth)
        .then(function(sendData){
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

router.post('/send',function(req,res){
    Create
        .create(req,Notice)
        .then(function(result){
            res.json({result : '/'});
        });
});

router.get('/detail/',function(req,res){
    Read
        .readDetail(req,Notice,Auth)
        .then(function(sendData){
            console.log(sendData);
            res.render('detail',sendData,function(err,result){
                if(!err){
                    res.end(result);
                }else{
                    console.log(err);
                    res.end('에러가 뜸');
                }
            });
        });
});

router.get('/detail/get',function(req,res){
    Read
        .readDetails(req,Notice)
        .then(function(sendData){
            res.send(sendData);
        });
});

router.get('/details/get',function(req,res){
    Read
        .readDetails(req,Notice)
        .then(function(sendData){
            res.send(sendData);
        });
});

router.get('/update/get',function(req,res){
    var sendData = {};
    sendData = Auth.loginCheck(req);
    res.render('update',sendData,function(err,result){
        if(!err){
            res.end(result);
        }else{
            res.end('에러가 뜸');
        }
    });
});

router.get('/update/send',function(req,res){
    Update
        .getUpdate(req,Notice)
        .then(function(result){
            res.send(result);
        });
});

router.post('/update/post',function(req,res){
    Update
        .update(req,Notice,'notice')
        .then(function(result){
            console.log(result);
            res.send(result);
        });
});

router.get('/delete',function(req,res){
    Del
        .delete(req,Notice,'notice')
        .then(function(result){
            var location = "/" + result;
            res.send('<script>alert("게시글을 삭제 했습니다."); location.href="' + location + '";</script>')
        });
});

router.post('/img/upload',img.single('uploadFile'),function(req,res){
    var location = 'notice';
    File
        .imgUpload(req,fs,location)
        .then(function(url){
            console.log(url);
            res.send(url);
        });
});

router.post('/file/upload',file.single('uploadFile'),function(req,res){
    var location = 'notice';
    File
        .fileUpload(req,fs,location)
        .then(function(result){
            res.send(result);
        });
});

module.exports = router;
