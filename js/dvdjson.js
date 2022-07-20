$(function() {

$.ajax({

    url: "./json/dvd.json",

    dataType: "json",

    success: function (data) {

        if (data.length > 0) {


            for (var i in data) {

                $(".dvd_imgbox1").eq(i).append("<img src='img/album" + data[i].url + "'/>");

                $(".dvd_textbox1").eq(i).append('<h3>' + data[i].title + '</h3>');

                $(".dvd_textbox1").eq(i).append(  '<p>' + data[i].price + '</p>' );

            }

        }

    }

});
});