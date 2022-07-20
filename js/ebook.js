/* ebook 버튼 */

$(function () {
    function prev5(){
        $('.ebook_middle ul li:last').prependTo('.ebook_middle ul');
    }

    function next5(){
        $('.ebook_middle ul li:first').appendTo('.ebook_middle ul');
    }

    $('.ebookprev').click(function(){
        prev5();
    });

    $('.ebooknext').click(function(){
        next5();
    });
});
