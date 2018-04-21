window.onscroll = function() {scrollFunction()};
function scrollFunction() {
   	if (document.documentElement.scrollTop > 1000) {
   	    document.getElementById("imgContent2").style.opacity = "1";   	     
   	}
   	if (document.documentElement.scrollTop > 2200) {
   		document.getElementById("imgContent5").style.opacity = "1";
   		document.getElementById("imgContent5").style.left = "0";
   	}
   	if (document.documentElement.scrollTop > 3500) {
   		document.getElementById("imgContent7").style.opacity = "1";
   		document.getElementById("imgContent7").style.right = "0";
   	}
}