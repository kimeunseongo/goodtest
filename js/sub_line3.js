$(function(){

        $.get("./sub_txt/txt1.txt", function(data) {

          $("#sub_line3").html(data);

        })     



     });
