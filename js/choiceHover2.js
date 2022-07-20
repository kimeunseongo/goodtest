$(function(){
  var i=0;
  $("#choice_bottom2 > ul > li").mouseenter(function(){
    i = ($(this).index())+1
    $("#choice_second > #choice_main2 > ul> li").hide()
    $("#choice_second > #choice_main2 > ul> li:nth-child"+"("+i+")").show()
  })
})