var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  student_co : String,
  password : String,
  name : String,
  phone : String
});

module.exports = mongoose.model('User',User);
