
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
			createMarker(map, 50.7166666667, 3.6, 'Michel Vandeputte', 'red');
createMarker(map, 32.7583333333, -79.8555555556, 'Mark Davis', 'red');
createMarker(map, 37.2166666667, 50, 'motahareh Ebrahimi', 'red');
createMarker(map, 31.2752777778, 121.588611111, 'Chengyun Huang', 'red');
createMarker(map, 40.0966666667, -2.89166666667, 'Francisco Ocaña González', 'red');
createMarker(map, 35.947777777778, -95.7125, 'William Godley', 'red');
createMarker(map, 37.65, 24.0333333333, 'Apostolos Christou', 'red');
createMarker(map, 31.2941666667, 121.498888889, 'Junyi Li', 'red');
createMarker(map, 54.795, -1.31166666667, 'Steven Brown', 'red');
createMarker(map, 47, 11, 'Jens Briesemeister', 'red');
createMarker(map, 52.2436111111, 13.2155555556, 'Oliver Hanke', 'red');
createMarker(map, 10.0616666667, -84.2583333333, 'Miguel  Rojas', 'red');
createMarker(map, 31.8122222222, 35.01, 'Shy Halatzi', 'red');
createMarker(map, 52.4419444444, 12.8958333333, 'Clara Ricken', 'red');
createMarker(map, 35.4408333333, 138.746111111, 'Katsuyuki Kobayashi', 'red');
createMarker(map, 55.16, -1.69666666667, 'Alastair McBeath', 'red');
createMarker(map, 45.0252777778, 25.3216666667, 'Florin Stancu', 'red');
createMarker(map, 47.7680555556, 26.2963888889, 'Ioan Agavriloaiei', 'red');
createMarker(map, 42.1088888889, -71.1811111111, 'Richard Kramer', 'red');
createMarker(map, 32, 35, 'Ella Ratz', 'red');
createMarker(map, 40.3013888889, -75.7005555556, 'Peter Detterline', 'red');
createMarker(map, 38.9566666667, 117.103333333, 'Qiang Ma', 'red');
createMarker(map, 34.1511111111, -117.985833333, 'Jane Houston Jones', 'red');
createMarker(map, 10.0619444444, -84.2583333333, 'Miguel Rojas ', 'red');
createMarker(map, 45.5055555556, -75.1694444444, 'Pierre Martin', 'red');
createMarker(map, 43.1201388889, 27.6705555556, 'Todor Dimitrov', 'red');
createMarker(map, 47.7169444444, 37.5572222222, 'Alexandr Maidik', 'red');
createMarker(map, 52.4419444444, 12.8958333333, 'Rainer Arlt', 'red');
createMarker(map, 49.3038888889, 17.3961111111, 'Jakub Koukal', 'red');
createMarker(map, 47.6666666667, 18.4, 'Karoly Jonas', 'red');
createMarker(map, 47.76, 25.84, 'Daniel Cosovanu', 'red');
createMarker(map, 39.4466666667, -77.5219444444, 'Steve Berte', 'red');
createMarker(map, 34.7833333333, -118.883333333, 'Gregory  Jones', 'red');
createMarker(map, 52.4419444444, 12.8958333333, 'Christian Schmiel', 'red');
createMarker(map, 51.4333333333, -1.8, 'Richard Fleet', 'red');
createMarker(map, 42.5766666667, -121.868055556, 'Wesley Stone', 'red');
createMarker(map, 18.3875, 73.6127777778, 'spandan waghmare', 'red');
createMarker(map, 50.7166666667, 5.1, 'Jean-Marie Biets', 'red');
createMarker(map, 37.2166666667, 50, 'masoume kazemi', 'red');
createMarker(map, 35.1572222222, 140.196944444, 'Shigeo Uchiyama', 'red');
createMarker(map, 34.9380555556, 139.131666667, 'Hideki Seo', 'red');
createMarker(map, 44.2463888889, 19.9308333333, 'Branislav Savic', 'red');
createMarker(map, 52.2166666667, 14.1166666667, 'André Knöfel', 'red');
createMarker(map, 31.2944444444, 121.498333333, 'Chengyun Huang', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'Jurgen Rendtel', 'red');
createMarker(map, 47.4833333333, 19.0416666667, 'Csilla Tepliczky', 'red');
createMarker(map, 34.9380555556, 139.131666667, 'Kazumi Terakubo', 'red');
createMarker(map, 11.4208333333, 107.428333333, 'Artyom Novichonok', 'red');
createMarker(map, 52.3011111111, 6.69666666667, 'Sietse Dijkstra', 'red');
createMarker(map, -7.99361111111, -34.8380555556, 'Leonardo Barbosa', 'red');
createMarker(map, 52.4166666667, 13.3333333333, 'Oliver Wusk', 'red');
createMarker(map, 32, 35, 'Shlomi Eini', 'red');
createMarker(map, 47.45, 19.4833333333, 'Fodor Balázs', 'red');
createMarker(map, 34.9380555556, 139.131666667, 'Mikiya Sato', 'red');
createMarker(map, 18.3875, 73.6127777778, 'Mayura Karandikar', 'red');
createMarker(map, 43.8466666667, 5.7925, 'Karl Antier', 'red');
createMarker(map, 38.463888888889, -76.983055555556, 'Richard Taibi', 'red');
createMarker(map, 18.5352777778, 73.7827777778, 'Rushikesh Tilak', 'red');
createMarker(map, 32, 35, 'Raloca Rufu', 'red');
createMarker(map, 52.3013888889, 6.69555555556, 'Peter van Leuteren', 'red');
createMarker(map, 32, 35, 'Anna Levin', 'red');
createMarker(map, 52.2436111111, 13.2155555556, 'Kai Schultze', 'red');
createMarker(map, 47.76, 25.84, 'Ilie Cosovanu', 'red');
createMarker(map, 47.6666666667, 18.4, 'Zsofia Biro', 'red');
createMarker(map, 32.2819444444, -110.768333333, 'Carl Hergenrother', 'red');
createMarker(map, 47.6666666667, 18.4, 'Istvan Tepliczky', 'red');
	}