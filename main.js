
$( document ).ready(function() {


    // $(".nav-left").hover(function(){


    //     $(".nav-left").toggle(function(){
    //         $(".nav-container2").show("slow").css("width", "12vw").css("background-color", "white");


    //         //   $(this).find('.nav-left').animate({
    //         //         bottom: '0%'    
    //         //         }, 'fast' );
    //         //     },function() {
    //         //     $(this).find('.nav-left').animate({
    //         //         bottom: '-100%'
    //         // },'fast');
        
        
    //         });

    //     })

    $(function(){
        $(".nav-left").hover(function(){
        $(this).parent().css("background-color", "white");
        $(this).parent().animate({
            width: "18vw",
            // height: "100vh"
        });

        $(".lista").animate({
            width: "16vw"
        })
        $(".lista").css("display", "block");
        $(".menu").css("border-bottom", "double grey");


        }, function(){
            // change to any color that was previously used.
            $(this).parent().css("width", "4vw");
            $(".lista").css("display", "none");
            $(".menu").css("border", "none");

            // $(".nav-top").css("width", "16vw");
        });
    });


    
        


});

