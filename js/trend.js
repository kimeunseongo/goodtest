$(function(){
  $(".trenddot>li").click(function(){
    $(".trenddot>li").css({"color":"#d6d6d6"})
    $(this).css({"color":"#3fd0ff"})

    var i=$(this).index()

      if($(this).index()==i){
        $(".trendimg>#trend_aj>li").hide()
        $(".trendimg>#trend_aj>li").eq(i).show()
      }
  })
})