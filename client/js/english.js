$(document).ready(function(){
	var wid = $('.dft_imgContainer').outerWidth() + $('.menue-container').width();
	$('#mainContents').css('width','100%').css('width','-='+ wid +'px');
})

function moveWrite(){
    window.location.href = "/english/write";
}

function getDetail(id){
    window.location.href = "/english/detail?category='english'&'index'="+id;
}

function deleteArticle(id){
    window.location.href = '/english/delete?id=' + id;
}

function updateArticle(id){
    window.location.href = '/english/update/get?id=' + id;
}
