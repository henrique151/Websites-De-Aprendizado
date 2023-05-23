$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky")
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // A animção de efeito de barras, de descida

    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    });

    // Quando você click no bloco da animção

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // A animção de digitação
    var typed = new Typed(".typing", {
        strings: ["Protagonista of this story"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Protagonista of this story"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });



    // Roda de pessoas 

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            },

        }
    });
});