/* 문학 */

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"문학" },
    headers:{Authorization: "KakaoAK bafde8e294da7efaf0aabb40074bed9a"}
  })
    .done(function( msg ) {

        console.log( msg.documents[1].title );
        console.log( msg.documents[1].thumbnail );




        var divs = document.getElementsByTagName('div');
        
        for(var i=0; i<divs.length; i++){

              $("#sec4box1 > .recmini > .imgbox1").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
              $("#sec4box1 > .recmini > .textbox1").eq(i).append("<h4>"+msg.documents[i].title+"</h4>");
              $("#sec4box1 > .recmini > .textbox1").eq(i).append("<h5>"+msg.documents[i].price+"원</h5>");

        }

    });

    /* 유아/아동 */

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"아동" },
    headers:{Authorization: "KakaoAK bafde8e294da7efaf0aabb40074bed9a"}
  })
    .done(function( msg ) {

        console.log( msg.documents[1].title );
        console.log( msg.documents[1].thumbnail );




        var divs = document.getElementsByTagName('div');
        
        for(var i=0; i<divs.length; i++){

              $("#sec4box2 > .recmini > .imgbox1").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
              $("#sec4box2 > .recmini > .textbox1").eq(i).append("<h4>"+msg.documents[i].title+"</h4>");
              $("#sec4box2 > .recmini > .textbox1").eq(i).append("<h5>"+msg.documents[i].price+"원</h5>");

        }

    });



    /* 경제/실용 */

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"경제" },
    headers:{Authorization: "KakaoAK bafde8e294da7efaf0aabb40074bed9a"}
  })
    .done(function( msg ) {

        console.log( msg.documents[1].title );
        console.log( msg.documents[1].thumbnail );




        var divs = document.getElementsByTagName('div');
        
        for(var i=0; i<divs.length; i++){

              $("#sec4box3 > .recmini > .imgbox1").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
              $("#sec4box3 > .recmini > .textbox1").eq(i).append("<h4>"+msg.documents[i].title+"</h4>");
              $("#sec4box3 > .recmini > .textbox1").eq(i).append("<h5>"+msg.documents[i].price+"원</h5>");

        }

    });



        /* 학습 */

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"학습" },
    headers:{Authorization: "KakaoAK bafde8e294da7efaf0aabb40074bed9a"}
  })
    .done(function( msg ) {

        console.log( msg.documents[1].title );
        console.log( msg.documents[1].thumbnail );




        var divs = document.getElementsByTagName('div');
        
        for(var i=0; i<divs.length; i++){

              $("#sec4box4 > .recmini > .imgbox1").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
              $("#sec4box4 > .recmini > .textbox1").eq(i).append("<h4>"+msg.documents[i].title+"</h4>");
              $("#sec4box4 > .recmini > .textbox1").eq(i).append("<h5>"+msg.documents[i].price+"원</h5>");

        }

    });


         
        /* 외국도서 */

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"외국" },
    headers:{Authorization: "KakaoAK bafde8e294da7efaf0aabb40074bed9a"}
  })
    .done(function( msg ) {

        console.log( msg.documents[1].title );
        console.log( msg.documents[1].thumbnail );




        var divs = document.getElementsByTagName('div');
        
        for(var i=0; i<divs.length; i++){

              $("#sec4box5 > .recmini > .imgbox1").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
              $("#sec4box5 > .recmini > .textbox1").eq(i).append("<h4>"+msg.documents[i].title+"</h4>");
              $("#sec4box5 > .recmini > .textbox1").eq(i).append("<h5>"+msg.documents[i].price+"원</h5>");

        }

    });



        /* eBook */

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"ebook" },
    headers:{Authorization: "KakaoAK bafde8e294da7efaf0aabb40074bed9a"}
  })
    .done(function( msg ) {

        console.log( msg.documents[1].title );
        console.log( msg.documents[1].thumbnail );




        var divs = document.getElementsByTagName('div');
        
        for(var i=0; i<divs.length; i++){

              $("#sec4box6 > .recmini > .imgbox1").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
              $("#sec4box6 > .recmini > .textbox1").eq(i).append("<h4>"+msg.documents[i].title+"</h4>");
              $("#sec4box6 > .recmini > .textbox1").eq(i).append("<h5>"+msg.documents[i].price+"원</h5>");

        }

    });



        /* CD/DVD */

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"cd" },
    headers:{Authorization: "KakaoAK bafde8e294da7efaf0aabb40074bed9a"}
  })
    .done(function( msg ) {

        console.log( msg.documents[1].title );
        console.log( msg.documents[1].thumbnail );




        var divs = document.getElementsByTagName('div');
        
        for(var i=0; i<divs.length; i++){

              $("#sec4box7 > .recmini > .imgbox1").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
              $("#sec4box7 > .recmini > .textbox1").eq(i).append("<h4>"+msg.documents[i].title+"</h4>");
              $("#sec4box7 > .recmini > .textbox1").eq(i).append("<h5>"+msg.documents[i].price+"원</h5>");

        }

    });


