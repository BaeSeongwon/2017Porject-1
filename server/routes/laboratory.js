var express = require('express');
var multer = require('multer');
var pub = require('../method/auth');
var fs = require('fs');
var router = express.Router();

router.get('/intro',function(req,res){
  var sendData = {};
  sendData = pub.loginCheck(req);
  res.render("introduce",sendData,function(err,result){
    if(!err){
      res.end(result);
    }else{
      res.end('에러가 뜸');
      console.log(err);
    }
  });
});

module.exports = router;
