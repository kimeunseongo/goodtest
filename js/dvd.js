/* dvd 슬라이드 */

$(function () {
    function prev7() {
        $('.dvd_middle ul li:last').prependTo('.dvd_middle ul');
        $('.dvd_middle ul').css({marginLeft:-365}); 
        $('.dvd_middle ul').stop().animate({ marginLeft: 0 }, 800);
    }

    function next7() {
        $('.dvd_middle ul').stop().animate({ marginLeft: -365 }, function () {
            $('.dvd_middle ul li:first').appendTo('.dvd_middle ul');
            $('.dvd_middle ul').css({ marginLeft: 0 });
        });
    }

    $('.dvdprev').click(function () {
        prev7();
    });

    $('.dvdnext').click(function () {
        next7();
    });
});