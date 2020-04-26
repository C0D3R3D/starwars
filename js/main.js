$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        navClass: ['slider__nav--left', 'slider__nav--right'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
  });