
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
			createMarker(map, 44.2466666667, 19.9311111111, 'Ivan Stankovic', 'red');
createMarker(map, 52.165, 22.2713888889, 'Maciek Myszkiewicz', 'red');
createMarker(map, 47.9, 19.9166666667, 'Karoly Jonas', 'red');
createMarker(map, 62.5480555556, -114.363888889, 'Stephen Bedingfield', 'red');
createMarker(map, 32.7347222222, 118.471111111, 'Xiaoyu Wang', 'red');
createMarker(map, 32.7347222222, 118.471111111, 'Hong Yan', 'red');
createMarker(map, 32.7347222222, 118.471111111, 'Jiaying Yang', 'red');
createMarker(map, 32.7347222222, 118.471111111, 'Zixue Zhou', 'red');
createMarker(map, 32.7347222222, 118.471111111, 'Jinye Yang', 'red');
createMarker(map, 32.7347222222, 118.471111111, 'Yunyao Que', 'red');
createMarker(map, 51.29, 12.36, 'Roland Winkler', 'red');
createMarker(map, 52.76, 13.665, 'Sirko Molau', 'red');
createMarker(map, 27.9666666667, -15.5833333333, 'Orlando Benítez Sánchez', 'red');
createMarker(map, 48.5013888889, 35.0333333333, 'Artem Mirgorod', 'red');
createMarker(map, 32.7347222222, 118.471111111, 'Fangzheng Shi', 'red');
createMarker(map, 34.9380555556, 139.131666667, 'Katsuyuki Kobayashi', 'red');
createMarker(map, 34.9380555556, 139.131666667, 'Hideki Seo', 'red');
createMarker(map, 44.2466666667, 19.9311111111, 'David Buzgo', 'red');
createMarker(map, 52.9366666667, 13.9077777778, 'Jurgen Rendtel', 'red');
createMarker(map, 58.985, 5.70055555556, 'Andras Uhrin', 'red');
createMarker(map, 52.165, 22.2713888889, 'Maciej Myszkiewicz', 'red');
createMarker(map, 32.7347222222, 118.471111111, 'Shangyi Ning', 'red');
createMarker(map, 44.2466666667, 19.9311111111, 'Snezana Todorovic', 'red');
createMarker(map, 32.7347222222, 118.471111111, 'Ziwei Su', 'red');
createMarker(map, 54.25, 12.85, 'Ralf Koschack', 'red');
createMarker(map, 32.7347222222, 118.471111111, 'Yinghua Zhang', 'red');
createMarker(map, 34.9380555556, 139.131666667, 'Kazumi Terakubo', 'red');
createMarker(map, 27.9666666667, -15.5833333333, 'PEDRO PEREZ CORUJO', 'red');
createMarker(map, 34.9380555556, 139.131666667, 'Takao Yoshimura', 'red');
createMarker(map, 35.5541666667, 140.47, 'Shigeo Uchiyama', 'red');
createMarker(map, 42.1094444444, -71.1811111111, 'Richard Kramer', 'red');
createMarker(map, 39.6608333333, -86.0502777778, 'Paul Zeller', 'red');
createMarker(map, 17.6408333333, 103.834166667, 'Valentin Velkov', 'red');
createMarker(map, 47.9, 19.9166666667, 'Istvan Tepliczky', 'red');
createMarker(map, 69.7780555556, 19.3813888889, 'Ina Rendtel', 'red');
createMarker(map, 34.9380555556, 139.131666667, 'Mikiya Sato', 'red');
createMarker(map, 32.7347222222, 118.471111111, 'Yisheng Gong', 'red');
createMarker(map, 44.2466666667, 19.9311111111, 'Branislav Savic', 'red');
createMarker(map, 30.2766666667, -103.596111111, 'Terrence Ross', 'red');
	}