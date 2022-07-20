$(function() {

    $.ajax({

        url: "./json/attention.json",

        dataType: "json",

        success: function (data) {

            if (data.length > 0) {


                for (var i in data) {

                    $(".attimg1").eq(i).append("<img src='img/att" + data[i].url + "'/>");

                    $(".atttext1").eq(i).append('<span>' + data[i].sale + '</span>');

                    $(".atttext1").eq(i).append(  '<h3>' + data[i].price + '</h3>' );

                    $(".atttext1").eq(i).append('<h2>' + data[i].title + '</h2>');

                    $(".atttext1").eq(i).append(  '<p>' + data[i].subtitle + '</p>' );

                    



                }

            }

        }

    });

});
