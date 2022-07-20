$(function(){
  var i=0;
  $("#section4 > #recmenu > ul > li").mouseenter(function(){
    i = ($(this).index())+1
    $("#section4 > #recwrap > div").hide()


    $("#section4 > .art2 > ul > li").css({
	"border-bottom":"none",
             "color":"#000	"
    })

    $("#section4 > #recwrap > ul > li:hover").css({
	"border-bottom":"2px solid #e66a57",
             "color":"#e66a57"
    })


    $("#section4 > #recwrap > div:nth-of-type"+"("+i+")").stop().fadeIn("fast")
  })
});