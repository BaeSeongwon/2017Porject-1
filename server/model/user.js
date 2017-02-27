var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  student_id : String,
  password : String,
  name : String,
  phone : String,
  role : String
});

module.exports = mongoose.model('User',User);
