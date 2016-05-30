
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
			createMarker(map, 45.3833333333, -76.4833333333, 'PIERRE MARTIN', 'red');
createMarker(map, -35.8166666667, 145.6, 'LANCE KELLY', 'red');
createMarker(map, 49.8333333333, 9.95, 'PIERRE BADER', 'red');
createMarker(map, 44.2461111111, 19.9319444444, 'Visnja Jankov', 'red');
createMarker(map, -35.749166666667, 149.27444444444, 'Paul Craft', 'red');
createMarker(map, 47.4438888889, 19.5377777778, 'Janos Bakos', 'red');
createMarker(map, 44.2461111111, 19.9319444444, 'Filip Stanisavljevic', 'red');
createMarker(map, 30.3080555556, 35.1355555556, 'ANNA S. LEVINA', 'red');
createMarker(map, 47.6666666667, 18.4, 'ISTVAN TEPLICZKY', 'red');
createMarker(map, -36.3955555556, -6.49305555556, 'Anderson Dantas', 'red');
createMarker(map, 38.9566666667, 117.103333333, 'Qiang Ma', 'red');
createMarker(map, 52.3333333333, 5.66666666667, 'KOEN MISKOTTE', 'red');
createMarker(map, 28.7591666667, -17.8805555556, 'THOMAS WEILAND', 'red');
createMarker(map, 35.947777777778, -95.7125, 'WILLIAM GODLEY', 'red');
createMarker(map, -23.1902777778, -47.2947222222, 'Joao Santos', 'red');
createMarker(map, 28.76, -17.8816666667, 'FELIX BETTONVIL', 'red');
createMarker(map, 28.76, -17.8816666667, 'FELIX BETTONVIL', 'red');
createMarker(map, 45.9302777778, 126.343888889, 'Di Hu', 'red');
createMarker(map, 45.9230555556, 126.346666667, 'Pengkai Liu', 'red');
createMarker(map, 38.463888888889, -76.983055555556, 'RICHARD TAIBI', 'red');
createMarker(map, -37.8833333333, 145.05, 'Con Stoitsis', 'red');
createMarker(map, 52.3013888889, 6.69555555556, 'PETER VAN LEUTEREN', 'red');
createMarker(map, 18.5166666667, 73.6166666667, 'NILESH PUNTAMBEKAR', 'red');
createMarker(map, 45.9683333333, 14.1419444444, 'JAVOR KAC', 'red');
createMarker(map, 48.3208333333, 16.9975, 'Vilem Heblik', 'red');
createMarker(map, 44.2461111111, 19.9319444444, 'Predrag Zivkov', 'red');
createMarker(map, 49.3038888889, 17.3961111111, 'JAKUB KOUKAL', 'red');
createMarker(map, 48.3738888889, 17.2738888889, 'JAKUB KOUKAL', 'red');
createMarker(map, 29.2175, -110.76055555556, 'Salvador Aguirre', 'red');
createMarker(map, 47.6666666667, 18.4, 'Csilla Tepliczky', 'red');
createMarker(map, 25.3238888889, -80.8319444444, 'LEW GRAMER', 'red');
createMarker(map, -30.9833333333, 151.6, 'Chris Wyatt', 'red');
createMarker(map, -37.8833333333, 145.056944444, 'Con Stoitsis', 'red');
createMarker(map, -36.9166666667, 144.7, 'Phil Hart', 'red');
createMarker(map, -35.3769444444, 149.111111111, 'Paul Craft', 'red');
createMarker(map, 40.0908333333, 116.310555556, 'Xijun Wu', 'red');
createMarker(map, 44.2461111111, 19.9319444444, 'Branislav Savic', 'red');
createMarker(map, 50.0972222222, 8.1925, 'Sergei Schmalz', 'red');
createMarker(map, 40.76, 14.45, 'Roman Kovalyk', 'red');
createMarker(map, 47.4422222222, 19.5380555556, 'Balazs Fodor', 'red');
createMarker(map, -27.6602777778, -48.5436111111, 'ALEXANDRE AMORIM', 'red');
createMarker(map, 50.0872222222, 19.935, 'Tomasz Adam', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'JURGEN RENDTEL', 'red');
createMarker(map, 45.9683333333, 14.1419444444, 'JURE ATANACKOV', 'red');
createMarker(map, -37.35, 145.1, 'Con Stoitsis', 'red');
createMarker(map, 45.9905555556, 14.0875, 'JANEZ KOS', 'red');
createMarker(map, 28.7622222222, -17.8930555556, 'THOMAS WEILAND', 'red');
createMarker(map, 44.2461111111, 19.9319444444, 'Marko Zivanovic', 'red');
createMarker(map, -35.8166666667, 145.6, 'ADAM MARSH', 'red');
createMarker(map, 29.15, -81.55, 'Paul Jones', 'red');
createMarker(map, 52.6666666667, 13.85, 'FRANK ENZLEIN', 'red');
createMarker(map, 47.4255555556, 19.4447222222, 'Janos Bakos', 'red');
createMarker(map, 50.035, 15.7258333333, 'Vilem Heblik', 'red');
createMarker(map, 32.4666666667, 118.994166667, 'Tao Su', 'red');
createMarker(map, -26.0901944444, 28.3161111111, 'TIM COOPER', 'red');
createMarker(map, 40.6811111111, -74.8983333333, 'WAYNE T. HALLY', 'red');
createMarker(map, 40.5261111111, 115.981944444, 'Simiao CHENG', 'red');
createMarker(map, 50.7166666667, 3.63333333333, 'MICHEL VANDEPUTTE', 'red');
	}