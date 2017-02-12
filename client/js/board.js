/**
 * Created by Life on 2016-11-16.
 */
function moveRegist(){
    window.location.href = "http://localhost:3000/regist";
}

function moveWrite(){
    window.location.href = "http://localhost:3000/board/write";
}

function getDetail(index){
	window.location.href = "http://localhost:3000/detailBoard/" + index;
}

function search(){
	if($("#selectBox option:selected").val() == '제목'){
		window.location.href = "http://localhost:3000/searchTitle/" + $('#searchInput').val();
	}else{
		window.location.href = "http://localhost:3000/searchUser/" + $('#searchInput').val();
	}

}
