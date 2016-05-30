
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
createMarker(map, 35.4408333333, 138.746111111, 'Mikiya Sato', 'red');
createMarker(map, 36.2305555556, 140.105555556, 'Shigeo Uchiyama', 'red');
createMarker(map, 51.8344444444, 107.579444444, 'Students BSU', 'red');
createMarker(map, 39.1075, 117.244722222, 'Qiang Ma', 'red');
createMarker(map, 19.0555555556, 72.2730555556, 'Anuja Parkar', 'red');
createMarker(map, 52.415, 6.96638888889, 'Sietse Dijkstra', 'red');
createMarker(map, 40.5525, 116.831111111, 'Qi Xin', 'red');
createMarker(map, 39.5286111111, 116.736111111, 'Kai Yu', 'red');
createMarker(map, 46.0291666667, 14.6544444444, 'Javor Kac', 'red');
createMarker(map, 38.1016666667, 114.527777778, 'Wei Ge', 'red');
createMarker(map, 22.3883333333, 109.253611111, 'Jiangao Ruan', 'red');
createMarker(map, 44.9294444444, 25.4608333333, 'Valentin Grigore', 'red');
createMarker(map, 40.0227777778, 115.990555556, 'Xiang Zhan', 'red');
createMarker(map, 30.3080555556, 35.1344444444, 'Anna Levin', 'red');
createMarker(map, 44.5863888889, 129.553611111, 'Bin Wang', 'red');
createMarker(map, 40.6925, 117.14416666667, 'weizhou zeng', 'red');
createMarker(map, 38.9566666667, 117.103333333, 'Qiang Ma', 'red');
createMarker(map, 29.1047222222, -110.961944444, 'Salvador Aguirre', 'red');
createMarker(map, 47.7169444444, 37.5572222222, 'Alexandr Maidik', 'red');
createMarker(map, 49.3038888889, 17.3961111111, 'Jakub Koukal', 'red');
createMarker(map, 35.4408333333, 138.746111111, 'Kazumi Terakubo', 'red');
createMarker(map, 49.975, 17.8333333333, 'Jakub Koukal', 'red');
createMarker(map, 23.0955555556, -82.3538888889, 'Orley Cruz Torres', 'red');
createMarker(map, 20.0066666667, 73.6625, 'Mayuresh Prabhune', 'red');
createMarker(map, 19.0555555556, 72.2730555556, 'Tejaswini Varade', 'red');
createMarker(map, 37.9666666667, -0.683333333333, 'Rafael Ruben Torregrosa Soler', 'red');
createMarker(map, 39.99, 116.301944444, 'weizhou zeng', 'red');
createMarker(map, 37.9513888889, 112.335277778, 'Zefeng Li', 'red');
createMarker(map, 42.5766666667, -121.868055556, 'Wesley Stone', 'red');
createMarker(map, 23.0955555556, -82.3538888889, 'Mileny Roche Lamas', 'red');
createMarker(map, -6.51166666667, -36.3525, 'Anderson Dantas', 'red');
createMarker(map, 40.5405555556, 116.821111111, 'Xiangnan Feng', 'red');
createMarker(map, 51.4333333333, -1.8, 'Richard Fleet', 'red');
createMarker(map, 52.4572222222, 13.375, 'Kai Schultze', 'red');
createMarker(map, 11.4208333333, 107.428333333, 'Elena Evdokimova', 'red');
createMarker(map, 35.4408333333, 138.746111111, 'Tomoko Sato', 'red');
createMarker(map, 40.0230555556, 115.990555556, 'Xiaofan Wei', 'red');
createMarker(map, 48.55, 11.7166666667, 'Sirko Molau', 'red');
createMarker(map, 40.555, 116.83, 'Qi Xin', 'red');
createMarker(map, 31.23, 121.47, 'Yuxi Mi', 'red');
createMarker(map, 18.6325, 73.6138888889, 'Kaustubh Vaste', 'red');
createMarker(map, 19.0555555556, 72.2730555556, 'Rahul  Patil', 'red');
createMarker(map, 49.8333333333, 9.95, 'Pierre Bader', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'Jurgen Rendtel', 'red');
createMarker(map, 11.4208333333, 107.428333333, 'Artyom Novichonok', 'red');
createMarker(map, 47.5166666667, 19.2, 'Zsofia Biro', 'red');
createMarker(map, 30.3080555556, 34.1344444444, 'Anna Levina', 'red');
createMarker(map, 52.2952777778, 6.74777777778, 'Peter van Leuteren', 'red');
createMarker(map, 11.4208333333, 107.428333333, 'Olga Descherevskaya', 'red');
createMarker(map, 41.8791666667, 12.4522222222, 'Costantino Sigismondi', 'red');
createMarker(map, 23.0955555556, -82.3538888889, 'Adrián Lelyén Fernández', 'red');
createMarker(map, 19.0555555556, 72.2730555556, 'Rahul Patil', 'red');
createMarker(map, 38.05, 114.501944444, 'Wei GE', 'red');
	}