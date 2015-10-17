//Header Hamburger animation.
$(document).ready(function() {
  $(".home-wrap header .header-position .mobile-nav-toggle").click(function() {
    $(this).hasClass("is-open") ? ($(this).removeClass("is-open"), $(".mobile-nav").removeClass("is-open")) : ($(this).addClass("is-open"), $(".mobile-nav").addClass("is-open"))
  })
});

//Scroll Parallax function
//tomoo la altura del contenedor .welcome
var pContainerHeight = $('.welcome').height();

$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  // Aplico parallax solo cuando .welcome es visible
  if (wScroll <= pContainerHeight) {
    //Center main title
    $('.site-title').css({
      'transform': 'translate(0px, ' + wScroll / 2.5 + '%)'
    });
  }

    //Show Animate Open Logos
    if (wScroll > $('.what').offset().top - ($(window).height() / 2.3)) {
      $('.what-logos-block img').each(function(i) {
        setTimeout(function() {
          $('.what-logos-block img').eq(i).css('top', '35px');
        //nueva expresion + compleja
      }, (700 *(Math.exp(i * 0.14))) - 700);
    });
    $('.what-logos-block img').css('visibility', 'visible');
  };

});

  //Show Animate Open Logos Viejo
  // if (wScroll > $('.what').offset().top - ($(window).height() / 2.3)) {
  //   $('.what-logos-block img').each(function(i) {
  //     setTimeout(function() {
  //       $('.what-logos-block img').eq(i).css('top', '35px');
  //    }, 300 * (i + 1));;
