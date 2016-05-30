
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
createMarker(map, 47.9, 19.9166666667, 'Zsofi Biro', 'red');
createMarker(map, 28.2972222222, -16.5083333333, 'Jurgen Rendtel', 'red');
createMarker(map, 35.947777777778, -95.7125, 'William Godley', 'red');
createMarker(map, 47.9, 19.9166666667, 'Karoly Jonas', 'red');
createMarker(map, 49.5438888889, 18.4522222222, 'Jakub Koukal', 'red');
createMarker(map, 18.4163888889, 73.4708333333, 'APURVA CHORDIA', 'red');
createMarker(map, 45.2505555556, -76.2638888889, 'Pierre Martin', 'red');
createMarker(map, 38.9566666667, 117.103333333, 'Qiang Ma', 'red');
createMarker(map, 41.6333333333, -4.71666666667, 'Francisco José Sevilla Lobato', 'red');
createMarker(map, 18.4163888889, 73.4708333333, 'SHALMALEE KAPSE', 'red');
createMarker(map, 40.6925, 117.14416666667, 'Bingqi Tong', 'red');
createMarker(map, -27.6602777778, -48.5436111111, 'Alexandre Amorim', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'Jurgen Rendtel', 'red');
createMarker(map, 18.5, 73.88, 'KIRAN WANI', 'red');
createMarker(map, 40.6925, 117.14416666667, 'Weizhou Zeng', 'red');
createMarker(map, 19.0555555556, 72.2730555556, 'Shalan Patil', 'red');
createMarker(map, 22.3883333333, 109.253611111, 'Jiangao Ruan', 'red');
createMarker(map, 40.6925, 117.14416666667, 'Zheng Kuang', 'red');
createMarker(map, 40.6925, 117.14416666667, 'Yuguang  Chen ', 'red');
createMarker(map, 19.0555555556, 72.2730555556, 'Piraji Patil', 'red');
createMarker(map, 19.0555555556, 72.2730555556, 'Pramila Patil', 'red');
createMarker(map, 50.7166666667, 3.63333333333, 'Michel Vandeputte', 'red');
createMarker(map, 29.2175, -110.76055555556, 'Aguirre Salvador', 'red');
createMarker(map, 45.8130555556, 14.6955555556, 'Javor Kac', 'red');
createMarker(map, 38.463888888889, -76.983055555556, 'Richard Taibi', 'red');
createMarker(map, 53.25, 108.733333333, 'Students BSU', 'red');
createMarker(map, 22.3883333333, 109.253611111, 'Jiangao  Ruan', 'red');
createMarker(map, 47.7169444444, 37.5572222222, 'Alexandr Maidik', 'red');
createMarker(map, 19.0555555556, 72.2730555556, 'Tejaswini Varade', 'red');
createMarker(map, 47.9, 19.9166666667, 'Jozsef Morvai', 'red');
createMarker(map, 47.9, 19.9166666667, 'Istvan Tepliczky', 'red');
createMarker(map, 18.5, 73.88, 'KIRAN  WANI', 'red');
createMarker(map, 18.4163888889, 73.4708333333, 'SONAL THORVE', 'red');
createMarker(map, 19.0555555556, 72.2730555556, 'KHIMARAM CHUADHARY', 'red');
	}