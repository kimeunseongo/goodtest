  
/*이책 어때?*/

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"문제집" },
    headers:{Authorization: "KakaoAK bafde8e294da7efaf0aabb40074bed9a"}
  })
    .done(function( msg ) {

        console.log( msg.documents[1].title );
        console.log( msg.documents[1].thumbnail );




        var divs = document.getElementsByTagName('div');
        
        for(var i=0; i<divs.length; i++){

              $(".howimg > div").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
              $(".howtxt > div").eq(i).append("<span>"+msg.documents[i].title+"</span>");
           

        }

    });