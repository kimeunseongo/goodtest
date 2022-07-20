      $(function(){
        var num = 1;

        function changePic(idx) {
          if(idx){
            if(num == 4) num = 0
            num++;
          } else {
            if (num == 1) num = 5
            num--;
          }

          var imgTag = document.getElementById("sideb")
          imgTag.setAttribute("src", "img/sideslide"+num+".jpg")

        }


        $(".sideprev").click(function(){
          changePic(0)
        })

        $(".sidenext").click(function(){
          changePic(1)
        })

      })