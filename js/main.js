$(document).ready(function() {

/////-------box-header--------//////


$(".box1 ").hover(function() {    
   $(".box-header-2 ").animate({
    height: "toggle"
  });

});
$(".box2").hover(function() {    
   $(".box-header-4").animate({
    height: "toggle"
  });

});
$(".box3").hover(function() {    
   $(".box-header-6").animate({
    height: "toggle"
  });

});
$(".box4 ").hover(function() {    
   $(".box-header-8 ").animate({
    height: "toggle"
  });

});
$(".box5").hover(function() {    
   $(".box-header-10 ").animate({
    height: "toggle"
  });

});
$(".box6").hover(function() {    
   $(".box-header-12 ").animate({
    height: "toggle"
  });

});
$(".box7").hover(function() {    
   $(".box-header-14 ").animate({
    height: "toggle"
  });

});
$(".box8").hover(function() {    
   $(".box-header-16 ").animate({
    height: "toggle"
  });

});
$(".box9").hover(function() {    
   $(".box-header-18 ").animate({
    height: "toggle"
  });

});


///////-------end--------//////////


//////-------filterizd-gallery--/////////
var filterizd = $('.filtr-container').filterizr({
   //options object
});
///////-------end--------//////////


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    items: 5,
    autoplay: true,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

////////animated///////

    

});
