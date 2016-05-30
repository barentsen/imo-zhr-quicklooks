
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
createMarker(map, 18.4872222222, 73.7083333333, 'Nikhil  Sharma', 'red');
createMarker(map, 18.3205555556, 73.7083333333, 'Bela Mhasavade', 'red');
createMarker(map, 40.4, 117.5, 'Xiaofan Wei', 'red');
createMarker(map, 47.716944444444, 37.557222222222, 'Alexandr Maidik', 'red');
createMarker(map, 40.6925, 117.14416666667, 'Yidong Yu', 'red');
createMarker(map, 40.6925, 117.14416666667, 'Tianwei Zhang', 'red');
createMarker(map, 19.9766666667, 76.5083333333, 'Jatin Rathod', 'red');
createMarker(map, 35.001388888889, 32.896111111111, 'Sasha Prokofyev', 'red');
createMarker(map, 34.965833333333, 32.941111111111, 'Sasha Prokofyev', 'red');
createMarker(map, 18.4872222222, 73.7083333333, 'MRUNMAYI PHATAK', 'red');
createMarker(map, 40.7, 117.2, 'Sihao CHENG', 'red');
createMarker(map, 18.3205555556, 73.7083333333, 'Apekshit Bhingardive', 'red');
createMarker(map, 18.4872222222, 73.7083333333, 'MOHINI NAGARDEOLEKAR', 'red');
createMarker(map, 40.6925, 117.14416666667, 'Chenghao Yu', 'red');
createMarker(map, 40.6925, 117.14416666667, 'Weizhou Zeng', 'red');
createMarker(map, 43.005, -78.903888888889, 'William Watson', 'red');
createMarker(map, 35.0452777778, 32.9186111111, 'Sasha Prokofyev', 'red');
createMarker(map, 30.276666666667, -103.59611111111, 'Terrence Ross', 'red');
createMarker(map, 38.776388888889, 116.81527777778, 'Qiang Ma', 'red');
createMarker(map, 28.7619444444, -17.8775, 'Geert Barentsen', 'red');
createMarker(map, 19.9805555556, 76.5166666667, 'Jay Kansara', 'red');
createMarker(map, 45.5936111111, 14.0936111111, 'Javor Kac', 'red');
createMarker(map, 35.051666666667, 32.921388888889, 'Sasha Prokofyev', 'red');
createMarker(map, 50.9022222222, 20.7822222222, 'Andrzej Skoczewski', 'red');
createMarker(map, 31.512222222222, 121.95555555556, 'Simiao CHENG', 'red');
createMarker(map, 18.487222222222, 73.725, 'Tushar Purohit', 'red');
createMarker(map, 39.6097222222, -0.779444444444, 'Jose Vicente Díaz Martínez', 'red');
createMarker(map, 45.792777777778, -76.858888888889, 'Pierre Martin', 'red');
createMarker(map, 18.3205555556, 73.7083333333, 'Ganesh Ghugari', 'red');
createMarker(map, 18.4872222222, 73.7083333333, 'zameer manur', 'red');
createMarker(map, 40.556666666667, 116.83138888889, 'Allen Zhong', 'red');
createMarker(map, 26.559722222222, 101.84194444444, 'Lin Luo', 'red');
createMarker(map, 30.2766666667, -103.596111111, 'Terrence Ross', 'red');
createMarker(map, 36.262222222222, 140.10138888889, 'Shigeo Uchiyama', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'Jurgen Rendtel', 'red');
createMarker(map, 34.996388888889, 32.966111111111, 'Sasha Prokofyev', 'red');
createMarker(map, 46.190555555556, 14.350277777778, 'Klemen Cotar', 'red');
createMarker(map, 47.8322222222, 16.0441666667, 'Thomas Weiland', 'red');
createMarker(map, 29.625555555556, 52.564444444444, 'Kianoosh Mohseni', 'red');
	}