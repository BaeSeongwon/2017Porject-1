/**
 * Created by Life on 2017-02-27.
 */
$(document).ready(function(){
    var wid = $('.dft_imgContainer').outerWidth() + $('.menue-container').width();
    $('#mainContents').css('width','100%').css('width','-='+ wid +'px');
})

function moveWrite(){
    window.location.href = "/notice/write";
}

function getDetail(id){
    window.location.href = "/notice/detail?category='notice'&'index'="+id;
}

function deleteArticle(id){
    window.location.href = '/notice/delete?id=' + id;
}

function updateArticle(id){
    window.location.href = '/notice/update/get?id=' + id;
}
