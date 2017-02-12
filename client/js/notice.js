/**
 * Created by Life on 2017-02-10.
 */
function moveWrite(){
    window.location.href = "http://localhost:3000/notice/write";
}

function getDetail(id){
    window.location.href = "http://localhost:3000/notice/detail/get?category='notice'&index="+id;
}

function deleteArticle(id){
    window.location.href = '/notice/delete?id=' + id;
}
