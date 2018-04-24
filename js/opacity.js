window.onscroll = function() {scrollFunction()};    /*For Only Id*/
// window.addEventListener("scroll", scrollFunction);     /*For Class + Id*/

function scrollFunction() {
    if (document.documentElement.scrollTop > 700) {   
      document.getElementById("totop").style.display = "block";
    } else {
      document.getElementById("totop").style.display = "none";
    }   

   	if (document.documentElement.scrollTop > 1000) { 
   	  document.getElementById("imgContent2").style.opacity = "1";   	     
   	}   

    if (document.documentElement.scrollTop > 2100) {                           
    }
    /*  Javascript   */
    // if (document.documentElement.scrollTop > 1900) {      
    //   var array = document.getElementsByClassName("iconContent4");
      // console.log(array)      
    //   for (var i = 0; i < array.length; i++) {     
    //     var x = array[i].style.opacity;    
    //     if(x = 1.0) {
    //       x = x + 0.1;          
    //     } 
    //   }     
    // }
   

   	if (document.documentElement.scrollTop > 2200) {
   		document.getElementById("imgContent5").style.opacity = "1";
   		document.getElementById("imgContent5").style.left = "0";
   	}

   	if (document.documentElement.scrollTop > 3500) {
   		document.getElementById("imgContent7").style.opacity = "1";
   		document.getElementById("imgContent7").style.right = "0";
   	}
}
 /*-------scrollToTop*/
var timeOut;
function scrollToTop() {
  if (document.documentElement.scrollTop != 0){
    window.scrollBy(0,-50);
    timeOut=setTimeout('scrollToTop()',20);
  }
  else clearTimeout(timeOut);
}