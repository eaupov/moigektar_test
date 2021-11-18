@@include('bootstrap.min.js')
@@include('jquery.min.js')
@@include('owl.carousel.min.js')

$( function() {
	
    if ( $(window).width() < 768 ) {
        startCarousel();
    } else {
        $('.mobile-carousel').addClass('off');
    }

      
    $(window).resize(function() {
        if ( $(window).width() < 768 ) {
            startCarousel();
        } else {
            stopCarousel();
        }
    });

    function startCarousel(){
        $('.mobile-carousel').owlCarousel({
            items: 1,
            margin: 20,
            dots: true,
            touchDrag: true,
            mouseDrag: true,
            responsive:{
                0:{
                    items:1,
                    margin:20
                },
                577:{
                    items:2,
                    margin:20
                },
            }
        });
    };

    function stopCarousel() {
        var owl = $('.mobile-carousel');
        owl.trigger('destroy.owl.carousel');
      }

});