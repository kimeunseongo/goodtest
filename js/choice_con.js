$(function() {

$.ajax({

    url: "./json/choice.json",

    dataType: "json",

    success: function (data) {

        if (data.length > 0) {


            for (var i in data) {

                $(".choice_bottom>ul>.contents_btn").eq(i).append("<img src='img/choicemain" + data[i].url + "'/>");

               

            }

        }

    }

});

});