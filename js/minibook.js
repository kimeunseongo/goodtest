$(function() {
            $("#slideradv").mouseenter(function() {
                if ($("#slideradv2").css("display") == "none") {
                    $("#slideradv2").animate({
                        height: 'toggle',
                        width: 'toggle'
                    })
                }
            })

            $(".advbtn1").click(function() {
                $("#slideradv2").fadeOut();
            })
            $(".advbtn2").click(function() {
                $("#slideradv2").fadeOut();
            })
        })