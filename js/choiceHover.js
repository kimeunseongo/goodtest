$(function(){
  var i=0;
  $(".choice_bottom > ul > li").mouseenter(function(){
    i = ($(this).index())+1
    $(".choice_first > .choice_main1 > ul> li").hide()
    $(".choice_first > .choice_main1 > ul> li:nth-child"+"("+i+")").show()
  })
})