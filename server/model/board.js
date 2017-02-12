var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Board = new Schema({
  student_co : String,
  title : String,
  inquery_count : String,
  date : String,
  context : String
});

module.exports = mongoose.model('Board',Board);
