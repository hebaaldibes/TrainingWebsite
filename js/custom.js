$(document).ready(function(){
  $("#advantage1").mouseenter(function(){
    $(this).css({
    	"color":"#fff",
    	"background-color":"#111240",
    	"font-weight": "bold"
    });
    $("#icon1").css({"background-color":"#fff"});
     $("#icon1").animate({'border-radius': '5px'}, "slow");

  });
    $("#advantage1").mouseleave(function(){
         $(this).css({
    	"color":"#111240",
    	"background-color":"#fff",
    	"font-weight": "normal"
    });
    $("#icon1").css({"background-color":"#DCDCDE"});
     $("#icon1").animate({'border-radius': '100%'}, "slow");
        });
     $("#advantage2").mouseenter(function(){
    $(this).css({
    	"color":"#fff",
    	"background-color":"#111240",
    	"font-weight": "bold"
    });
    $("#icon2").css({"background-color":"#fff"});
     $("#icon2").animate({'border-radius': '5px'}, "slow");

  });
    $("#advantage2").mouseleave(function(){
         $(this).css({
    	"color":"#111240",
    	"background-color":"#fff",
    	"font-weight": "normal"
    });
    $("#icon2").css({"background-color":"#DCDCDE"});
     $("#icon2").animate({'border-radius': '100%'}, "slow");
            });
     $("#advantage3").mouseenter(function(){
    $(this).css({
    	"color":"#fff",
    	"background-color":"#111240",
    	"font-weight": "bold"
    });
    $("#icon3").css({"background-color":"#fff"});
     $("#icon3").animate({'border-radius': '5px'}, "slow");

  });
    $("#advantage3").mouseleave(function(){
         $(this).css({
    	"color":"#111240",
    	"background-color":"#fff",
    	"font-weight": "normal"
    });
    $("#icon3").css({"background-color":"#DCDCDE"});
     $("#icon3").animate({'border-radius': '100%'}, "slow");
            });

        $(".open-button").click(function(){
          $("#myForm").show();
        });
        $(".cancel").click(function(){
          $("#myForm").hide();
        });
});
$(function(){
  $('.slider').glide({
    autoplay: 3500,
    hoverpause: true, // set to false for nonstop rotate
    arrowRightText: '&rarr;',
    arrowLeftText: '&larr;'
  });
    $( function() {
    $( "#tabs" ).tabs();
  });
});

