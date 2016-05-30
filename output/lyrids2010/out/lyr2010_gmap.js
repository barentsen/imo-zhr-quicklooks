
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
			createMarker(map, 37.3555555556, -122.059166667, 'yanzhe liu', 'red');
createMarker(map, 29.319444444444, -110.82277777778, 'Salvador Aguirre', 'red');
createMarker(map, 29.2175, -110.76055555556, 'Salvador Aguirre', 'red');
createMarker(map, 41.641111111111, -89.496666666667, 'KEN HODONSKY', 'red');
createMarker(map, 38.463888888889, -76.983055555556, 'RICHARD TAIBI', 'red');
createMarker(map, 10.0063888889, -69.2172222222, 'Rafael G. Barrios B.', 'red');
createMarker(map, 52.3333333333, 0.666666666667, 'KOEN MISKOTTE', 'red');
createMarker(map, 50.9872222222, 3.32027777778, 'HENDRIK VANDENBRUAENE', 'red');
createMarker(map, 50.7166666667, 3.63333333333, 'MICHEL VANDEPUTTE', 'red');
createMarker(map, 52.3333333333, 5.66666666667, 'KOEN MISKOTTE', 'red');
createMarker(map, 52.3877777778, 6.67444444444, 'SIETSE DIJKSTRA', 'red');
createMarker(map, 52.415, 6.96638888889, 'SIETSE DIJKSTRA', 'red');
createMarker(map, 52.2144444444, 7.015, 'CARL JOHANNINK', 'red');
createMarker(map, 49.2452777778, 7.01888888889, 'Yann Kempf', 'red');
createMarker(map, 49.8333333333, 9.95, 'PIERRE BADER', 'red');
createMarker(map, 50.6616666667, 10.5583333333, 'PIERRE BADER', 'red');
createMarker(map, 48.55, 11.7166666667, 'SIRKO MOLAU', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'JURGEN RENDTEL', 'red');
createMarker(map, 50.035, 15.7258333333, 'VILEM HEBLIK', 'red');
createMarker(map, 48.3738888889, 17.2738888889, 'JAKUB KOUKAL', 'red');
createMarker(map, 48.3738888889, 17.2738888889, 'JIRI SRBA', 'red');
createMarker(map, 49.3038888889, 17.3961111111, 'JAKUB KOUKAL', 'red');
createMarker(map, 49.344166666667, 17.996388888889, 'PAVEL SVOZIL', 'red');
createMarker(map, 51.4602777778, 18.8136111111, 'Aleksandra Lechowicz', 'red');
createMarker(map, 51.4602777778, 18.8136111111, 'Angelika Ju?kiewicz', 'red');
createMarker(map, 51.4602777778, 18.8136111111, 'Artur Mencel', 'red');
createMarker(map, 51.4602777778, 18.8136111111, 'Dariusz Sitek', 'red');
createMarker(map, 51.4602777778, 18.8136111111, ' Dominika D?bek', 'red');
createMarker(map, 51.4602777778, 18.8136111111, 'DOMINIKA P?CZEK', 'red');
createMarker(map, 51.4602777778, 18.8136111111, 'Karolina Paprocka', 'red');
createMarker(map, 51.4602777778, 18.8136111111, 'Katarzyna Mielczarek', 'red');
createMarker(map, 51.4602777778, 18.8136111111, 'Kinga Piasecka', 'red');
createMarker(map, 51.4602777778, 18.8136111111, 'Krzysztof Patela', 'red');
createMarker(map, 51.4602777778, 18.8136111111, 'Magdalena Mi?ek', 'red');
createMarker(map, 51.4602777778, 18.8136111111, 'Natalia Smus', 'red');
createMarker(map, 51.4602777778, 18.8136111111, 'Paulina Kawecka', 'red');
createMarker(map, 51.4602777778, 18.8136111111, 'Urszula Dzikowicz', 'red');
createMarker(map, 51.4602777778, 18.8136111111, 'Weronika  Kokoszka', 'red');
createMarker(map, 44.2466666667, 19.9311111111, 'BRANISLAV SAVIC', 'red');
createMarker(map, 44.2466666667, 19.9311111111, 'ROMANA VUJASINOVIC', 'red');
createMarker(map, 49.38, 21.5, 'Jozef Karlik', 'red');
createMarker(map, 49.38, 21.5, 'Slavomir Kosican', 'red');
createMarker(map, 49.38, 21.5, 'Zdenek Komarek', 'red');
createMarker(map, 51.8, 22.6, 'DARIUSZ DOROSZ', 'red');
createMarker(map, 35.2866666667, 25.1247222222, 'GRIGORIS MARAVELIAS', 'red');
createMarker(map, 54.2, 26.1, 'IVAN M. SERGEY', 'red');
createMarker(map, 43.1201388889, 27.6705555556, 'VALENTIN VELKOV', 'red');
createMarker(map, 31.8463888889, 35.0163888889, 'ANNA S. LEVINA', 'red');
createMarker(map, 32.0391666667, 53.5416666667, 'Moein Adnani', 'red');
createMarker(map, 40.3344444444, 116.193333333, 'Xiaofan Wei', 'red');
createMarker(map, 40.3344444444, 116.193888889, 'Xin Li', 'red');
createMarker(map, 39.300277777778, 117.45055555556, 'Qiang Ma', 'red');
	}