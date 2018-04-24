$(document).ready(function() {
	var tmp = 1;
	var sum = 2;

	/*Tăng content lên 1, nếu lớn hơn 3 quay về (lặp) --ps:quá gắt*/
	function addCt() {						
		++tmp;
		if(tmp > sum) {
			tmp = 1;
		}
	}

	/*(tt)*/ 		
	function subtractCt() {						
		--tmp;
		if(tmp < 1) {
			tmp = sum;
		}		
	}
	$('#pre').on('click', function(){
		// Change to the previous content
		$('#ct' + tmp).stop().fadeOut(1);
		subtractCt();
		$('#ct' + tmp).stop(200).fadeIn(500);
	}); 
	$('#nex').on('click', function(){
		// Change to the next content
		$('#ct' + tmp).stop().fadeOut(1);
		addCt();
		$('#ct' + tmp).stop(200).fadeIn(500);
	}); 		
});	

// ------Auto click------ bug: chặn auto click khi user click
window.onload = function(){
    var button_ct8 = document.getElementById('pre');
    setInterval(function(){
        button_ct8.click();     
    }, 3000); 
};