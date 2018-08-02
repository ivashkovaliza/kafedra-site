import "./styles/styles.scss";

$(function(){
  $('.burger-menu').click(function(){
    $('.drop-down-menu').slideToggle();
  });

  window.onresize = function(){
    if(window.innerWidth >= 1025) {
      $('.drop-down-menu').hide();
    }
  }
});

$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  arrows: false
});





