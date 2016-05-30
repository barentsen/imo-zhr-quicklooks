
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
			createMarker(map, 14.6538888889, 121.072222222, 'Angelo Gabriel Ramos', 'red');
createMarker(map, 44.1583333333, 19.6866666667, 'Andjelka  Milovanovic', 'red');
createMarker(map, 50.4369444444, 12.5811111111, 'Kevin Förster', 'red');
createMarker(map, 48.8136111111, 22.0119444444, 'Michal Stefancik', 'red');
createMarker(map, 49.9786111111, 15.6941666667, 'Vilem Heblik', 'red');
createMarker(map, 34.8175, 33.5483333333, 'Sasha Prokofyev', 'red');
createMarker(map, 39.72, 2.86333333333, 'miguel ange serra martin', 'red');
createMarker(map, 54.2, 26.1, 'Ivan Sergey', 'red');
createMarker(map, 14.6538888889, 121.072222222, 'Gerald Peter Geronimo', 'red');
createMarker(map, 51.29, 12.36, 'Roland Winkler', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'Jurgen Rendtel', 'red');
createMarker(map, 14.6538888889, 121.072222222, 'Jerwin Laurente', 'red');
createMarker(map, 59.1905555556, 39.8836111111, 'Dmitry Gavriljuk', 'red');
createMarker(map, 34.8547222222, 33.5827777778, 'Sasha Prokofyev', 'red');
createMarker(map, 45.9777777778, 14.1180555556, 'Javor Kac', 'red');
createMarker(map, 44.1994444444, 19.825, 'Branislav  Savic', 'red');
createMarker(map, 44.1583333333, 19.6866666667, 'Dunja Pavlovic', 'red');
createMarker(map, 49.7833333333, 9.88333333333, 'Pierre Bader', 'red');
createMarker(map, 52.5508333333, 31.9530555556, 'Alexsandr Morozov', 'red');
createMarker(map, 14.6538888889, 121.072222222, 'Scott Pierre Bancolita', 'red');
createMarker(map, 5.28638888889, 73.1130555556, 'Jatin Rathod', 'red');
createMarker(map, 29.2175, -110.760555556, 'Salvador Aguirre', 'red');
createMarker(map, 47.7169444444, 37.5572222222, 'Alexandr Maidik', 'red');
createMarker(map, -7.4475, -35.2441666667, 'Josafary Campelo', 'red');
createMarker(map, 54.95, 11.2833333333, 'Ina Rendtel', 'red');
createMarker(map, 14.6538888889, 121.072222222, 'Sire Eduard Gella', 'red');
createMarker(map, 39.72, 2.86333333333, 'Carlos Burgos', 'red');
createMarker(map, 52.3333333333, 5.66666666667, 'Koen Miskotte', 'red');
createMarker(map, 50.4369444444, 12.5811111111, 'Kevin Foerster', 'red');
createMarker(map, 39.11, 117.2575, 'Qiang Ma', 'red');
createMarker(map, 39.72, 2.86333333333, 'joan Serrq', 'red');
createMarker(map, 48.8136111111, 22.0119444444, 'Zdenek Komarek', 'red');
createMarker(map, 45.0252777778, 25.3216666667, 'Stefan Schmeissner', 'red');
createMarker(map, 48.8136111111, 22.0119444444, 'Milada Jakubecova', 'red');
	}