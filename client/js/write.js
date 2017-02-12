$(document).ready(function(){
  $('#summernote').summernote({
    height: 475,
    callbacks : {
      onImageUpload : function(files, editor, welEditable) {
        uploadImg(files[0],editor,welEditable);
      }
    },
    lang: 'ko-KR'
  });

  $('#user_file').change(function(){
    uploadFile($("#user_file")[0].files[0]);
  })
});

var uploadData = {
  files: []
};

function uploadWrite(){
  //업로드에 필요한 데이터
  //  id, 제목, 날짜, 내용, 조회수(0), 첨부파일
  uploadData.student_co = $.cookie('id');
  uploadData.title = $("#title").val();
  uploadData.contents = $("#summernote").summernote("code");
  uploadData.date = createDate();
  uploadData.name = $.cookie('name');
  uploadData.inquery_count = 0;

  var sourceUrl = $(location).attr('href').split('/');
  var url = "/" + sourceUrl[3] + '/send';
  console.log(uploadData);

  $.ajax({
    data : uploadData,
    type : 'post',
    url : url,
    success : function(data){
      location.assign("http://localhost:3000"+data.result);
    }
  })
};

function createDate(){
  var date = new Date();
  return date.getFullYear() + '년 ' + Number(date.getMonth()+1) + "월 " + date.getDate() + "일";
}

function uploadImg(files,editor,welEditable){
  console.log(files);
  data = new FormData();
  data.append("uploadFile", files);
  $.ajax({
     data : data,
     type : "POST",
     url : "/board/img/upload",
     cache : false,
     contentType : false,
     processData : false,
     success : function(data) {
       $("#summernote").summernote("insertImage", data);
     }
  });
}

function uploadFile(files){
  addLoading();
  var file_info = {};
  data = new FormData();
  data.append('uploadFile',files);
  file_info.name = files.name;
  file_info.size = size_reform(files.size);
  uploadData.files.push(files.name);
  $.ajax({
    data : data,
    type : 'POST',
    url : "/board/file/upload",
    cache : false,
    contentType : false,
    processData : false,
    success : function(data){
      removeLoading();
      if(data == 'success'){
        $("tbody").append("<tr><td>"+ file_info.name +"</td><td>"+ file_info.size +"</td><td><span class='glyphicon glyphicon-remove file_delete' onclick='remove_table(event)'></span></td></tr>");
      }
    }
  });
}

function size_reform(size){
  var unit = ['kb','mb'];
  var reform_size = Math.round(size / 1024);

  if(reform_size % 1024 >= 0){
    var result = Math.round(reform_size / 1024) + ',' + reform_size % 1024 + unit[1];
  }else if(reform_size % 1024){
    var result = Math.round(reform_size / 10240) + ',' + reform_size % 10240 + unit[2];
  }
  return result;
}

function addLoading(){
  $('body').prepend('<div id="shadow"></div>');
  $("#formContainer").prepend('<div id="loading" class="loader hc vc"></div>');
}

function removeLoading(){
  $("#shadow").remove();
  $("#loading").remove();
}

function remove_table(event){
  var target = event.target.parentElement.parentElement;
  $(target).remove();
}
