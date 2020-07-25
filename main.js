
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
            width: "16vh",
            height: "100vh"
        });
        // $(this).show("slow").css("width", "12vw").css("background-color", "white");
        }, function(){
            // change to any color that was previously used.
            $(this).parent().css("width", "4vw");
        });
    });


    
        


});

