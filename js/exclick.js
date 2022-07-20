$(function() {
  
  $(".side_name1>li").mouseover(function () {
    var i = $(this).index();
    $(".salemenu>li").removeClass("sidemini");
    $(".salemenu>li").eq(i).addClass("sidemini");
    $(".salemenu>li").stop().hide();
    $(".salemenu>li").eq(i).stop().show();
  })

});