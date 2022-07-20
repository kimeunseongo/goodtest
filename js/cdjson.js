$(function() {

$.ajax({

    url: "./json/cd.json",

    dataType: "json",

    success: function (data) {

        if (data.length > 0) {


            for (var i in data) {

                $(".cd_imgbox1").eq(i).append("<img src='img/album" + data[i].url + "'/>");

                $(".cd_textbox1").eq(i).append('<h3>' + data[i].title + '</h3>');

                $(".cd_textbox1").eq(i).append(  '<p>' + data[i].price + '</p>' );

            }

        }

    }

});

});