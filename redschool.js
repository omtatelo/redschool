//cambio de color de menu
//cuidar que no haya otro nav o va a valer v

$(window).scroll(function() {

    if ($(window).scrollTop() >= 1) {
        $('nav').css('background', '#383838');
        $('nav').css('box-shadow','0 1px 2px 0 rgba(0,0,0,0.5)');
    } else {
        $('nav').css('background', 'transparent');
        $('nav').css('box-shadow','0 0px 0px 0 rgba(0,0,0,0)');
    }

});

//slick
$('.responsive').slick({
    adaptiveHeight: false,
    slidesToShow: 3,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});