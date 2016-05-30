
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
			createMarker(map, 50.5961111111, 21.1588888889, 'Tomasz Adam', 'red');
createMarker(map, 49.5630555556, 34.8113888889, 'Roman Kostenko', 'red');
createMarker(map, 39.1075, 117.244722222, 'Qiang Ma', 'red');
createMarker(map, 52.4955555556, 12.6341666667, 'SIRKO MOLAU', 'red');
createMarker(map, 48.8136111111, 22.0119444444, 'Michal Stefancik', 'red');
createMarker(map, 49.8333333333, 9.95, 'PIERRE BADER', 'red');
createMarker(map, 52.4955555556, 12.6341666667, 'Paul Meißner', 'red');
createMarker(map, 51.4602777778, 18.83, 'Magdalena Mi?ek', 'red');
createMarker(map, 51.8, 22.6, 'DARIUSZ DOROSZ', 'red');
createMarker(map, 36.9291666667, 116.979166667, 'Jixia Lee', 'red');
createMarker(map, 52.4955555556, 12.6341666667, 'RAINER ARLT', 'red');
createMarker(map, 55.5833333333, 26.1333333333, 'AUDRIUS DUBIETIS', 'red');
createMarker(map, 45.9905555556, 14.0875, 'JANUSZ W. KOSINSKI', 'red');
createMarker(map, 29.15, -81.55, 'Paul Jones', 'red');
createMarker(map, 51.4602777778, 18.83, 'Katarzyna Mielczarek', 'red');
createMarker(map, 48.8136111111, 22.0119444444, 'Marian Mraz', 'red');
createMarker(map, 51.4602777778, 18.83, 'DOMINIKA P?CZEK', 'red');
createMarker(map, 29.1047222222, -110.961666667, 'Salvador Aguirre', 'red');
createMarker(map, 45.9683333333, 14.1419444444, 'JAVOR KAC', 'red');
createMarker(map, 48.5083333333, 16.5530555556, 'THOMAS WEILAND', 'red');
createMarker(map, 51.4602777778, 18.83, 'Urszula Dzikowicz', 'red');
createMarker(map, 51.4602777778, 18.83, 'Dariusz Sitek', 'red');
createMarker(map, 43.1201388889, 27.6705555556, 'Todor Dimitrov', 'red');
createMarker(map, 50.0972222222, 8.1925, 'Sergei Schmalz', 'red');
createMarker(map, 40.76, 14.45, 'Roman Kovalyk', 'red');
createMarker(map, 26.7666666667, 89.05, 'Santosh Mahato', 'red');
createMarker(map, 52.4166666667, 13.3333333333, 'OLIVER WUSK', 'red');
createMarker(map, 54.2, 26.1, 'IVAN M. SERGEY', 'red');
createMarker(map, 47.435, 19.5669444444, 'Balazs Fodor', 'red');
createMarker(map, 50.0936111111, 8.28777777778, 'Sergei Schmalz', 'red');
createMarker(map, 48.8136111111, 22.0119444444, 'Milada Jakubecova', 'red');
createMarker(map, 50.0936111111, 8.28777777778, 'DAVID STRACHAN', 'red');
createMarker(map, 51.4602777778, 18.83, 'Karolina Paprocka', 'red');
createMarker(map, 52.4955555556, 12.6341666667, 'Anastasia Abdolvand', 'red');
createMarker(map, 39.7102777778, 19.7580555556, 'Vasilis Metallinos', 'red');
createMarker(map, 50.9666666667, 16.3666666667, 'JAVOR KAC', 'red');
createMarker(map, 34.3108333333, 108.453055556, 'Bo Zhou', 'red');
createMarker(map, 51.4602777778, 18.83, 'Natalia Smus', 'red');
createMarker(map, 49.3038888889, 17.3961111111, 'JAKUB KOUKAL', 'red');
createMarker(map, 51.4602777778, 18.83, 'Przemek Grabarczyk', 'red');
createMarker(map, 39.99, 116.301944444, 'Weizhou Zeng', 'red');
createMarker(map, 46.3969444444, 16.2688888889, 'MITJA GOVEDIC', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'JURGEN RENDTEL', 'red');
createMarker(map, 50.7166666667, 3.63333333333, 'MICHEL VANDEPUTTE', 'red');
createMarker(map, 47.435, 19.5669444444, 'Szabolcs Kiss', 'red');
createMarker(map, 51.4602777778, 18.83, 'Kinga Bobrowska', 'red');
createMarker(map, 47.6666666667, 18.4, 'ISTVAN TEPLICZKY', 'red');
createMarker(map, 29.319444444444, -110.82277777778, 'Salvador Aguirre', 'red');
createMarker(map, 29.15, -81.55, 'Paul  Jones', 'red');
createMarker(map, 52.4955555556, 12.6341666667, 'STELA FRENCHEVA', 'red');
createMarker(map, 26.17, -80.8938888889, 'LEW GRAMER', 'red');
createMarker(map, 45.9683333333, 14.1419444444, 'JURE ATANACKOV', 'red');
createMarker(map, 51.4602777778, 18.83, 'Kinga Jagielska', 'red');
createMarker(map, 44.2463888889, 19.9308333333, 'BRANISLAV SAVIC', 'red');
createMarker(map, 47.6666666667, 18.4, 'Csilla Tepliczky', 'red');
createMarker(map, 52.3333333333, 5.66666666667, 'KOEN MISKOTTE', 'red');
createMarker(map, 48.4333333333, 34.9833333333, 'Sasha Prokofyev', 'red');
createMarker(map, 47.7833333333, 37.5, 'Alexandr Maidik', 'red');
createMarker(map, 45.5055555556, -75.1694444444, 'PIERRE MARTIN', 'red');
createMarker(map, 47.45, 19.5333333333, 'Csilla Tepliczky', 'red');
createMarker(map, 52.4955555556, 12.6341666667, 'Christian Schmiel', 'red');
createMarker(map, 52.415, 6.96611111111, 'PETER VAN LEUTEREN', 'red');
createMarker(map, 52.3277777778, 13.0638888889, 'SVEN NATHER', 'red');
createMarker(map, 48.6958333333, 9.55833333333, 'Jens Briesemeister', 'red');
createMarker(map, 26.7666666667, 89.05, 'SANTOSH MAHATO', 'red');
createMarker(map, 51.4602777778, 18.83, 'Daria Kokoszka', 'red');
createMarker(map, 51.4602777778, 18.83, 'Adam Wroci?ski', 'red');
createMarker(map, 40.6811111111, -74.8983333333, 'WAYNE T. HALLY', 'red');
createMarker(map, 48.4855555556, 15.1486111111, 'THOMAS WEILAND', 'red');
createMarker(map, 48.8136111111, 22.0119444444, 'Zdenek Komarek', 'red');
createMarker(map, 51.4602777778, 18.83, 'Patryk Duchnowski', 'red');
createMarker(map, 38.463888888889, -76.983055555556, 'RICHARD TAIBI', 'red');
createMarker(map, 51.4602777778, 18.83, 'Patrycja Kr?zel', 'red');
createMarker(map, 39.0547222222, 117.333611111, 'Qiang Ma', 'red');
createMarker(map, 49.3038888889, 17.3961111111, 'SYLVIE GORKOVA', 'red');
createMarker(map, -35.8166666667, 145.6, 'ADAM MARSH', 'red');
createMarker(map, 52.4955555556, 12.6341666667, 'FRANK ENZLEIN', 'red');
	}