
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
			createMarker(map, 38.463888888889, -76.983055555556, 'RICHARD TAIBI', 'red');
createMarker(map, 43.671944444444, 41.44, 'Stanislav Korotkiy', 'red');
createMarker(map, 39.300277777778, 117.45055555556, 'Qiang Ma', 'red');
createMarker(map, 49.8208333333, 15.6508333333, 'PETR HORALEK', 'red');
createMarker(map, 49.3038888889, 17.3961111111, 'SYLVIE GORKOVA', 'red');
createMarker(map, 49.3655555556, 17.7727777778, 'JAKUB KOUKAL', 'red');
createMarker(map, 52.2952777778, 6.74777777778, 'PETER VAN LEUTEREN', 'red');
createMarker(map, 43.1266666667, 6.15111111111, 'JENS LACORNE', 'red');
createMarker(map, 41.0966666667, -73.5522222222, 'Salvador Aguirre', 'red');
createMarker(map, 38.5908333333, 46.4555555556, 'Hamed P. Khorsandi', 'red');
createMarker(map, 44.5472222222, 12.0255555556, 'Fabrizio Melandri', 'red');
createMarker(map, 53.5366666667, -112.78, 'BRUCE MCCURDY', 'red');
createMarker(map, 47.7541666667, 25.8527777778, 'Constantin Psenitchi', 'red');
createMarker(map, 52.3013888889, 6.69555555556, 'PETER VAN LEUTEREN', 'red');
createMarker(map, 45.8130555556, 14.6955555556, 'JAVOR KAC', 'red');
createMarker(map, 54.94, 82.9438888889, 'MIKHAIL MASLOV', 'red');
createMarker(map, 51.8066666667, 22.5663888889, 'DARIUSZ DOROSZ', 'red');
createMarker(map, 28.7083333333, 77.6555555556, 'chander devgun', 'red');
createMarker(map, 40.3344444444, 116.193333333, 'bing wang', 'red');
createMarker(map, 31.5, 34.5, 'Ella Ratz', 'red');
createMarker(map, 49.5905555556, 14.6169444444, 'JAKUB CERNY', 'red');
createMarker(map, 27.7166666667, 85.3166666667, 'Suresh  Bhattarai', 'red');
createMarker(map, 49.8208333333, 15.6508333333, 'PETR HORALEK', 'red');
createMarker(map, 40.76, 14.45, 'Roman Kovalyk', 'red');
createMarker(map, 44.1622222222, 15.5166666667, 'Karoly Jonas', 'red');
createMarker(map, 31.5, 34.5, 'SIMON LEVIN', 'red');
createMarker(map, 52.4166666667, 13.3333333333, 'OLIVER WUSK', 'red');
createMarker(map, 49.913055555556, 14.781666666667, 'KAMIL HORNOCH', 'red');
createMarker(map, 31.5, 34.8833333333, 'ANNA S. LEVINA', 'red');
createMarker(map, 49.3038888889, 17.3961111111, 'JAKUB KOUKAL', 'red');
createMarker(map, 32.7583333333, -79.8555555556, 'MARK DAVIS', 'red');
createMarker(map, 62.1294444444, 34.0033333333, 'Artyom Novichonok', 'red');
createMarker(map, 49.4302777778, 8.64916666667, 'CHRISTOPH GERBER', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'JURGEN RENDTEL', 'red');
createMarker(map, 31.5, 34.8833333333, 'Elena Barsky', 'red');
createMarker(map, 39.8697222222, 116.081111111, 'Weizhou Zeng', 'red');
createMarker(map, 50.035, 15.7258333333, 'VILEM HEBLIK', 'red');
createMarker(map, 43.005, -78.9038888889, 'WILLIAM WATSON', 'red');
createMarker(map, 40.3344444444, 116.193333333, 'Xiaofan Wei', 'red');
createMarker(map, 40.334444444444, 116.19333333333, 'Xiang Zhan', 'red');
createMarker(map, 52.3333333333, 5.66666666667, 'KOEN MISKOTTE', 'red');
createMarker(map, 42.5766666667, -121.868055556, 'WESLEY STONE', 'red');
createMarker(map, 47.7869444444, 25.8391666667, 'Daniel Cosovanu', 'red');
createMarker(map, -6.49305555556, -36.3955555556, 'Anderson Dantas', 'red');
createMarker(map, 47.0230555556, 15.9463888889, 'THOMAS WEILAND', 'red');
createMarker(map, 47.7833333333, 37.5, 'Alexandr Maidik', 'red');
createMarker(map, 35.947777777778, -95.7125, 'WILLIAM GODLEY', 'red');
createMarker(map, 52.3277777778, 13.0638888889, 'SVEN NATHER', 'red');
createMarker(map, 38.5908333333, 46.4555555556, 'Hamed Altafi', 'red');
createMarker(map, 48.6166666667, 9.35, 'Jens Briesemeister', 'red');
createMarker(map, 44.1622222222, 15.5166666667, 'István Tepliczky', 'red');
	}