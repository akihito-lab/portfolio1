$(function() {
  var $win = $(window),
      fvHeight = $('.fv').outerHeight();

  if ( $win.width() < 769 ) {
      $('.burger-btn, .nav-item-link').on('click', function() {
      $('.header-nav').fadeToggle(300);
      $('.burger-ber').toggleClass('cross');
      $('body').toggleClass('noscroll');
     });
  }

  $win.on('load scroll', function() {
    if ($win.width() > 768) {
      if ($(this).scrollTop() > fvHeight) {
        $('.header').addClass('fixed');
      } else {
        $('.header').removeClass('fixed');
      }
    }
  });

  if ($win.width() > 768) {
   $('.nav-item-link, .site-title').click(function() {
     var id = $(this).attr('href');
     var position = $(id).offset().top;
     $('html, body').animate({
       scrollTop: position
     }, 500);
   });
  }

});

$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,
  cssEase: 'linear',
  fade: true,
  dots: false,
  arrows: false,
  pauseOnFocus: false,
  pauseOnHover: false,
});
