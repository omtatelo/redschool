//cambio de color de menu
//cuidar que no haya otro nav o va a valer v

$(window).scroll(function() {

    if ($(window).scrollTop() >= 50) {
        $('nav').css('background', '#383838');
        $('nav').css('box-shadow','0 1px 2px 0 rgba(0,0,0,0.5)');
    } else {
        $('nav').css('background', 'transparent');
        $('nav').css('box-shadow','0 0px 0px 0 rgba(0,0,0,0)');
    }

});