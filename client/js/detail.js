(function(){
	$(document).ready(function(){
		var path = $(location).attr('pathname').split('/')[1];
		var parameter = $(location).attr('search').split('=')[2];
		var url = '/'+path+'/details/get?index='+parameter;
		
		getContentsData(url,path);

		var wid = $('.dft_imgContainer').outerWidth() + $('.menue-container').width();
		$('#mainContents').css('width','100%').css('width','-='+ wid +'px');
		
	});

	function getContentsData(url,path){
		$.ajax({
			url: url,
			type: 'get',
			success: function(result){
				console.log(result);
				appendContentsFile(result.attach_file,path);
				appendContents(result);
			}
		});
	};

	function appendContents(result){
		$('#detatilContentsTitle').append(result.title);
		$('#detailContentsContainer').append(result.contents);
	};

	function appendContentsFile(result){
		for(var index in result){
			var url = encodeURI('/download?fileName=' + result[index]);
			console.log(url);
            $('#file_table>tbody').append('<tr><td>'+ result[index] +'</td><td><a href='+ url +'>다운로드</a></td></tr>')
		}
	}
})();