$(document).ready(function(){$(".home-wrap header .header-position .mobile-nav-toggle").click(function(){$(this).hasClass("is-open")?($(this).removeClass("is-open"),$(".mobile-nav").removeClass("is-open")):($(this).addClass("is-open"),$(".mobile-nav").addClass("is-open"))})});var pContainerHeight=$(".welcome").height();$(window).scroll(function(){var o=$(this).scrollTop();pContainerHeight>=o&&$(".site-title").css({transform:"translate(0px, "+o/2.5+"%)"}),o>$(".what").offset().top-$(window).height()/2.3&&($(".what-logos-block img").each(function(o){setTimeout(function(){$(".what-logos-block img").eq(o).css("top","35px")},700*Math.exp(.14*o)-700)}),$(".what-logos-block img").css("visibility","visible"))});