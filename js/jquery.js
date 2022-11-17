jQuery( document ).ready(function() {
    jQuery( ".form-control-1" ).click(function() {
        jQuery('.input-1').css("border","2px solid #22A7F0");
    });
    jQuery( ".form-control-2" ).click(function() {
        jQuery('.input-2').css("border","2px solid #22A7F0");
    });
     
    jQuery( ".flex-bw-img" ).click(function() {
        jQuery('.popup-box-1').toggle();
    });

    // $('.navbar > ul > li a').click(function() {
    //     $(this).next(".accordion").slideDown();
        
    //     return false;
    // });

    $('.navbar > ul > li a').click(function(e){
        e.preventDefault();
        if($(this).next(".accordion").hasClass("d-active")){
            $(this).next('.accordion').removeClass("d-active").slideUp();
            $(this).children(".main-fa").removeClass("fa-angle-up").addClass("fa-angle-down");
        }else{
            $('.accordion').removeClass("d-active").slideUp();
            $(this).children('.main-fa').removeClass("fa-angle-up").addClass("fa-angle-down");
            $(this).next('.accordion').addClass("d-active").slideDown();
            $(this).children(".main-fa").removeClass("fa-angle-down").addClass("fa-angle-up");
        }
    });

    
    

});