var express = require('express');
var English = require('../model/english');
var pub = require('../public');
var multer = require('multer');
var fs = require('fs');
var router = express.Router();

//이미지 업로드
var img = multer({
  dest: 'public/img/english/'
});

//파일 업로드
var file = multer({
  dest: 'public/file/english/'
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
    English.count(function(err,totalCount){
        pageNum = Math.ceil(totalCount/limitSize);

        English.find().sort({date:-1}).skip(skipSize).limit(limitSize).exec(function(err,englishs){
            if(englishs == ""){
                console.log('?');
                sendData.english = null;
            }else{
                sendData.pagination = pageNum;
                sendData.english = englishs;
                console.log(pageNum);
                res.render('english',sendData,function(err,result){
                    if(!err){
                        res.end(result);
                    }else{
                        res.end('에러가 뜸!!');
                        console.log(err);
                    }
                });
            }
        });
    });
});

router.post('/send',function(req,res){
  var english = new English({
      name : req.body.name,
      title : req.body.title,
      inquery_count : req.body.inquery_count,
      date : req.body.date,
      contents : req.body.contents,
      attach_file : req.body.files,
      student_co : req.body.student_co
  });

  english.save(function(err){
    if(err){
      console.log(err);
      res.json({result : 0});
    }else{
      res.json({result : '/'});
    }
  });
});

router.get('/detail/get',function(req,res){
  var sendData = {};
  sendData = pub.loginCheck(req);
  English.findOne({"_id":req.query.index},function(err,result){
    if(err){
      res.send(err);
    }else{
      sendData.board = result;
      English.update({"_id":result._id},{$set:{'inquery_count':Number(result.inquery_count)+1}},function(err,result){
        if(err){
          console.log(err);
        }else{
          res.render('detail',sendData,function(err,result){
              if(!err){
                  res.end(result);
              }else{
                  res.end('에러가 뜸');
              }
          });
        }
      });
    }
  })
});

router.get('/details/get',function(req,res){
  English.findOne({"_id":req.query.index},function(err,result){
    if(err){
      res.send(err);
    }else{
      res.send(result);
    }
  })
});

router.get('/update/get',function(req,res){
    console.log(req.query.id);
    var sendData = {};
    sendData = pub.loginCheck(req);
    English.findOne({"_id":req.query.index},function(err,result){
        if(err){
            res.send(err);
        }else{
            res.render('update',sendData,function(err,result){
                if(!err){
                    res.end(result);
                }else{
                    res.end('에러가 뜸');
                }
            });
        }
    })
});

router.post('/update/send',function(req,res){

});

router.get('/delete',function(req,res){
  English.findOneAndRemove(req.query.id,function(err){
    if(err){
      res.send(err);
    }else{
      res.send('<script>alert("게시글을 삭제 했습니다."); location.href="/english/";</script>');
    }
  })
});

router.post('/img/upload',img.single('uploadFile'),function(req,res){
  var path = "public/img/english/";
  var imgUrl;
  fs.rename(path + req.file.filename,path + req.file.originalname,function(err){
    console.error(err);
  });

  imgUrl = "http://localhost:3000/public/img/english/" + req.file.originalname;
  res.send(imgUrl);
});

router.post('/file/upload',file.single('uploadFile'),function(req,res){
  var path = "public/file/english/";
  fs.rename(path + req.file.filename,path + req.file.originalname,function(err){
    console.log(err);
  });
  res.send("success");
});

module.exports = router;
