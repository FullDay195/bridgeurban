// -------Smooth Fixed menu
$(function() {
  $(".search_button").click(function() {  
    $(".sticky").addClass("stickyUpdated");     
  });

  $(".fa-times").click(function() {  
    $(".sticky").removeClass("stickyUpdated"); 
    $(".sticky").addClass("stickyUpdatedSmooth");    
  });
});

$(window).scroll(function() {
  width = $(window).width();
  if (width >= 803) {
    // ---------Parralax Image
    var x = $(this).scrollTop();
    $('.carousel').css({"transform":"translateY(+" + x * 0.4 + "px)"});      
    $('#wrap_title').css({"transform":"translate(-50%, +" + x * 0.4 + "px)"});  
    $('.content3').css('background-position', '50%' + parseInt(-x * 0.4 + 650) + 'px');	
    $('.content6').css('background-position', '50%' + parseInt(-x * 0.4 + 1350) + 'px');
    $('.content9').css('background-position', '50%' + parseInt(-x * 0.4 + 1800) + 'px');    
    /*content4*/
    if (x > 2000) {
      $('#iconContent41, #iconContent42, #iconContent43, #iconContent44, #iconContent45, #iconContent46, #iconContent47, #iconContent48, #iconContent49').css({transform: 'scale(1,1)'});
    }
    // Fixed menu
    if (x > 1000) {
      $('.wrap-menu').addClass('sticky');
      $('#wrap_search_top').addClass('sticky_search');
      $('#container_menu').addClass('sticky_1');
      $('.logo1').addClass('sticky1');
      $('.logo2').addClass('sticky1_1');
      $('.button').addClass('sticky2');
      $('.fa-search').addClass('sticky2_2');
      $('.fa-bars').addClass('sticky2_2');
      $('.dropdown').addClass('sticky3');
      $('.fc').addClass('sticky3_1');
      $('.carousel').addClass('sticky_carousel');    
    } else {
      $('.wrap-menu').removeClass('sticky');
      $('.logo1').removeClass('sticky1');
      $('.logo2').removeClass('sticky1_1');
      $('.button').removeClass('sticky2');
      $('.fa-search').removeClass('sticky2_2');
      $('.fa-bars').removeClass('sticky2_2');
      $('.dropdown').removeClass('sticky3');
      $('#container_menu').removeClass('sticky_1');
      $('.fc').removeClass('sticky3_1');
      $('.carousel').removeClass('sticky_carousel');
      $('#wrap_search_top').removeClass('sticky_search');
    }

    $('#wrap_title_tmp, #wrap_title_tmp2, #wrap_title_tmp3, #wrap_title_tmp4, #wrap_title_tmp5').css("opacity", 1 - $(window).scrollTop() / 500);	
  }
});