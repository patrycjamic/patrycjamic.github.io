
$( document ).ready(function() {

    $(".menu-mobile").click(function(){
        $(".lista2").slideToggle();
    })

    $( ".icon" ).hover(
        function() {
            $(this).animate({
                margin: "2vh"
            })

        }, function() {
            $( this ).css("margin-bottom", "0");

        }
      );


    $(function(){
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


        }, function(){
            $(this).parent().animate({
                width: "4vw",
            });
            $(".lista").css("display", "none");
            $(".menu").css("border", "none");

            $('.slider').stop().slideDown('slow');

        });
    });
});

