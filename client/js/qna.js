/**
 * Created by Life on 2017-02-27.
 */
/**
 * Created by Life on 2017-02-27.
 */
$(document).ready(function(){
    var wid = $('.dft_imgContainer').outerWidth() + $('.menue-container').width();
    $('#mainContents').css('width','100%').css('width','-='+ wid +'px');
})

function moveWrite(){
    window.location.href = "/qna/write";
}

function getDetail(id){
    window.location.href = "/qna/detail?category='qna'&'index'="+id;
}

function deleteArticle(id){
    window.location.href = '/qna/delete?id=' + id;
}

function updateArticle(id){
    window.location.href = '/qna/update/get?id=' + id;
}
