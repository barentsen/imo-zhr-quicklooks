
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
			createMarker(map, 44.2466666667, 19.9311111111, 'Ivan Stankovic', 'red');
createMarker(map, 36.2305555556, 140.105555556, 'Shigeo Uchiyama', 'red');
createMarker(map, 45.9683333333, 14.1419444444, 'Mitja Govedi?', 'red');
createMarker(map, 45.7263888889, 14.0255555556, 'Javor Kac', 'red');
createMarker(map, 44.2466666667, 19.9311111111, 'Andrijana Nedeljkovic', 'red');
createMarker(map, 45.7269444444, 14.0255555556, 'Mitja Govedi?', 'red');
createMarker(map, 30.2766666667, -103.596111111, 'Terrence Ross', 'red');
createMarker(map, 47.9, 19.9166666667, 'Karoly Jonas', 'red');
createMarker(map, 46.0527777778, 14.7130555556, 'Javor Kac', 'red');
createMarker(map, 59.2166666667, 39.9, 'Pavel Zhavoronkov', 'red');
createMarker(map, 45.9680555556, 14.1355555556, 'Javor Kac', 'red');
createMarker(map, 34.8536111111, 33.5841666667, 'Sasha Prokofyev', 'red');
createMarker(map, 47.7169444444, 37.5572222222, 'Alexandr Maidik', 'red');
createMarker(map, 44.2466666667, 19.9311111111, 'Debora Pavela', 'red');
createMarker(map, 42.576666666667, -121.86833333333, 'Wesley Stone', 'red');
createMarker(map, 47.5166666667, 19.5166666667, 'Karoly Jonas', 'red');
createMarker(map, 30.2766666667, -103.596111111, 'Terrence Ross', 'red');
createMarker(map, 44.2466666667, 19.9311111111, 'Ivana Burmazovic', 'red');
createMarker(map, 52.3333333333, 5.66666666667, 'Koen Miskotte', 'red');
createMarker(map, 51.2091666667, 13.5847222222, 'Sabine Waechter', 'red');
createMarker(map, 44.2466666667, 19.9311111111, 'Brankovic Ljubomir', 'red');
createMarker(map, 52.7519444444, 12.2722222222, 'Rendtel Ina', 'red');
createMarker(map, 44.2466666667, 19.9311111111, 'Snezana Todorovic', 'red');
createMarker(map, 36.2622222222, 140.101388889, 'Shigeo Uchiyama', 'red');
	}