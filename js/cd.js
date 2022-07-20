/* cd 슬라이드 */

$(function () {
    function prev7() {
        $('.cd_middle ul li:last').prependTo('.cd_middle ul');
        $('.cd_middle ul').css({marginLeft:-365}); 
        $('.cd_middle ul').stop().animate({ marginLeft: 0 }, 800);
    }

    function next7() {
        $('.cd_middle ul').stop().animate({ marginLeft: -365 }, function () {
            $('.cd_middle ul li:first').appendTo('.cd_middle ul');
            $('.cd_middle ul').css({ marginLeft: 0 });
        });
    }

    $('.cdprev').click(function () {
        prev7();
    });

    $('.cdnext').click(function () {
        next7();
    });
});