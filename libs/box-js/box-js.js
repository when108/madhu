
$(document).ready(function(){


////////////////////////////
$(".box1").click(function() {     
$(".box-hidden3, .box-hidden2").slideUp();
   $(".box-hidden1").slideToggle("slow");

});
$(".box2").click(function() {     
$(".box-hidden1, .box-hidden3").slideUp();
   $(".box-hidden2").slideToggle("slow");

});
$(".box3").click(function() {     
$(".box-hidden1, .box-hidden2").slideUp();
   $(".box-hidden3").slideToggle("slow");

});

////////////////////////////////

$(".box4").click(function() {     
$(".box-hidden5, .box-hidden6").slideUp();
   $(".box-hidden4").slideToggle("slow");

});
$(".box5").click(function() {     
$(".box-hidden6, .box-hidden4").slideUp();
   $(".box-hidden5").slideToggle("slow");

});
$(".box6").click(function() {     
$(".box-hidden4, .box-hidden5").slideUp();
   $(".box-hidden6").slideToggle("slow");

});
///////////////////////////////

$(".box7").click(function() {     
$(".box-hidden8, .box-hidden9").slideUp();
   $(".box-hidden7").slideToggle("slow");
});
$(".box8").click(function() {     
$(".box-hidden7, .box-hidden9").slideUp();
   $(".box-hidden8").slideToggle("slow");

});
$(".box9").click(function() {     
$(".box-hidden8, .box-hidden7").slideUp();
   $(".box-hidden9").slideToggle("slow");
});
});
