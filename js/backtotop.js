window.onscroll = function() {scrollFunction()};
function scrollFunction() {
   	if (document.documentElement.scrollTop > 800) {
   	    document.getElementById("totop").style.display = "block";
   	} else {
   	    document.getElementById("totop").style.display = "none";
   	}
}
function topFunction() {   
    document.documentElement.scrollTop = 0;
}