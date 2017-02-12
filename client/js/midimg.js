/**
 * Created by Life on 2017-02-10.
 */
(function(){
    var fullUrl = document.location.href.split('/')[3];
    var url = fullUrl.split('?')[0];

    midNameSwitch(url);

    function midNameSwitch(url){
        switch(url){
            case 'lab':{
                $('.midName').text('연구회 소개');
                break;
            }
            case 'english':{
                $('.midName').text('English');
                break;
            }
            case 'resume':{
                $('.midName').text('이력서');
                break;
            }
            case 'notice':{
                $('.midName').text('공지사항');
                break;
            }
            case 'free':{
                $('.midName').text('자유');
                break;
            }
            case 'qna':{
                $('.midName').text('Q&A');
                break;
            }
            default :{
                $('.midName').text('홈');
            }
        }
    }
})();