window.onresize = function(event) {
  reponsiveMenu();
}

$(document).ready(function() {
  reponsiveMenu();
})

$("button.phuc-bnt-menu").click(function() {
  var content = $(this).html();
  //alert(content);

  if (content.includes("fa-angle-right")) {
    $(this).html(content.replace("fa-angle-right", "fa-angle-down"));
  } else if (content.includes("fa-angle-down")) {
    $(this).html(content.replace("fa-angle-down", "fa-angle-right"));
  }
});

function reponsiveMenu() {
  width = $(window).width();
  if (width < 803) {
    $("#myCarousel").css("position", "relative");
    $(".phuc-img-carousel").css("width", "auto");
    $(".phuc-img-carousel").css("height", "90vh");
    //alert($("#myCarousel").css("position"));
    document.getElementById("imgContent2").style.opacity = "1";
    $('#iconContent41, #iconContent42, #iconContent43, #iconContent44, #iconContent45, #iconContent46, #iconContent47, #iconContent48, #iconContent49').css({transform: 'scale(1,1)'});
    document.getElementById("imgContent5").style.opacity = "1";
   	document.getElementById("imgContent5").style.left = "0";
  } else {
    $("#myCarousel").css("position", "absolute");
    $(".phuc-img-carousel").css("width", "100%");
    $(".phuc-img-carousel").css("height", "auto");
    document.getElementById("imgContent2").style.opacity = "0";
  }
}

