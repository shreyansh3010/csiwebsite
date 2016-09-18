 

$("#profile_gallery > div:gt(0)").hide();

setInterval(function() { 
  $('#profile_gallery > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#profile_gallery');
},  3000);


    $(".burger-menu").click(function () {
	$(this).toggleClass("menu-on");
	}); 



//smooth scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

//Esc to close the nav
$(document).keyup(function(e) {
if (e.keyCode == 27) {
  if ($('#site-wrapper').hasClass('show-nav')) {
    // Assuming you used the function I made from the demo
    toggleNav();
  }
} 
});

$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
      remove_side_display = $('#sidebar_navigation'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        remove_side_display.css('display','none');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        remove_side_display.css('display','block');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});

