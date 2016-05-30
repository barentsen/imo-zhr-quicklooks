
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
createMarker(map, 44.1583333333, 19.68, 'Andjelka Milovanovic', 'red');
createMarker(map, -27.6611111111, -48.545, 'Alexandre Amorim', 'red');
createMarker(map, 44.1583333333, 19.68, 'Jelena Krsmanovic', 'red');
createMarker(map, 52.165, 22.2713888889, 'Maciek Myszkiewicz', 'red');
createMarker(map, 44.1583333333, 19.68, 'Jovana Nikolic', 'red');
createMarker(map, -27.6611111111, -48.545, 'Adair Cardoso', 'red');
createMarker(map, 30.2766666667, -103.596111111, 'Terrence Ross', 'red');
createMarker(map, 50.1711111111, 19.8833333333, 'Andrzej Skoczewski', 'red');
createMarker(map, 44.1994444444, 19.825, 'Branislav Savic', 'red');
createMarker(map, 52.4038888889, 13.3066666667, 'Schultze Kai', 'red');
createMarker(map, 44.1583333333, 19.68, 'Dunja Pavlovic', 'red');
createMarker(map, 51.1683333333, 22.9197222222, 'tomasz lenart', 'red');
createMarker(map, 44.1583333333, 19.68, 'Tamara Paramentic', 'red');
createMarker(map, 44.1583333333, 19.68, 'Tamara Majic', 'red');
createMarker(map, 34.3369444444, 126.828611111, 'Seokhee Cho', 'red');
createMarker(map, 52.5508333333, 31.9530555556, 'Alexsandr Morozov', 'red');
createMarker(map, 19.4166666667, -155.216666667, 'Michael Linnolt', 'red');
createMarker(map, 38.463888888889, -76.983055555556, 'Richard Taibi', 'red');
createMarker(map, 29.2175, -110.760555556, 'Salvador Aguirre', 'red');
createMarker(map, 39.4408333333, 117.244722222, 'Qiang Ma', 'red');
createMarker(map, 44.1583333333, 19.68, 'Bogdan Radic', 'red');
createMarker(map, 51.1683333333, 22.9197222222, 'tomasz  lenart', 'red');
createMarker(map, 61.7583333333, 34.44, 'Yuriy Kuznetsov', 'red');
createMarker(map, 47.7169444444, 37.5572222222, 'Alexandr Maidik', 'red');
createMarker(map, -27.6611111111, -48.545, 'Martha Batista de Lima', 'red');
createMarker(map, 52.3333333333, 5.66666666667, 'Koen Miskotte', 'red');
createMarker(map, 54.9586111111, 12.3030555556, 'Tom Axelsen', 'red');
createMarker(map, 43.005, -78.9038888889, 'William Watson', 'red');
createMarker(map, 34.9158333333, 33.6038888889, 'Sasha Prokofyev', 'red');
createMarker(map, 44.2466666667, 19.9305555556, 'Branislav Savic', 'red');
	}