var express = require('express');
var Board = require('../model/board');
var pub = require('../method/auth');
var router = express.Router();

router.get('/',function(req,res){
    var sendData = {};
    sendData = pub.loginCheck(req);
    res.render('main',sendData,function(err,result){
        if(!err){
            res.end(result);
        }else{
            res.end('에러가 뜸!!');
            console.log(err);
        }
    });
});

module.exports = router;
