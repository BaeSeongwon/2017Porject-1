var express = require('express');
var Board = require('../model/board');
var pub = require('../public');
var router = express.Router();

router.get('/',function(req,res){
  res.redirect('/lab/intro');
});

module.exports = router;
