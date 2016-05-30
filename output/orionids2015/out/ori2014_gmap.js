
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
createMarker(map, 36.2305555556, 140.105555556, 'Shigeo Uchiyama', 'red');
createMarker(map, 18.5202777778, 73.6180555556, 'Yogesh Pandey', 'red');
createMarker(map, 39.72, 2.86333333333, 'Alberto  Gonzalez', 'red');
createMarker(map, 39.72, 2.86333333333, 'Miguel Angel Serra Martin', 'red');
createMarker(map, 48.9238888889, 17.8605555556, 'Ivan Babaca', 'red');
createMarker(map, 50.7166666667, 3.63333333333, 'Michel Vandeputte', 'red');
createMarker(map, 35.947777777778, -95.7125, 'William Godley', 'red');
createMarker(map, 44.2461111111, 19.9258333333, 'Miroslav Zivanovic', 'red');
createMarker(map, 40.7019444444, 117.165277778, 'Fengwu Sun', 'red');
createMarker(map, 29.2175, -110.760555556, 'Salvador Aguirre', 'red');
createMarker(map, 48.9238888889, 17.8605555556, 'Veronika Rehakova', 'red');
createMarker(map, 34.3363888889, 126.828333333, 'Seokhee Cho', 'red');
createMarker(map, 51.1683333333, 22.9197222222, 'Tomasz Lenart', 'red');
createMarker(map, 60.1027777778, 18.7958333333, 'Ina Rendtel', 'red');
createMarker(map, 47.5833333333, 18.3, 'Karoly Jonas', 'red');
createMarker(map, 47.3833333333, 18.4, 'Karoly Jonas', 'red');
createMarker(map, 44.2461111111, 19.9252777778, 'Klemen Cotar', 'red');
createMarker(map, 44.2461111111, 19.9258333333, 'Dusanka Kovacevic', 'red');
createMarker(map, 45.0297222222, -77.2627777778, 'Pierre Martin', 'red');
createMarker(map, 52.2894444444, 12.0363888889, 'Roland Winkler', 'red');
createMarker(map, 44.2461111111, 19.9258333333, 'Branislav Savic', 'red');
createMarker(map, 39.72, 2.86333333333, 'Tomeu Mas', 'red');
createMarker(map, 51.1255555556, 13.5975, 'Frank Waechter', 'red');
createMarker(map, 47.7169444444, 37.5572222222, 'Alexandr Maidik', 'red');
createMarker(map, 62.2394444444, 17.6086111111, 'Ina Rendtel', 'red');
createMarker(map, 49.4302777778, 8.64916666667, 'Christoph Gerber', 'red');
createMarker(map, 46.0505555556, 14.7086111111, 'Javor Kac', 'red');
createMarker(map, 44.2461111111, 19.9258333333, 'Ilija Ivanovi?', 'red');
createMarker(map, 44.2461111111, 19.9258333333, 'Ivan Stankovic', 'red');
createMarker(map, 44.2461111111, 19.9255555556, 'Javor Kac', 'red');
createMarker(map, 52.3333333333, 5.66666666667, 'Koen Miskotte', 'red');
createMarker(map, 18.5202777778, 73.6180555556, 'PRATHAMESH PAWAR', 'red');
createMarker(map, 38.5752777778, 140.718333333, 'Yasuhiro TONOMURA', 'red');
createMarker(map, 32.3333333333, 54.6666666667, 'marjan mahdian', 'red');
createMarker(map, 35.8941666667, 138.4175, 'Shigeo Uchiyama', 'red');
createMarker(map, 46.7213888889, 16.0158333333, 'Mitja Govedic', 'red');
createMarker(map, 29.2175, -110.760555556, ' Salvador  Aguirre', 'red');
createMarker(map, 48.9238888889, 17.8605555556, 'Stanislav Simkovic', 'red');
createMarker(map, 30.2766666667, -103.596111111, 'Terrence Ross', 'red');
createMarker(map, 48.55, 11.7166666667, 'Sirko Molau', 'red');
createMarker(map, 28.2972222222, -16.5083333333, 'Jurgen Rendtel', 'red');
createMarker(map, 49.9786111111, 15.6941666667, 'Vilem Heblik', 'red');
createMarker(map, 51.1255555556, 13.5975, 'Sabine Waechter', 'red');
createMarker(map, 45.7258333333, 14.0258333333, 'Javor Kac', 'red');
createMarker(map, 44.2461111111, 19.9258333333, 'Kristina Veljkovic', 'red');
createMarker(map, 45.8088888889, -76.3719444444, 'Pierre Martin', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'Jurgen Rendtel', 'red');
createMarker(map, 54.4791666667, -1.185, 'Steven Brown', 'red');
createMarker(map, 39.72, 2.86333333333, 'Joan Serra', 'red');
createMarker(map, 45.5322222222, 10.255, 'Marco Micheli', 'red');
createMarker(map, 49.7833333333, 9.88333333333, 'Pierre Bader', 'red');
createMarker(map, 48.9238888889, 17.8605555556, 'Matej Sustr', 'red');
createMarker(map, 65.9636111111, 24.4966666667, 'Ina Rendtel', 'red');
createMarker(map, 25.3497222222, 110.317777778, 'weizhou zeng', 'red');
createMarker(map, 38.3483333333, -90.8655555556, 'Pete Kozich', 'red');
createMarker(map, 53.6013888889, -114.573055556, 'Bruce McCurdy', 'red');
createMarker(map, 39.72, 2.86333333333, 'Carlos Burgos', 'red');
createMarker(map, 55.5575, 82.9138888889, 'Mikhail Maslov', 'red');
	}