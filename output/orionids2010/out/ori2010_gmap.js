
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
			createMarker(map, 42.5766666667, -121.868055556, 'WESLEY STONE', 'red');
createMarker(map, 29.2175, -110.760555556, 'Salvador Aguirre', 'red');
createMarker(map, 29.2175, -110.76055555556, 'Salvador Aguirre', 'red');
createMarker(map, 38.463888888889, -76.983055555556, 'RICHARD TAIBI', 'red');
createMarker(map, 40.6811111111, -74.8983333333, 'WAYNE T. HALLY', 'red');
createMarker(map, -22.7672222222, -48.5991666667, 'Alexandre Gil', 'red');
createMarker(map, 50.7166666667, 3.63333333333, 'MICHEL VANDEPUTTE', 'red');
createMarker(map, 52.3333333333, 5.66666666667, 'KOEN MISKOTTE', 'red');
createMarker(map, 52.2952777778, 6.74777777778, 'PETER VAN LEUTEREN', 'red');
createMarker(map, 52.2144444444, 7.015, 'CARL JOHANNINK', 'red');
createMarker(map, 50.0972222222, 8.1925, 'Sergei Schmalz', 'red');
createMarker(map, 49.8333333333, 9.95, 'PIERRE BADER', 'red');
createMarker(map, 48.55, 11.7166666667, 'SIRKO MOLAU', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'JURGEN RENDTEL', 'red');
createMarker(map, 40.76, 14.45, 'Roman Kovalyk', 'red');
createMarker(map, 45.8130555556, 14.6955555556, 'JAVOR KAC', 'red');
createMarker(map, 46.4461111111, 15.5330555556, 'JAVOR KAC', 'red');
createMarker(map, 46.5111111111, 15.5633333333, 'MITJA GOVEDIC', 'red');
createMarker(map, 49.9786111111, 15.6941666667, 'VILEM HEBLIK', 'red');
createMarker(map, 50.035, 15.7258333333, 'VILEM HEBLIK', 'red');
createMarker(map, 50.9666666667, 16.3666666667, 'JAVOR KAC', 'red');
createMarker(map, 48.3738888889, 17.2738888889, 'JAKUB KOUKAL', 'red');
createMarker(map, 49.3038888889, 17.3961111111, 'JAKUB KOUKAL', 'red');
createMarker(map, 44.2472222222, 19.9305555556, 'Aleksandar Matic', 'red');
createMarker(map, 44.2472222222, 19.9305555556, 'Dusan Pavlovic', 'red');
createMarker(map, 44.2472222222, 19.9305555556, 'Kristina Veljkovic', 'red');
createMarker(map, 44.2472222222, 19.9305555556, 'Marko Stankovic', 'red');
createMarker(map, 51.7097222222, 21.7313888889, 'Tomasz Lojek', 'red');
createMarker(map, -26.0901944444, 28.3161111111, 'TIM COOPER', 'red');
createMarker(map, 54.94, 82.9438888889, 'MIKHAIL MASLOV', 'red');
createMarker(map, -38.63, 177.883333333, 'JOHN DRUMMOND', 'red');
	}