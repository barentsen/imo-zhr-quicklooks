
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
			createMarker(map, 41.7933333333, 2.40305555556, 'Josep M, Trigo-Rodriguez', 'red');
createMarker(map, 44.2458333333, 19.9258333333, 'Branislav Savic', 'red');
createMarker(map, 52.165, 22.2713888889, 'Maciek Myszkiewicz', 'red');
createMarker(map, 39.1388888889, -0.840555555556, 'Daniel Verde Van Ouytsel', 'red');
createMarker(map, 36.6769444444, 49.5708333333, 'Arash Nabizadeh Haghighi', 'red');
createMarker(map, 49.9833333333, 19.8833333333, 'Tomasz Adam', 'red');
createMarker(map, 36.055, 14.2005555556, 'Michael Nolle', 'red');
createMarker(map, 39.72, 2.86333333333, 'miguel angel serra martin', 'red');
createMarker(map, 43.7041666667, 6.09027777778, 'Michel Deconinck', 'red');
createMarker(map, 42.576666666667, -121.86833333333, 'Wesley Stone', 'red');
createMarker(map, 52.085, -106.801666667, 'Richard Huziak', 'red');
createMarker(map, 48.7116666667, 21.2122222222, 'Jaroslav Merc', 'red');
createMarker(map, 51.1683333333, 22.9197222222, 'Tomasz Lenart', 'red');
createMarker(map, 27.7902777778, -15.4941666667, 'Orlando Benitez Sanchez', 'red');
createMarker(map, 35.1141666667, -103.225555556, 'Glenn Hughes', 'red');
createMarker(map, 34.6261111111, 30.5280555556, 'Anna Levina', 'red');
createMarker(map, 49.7833333333, 9.88333333333, 'Pierre Bader', 'red');
createMarker(map, 18.4052777778, 73.3788888889, 'Sonal Thorve', 'red');
createMarker(map, 52.5508333333, 31.9530555556, 'Alexsandr  Morozov', 'red');
createMarker(map, 45.6166666667, -76.7666666667, 'Pierre Martin', 'red');
createMarker(map, 38.463888888889, -76.983055555556, 'Richard Taibi', 'red');
createMarker(map, 43.7516666667, 6.92333333333, 'JENS LACORNE', 'red');
createMarker(map, 37.5483333333, -121.988611111, 'Jose Alvarellos', 'red');
createMarker(map, 38.8413888889, -78.1844444444, 'Peter Detterline', 'red');
createMarker(map, 45.9058333333, 14.5991666667, 'Javor Kac', 'red');
createMarker(map, 45.0505555556, 37.3241666667, 'Roman Makhnenko', 'red');
createMarker(map, 44.2458333333, 19.9258333333, 'Boris Majic', 'red');
createMarker(map, 39.7947222222, 19.6736111111, 'Vasilis Metallinos', 'red');
createMarker(map, 47.7169444444, 37.5572222222, 'Alexandr Maidik', 'red');
createMarker(map, 44.2458333333, 19.9258333333, 'Aleksandar Matic', 'red');
createMarker(map, 47.6666666667, 18.4, 'Karoly Jonas', 'red');
createMarker(map, 52.3333333333, 5.66666666667, 'Koen Miskotte', 'red');
createMarker(map, 39.7644444444, -81.2166666667, 'Shy Halatzi', 'red');
createMarker(map, 52.1166666667, 12, 'jens briesemeister', 'red');
createMarker(map, 19.05, -155.616666667, 'Michael Linnolt', 'red');
createMarker(map, 43.2638888889, -79.0597222222, 'William Watson', 'red');
createMarker(map, 39.6097222222, -0.746111111111, 'Jose Vicente Díaz Martínez', 'red');
createMarker(map, 33.0322222222, -80.3869444444, 'Mark Davis', 'red');
createMarker(map, 29.2175, -110.760555556, 'Salvador Aguirre', 'red');
createMarker(map, 55.5833333333, 26.1333333333, 'Audrius Dubietis', 'red');
createMarker(map, 42.9458333333, 23.0852777778, 'Milen Minev', 'red');
createMarker(map, 34.6261111111, 30.5280555556, 'Tamara Tchenak', 'red');
createMarker(map, 32.2819444444, -110.768333333, 'Carl Hergenrother', 'red');
createMarker(map, 42.57, -88.5563888889, 'Kai Schultze', 'red');
createMarker(map, 44.7388888889, -81.2305555556, 'Quan-Zhi Ye', 'red');
createMarker(map, 30.5277777778, 34.625, 'Ella Ratz', 'red');
createMarker(map, 53.7302777778, -115.636666667, 'Bruce McCurdy', 'red');
	}