var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var English = new Schema({
  student_co : String,
  name : String,
  title : String,
  inquery_count : String,
  date : String,
  contents : String,
  attach_file : Array
});

module.exports = mongoose.model('English',English);
