



	//ouverture nav
	function openNav(){
		document.getElementById('mySidenav').style.width = "250px";
	}
	//fermeture nav
	function closeNav(){
		document.getElementById('mySidenav').style.width = "0";
	}
	//ouverture du portfolio
	function showPortfolio(){
		document.getElementById('portfolio').style.width = "100%",
		document.getElementById('portfolio').style.height = "100%",
		document.getElementById('portfolio').style.visibility = "visible",
		document.getElementById('section2').style.visibility = "hidden";
	}
	//fermeture du portfolio
	function closePortfolio(){
		document.getElementById('portfolio').style.visibility = "hidden",
		document.getElementById('portfolio').style.width = "0",
		document.getElementById('section2').style.visibility = "visible",
		document.getElementById('portfolio').style.height = "0";
	}

	