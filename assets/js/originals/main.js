$(document).ready(function() {
  $(".home-wrap header .header-position .mobile-nav-toggle").click(function() {
    $(this).hasClass("is-open") ? ($(this).removeClass("is-open"), $(".mobile-nav").removeClass("is-open")) : ($(this).addClass("is-open"), $(".mobile-nav").addClass("is-open"))
  })
});
