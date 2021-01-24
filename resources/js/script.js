/* Scroll on buttons */

$('.js--scroll-to-usluge').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-usluge').offset().top}, 1000);
});

$('.js--scroll-to-mail').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-mail').offset().top}, 1000);
});

