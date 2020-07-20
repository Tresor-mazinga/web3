/**----- FIRST SLIDER----- */

$('.slider-one')
.not(".slick-initialized")
.slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    prevArrow:".site-slider .slider-btn .prev",
    nextArrow:".site-slider .slider-btn .next",
});
//===== CARD ANIMATION JS===========//
$(document).ready(function () {

    $('.col-lg-3, .col-md-4, .col-lg-4').hover(
        function () {
            $(this).animate({
                marginTop: "-=2%",
            }, 200);
        },
        function () {
            $(this).animate({
                marginTop: "0%"
            }, 200);
        }


    );

});

// NAVBAR TOGGLE BUTTON
$('.navbar-toggler').click(function () {
    $('.navbar-toggler').toggleClass('change')
})

