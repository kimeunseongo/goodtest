  $(function() {
        var i = 0;

        $(".sbannerbox li").mouseenter(function () {
          i = $(this).index()
        })

        function slide() {

          i++;

          if (i > $(".slide li:last").index()) {
            i = 0;
          }
          $(".slide>li").eq(i).stop().fadeIn("slow");
          $(".slide>li").eq(i - 1).stop().fadeOut();

          if (i == 1) {
            $("#dotslider").css({
              "background": "#c5e1d4"
            })
	$(".sbannerbox li").eq(i-1).css({
              color:"black",
              borderTop:"none"
            });

            $(".sbannerbox li").eq(i).css({
              borderTop:"3px solid red",
	 margin: "-1px 0 0 0"
            });

          } 

        }

        $(".sbannerbox li").eq(0).mouseenter(function () {
          var i = 0;
          $("#dotslider").css({
            "background": "#ADBFFF"
          });
          $(".sbannerbox li").css({
            borderTop: "none"
          });
          $(this).css({
            borderTop: "3px solid red",
            margin:"-1px 0 0 0"
          });
          $(".slide li").stop().hide();
          $(".slide li").eq(0).stop().show();
        });

        $(".sbannerbox li").eq(1).mouseenter(function () {
          var i = 0;
          $("#dotslider").css({
            "background": "#c5e1d4"
          });
          $(".sbannerbox li").css({
            borderTop: "none"
          });
          $(this).css({
            borderTop: "3px solid red",
            margin:"-1px 0 0 0"
          });
          $(".slide li").stop().hide();
          $(".slide li").eq(1).stop().show();
        });

        $(".sbannerbox li").eq(2).mouseenter(function () {
          var i = 0;
          $("#dotslider").css({
            "background": "#fff"
          });
          $(".sbannerbox li").css({
            borderTop: "none"
          });
          $(this).css({
            borderTop: "3px solid red",
            margin:"-1px 0 0 0"
          });
          $(".slide li").stop().hide();
          $(".slide li").eq(2).stop().show();
        });

        $(".sbannerbox li").eq(3).mouseenter(function () {
          var i = 0;
          $("#dotslider").css({
            "background": "#fee7c3"
          });
          $(".sbannerbox li").css({
            borderTop: "none"
          });
          $(this).css({
            borderTop: "3px solid red",
            margin:"-1px 0 0 0"
          });
          $(".slide li").stop().hide();
          $(".slide li").eq(3).stop().show();
        });

        $(".sbannerbox li").eq(4).mouseenter(function () {
          var i = 0;
          $("#dotslider").css({
            "background": "#d3b5c5"
          });
          $(".sbannerbox li").css({
            borderTop: "none"
          });
          $(this).css({
            borderTop: "3px solid red",
            margin:"-1px 0 0 0"
          });
          $(".slide li").stop().hide();
          $(".slide li").eq(4).stop().show();
        });

        var ani = setInterval(slide, 3000)

        $(".sbannerbox li").mouseover(function () {
          clearInterval(ani);
        });

        $(".sbannerbox li").mouseout(function () {
          $(this).css({
	borderTop: "3px solid red",
	 margin: "-1px 0 0 0"
          });
          ani = setInterval(slide, 3000);
        });
      })