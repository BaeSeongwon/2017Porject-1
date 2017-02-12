/**
 * Created by Life on 2016-12-03.
 */
$(document).ready(function(){
    $("#img_input").on('change',function(){
        uploadImg($(this)[0].files[0]);
        readUrl(this);
    });
});

var imgUrl;

function moveResumeWrite(){
  window.location.href = "http://localhost:3000/resume/write";
}

function sendResume(){
  // 이력서 모델
  var Resume = {
    student_co: "",
    picture: "",
    supporting_field: "",
    salary_requirement: "",
    name: "",
    social_id_number: "",
    email: "",
    phone: "",
    address: "",
    academic_abilitu: [],
    carrer: [],
    language: [],
    license: [],
    contest_exhibit: [],
    date: ""
  };

  Resume.student_co = $.cookie('id');
  Resume.picture = imgUrl;
  Resume.supporting_field = $("#supporting_field").val();
  Resume.salary_requirement = $("#salary_requirement").val();
  Resume.name = $("#name").val();
  Resume.social_id_number = $("#social_id_number").val();
  Resume.email = $("#email").val();
  Resume.phone = $("#phone").val();
  Resume.address = $("#address").val();
  Resume.date = getTodate();

  for(var a = 0; a < $('#student').find('tr').length; a++){
    Resume.academic_abilitu.push(repeatData($('#student').find('tr')[a]));
  }

  for(var a = 0; a < $('#career').find('tr').length; a++){
    console.log(a);
    Resume.carrer.push(repeatData($('#carrer').find('tr')[a]));
  }

  for(var a = 0; a < $('#language').find('tr').length; a++){
    Resume.language.push(repeatData($('#language').find('tr')[a]));
  }

  for(var a = 0; a < $('#license').find('tr').length; a++){
    Resume.license.push(repeatData($('#license').find('tr')[a]));
  }

  for(var a = 0; a < $('#history').find('tr').length; a++){
    Resume.contest_exhibit.push(repeatData($('#history').find('tr')[a]));
  }

  $.ajax({
    data : Resume,
    type : 'POST',
    url : '/resume/upload',
    success: function(data){
      console.log(data);
    }
  })
}

function moveDetailResume(id){
  window.location.href = "http://localhost:3000/resume/detail?id=" + id;

}

function getTodate(){
  var dt = new Date();
  return dt.getFullYear() + "년 " + dt.getMonth()+1 + "월 " + dt.getDate() + "일";
}

// 이력서 폼의 input 태그를 반복하여 데이터를 추출 배열 형태로 뽑아냄
function repeatData(data){
  var inputForm = $(data).find('input');
  var obj = [];
  for (var i = 0; i < inputForm.length; i++) {
    obj.push(inputForm[i].value);
  }
  return obj;
}

function uploadImg(files){
  data = new FormData();
  data.append("uploadFile", files);
  $.ajax({
     data : data,
     type : "POST",
     url : "/resume/img/upload",
     cache : false,
     contentType : false,
     processData : false,
     success : function(data) {
       imgUrl = data;
     }
  });
}

function readUrl(input){
    var reader = new FileReader();

    reader.onload = function(e){
        $("#div_img").css({"background":"url(" + e.target.result + ")","background-size":"130px 150px"});
    }
    reader.readAsDataURL(input.files[0]);
}

function addTable(id,length){
  var tableId = "#"+id;
  var tableLast = tableId + '>tr';
  $(tableId).append("<tr></tr>");
  var last = $(tableLast).last();
  for(var index = 0; index < length; index++){
    $(last).append('<td><input type="text" class="resume_input"></td>');
  }
}

function delTable(id){
  var tableId = "#"+id;
  var tableLast = tableId + '>tr';
  $(tableLast).last().remove();
}
