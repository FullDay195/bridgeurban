<script>
	function hide1Element() {
		document.getElementById("wrap_search_top").style.top = "-50px";
		document.getElementById("container_menu").style.margin = "0 45px 0 45px";
		document.getElementById("myCarousel").style.top = "0px";
	}	

	function display1Element() {
			document.getElementById("wrap_search_top").style.top = "0px";
			document.getElementById("container_menu").style.margin = "50px 45px 0 45px";
			document.getElementById("myCarousel").style.top = "50px";
	}

	function display2Element() {
		document.getElementById("wrap_popup_menu").style.display = "block";
	}

	function hide2Element() {
		document.getElementById("wrap_popup_menu").style.display = "none";
	}
</script>