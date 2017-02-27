var express = require('express');
var User = require('../model/user');
var passport = require('passport');
var router = express.Router();
// 패스포트 세팅 
require('../method/passport').setup();

router.post('/login',function(req,res){
  User.find({student_id : req.body.stu} ,function(err,result){
    if(err){
      console.log(err);
    }else{
      if(result != false){
        var userData = result[0];
        //로그인 인증 완료시 세션 및 쿠키에 삽입
        if(userData.password == req.body.password){
          req.session.role = userData.role;
          req.session.user_id = req.body.stu;
          res.cookie('id',req.body.stu);
          res.cookie('name',userData.name);
          res.send('<script>alert("로그인 성공!!"); location.href="/";</script>');
        }
      }else{
        res.send('<script>alert("존재하지 않는 아이디 입니다."); history.back();</script>');
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
    student_id : req.body.student_id,
    password : req.body.password,
    name : req.body.name,
    phone : req.body.phoneNumber,
    role : 'normal'
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
});

router.get('/check',function(req,res){
  var id = req.query.id;
  User.findOne({"student_id":id},function(err,result){
    if(err){
      res.send(err);
    }else{
      if(result == null){
        res.send(false);
      }else{
        res.send(true)
      }
    }
  })
})

module.exports = router;
