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
  } else {
    $("#myCarousel").css("position", "absolute");
    $(".phuc-img-carousel").css("width", "100%");
    $(".phuc-img-carousel").css("height", "auto");
  }
}

