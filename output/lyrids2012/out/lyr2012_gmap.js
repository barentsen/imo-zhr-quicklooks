
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
createMarker(map, 54.2666666667, 12.8333333333, 'Ralf Koschack', 'red');
createMarker(map, -27.6083333333, -48.4375, 'Alexandre Amorim', 'red');
createMarker(map, 52.55, 14.0166666667, 'Stela Arlt', 'red');
createMarker(map, 34.5438888889, -115.791111111, 'Jane Houston Jones', 'red');
createMarker(map, 48.085, 17.5466666667, 'Tibor Csörgei', 'red');
createMarker(map, 44.1586111111, 19.6872222222, 'Jovana Pavlovic', 'red');
createMarker(map, 44.1586111111, 19.6872222222, 'Mihael Farkas', 'red');
createMarker(map, 52.165, 22.2713888889, 'Maciej Myszkiewicz', 'red');
createMarker(map, 52.3877777778, 6.67444444444, 'Sietse Dijkstra', 'red');
createMarker(map, 50.035, 15.7258333333, 'Vilem Heblik', 'red');
createMarker(map, 30.3083333333, 35.135, 'Ella Ratz', 'red');
createMarker(map, 30.2763888889, -103.594166667, 'Terrence Ross', 'red');
createMarker(map, 51.1205555556, 13.6061111111, 'Frank Waechter', 'red');
createMarker(map, 47.8086111111, 25.8219444444, 'Ilie Cosovanu', 'red');
createMarker(map, 50.088888888889, 20.926388888889, 'Krzysztof Pieszczoch', 'red');
createMarker(map, 44.1586111111, 19.6872222222, 'Boris Majic', 'red');
createMarker(map, 52.55, 41.0166666667, 'Christian Schmiel', 'red');
createMarker(map, -27.0186111111, -52.6275, 'Diego de Bastiani', 'red');
createMarker(map, 47.7169444444, 37.5572222222, 'Alexandr Maidik', 'red');
createMarker(map, 49.3038888889, 17.3961111111, 'Jakub Koukal', 'red');
createMarker(map, 49.4302777778, 8.64916666667, 'Christoph Gerber', 'red');
createMarker(map, 52.3333333333, 5.66666666667, 'Koen Miskotte', 'red');
createMarker(map, 47.4638888889, 16.8136111111, 'Eva Laczko', 'red');
createMarker(map, 45.0252777778, 25.3216666667, 'Stefan Schmeissner', 'red');
createMarker(map, 48.8136111111, 22.0119444444, 'Zdenek Komarek', 'red');
createMarker(map, 48.8136111111, 22.0119444444, 'Michal Palo', 'red');
createMarker(map, 44.1586111111, 19.6872222222, 'Andjelka Milovanovic', 'red');
createMarker(map, 30.3083333333, 35.1416666667, 'Anna Levina', 'red');
createMarker(map, 48.8136111111, 22.0119444444, 'Milada Jakubecova', 'red');
createMarker(map, 63.4338888889, -20.2680555556, 'Karl Gauti Hjaltason', 'red');
createMarker(map, 52.55, 14.0166666667, 'Christian Schmiel', 'red');
createMarker(map, 48.503055555556, 16.558333333333, 'Thomas Weiland', 'red');
createMarker(map, 55.5833333333, 26.1333333333, 'Audrius Dubietis', 'red');
createMarker(map, 52.5513888889, 14.0180555556, 'Frank Enzlein', 'red');
createMarker(map, 52.4444444444, 6.59305555556, 'Sietse Dijkstra', 'red');
createMarker(map, -27.6083333333, -48.4375, 'Margarete Jacques Amorim', 'red');
createMarker(map, 52.55, 14.0166666667, 'Rainer Arlt', 'red');
createMarker(map, 38.6166666667, -78.3666666667, 'Richard Taibi', 'red');
createMarker(map, 30.2763888889, -103.594166667, 'Terrence Ross', 'red');
createMarker(map, 19.0833333333, -155.75, 'Mike Linnolt', 'red');
createMarker(map, 51.1205555556, 13.6061111111, 'Sabine Waechter', 'red');
createMarker(map, 48.8136111111, 22.0119444444, 'Sara Belejova', 'red');
createMarker(map, 44.1586111111, 19.6872222222, 'Damnjan Mili?', 'red');
createMarker(map, 52.55, 14.0333333333, 'Rainer Arlt', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'Jurgen Rendtel', 'red');
createMarker(map, 29.2175, -110.757777778, 'Salvador Aguirre', 'red');
createMarker(map, 48.8136111111, 22.0119444444, 'Katarina Skopalova', 'red');
createMarker(map, 60.8980555556, 26.4861111111, 'Ilkka Yrjölä', 'red');
createMarker(map, 52.5513888889, 14.0180555556, 'Enzlein Frank', 'red');
createMarker(map, 52.55, 14.0166666667, 'Clara Ricken', 'red');
createMarker(map, 30.2763888889, -103.588611111, 'Terrence Ross', 'red');
createMarker(map, 37.1694444444, 50.05, 'motahareh Ebrahimi', 'red');
createMarker(map, 30.3083333333, 35.1352777778, 'Wienie Van der Oord', 'red');
createMarker(map, 37.5483333333, -121.988611111, 'Jose Alvarellos', 'red');
createMarker(map, 18.5352777778, 73.7827777778, 'Rushikesh Tilak', 'red');
createMarker(map, 49.1530555556, 22.3177777778, 'Andrzej Skoczewski', 'red');
createMarker(map, 44.1586111111, 19.6872222222, 'Zora Beljic', 'red');
createMarker(map, 52.2911111111, 76.9666666667, 'Andrey Semenyuta', 'red');
createMarker(map, 49.7833333333, 9.88333333333, 'Pierre Bader', 'red');
createMarker(map, -6.49333333333, -36.3955555556, 'Anderson Dantas', 'red');
	}