
$( document ).ready(function() {


    $(".nav-left").hover(function(){
        
        // $(".nav-container2").show("slow").css("width", "12vw").css("background-color", "white");


      $(this).find('.nav-left').animate({
            bottom: '0%'    
            }, 'fast' );
        },function() {
        $(this).find('.nav-left').animate({
            bottom: '-100%'
    },'fast');


    });

});

