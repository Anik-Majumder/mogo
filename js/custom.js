$(function(){
//  counter part js
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

//  feedback slider

$('.feedback-item-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true,
    nextArrow:'.right',
    prevArrow:'.left',
});

//  team slider

$('.team-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
});

});