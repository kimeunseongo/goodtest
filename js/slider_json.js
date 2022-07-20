$(function() {

    $.ajax({

        url: "./json/slider.json",

        dataType: "json",

        success: function (data) {

            if (data.length > 0) {


                for (var i in data) {

                    $(".recosec>.rec_imgbox").eq(i).append("<img src='img/sec1_book" + data[i].url + "'/>");

                    $(".recosec_mini>.recosecbox").eq(i).append('<span>' + data[i].star + '</span>');

                    $(".recosec_mini>.recosecbox").eq(i).append(  '<p>' + data[i].number + '</p>' );

                    $(".recosec_mini>.recosecbox").eq(i).append('<h2>' + data[i].title + '</h2>');

                    $(".recosec_mini>.recosecbox").eq(i).append(  '<h4>' + data[i].store + '</h3>' );

                    $(".recosec_mini>.recosecbox").eq(i).append(  '<h5>' + data[i].line + '</h5>' );

                   
                    

                    



                }

            }

        }

    });

});
