
$( document ).ready(function() {

    $(".menu-mobile").click(function(){
        $(".lista2").slideToggle();
    })

    $( ".icon" ).hover(
        function() {
            $(this).animate({
                padding: "10px"
            })

        }, function() {
            $(this).animate({
                padding: "0"
            })

        }
      );


    $(function(){
        $(this).unbind('mouseenter')

        $(".nav-left").hover(function(){
        $(this).parent().css("background-color", "white");
        $(this).parent().animate({
            width: "18vw",
        });

        $(".lista").animate({
            width: "16vw"
        })

        $(".lista").css("display", "block");
        $(".menu").css("border-bottom", "double grey");

        $('.slider').stop().slideUp('slow');
        $(this).unbind('mouseleave')




        }, function(){

            $(this).parent().animate({
                width: "4vw",
            });
            $(".lista").css("display", "none");
            $(".menu").css("border", "none");

            $('.slider').stop().slideDown('slow');


        });


    });



            $(".link").click(function(){
            $(".nav-left").parent().animate({
                width: "4vw",
            });
            $(".lista").css("display", "none");
            $(".menu").css("border", "none");

            $('.slider').stop().slideDown('slow');
        })
});

