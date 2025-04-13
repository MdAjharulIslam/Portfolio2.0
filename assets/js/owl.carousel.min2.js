$(document).ready(function() {
    try {
        $('.reviews-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            navText: [
                '<i class="fas fa-chevron-left"></i>',
                '<i class="fas fa-chevron-right"></i>'
            ],
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: { items: 1, nav: true },
                768: { items: 2, nav: true },
                992: { items: 3, nav: true }
            }
        });
        
    } catch (error) {
        console.error('Error initializing reviews carousel:', error);
    }
});