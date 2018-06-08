window.onload=function(){
	
	var div = document.createElement('div');
	
	div.style.borderTop = '3px solid #db0033';
	div.style.borderBottom = '1px solid #cccccc';
	div.style.minHeight = '100px';
	div.style.width = '100%';
	div.style.background = 'rgba(255, 255, 255, 0.9)';
	div.style.color = '#000';
	div.style.position = 'fixed';
	div.style.top = "0";
	div.style.padding = "20px";
	div.style.display = "block";
	div.style.zIndex = "999";

	div.setAttribute('class', 'myclass');
	document.body.appendChild(div);

	var page = [document.body];
	var storedText;
	var woord1 = "locatie"; // facebook // 
	var woord2 = "apparaatidentificaties"; //apparaatinfo facebook
	var woord3 = "advertenties"; //addclicks //facebook // tweakers
	var woord4 = "derden"; //tweakers //facebook
	var woord5 = "SessionTime"; //tweakers

	var websitePrivacy = window.location.href;
	console.log(websitePrivacy);
	if (websitePrivacy == 'https://www.facebook.com/') {
		console.log("FACEBOOK.COM LOCATION")
		fetch('https://www.facebook.com/policies/cookies/')
		.then(function(response) {
			response.text().then(function(text) {
				storedText = text;
				console.log("FACEBOOK.COM FETCH GELUKT")
				done();
			});
		});
	}
	else if (websitePrivacy == 'https://tweakers.net/') {
		console.log("TWEAKERS.Net LOCATION")
		fetch('https://tweakers.net/info/algemene-voorwaarden/cookies/')
		.then(function(response) {
			response.text().then(function(text) {
				storedText = text;
				done();
			});
		});
	}
	else {
		console.log(websitePrivacy);
		div.innerHTML += "Ga naar de beginpagina van deze website om privacywijzer te activeren.";
		div.innerHTML += "<img id='logo-privacy' src=\"http://i334115.iris.fhict.nl/icon/logo.svg\" height=\"200px\">";
	}

	function done() {
		page = [document.body];

		var found1 = storedText.match(woord1);
		var found2 = storedText.match(woord2);
		var found3 = storedText.match(woord3);
		var found4 = storedText.match(woord4);

		if (found1 !== null) {
			console.log("FOUND1");
			div.innerHTML+="<li id='icons'><img src=\"http://i334115.iris.fhict.nl/icon/locatie.svg\" height=\"100px\"></li>";      	
		}
		if (found2 !== null) {
			console.log("FOUND2");
			div.innerHTML+="<li id='icons'><img src=\"http://i334115.iris.fhict.nl/icon/apparaat.svg\" height=\"100px\"></li>";
		}
		if (found3 !== null) {
			console.log("FOUND3");
			div.innerHTML+="<li id='icons'><img class='icon' src=\"http://i334115.iris.fhict.nl/icon/addclicks.svg\" height=\"100px\"></li>";
		}
		if (found4 !== null) {
			console.log("FOUND4");
			div.innerHTML+="<li id='icons'><img src=\"http://i334115.iris.fhict.nl/icon/dataderde.svg\" height=\"100px\"></li>";
		}
		if (found4 !== null) {
			console.log("FOUND4");
			div.innerHTML+="<li id='icons'><img src=\"http://i334115.iris.fhict.nl/icon/tijdendatum.svg\" height=\"100px\"></li>";
		}
		else if (found1 == null && found2 == null && found3 == null && found4 == null) {
			div.innerHTML = "Deze website maakt geen gebruik van je gegevens.";
		};

		div.innerHTML += "<img id='logo-privacy' src=\"http://i334115.iris.fhict.nl/icon/logo.svg\" height=\"200px\">";
		div.innerHTML += "<br><p id='newLine'><button id='hide'>Verbergen</button></p>";



  	// hide localstorage script
  	$(document).ready(function () {
  		console.log('Functie is klaar');
  		$('#hide').click(function () {
  			console.log('geklikt');
  			$(this).siblings().toggle();
  			localStorage.setItem('display', $(this).siblings().is(':visible'));

  			$('#hide').hide();
  			$('.myclass').hide();
  		});

  		var block = localStorage.getItem('display');

  		if (block == 'true') {
  			$('.myclass').show() && $('#hide').hide();
  			console.log('hierhierhier');
  		}
  		if (block == 'false') {
  			$('.myclass').hide() && $('#hide').hide();
  			console.log('wegwegweg');
  		}

  	});

  	// hide button
  	var button = document.getElementById("hide");
  	document.getElementById("newLine").style.clear = 'left';
  	document.getElementById("newLine").style.margin = '0px';
  	button.style.margin = '0px 55px 0px 0px';
  	button.style.padding = '5px 12px 5px 12px';
  	button.style.background = '#db0033';
  	button.style.color = '#fff';
  	button.style.cursor = 'pointer';
  	button.style.border = 'none';
  	button.style.cssFloat = 'right';
  	
  	// logo
  	var logo = document.getElementById("logo-privacy");
  	logo.style.cssFloat = 'right';
  	logo.style.height = '50px';
  	logo.style.margin = '5px 50px 0px 0px';

  	$(".icon").hover(function(e){
  		$(this).attr('src', 'https://i334115.iris.fhict.nl/icon/addclicks-2.svg');
  		e.preventDefault();
  	}, function(){
  		$(this).attr('src', 'https://i334115.iris.fhict.nl/icon/addclicks.svg');
  	});


  	var plus = 'https://i334115.iris.fhict.nl/icon/addclicks.svg';
  	var minus = 'https://i334115.iris.fhict.nl/icon/addclicks-2.svg';

  	$('.icon').click(function() {
  		$(".icon").hover(function(e){
  			if ($('.icon').attr('src') === plus) {
  				$('.icon').attr('src', minus);
  			} else {
  				$('.icon').attr('src', plus)
  			}
  		});	
  	})

  	$(document).ready(function(){
  		var icons = document.querySelectorAll("#icons");
  		var i = icons.length;
  		var x = icons.length;
  		while (i--) {
  			icons[i].setAttribute("style", "list-style-type:none; float: left; padding: 0px; cursor: pointer");
  		}
  	});

	} // function done
 } //while onload line #1




