$(function() {

$.ajax({

    url: "./json/ebook.json",

    dataType: "json",

    success: function (data) {

        if (data.length > 0) {


            for (var i in data) {

                $(".ebook_imgbox1").eq(i).append("<img src='img/album" + data[i].url + "'/>");

                $(".ebook_textbox1").eq(i).append('<h3>' + data[i].title + '</h3>');

                $(".ebook_textbox1").eq(i).append(  '<p>' + data[i].price + '</p>' );

            }

        }

    }

});

});