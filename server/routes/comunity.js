var express = require('express');
var multer = require('multer');
var fs = require('fs');
var router = express.Router();

router.get('/intro',function(req,res){
  res.render("introduce",function(err,result){
    if(!err){
      res.end(result);
    }else{
      res.end('에러가 뜸');
      console.log(err);
    }
  });
});

module.exports = router;
