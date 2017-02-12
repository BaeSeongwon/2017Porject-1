var express = require('express');
var User = require('../model/user');
var router = express.Router();

router.post('/login',function(req,res){
  User.find({student_co : req.body.stu} ,function(err,result){
    if(err){

    }else{
      if(result != false){
        var userData = result[0];
        //로그인 인증 완료시 세션 및 쿠키에 삽입
        if(userData.password == req.body.password){
          req.session.user_id = req.body.stu;
          console.log(userData);
          res.cookie('id',req.body.stu);
          res.cookie('name',userData.name);
          res.send('<script>alert("로그인 성공!!"); location.href="/";</script>');
        }
      }else{
        res.send('<script>alert("존재하지 않는 학번입니다."); history.back();</script>');
      }
    }
  });
});

router.get('/logout',function(req,res){
  req.session.destroy();
  res.clearCookie('sid');
  res.send('<script>alert("로그아웃 성공!"); location.href="/";</script>');
});

router.get("/regist",function(req,res){
  res.render("regist",function(err,result){
      if(!err){
          res.end(result);
      }else{
          res.end("에러가 뜸!!");
      }
  });
});

router.post('/regist',function(req,res){
  var user = new User({
    student_co : req.body.student_co,
    password : req.body.password,
    name : req.body.name,
    phone : req.body.phoneNumber
  });

  user.save(function(err){
    if(err){
      console.error(err);
      res.json({result : 0});
      return;
    }else{
      res.redirect('/');
    }
  });
})

module.exports = router;
