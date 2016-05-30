
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
			createMarker(map, 37.5, -112.75, 'Glenn Hughes', 'red');
createMarker(map, -27.6611111111, -48.545, 'Alexandre Amorim', 'red');
createMarker(map, 36.2305555556, 140.105555556, 'Shigeo Uchiyama', 'red');
createMarker(map, 47.6666666667, 18.4, 'Karoly  Jonas', 'red');
createMarker(map, 34.8175, 33.5483333333, 'Sasha Prokofyev', 'red');
createMarker(map, 44.2466666667, 19.9305555556, 'Snezana Todorovic', 'red');
createMarker(map, 44.7258333333, 34.0091666667, 'Alexandr Seroys', 'red');
createMarker(map, 50.7288888889, 3.61444444444, 'Michel Vandeputte', 'red');
createMarker(map, 37.5, -113, 'Glenn Hughes', 'red');
createMarker(map, 37.25, -113.5, 'Glenn Hughes', 'red');
createMarker(map, 30.5277777778, 34.625, 'Ella Ratz', 'red');
createMarker(map, 9.37333333333, 54.1544444444, 'Ina Rendtel', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'Jurgen Rendtel', 'red');
createMarker(map, -22.9405555556, -43.1816666667, 'Adriano Carvalho', 'red');
createMarker(map, -27.6611111111, -48.545, 'Adair Cardozo', 'red');
createMarker(map, 30.5277777778, 34.625, 'Anna Levina', 'red');
createMarker(map, 37.0333333333, -112.5, 'Glenn Hughes', 'red');
createMarker(map, 34.8547222222, 33.5827777778, 'Sasha Prokofyev', 'red');
createMarker(map, 45.9777777778, 14.1180555556, 'Javor Kac', 'red');
createMarker(map, 44.1994444444, 19.825, 'Branislav  Savic', 'red');
createMarker(map, 44.1583333333, 19.6866666667, 'Dunja Pavlovic', 'red');
createMarker(map, 52.5508333333, 31.9530555556, 'Alexsandr Morozov', 'red');
createMarker(map, 43.7516666667, 6.92333333333, 'JENS LACORNE', 'red');
createMarker(map, 45.9058333333, 14.5991666667, 'Javor Kac', 'red');
createMarker(map, 44.7258333333, 34.0116666667, 'Selim Yakubov', 'red');
createMarker(map, 44.2466666667, 19.9305555556, 'Branislav Savic', 'red');
createMarker(map, 47.7169444444, 37.5572222222, 'Alexandr Maidik', 'red');
createMarker(map, -22.4008333333, -45.535, 'Gabriel Hickel', 'red');
createMarker(map, 44.7258333333, 34.0116666667, 'Nina Ignatenko', 'red');
createMarker(map, -26.0901944444, 28.3161111111, 'TIM COOPER', 'red');
createMarker(map, 34.015, 44.7283333333, 'Maria Makarova', 'red');
createMarker(map, 29.2175, -110.760555556, 'Salvador Aguirre', 'red');
createMarker(map, 33.0322222222, -80.3869444444, 'Mark Davis', 'red');
createMarker(map, 39, -110.25, 'Glenn Hughes', 'red');
createMarker(map, 29.2175, -110.760555556, 'Salvador Aguirre', 'red');
createMarker(map, 44.2463888889, 19.9308333333, 'Dusan Pavlovic', 'red');
createMarker(map, 45.3833333333, -76.4833333333, 'Pierre Martin', 'red');
createMarker(map, 46.9666666667, 19.2833333333, 'Karoly Jonas', 'red');
createMarker(map, 30.2766666667, -103.596111111, 'Terrence Ross', 'red');
createMarker(map, 49.9786111111, 15.6941666667, 'Vilem Heblik', 'red');
createMarker(map, 28.2972222222, -16.5083333333, 'Jurgen Rendtel', 'red');
createMarker(map, 44.2466666667, 19.9305555556, 'Branislav Savi?', 'red');
	}