		
$(window).scroll(function() {
    var x = $(this).scrollTop();
  	// $('.item').css({"transform":"translateY(-" + x * 0.2 + "px)"});      /*  Hở dưới ----kéo all lên  */     	
    $('.content3').css('background-position', '50%' + parseInt(-x * 0.4 + 650) + 'px');
    $('.content6').css('background-position', '50%' + parseInt(-x * 0.4 + 1350) + 'px');
    $('.content9').css('background-position', '50%' + parseInt(-x * 0.4 + 1800) + 'px');    /* waiting footer */
});