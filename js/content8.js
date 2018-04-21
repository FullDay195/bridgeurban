$(document).ready(function() {
	$('#pre').on('click', function(){
		// Change to the previous content
		$('#ct' + tmp).stop().fadeOut(1);
		subtractCt();
		$('#ct' + tmp).stop().fadeIn(1);
	}); 
	$('#nex').on('click', function(){
		// Change to the next content
		$('#ct' + tmp).stop().fadeOut(1);
		addCt();
		$('#ct' + tmp).stop().fadeIn(1);
	}); 

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
});				