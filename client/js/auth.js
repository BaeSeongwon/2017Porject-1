$(document).ready(function(){
    var judge = 0;
    
    $('input[name="student_id"]').keyup(function(){
        if($('input[name="student_id"]').val().length >= 4){
            $('#checkId').removeAttr('disabled');
        }else{
            $('input[value="회원가입"]').attr('disabled','disabled');
        }
    })
    
    $('#checkId').click(function(){
        $.ajax({
            url: '/auth/check?id=' + $('input[name="student_id"]').val(),
            type: 'get',
            success: function(result){
                if(result == true){
                    alert('이미 등록된 아이디 입니다.');
                }else{
                    alert('사용 가능한 아이디 입니다.');
                    $('input[value="회원가입"]').removeAttr('disabled');
                }
            }
        })
    })
})