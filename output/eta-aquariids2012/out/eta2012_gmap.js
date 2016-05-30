
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
			createMarker(map, 46.3969444444, 16.2688888889, 'Mitja Govedi?', 'red');
createMarker(map, 52.165, 22.2713888889, 'Maciej Myszkiewicz', 'red');
createMarker(map, 50.035, 15.7258333333, 'Vilem Heblik', 'red');
createMarker(map, -27.6083333333, -48.4375, 'Margarete Jacques Amorim', 'red');
createMarker(map, 51.1205555556, 13.6061111111, 'Frank Waechter', 'red');
createMarker(map, 30.2763888889, -103.594166667, 'Terrence Ross', 'red');
createMarker(map, -27.6083333333, -48.4375, 'Alexandre Amorim', 'red');
createMarker(map, 50.088888888889, 20.926388888889, 'Krzysztof Pieszczoch', 'red');
createMarker(map, -27.0186111111, -52.6275, 'Diego de Bastiani', 'red');
createMarker(map, 51.1205555556, 13.6061111111, 'Sabine Waechter', 'red');
createMarker(map, -26.0901944444, 28.3161111111, 'TIM COOPER', 'red');
createMarker(map, -27.6602777778, -48.5436111111, 'Alexandre Amorim', 'red');
createMarker(map, 29.2175, -110.757777778, 'Salvador Aguirre', 'red');
createMarker(map, 44.2, 19.8244444444, 'Branislav Savic', 'red');
	}