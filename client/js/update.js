$(document).ready(function(){
  
  getData();
  
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
  });
    
  var wid = $('.dft_imgContainer').outerWidth() + $('.menue-container').width();
  $('#mainContents').css('width','100%').css('width','-='+ wid +'px');
  
  function getData(){
    var key = $(location).attr('search').split('=')[1];
    var path = $(location).attr('pathname').split('/')[1];
    $.ajax({
      url: '/'+ path +'/update/send?id=' + key,
      type: 'get',
      success: function(result){
        if(result == false){
          alert('에러발생');
        }else{
          showData(result);
        }
      }
    })
  }
  
  function showData(result){
    for(var a in result.attach_file){
      $("#file_tbody").append("<tr><td>"+ result.attach_file[a] +"</td><td><span class='glyphicon glyphicon-remove file_delete' onclick='remove_table(event)'></span></td></tr>");
    }
    $('#title').val(result.title);
    $('#summernote').summernote('code', result.contents);
  }
});

var uploadData = {
  files: []
};

function uploadWrite(){
  //업로드에 필요한 데이터
  //  id, 제목, 날짜, 내용, 조회수(0), 첨부파일
  uploadData._id = $(location).attr('href').split('=')[1];
  uploadData.student_co = $.cookie('id');
  uploadData.title = $("#title").val();
  uploadData.contents = $("#summernote").summernote("code");
  uploadData.date = createDate();
  uploadData.name = $.cookie('name');
  uploadData.inquery_count = 0;
  uploadData.file = reloadFileList();

  var sourceUrl = $(location).attr('href').split('/');
  var url = "/" + sourceUrl[3] + '/update/post';

  $.ajax({
    data : uploadData,
    type : 'post',
    url : url,
    success : function(data){
      window.location.href = "/" + data;
    }
  })
};

function uploadImg(files,editor,welEditable){
  var path = $(location).attr('pathname').split('/')[1];
  data = new FormData();
  data.append("uploadFile", files);
  $.ajax({
     data : data,
     type : "POST",
     url : "/" + path + "/img/upload",
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
  var path = $(location).attr('pathname').split('/')[1];
  var file_info = {};
  data = new FormData();
  data.append('uploadFile',files);
  file_info.name = files.name;
  file_info.size = size_reform(files.size);
  $.ajax({
    data : data,
    type : 'POST',
    url : "/" + path + "/file/upload",
    cache : false,
    contentType : false,
    processData : false,
    success : function(data){
      removeLoading();
      if(data == 'success'){
        $("#file_tbody").append("<tr><td>"+ file_info.name +"</td><td><span class='glyphicon glyphicon-remove file_delete' onclick='remove_table(event)'></span></td></tr>");
      }
    }
  });
};

function reloadFileList(){
  var file = [];
  
  $('#file_tbody > tr').each(function(index){
    file.push($(this).text());
  });
  return file;
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

function createDate(){
  var date = new Date();
  return date.getFullYear() + '년 ' + Number(date.getMonth()+1) + "월 " + date.getDate() + "일";
}