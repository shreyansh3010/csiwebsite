 

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

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$(document).ready(function () {
  var trigger = $('.menu-trigger'),
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
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      }
    });
  });  
});

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: "#projects_top"
})

var shine = new Shine(document.getElementById('my-shine-object'));

window.addEventListener('mousemove', function(event) {
  shine.light.position.x = event.clientX;
  shine.light.position.y = event.clientY;
  shine.draw();
}, false);

