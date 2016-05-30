
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
			createMarker(map, 19.41, -155.32, 'MIKE LINNOLT', 'red');
createMarker(map, 42.5766666667, -121.868055556, 'WESLEY STONE', 'red');
createMarker(map, 35.947777777778, -95.7125, 'WILLIAM GODLEY', 'red');
createMarker(map, 41.6411111111, -89.4966666667, 'KEN HODONSKY', 'red');
createMarker(map, 38.463888888889, -76.983055555556, 'RICHARD TAIBI', 'red');
createMarker(map, 45.2505555556, -76.2638888889, 'PIERRE MARTIN', 'red');
createMarker(map, 40.3013888889, -75.7002777778, 'PETER DETTERLINE', 'red');
createMarker(map, 40.6811111111, -74.8983333333, 'WAYNE T. HALLY', 'red');
createMarker(map, -6.49305555556, -36.3955555556, 'Anderson Dantas', 'red');
createMarker(map, 28.2972222222, -16.5083333333, 'JURGEN RENDTEL', 'red');
createMarker(map, 37.4138888889, -2.14583333333, 'JOSE LUIS MAESTRE GARCIA', 'red');
createMarker(map, 50.7166666667, 3.63333333333, 'MICHEL VANDEPUTTE', 'red');
createMarker(map, 52.3333333333, 5.66666666667, 'KOEN MISKOTTE', 'red');
createMarker(map, 41.8791666667, 12.4522222222, 'COSTANTINO SIGISMONDI', 'red');
createMarker(map, 50.035, 15.7258333333, 'VILEM HEBLIK', 'red');
createMarker(map, 46.3969444444, 16.2688888889, 'MITJA GOVEDIC', 'red');
createMarker(map, 49.8044444444, 16.8088888889, 'JAKUB KOUKAL', 'red');
createMarker(map, 49.3038888889, 17.3961111111, 'JAKUB KOUKAL', 'red');
createMarker(map, 49.3038888889, 17.3961111111, 'SYLVIE GORKOVA', 'red');
createMarker(map, 44.2466666667, 19.9355555556, 'BRANISLAV SAVIC', 'red');
createMarker(map, 44.2466666667, 19.9355555556, 'KRISTINA VELJKOVIC', 'red');
createMarker(map, 44.2466666667, 19.9355555556, 'Stevan Golubovic', 'red');
createMarker(map, 43.1201388889, 27.6705555556, 'Todor Dimitrov', 'red');
createMarker(map, 43.1201388889, 27.6705555556, 'VALENTIN VELKOV', 'red');
createMarker(map, 31.8, 35, 'ANNA S. LEVINA', 'red');
createMarker(map, 31.8, 35, 'Ella Ratz', 'red');
createMarker(map, 31.8, 35, 'SEMION LEVIN', 'red');
createMarker(map, 31.8, 35, 'SHLOMI EINI', 'red');
createMarker(map, 33.2341666667, 46.7341666667, 'mina alizadeh', 'red');
createMarker(map, 36.6666666667, 49.5666666667, 'Reyhaneh Fallah', 'red');
createMarker(map, 19.1833333333, 74.0833333333, 'ASMITA BHANDARE', 'red');
createMarker(map, 19.1833333333, 74.0833333333, 'JAI MEHTA', 'red');
createMarker(map, 19.1833333333, 74.0833333333, 'Raka Dabhade', 'red');
createMarker(map, 19.1833333333, 74.0833333333, 'RUCHA DESHPANDE', 'red');
createMarker(map, 19.1833333333, 74.0833333333, 'Suraj Dhiwar', 'red');
createMarker(map, 52.2911111111, 76.9666666667, 'ANDREY SEMENUTA', 'red');
createMarker(map, 28.7102777778, 77.6555555556, 'c b devgun', 'red');
createMarker(map, 21.38, 79.73, 'Sanket Sen', 'red');
createMarker(map, 39.99, 116.301944444, 'Weizhou Zeng', 'red');
createMarker(map, 39.1075, 117.244722222, 'Qiang Ma', 'red');
createMarker(map, 40.25, 117.25, 'Xingkai Wang', 'red');
createMarker(map, 39.0547222222, 117.333611111, 'Qiang Ma', 'red');
createMarker(map, 14.6525, 121.070555556, 'HERMITANIO QUINTO', 'red');
createMarker(map, 24.09, 121.16, 'Jer Nan Lou', 'red');
createMarker(map, 36.2305555556, 140.105555556, 'SHIGEO UCHIYAMA', 'red');
	}