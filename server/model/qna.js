/**
 * Created by Life on 2017-02-10.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Qna = new Schema({
    student_co : String,
    name : String,
    title : String,
    inquery_count : String,
    date : String,
    contents : String,
    attach_file : Array
});

module.exports = mongoose.model('Qna',Qna);
