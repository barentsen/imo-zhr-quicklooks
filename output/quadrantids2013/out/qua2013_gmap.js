
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
			createMarker(map, 36.2305555556, 140.105555556, 'Shigeo Uchiyama', 'red');
createMarker(map, 53.0333333333, 20.75, 'Jaros?aw Dygos', 'red');
createMarker(map, 44.9366666667, 25.4138888889, 'Valentin Grigore', 'red');
createMarker(map, 40.3341666667, 116.193611111, 'weizhou zeng', 'red');
createMarker(map, -35.5063888889, -69.4341666667, 'Andres Risi', 'red');
createMarker(map, 46.5994444444, 125.233333333, 'Fengwu Sun', 'red');
createMarker(map, 32.2819444444, -110.768333333, 'Carl Hergenrother', 'red');
createMarker(map, 35.947777777778, -95.7125, 'William Godley', 'red');
createMarker(map, 40.4108333333, 116.2525, 'Huahui Li', 'red');
createMarker(map, 37.415, 49.5833333333, 'Davood Hemmati', 'red');
createMarker(map, 39.4408333333, 117.244722222, 'Qiang Ma', 'red');
createMarker(map, 37.8841666667, 121.27, 'Constantin Psenitchi', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'Jurgen Rendtel', 'red');
createMarker(map, 34.3338888889, 126.830555556, 'Seokhee Cho', 'red');
createMarker(map, 34, -118.5, 'Greg Jones', 'red');
createMarker(map, 40.3963888889, 117.578333333, 'Weizhou Zeng', 'red');
createMarker(map, 42.5766666667, -121.868055556, 'Wesley Stone', 'red');
createMarker(map, 52.4572222222, 13.375, 'Kai Schultze', 'red');
createMarker(map, 37.415, 49.5833333333, 'Amir Hasanzadeh', 'red');
createMarker(map, 53.5366666667, -112.78, 'Bruce McCurdy', 'red');
	}