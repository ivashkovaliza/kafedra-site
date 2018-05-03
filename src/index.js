import "./styles/styles.scss";

$(function(){
    let count = 0;

    $('.drop-down-menu').hide();

    $('.burger-menu').click(function(){
            count++;
            if (count === 1) {
                $('.drop-down-menu').slideDown();
            } else {
                $('.drop-down-menu').slideUp('fast');
                count = 0;
            }
    });

    window.onresize = function(){
        if(window.innerWidth >= 1025) {
            $('.drop-down-menu').hide();
            count = 0;
        }

    }
});

$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
});





