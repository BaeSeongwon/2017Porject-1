$(document).ready(function(){
    var wid = $('.dft_imgContainer').outerWidth() + $('.menue-container').width();
    $('#mainContents').css('width','100%').css('width','-='+ wid +'px');
})

function moveWrite(){
    window.location.href = "/job/write";
}

function getDetail(id){
    window.location.href = "/job/detail?category='job'&'index'="+id;
}

function deleteArticle(id){
    window.location.href = '/job/delete?id=' + id;
}

function updateArticle(id){
    window.location.href = '/job/update/get?id=' + id;
}
