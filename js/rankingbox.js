
  $(function(){
    $('.rankingbox2').hide();
    $('.week').click(function(){
   
    $(".today").css({"border-bottom":"1px solid #888"})
    $(".week").css({"border-bottom":"none"})

    $('.rankingbox2').fadeIn();

    $('.rankingbox1').hide();

   });

   $('.bestmenu > div:nth-of-type(1)').click(function(){
    $(".today").css({"border-bottom":"none"})
    $(".week").css({"border-bottom":"1px solid #888"})
    $('.rankingbox1').fadeIn();

    $('.rankingbox2').hide();

   });

  });