function moveWrite(){
    window.location.href = "/english/write";
}

function getDetail(id){
    window.location.href = "/english/detail/get?category='english'&index="+id;
}

function deleteArticle(id){
    window.location.href = '/english/delete?id=' + id;
}

function updateArticle(id){
    window.location.href = '/english/update/get?id=' + id;
}
