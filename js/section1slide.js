$(function(){

     function prev(){

        $('.recoslide li:last').prependTo('.recoslide');

        $('.recoslide').css('margin-left',-849);    
        $('.recoslide').stop().animate({marginLeft:0},800);

      }



      function next(){

        $('.recoslide').stop().animate({marginLeft:-849}, function(){

          $('.recoslide li:first').appendTo('.recoslide');

          $('.recoslide').css({marginLeft:0});

        });

      }



      function slide(){

        $('.recoslide').stop().animate({marginLeft:-849}, function(){

          $('.recoslide li:first').appendTo('.recoslide');

          $('.recoslide').css({marginLeft:0});

        });

      }

      setInterval(slide,4000);

      $('.prev').click(function(){
        prev();
      });

      $('.next').click(function(){
        next();
      });

      });