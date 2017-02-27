var http = require('http');
var express = require('express');
var path = require('path');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var date = require('date-utils');
var mongoose = require('mongoose');
var fs = require('fs');
const Agent = require('agentkeepalive');
const keepaliveAgent = new Agent({
    maxSockets: 100,
    maxFreeSockets: 10,
    timeout: 60000,
    freeSocketKeepAliveTimeout: 30000, // free socket keepalive for 30 seconds
});

/* 모델 */
var User = require('./server/model/user');
var English = require('./server/model/english');
var Notice = require('./server/model/notice');
var Free = require('./server/model/free');
var Qna = require('./server/model/qna');
var Job = require('./server/model/job');

/* 라우터 모듈 */
var index = require('./server/routes/index');
var auth = require('./server/routes/auth');
var laboratory = require('./server/routes/laboratory');
var english = require('./server/routes/english');
var resume = require('./server/routes/resume');
var notice = require('./server/routes/notice');
var free = require('./server/routes/free');
var qna = require('./server/routes/qna');
var job = require('./server/routes/job');

date = new Date();

var app = express();
var db = mongoose.connection;
var index;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/bgProject-Board');

app.use(session({
	//세션키
	key : 'sid',
	//비밀키
	secret : 'secret',
	cookie : {
		//쿠키 유효 기간
		maxAge : 1000*60*60
	}
}));

/* 기본 use 셋팅 */
app.use(cookieParser());
app.use(bodyParser({uploadDir:'./uploads'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname));
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');

/* use routing */
app.use('/',index);
app.use('/auth',auth);
app.use('/lab',laboratory);
app.use('/english',english);
app.use('/resume',resume);
app.use('/notice',notice);
app.use('/free',free);
app.use('/qna',qna);
app.use('/job',job);

app.get('/download',function(req,res){
	var url = 'public/file/temp/' + req.query.fileName;
	res.download(url);
});

app.get('/logout',function(req,res){
	console.log(req.session);
	req.session.destroy(function(err){
		console.log(err);
	});
	// req.session;  // 세션 삭제
	res.clearCookie('id'); // 세션 쿠키 삭제
	res.clearCookie('name');
	res.send('<script>alert("로그아웃 하셨습니다."); window.location.href="/";</script>')
});

http.createServer(app).listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0",function(){
	db.on('error', console.error);
	db.once('open', function(){
		console.log("몽고 디비 접속 성공!");
	})
}).setTimeout(1000);


