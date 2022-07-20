$(function() {

    $.ajax({

        url: "./json/attention2.json",

        dataType: "json",

        success: function (data) {

            if (data.length > 0) {


                for (var i in data) {

                    $(".attimg2").eq(i).append("<img src='img/atten" + data[i].url + "'/>");

                    $(".atttext2").eq(i).append('<span>' + data[i].sale + '</span>');

                    $(".atttext2").eq(i).append(  '<h3>' + data[i].price + '</h3>' );

                    $(".atttext2").eq(i).append('<h2>' + data[i].title + '</h2>');

                    $(".atttext2").eq(i).append(  '<p>' + data[i].subtitle + '</p>' );





                }

            }

        }

    });

});