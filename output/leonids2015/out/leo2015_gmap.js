
			// Create a marker
			function createMarker(map, lat, lon, title, color) {
				    var image = 'http://labs.google.com/ridefinder/images/mm_20_'+color+'.png';
				    var myLatLng = new google.maps.LatLng(lat, lon);
				    var myMarker = new google.maps.Marker({
						    position: myLatLng,
						    map: map,
						    icon: image,
						    title: title
				    });
			}		
		
			// Initialize map
			function initialize() {
				// Create the gmap
				  var myLatlng = new google.maps.LatLng(25,5);
				  var myOptions = {
				    zoom: 2,
				    center: myLatlng,
				    mapTypeId: google.maps.MapTypeId.ROADMAP
				  }
				  var map = new google.maps.Map(document.getElementById('map'), myOptions);
			createMarker(map, 18.845, 77.3219444444, 'ANUP PATIL', 'red');
createMarker(map, 19.845, 77.3219444444, 'SHRINIVAS AUNDHKAR', 'red');
createMarker(map, 30.2766666667, -103.596111111, 'Terrence Ross', 'red');
createMarker(map, 19.2822222222, 77.51, 'ASMITA KANADE', 'red');
createMarker(map, 18.845, 77.3219444444, 'SWATI KENDRE', 'red');
createMarker(map, 18.845, 77.3219444444, 'HARSHPRIYA PANDIT', 'red');
createMarker(map, 18.845, 77.3219444444, 'PRAGATI SALPE', 'red');
createMarker(map, 19.2822222222, 77.51, 'SHRINIVAS  AUNDHKAR', 'red');
createMarker(map, 51.29, 12.36, 'Roland Winkler', 'red');
createMarker(map, 19.256666666667, 73.299166666667, 'MAYURESH DESAI', 'red');
createMarker(map, 19.2822222222, 77.51, 'SAJANA RATHOD', 'red');
createMarker(map, 18.845, 77.3219444444, 'SWATI MALODE', 'red');
createMarker(map, 19.2822222222, 77.51, 'JAYANT ANKAMWAR', 'red');
createMarker(map, 19.2822222222, 77.51, 'PRAGATI  SALPE', 'red');
createMarker(map, 55.16, -1.69666666667, 'Alastair McBeath', 'red');
createMarker(map, 18.5927777778, 73.5152777778, 'Spandan Waghmare', 'red');
createMarker(map, 18.6, 73.5, 'SNEHA KULKARNI', 'red');
createMarker(map, 19.2822222222, 77.51, 'ROHINI JADHAV', 'red');
createMarker(map, 18.6, 73.5, 'YASHODHAN PANSE', 'red');
createMarker(map, 19.2822222222, 77.51, 'ANUP PATIL', 'red');
createMarker(map, 18.845, 77.3219444444, 'ASMITA KANADE', 'red');
createMarker(map, 22.25, 73.3333333333, 'Bhargav Joshi', 'red');
createMarker(map, 19.2822222222, 77.51, 'SWATI KENDRE', 'red');
createMarker(map, 18.845, 77.3219444444, 'RAMANI SANAP', 'red');
createMarker(map, 19.2822222222, 77.51, 'NILESH DADHALE', 'red');
createMarker(map, 47.7169444444, 37.5572222222, 'Alexandr Maidik', 'red');
createMarker(map, 18.3219444444, 77.3219444444, 'ROHINI JADHAV', 'red');
createMarker(map, 18.6, 73.5, 'YOGINI SOMAN', 'red');
createMarker(map, 52.3333333333, 5.66666666667, 'Koen Miskotte', 'red');
createMarker(map, 18.845, 77.3219444444, 'SAJANA RATHOD', 'red');
	}