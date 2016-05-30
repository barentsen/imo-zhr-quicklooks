
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
createMarker(map, 50.7166666667, 3.6, 'Michel Vandeputte', 'red');
createMarker(map, 19.2466666667, 19.9311111111, 'Ivan Stankovic', 'red');
createMarker(map, 47.6666666667, 18.4, 'Istvan Tepliczky', 'red');
createMarker(map, 61.9136111111, 34.0002777778, 'Roman Kataev', 'red');
createMarker(map, 50.7166666667, 3.63333333333, 'Michel Vandeputte', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'Jurgen Rendtel', 'red');
createMarker(map, 52.6666666667, 13.85, 'Frank Enzlein', 'red');
createMarker(map, 44.2383333333, 19.9311111111, 'Milica Djordjevic', 'red');
createMarker(map, 47.295, 7.58861111111, 'Mirco Saner', 'red');
createMarker(map, 44.2466666667, 19.9311111111, 'Dunja  Pavlovic', 'red');
createMarker(map, 12.9108333333, 77.645, 'Rushikesh Tilak', 'red');
createMarker(map, 44.2466666667, 19.9311111111, 'Ljubomi Brankovi?', 'red');
createMarker(map, 49.7833333333, 9.88333333333, 'Pierre Bader', 'red');
createMarker(map, 52.3277777778, 13.0638888889, 'Sven Näther', 'red');
createMarker(map, 39.6097222222, -0.778888888889, 'Jose Vicente Díaz Martínez', 'red');
createMarker(map, 45.9694444444, 14.1352777778, 'Javor Kac', 'red');
createMarker(map, 27.9686111111, -15.5888888889, 'Pedro Pérez Corujo', 'red');
createMarker(map, 44.2466666667, 19.9311111111, 'Dunja Pavlovic', 'red');
createMarker(map, 49.4258333333, 4.93555555556, 'Koen Miskotte', 'red');
createMarker(map, 34.8536111111, 33.5841666667, 'Sasha Prokofyev', 'red');
createMarker(map, 51.1255555556, 13.5975, 'Frank Waechter', 'red');
createMarker(map, 47.7169444444, 37.5572222222, 'Alexandr Maidik', 'red');
createMarker(map, 47.6666666667, 18.4, 'Karoly Jonas', 'red');
createMarker(map, 33.0322222222, -80.3869444444, 'Mark Davis', 'red');
createMarker(map, 44.2466666667, 19.9311111111, 'Jovana Lazarevic', 'red');
createMarker(map, 52.3333333333, 5.66666666667, 'Koen Miskotte', 'red');
createMarker(map, 44.2466666667, 19.9311111111, 'Jovana Jankov', 'red');
createMarker(map, 47.4638888889, 16.8136111111, 'Eva Laczko', 'red');
createMarker(map, 53.1166666667, -2.06666666667, 'Tony Markham', 'red');
createMarker(map, 45.0252777778, 25.3216666667, 'Stefan Schmeissner', 'red');
createMarker(map, 47.3819444444, 8.89944444444, 'Andreas Buchmann', 'red');
createMarker(map, 25.8005555556, 110.011111111, 'Weizhou Zeng', 'red');
createMarker(map, 29.2175, -110.760555556, 'Salvador Aguirre', 'red');
createMarker(map, 44.2466666667, 19.9311111111, 'Milica Dodevski', 'red');
createMarker(map, 53.1166666667, -2.06666666667, 'Tony Markham', 'red');
createMarker(map, 44.2466666667, 19.9311111111, 'Branislav Savic', 'red');
createMarker(map, 51.1255555556, 13.5975, 'Sabine Waechter', 'red');
createMarker(map, 48.55, 11.7166666667, 'Sirko Molau', 'red');
createMarker(map, 30.2766666667, -103.596111111, 'Terrence Ross', 'red');
createMarker(map, 49.7519444444, 13.6044444444, 'Vaclav Kalas', 'red');
createMarker(map, 52.2463888889, 13.2538888889, 'Kai Schultze', 'red');
createMarker(map, 44.2466666667, 19.9311111111, 'Ljubomir Brankovic', 'red');
	}