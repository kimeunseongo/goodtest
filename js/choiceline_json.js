$(function() {

    $.ajax({

        url: "./json/choiceline.json",

        dataType: "json",

        success: function (data) {

            if (data.length > 0) {


                for (var i in data) {

                    $(".choice_contents > .main_1 > .main_ccoment").eq(i).append( '<p>' + data[i].sale + '</p><h3>' + data[i].price + '</h3><h4>' + data[i].title + '</h4><h5>' + data[i].subtitle + '</h5>' );

                    // $(".choice_contents>.main_1>.main_ccoment").eq(i).append('<h4>' + data[i].title + '</h4>');

                    // $(".choice_contents>.main_1>.main_ccoment").eq(i).append(  '<h5>' + data[i].subtitle + '</h5>' );

                    //    $(".choice_contents>.main_1>.main_ccoment").eq(i).append('<p>' + data[i].sale + '</p>');



                }

            }

        }

    });

});
