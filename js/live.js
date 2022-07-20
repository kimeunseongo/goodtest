/* 라이브북 슬라이드 */

$(function () {
    function prev7() {
        $('.live ul li:last').prependTo('.live ul');
        $('.live ul').css({marginLeft:-365}); 
        $('.live ul').stop().animate({ marginLeft: 0 }, 800);
    }

    function next7() {
        $('.live ul').stop().animate({ marginLeft: -365 }, function () {
            $('.live ul li:first').appendTo('.live ul');
            $('.live ul').css({ marginLeft: 0 });
        });
    }

    $('.prev').click(function () {
        prev7();
    });

    $('.next').click(function () {
        next7();
    });
});