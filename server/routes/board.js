var express = require('express');
var Board = require('../model/board');
var multer = require('multer');
var fs = require('fs');
var router = express.Router();

//이미지 업로드
var img = multer({
  dest: 'public/img/temp/'
});

//파일 업로드
var file = multer({
  dest: 'public/file/temp'
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

router.post('/send',function(req,res){
  console.log(req.body);
});

router.get('/detail/get/:index',function(req,res){

});

router.get('/update/get/:index',function(req,res){

});

router.post('/update/send',function(req,res){

});

router.post('/img/upload',img.single('uploadFile'),function(req,res){
  var path = "public/img/temp/";
  var imgUrl;

  fs.rename(path + req.file.filename,path + req.file.originalname,function(err){
    console.error(err);
  });

  imgUrl = "http://localhost:3000/public/img/temp/" + req.file.originalname;
  res.send(imgUrl);
});

router.post('/file/upload',file.single('uploadFile'),function(req,res){
  var path = "public/file/temp/";
  fs.rename(path + req.file.filename,path + req.file.originalname,function(err){
    console.log(err);
  });

  res.send("success");
});

module.exports = router;
