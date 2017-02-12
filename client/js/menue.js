$(document).ready(function(){
  $('.menue-body').click(function(){
    $(this).addClass('menue-active');
    $(this).siblings().removeClass('menue-active');

    if($(this).find('ul').length != 0){
      var tag = $(this).find('span')[0];
      var liCount = $(this).find('ul>li').length * 36.8 + 'px';
      $(tag).removeClass('glyphicon-menu-left');
      $(tag).addClass('glyphicon-menu-down');
      $(this).find('ul').animate({
        height: liCount
      });
      $(this).siblings().find('ul').animate({height:'0px'});

      for(var a = 0; a < $(this).siblings().length; a++){
        var point = $(this).siblings()[a];
        var pointDetail = $(point).find('span')[0];
        $(pointDetail).removeClass('glyphicon-menu-down');
        $(pointDetail).addClass('glyphicon-menu-left');
      }
    }
  })
})
