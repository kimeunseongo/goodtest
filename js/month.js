/* 주목! 이달의책 버튼 */

$(function () {
    function prev4(){
        $('.attwrap > ul > li:last').prependTo('.attwrap > ul');
        $('.attwrap > ul').css({marginLeft:-500}); 
        $('.attwrap > ul').stop().animate({marginLeft:0},800);
    }

    function next4(){
        $('.attwrap > ul').stop().animate({marginLeft:-500}, function(){
            $('.attwrap  > ul > li:first').appendTo('.attwrap > ul');
            $('.attwrap > ul').css({marginLeft:0});
        });
    }

    function slide4(){
        $('.attwrap > ul').stop().animate({marginLeft:-500}, function(){
            $('.attwrap > ul li:first').appendTo('.attwrap > ul');
            $('.attwrap > ul').css({marginLeft:0});
        });
    }

    setInterval(slide4, 9000);

    $('.prev5').click(function(){
        prev4();
    });

    $('.next5').click(function(){
        next4();
    });
});