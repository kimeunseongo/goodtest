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
              "background": "#ffffff"
            })
	$(".sbannerbox li").eq(i-1).css({
              color:"black",
              borderTop:"none"
            });

            $(".sbannerbox li").eq(i).css({
              borderTop:"3px solid red",
	 margin: "-1px 0 0 0"
            });

          } else if (i == 2) {
            $("#dotslider").css({
              "background": "#e7d6ce"
            })
  $(".sbannerbox li").eq(i-1).css({
              color:"black",
              borderTop:"none"
            });

            $(".sbannerbox li").eq(i).css({
              borderTop:"3px solid red",
   margin: "-1px 0 0 0"
            });
          } else if (i == 3) {
            $("#dotslider").css({
              "background": "#e0d1fc"
            })
  $(".sbannerbox li").eq(i-1).css({
              color:"black",
              borderTop:"none",
   margin: "-1px 0 0 0"
            });

            $(".sbannerbox li").eq(i).css({
              borderTop:"3px solid red",
   margin: "-1px 0 0 0"
            });
          } else if (i == 4) {
            $("#dotslider").css({
              "background": "#ffffff"
            })
  $(".sbannerbox li").eq(i-1).css({
              color:"black",
              borderTop:"none",
   margin: "-1px 0 0 0"
            });

            $(".sbannerbox li").eq(i).css({
              borderTop:"3px solid red",
   margin: "-1px 0 0 0"
            });
          } else {
            $("#dotslider").css({
              "background": "#74e2dc"
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
            "background": "#74e2dc"
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
            "background": "#ffffff"
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
            "background": "#e7d6ce"
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
            "background": "#e0d1fc"
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
            "background": "#ffffff"
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