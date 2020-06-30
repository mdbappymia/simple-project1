$(document).ready(function() {
    // PRE LOADER
    $(window).load(function() {
        $(".preloader").delay(500).slideUp("slow"); // set duration in brackets
    });

    $(".image-link").magnificPopup({ type: "image" });

    $(".test-popup-link").magnificPopup({
        type: "image",
        // other options
    });
    $(".owl-carousel").owlCarousel({
        items: 4,
        margin: 20,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        responsiveClass: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
                loop: false,
            },
        },
    });
});