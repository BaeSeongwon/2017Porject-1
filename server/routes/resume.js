var express = require('express');
var Resume = require('../model/resume');
var multer = require('multer');
var pub = require('../public');
var fs = require('fs');
var router = express.Router();

var img = multer({
  dest: 'public/img/resume/'
});


router.get('/',function(req,res){
  var sendData = {};
  sendData = pub.loginCheck(req);
  Resume.find({},{"name":true, "date":true, "picture":true, "student_co":true},function(err,result){
    if(err){

    }else{
      sendData.resume = result;
      res.render("resumeList",sendData,function(err,result){
        if(!err){
          res.end(result);
        }else{
          res.end('에러가 뜸');
          console.log(err);
        }
      });
    }
  });
});

router.get('/detail',function(req,res){
  var sendData = {};
  sendData = pub.loginCheck(req);
  Resume.findOne({"_id":req.query.id},function(err,result){
    if(err){
      res.send(err);
    }else{
      console.log(sendData);
      sendData.resume = result;
      res.render("resumeDetail",sendData,function(err,result){
        if(!err){
          res.end(result);
        }else{
          res.end('에러가 뜸');
          console.log(err);
        }
      });
    }
  })
})

router.get('/write',function(req,res){
  var sendData = {};
  sendData = pub.loginCheck(req);
  res.render("resume",sendData,function(err,result){
    if(!err){
      res.end(result);
    }else{
      res.end('에러가 뜸');
      console.log(err);
    }
  });
});

router.post('/upload',function(req,res){
  var resume = new Resume({
    student_co: req.body.student_co,
    picture: req.body.picture,
    supporting_field: req.body.supporting_field,
    salary_requirement: req.body.salary_requirement,
    name: req.body.name,
    social_id_number: req.body.social_id_number,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    academic_abilitu: req.body.academic_abilitu,
    carrer: req.body.carrer,
    language: req.body.language,
    license: req.body.license,
    contest_exhibit: req.body.contest_exhibit,
    date: req.body.date
  });

  resume.save(function(err){
    if(err){
      console.log(err);
      res.json({result: 0});
    }else{
      res.send('<script>location.href="/resume/";</script>');
    }
  });
})

router.post('/img/upload',img.single('uploadFile'),function(req,res){
  var path = "public/img/resume/";
  var imgUrl;

  fs.rename(path + req.file.filename,path + req.file.originalname,function(err){
    console.error(err);
  });

  imgUrl = "http://localhost:3000/public/img/resume/" + req.file.originalname;
  res.send(imgUrl);
});

module.exports = router;
