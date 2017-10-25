$(document).ready(function() {
    $('.fade').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button class="b-backlog__nav b-backlog__nav--prev"></button>',
        nextArrow: '<button class="b-backlog__nav b-backlog__nav--next"></button>'
    });
});