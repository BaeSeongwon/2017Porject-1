var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Resume = new Schema({
  student_co: String,
  picture: String,
  supporting_field: String,
  salary_requirement: String,
  name: String,
  social_id_number: String,
  email: String,
  phone: String,
  address: String,
  academic_abilitu: Array,
  carrer: Array,
  language: Array,
  license: Array,
  contest_exhibit: Array,
  date: String
});

module.exports = mongoose.model('Resume',Resume);
