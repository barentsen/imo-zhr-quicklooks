
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
			createMarker(map, 21.2813888889, -157.825833333, 'Marco Micheli', 'red');
createMarker(map, 21.0666666667, -156.933333333, 'MIKE LINNOLT', 'red');
createMarker(map, 42.576666666667, -121.86833333333, 'WESLEY STONE', 'red');
createMarker(map, 32.6133333333, -116.331944444, 'Craig Ewing', 'red');
createMarker(map, 53.9780555556, -113.789722222, 'BRUCE MCCURDY', 'red');
createMarker(map, 29.319444444444, -110.82277777778, 'Salvador Aguirre', 'red');
createMarker(map, 29.2175, -110.76055555556, 'Salvador Aguirre', 'red');
createMarker(map, 36.6938888889, -101.197222222, 'KEN HODONSKY', 'red');
createMarker(map, 35.947777777778, -95.7125, 'WILLIAM GODLEY', 'red');
createMarker(map, 42.2522222222, -88.0005555556, 'Jeremy Jefferis', 'red');
createMarker(map, 23.0897222222, -82.4308333333, 'ADRIAN LELYEN', 'red');
createMarker(map, 23.0897222222, -82.4308333333, 'Orley Cruz', 'red');
createMarker(map, 42.6730555556, -78.3847222222, 'WILLIAM WATSON', 'red');
createMarker(map, 38.463888888889, -76.983055555556, 'RICHARD TAIBI', 'red');
createMarker(map, 38.8, -76.9, 'RICHARD TAIBI', 'red');
createMarker(map, 40.3, -75.7083333333, 'PETER DETTERLINE', 'red');
createMarker(map, 40.3, -75.6113888889, 'Justin Pierce', 'red');
createMarker(map, 40.2763888889, -75.5780555556, 'andrew pignoli', 'red');
createMarker(map, 40.3, -75.5686111111, 'Nick Horn', 'red');
createMarker(map, 40.6811111111, -74.8983333333, 'WAYNE T. HALLY', 'red');
createMarker(map, 40.7166666667, -74, 'Eugene Miller', 'red');
createMarker(map, 9.8238888888889, -70.055277777778, 'Rafael G. Barrios B.', 'red');
createMarker(map, 10.25, -69.9833333333, 'Jesus Guerrero', 'red');
createMarker(map, -27.7725, -48.5741666667, 'Sueli Sousa Sepetiba', 'red');
createMarker(map, -27.6602777778, -48.5436111111, 'ALEXANDRE AMORIM', 'red');
createMarker(map, 28.6480555556, -17.7611111111, 'FELIX BETTONVIL', 'red');
createMarker(map, 28.2972222222, -16.5083333333, 'JURGEN RENDTEL', 'red');
createMarker(map, 39.4008333333, -7.48805555556, 'PETER VAN LEUTEREN', 'red');
createMarker(map, 39.4008333333, -7.48777777778, 'SIETSE DIJKSTRA', 'red');
createMarker(map, 39.3980555556, -7.48722222222, 'MICHEL VANDEPUTTE', 'red');
createMarker(map, 39.3980555556, -7.48722222222, 'SIETSE DIJKSTRA', 'red');
createMarker(map, 39.4166666667, -7.46666666667, 'ROY KEERIS', 'red');
createMarker(map, 39.3333333333, -7.41666666667, 'KOEN MISKOTTE', 'red');
createMarker(map, 39.4, -7.41666666667, 'KOEN MISKOTTE', 'red');
createMarker(map, 39.3811111111, -3.61222222222, 'JOSE CARLOS MILLAN', 'red');
createMarker(map, 39.3397222222, -3.56694444444, 'FRANCISCO OCANA GONZALEZ', 'red');
createMarker(map, 39.3397222222, -3.40027777778, 'Anahí Villalba Pradas', 'red');
createMarker(map, 39.3397222222, -3.40027777778, 'Mario Fernández Palos', 'red');
createMarker(map, 37.9666666667, -0.683333333333, 'RAFAEL RUBEN TORREGROSA SOLER', 'red');
createMarker(map, 40.4033333333, -0.27, 'Daniel Verde Van Ouytsel', 'red');
createMarker(map, 40.4325, -0.263611111111, 'Daniel  Verde Van Ouytsel', 'red');
createMarker(map, 50.9333333333, 2.66666666667, 'KAREL DEWAELE', 'red');
createMarker(map, 50.9872222222, 3.32027777778, 'HENDRIK VANDENBRUAENE', 'red');
createMarker(map, 51.1447222222, 4.46583333333, 'LARS JACOBS', 'red');
createMarker(map, 51.0261111111, 4.46861111111, 'TOM CORSTJENS', 'red');
createMarker(map, 52.2, 6.11666666667, 'Alex Scholten', 'red');
createMarker(map, 52.65, 6.65, 'Daniel van Os', 'red');
createMarker(map, 52.2952777778, 6.74777777778, 'PETER VAN LEUTEREN', 'red');
createMarker(map, 52.4166666667, 6.96666666667, 'DANIEL VAN OS', 'red');
createMarker(map, 49.4302777778, 8.64916666667, 'CHRISTOPH GERBER', 'red');
createMarker(map, 48.55, 11.7166666667, 'SIRKO MOLAU', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'JURGEN RENDTEL', 'red');
createMarker(map, 45.8055555556, 13.7633333333, 'Rok Pucer', 'red');
createMarker(map, 45.8055555556, 13.7636111111, 'JAVOR KAC', 'red');
createMarker(map, 45.5338888889, 13.9755555556, 'JAVOR KAC', 'red');
createMarker(map, 45.5338888889, 13.9755555556, 'JURE ATANACKOV', 'red');
createMarker(map, 45.9847222222, 14.2283333333, 'JAVOR KAC', 'red');
createMarker(map, 50.7513888889, 15.5494444444, 'JAN VERFL', 'red');
createMarker(map, 50.035, 15.7258333333, 'VILEM HEBLIK', 'red');
createMarker(map, 48.7005555556, 16.6655555556, 'THOMAS WEILAND', 'red');
createMarker(map, 48.7822222222, 16.7891666667, 'PETR HORALEK', 'red');
createMarker(map, 48.8344444444, 17.3930555556, 'JAKUB KOUKAL', 'red');
createMarker(map, 49.3038888889, 17.3961111111, 'JAKUB KOUKAL', 'red');
createMarker(map, 55.366666666667, 26.2, 'RICARDAS BALCIUNAS', 'red');
createMarker(map, 50.8666666667, 27.8, 'GENNADIJ BUGAREVYCH', 'red');
createMarker(map, 50.3983333333, 30.5330555556, 'Sergey Stariy', 'red');
createMarker(map, 52.4833333333, 30.8833333333, 'SERGEY DOBROWSKY', 'red');
createMarker(map, 21.7822222222, 31.3875, 'CARL JOHANNINK', 'red');
createMarker(map, 18.5244444444, 31.8227777778, 'CARL JOHANNINK', 'red');
createMarker(map, 49.5997222222, 34.6044444444, 'Roman Kostenko', 'red');
createMarker(map, 30.8194444444, 34.7563888889, 'ANNA S. LEVINA', 'red');
createMarker(map, 30.8194444444, 34.7563888889, 'Ella Ratz', 'red');
createMarker(map, 30.8194444444, 34.7563888889, 'SHLOMI EINI', 'red');
createMarker(map, 30.3083333333, 35.1338888889, 'ANNA S. LEVINA', 'red');
createMarker(map, 30.3083333333, 35.1338888889, 'SHLOMI EINI', 'red');
createMarker(map, 30.3083333333, 35.1338888889, 'Shulamit Dror', 'red');
createMarker(map, 30.3083333333, 35.1338888889, 'Tohar Mor', 'red');
createMarker(map, 30.3083333333, 35.1338888889, 'Ella Ratz', 'red');
createMarker(map, 30.3083333333, 35.1338888889, 'SHY HALATZI', 'red');
createMarker(map, 19.256666666667, 73.299166666667, 'MAYURESH DESAI', 'red');
createMarker(map, 19.256666666667, 73.299166666667, 'Rohan Shewale', 'red');
createMarker(map, 22.2575, 73.32, 'Shyamal Patel', 'red');
createMarker(map, 15.3833333333, 73.8833333333, 'Onkar Dixit ', 'red');
createMarker(map, 19.1088888889, 74.0511111111, 'Shantanu Karlekar', 'red');
createMarker(map, 19.1088888889, 74.0511111111, 'Shantanu Karlekar', 'red');
createMarker(map, 19.1091666667, 74.0511111111, 'Ankit Anand', 'red');
createMarker(map, 19.1091666667, 74.0511111111, 'Rishikesh Pandit', 'red');
createMarker(map, 19.1091666667, 74.0511111111, 'Sargam Mulay', 'red');
createMarker(map, 19.1094444444, 74.0511111111, 'ashish kumbhar', 'red');
createMarker(map, 19.1094444444, 74.0511111111, 'Sanket Sen', 'red');
createMarker(map, 19.1094444444, 74.0511111111, 'SHERRY CHHABRA', 'red');
createMarker(map, 19.1094444444, 74.0511111111, 'Suraj Dhiwar', 'red');
createMarker(map, 19.1094444444, 74.0511111111, 'Sargam Mulay', 'red');
createMarker(map, 19.1094444444, 74.0511111111, 'Suraj Dhiwar', 'red');
createMarker(map, 29.4666666667, 79.1666666667, 'sachin bahmba', 'red');
createMarker(map, 29.4666666667, 79.1833333333, 'akhil chopra', 'red');
createMarker(map, 54.94, 82.9438888889, 'MIKHAIL MASLOV', 'red');
createMarker(map, 53.8333333333, 87.5, 'Oleg Yavorsky', 'red');
createMarker(map, 40.3188888889, 115.7175, 'Xin Li', 'red');
createMarker(map, 40.0716666667, 116.166666667, 'Kai Yu', 'red');
createMarker(map, 40.3344444444, 116.193333333, 'Xiang ZHAN', 'red');
createMarker(map, 40.3344444444, 116.193333333, 'XiJun Wu', 'red');
createMarker(map, 40.3511111111, 116.193333333, 'Wei Ge', 'red');
createMarker(map, 40.0933333333, 116.308055556, 'XiJun Wu', 'red');
createMarker(map, 40.6886111111, 117.141666667, 'Weizhou Zeng', 'red');
createMarker(map, 40.6886111111, 117.142222222, 'Simiao CHENG', 'red');
createMarker(map, 39.3, 117.45, 'Yuanjing Li', 'red');
createMarker(map, 39.300277777778, 117.45055555556, 'Liyang Wang', 'red');
createMarker(map, 39.300277777778, 117.45055555556, 'Qiang Ma', 'red');
createMarker(map, 24.088055555556, 121.16472222222, 'Jer Nan Lou', 'red');
createMarker(map, 44.5863888889, 129.553611111, 'Bin Wang', 'red');
createMarker(map, 36.2305555556, 140.105555556, 'SHIGEO UCHIYAMA', 'red');
createMarker(map, -37.8833333333, 145.016666667, 'Con Stoitsis', 'red');
createMarker(map, -35.8166666667, 145.583333333, 'ADAM MARSH', 'red');
createMarker(map, -35.8166666667, 145.583333333, 'Lance Kelly', 'red');
createMarker(map, -35.8166666667, 145.583333333, 'LANCE KELLY', 'red');
createMarker(map, -35.8166666667, 145.583333333, 'Phil Snelling', 'red');
	}