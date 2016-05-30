
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
			createMarker(map, 52.5963888889, 16.5691666667, 'Maciej Reszelski', 'red');
createMarker(map, 50.7166666667, 50.7166666667, 'Michel Vandeputte', 'red');
createMarker(map, 44.2416666667, 19.9305555556, 'Ilija Ivanovic', 'red');
createMarker(map, 44.2416666667, 19.9305555556, 'Branislav Savic', 'red');
createMarker(map, 53.25, 108.733333333, 'Students BSU Tsurendashiev Sogto', 'red');
createMarker(map, 44.2416666667, 19.9305555556, 'Aleksandar  Matic', 'red');
createMarker(map, 53.25, 108.733333333, 'Students BSU Osorov  Vladimir', 'red');
createMarker(map, 53.25, 108.733333333, 'Students BSU Osorov Vladimir', 'red');
createMarker(map, 44.2416666667, 19.9305555556, 'Branislav Savic', 'red');
createMarker(map, 45.9683333333, 14.1419444444, 'Javor Kac', 'red');
createMarker(map, 44.2416666667, 19.9305555556, 'Ljubica Grasic', 'red');
createMarker(map, 53.25, 108.733333333, 'Students BSU Zurbaev Bimba', 'red');
createMarker(map, 30.2763888889, -103.596111111, 'Terrence Ross', 'red');
createMarker(map, 44.2416666667, 19.9305555556, 'Jovana Milic', 'red');
createMarker(map, 53.25, 108.733333333, 'Students BSU Otto Galina', 'red');
createMarker(map, 44.2416666667, 19.9305555556, 'Milena Zivotic', 'red');
createMarker(map, 44.2416666667, 19.9305555556, 'Snezana Todorovic', 'red');
createMarker(map, 44.2416666667, 19.9305555556, 'Igor Bukva', 'red');
createMarker(map, 28.2102777778, -16.6447222222, 'Francisco Ocaña González', 'red');
createMarker(map, 44.2416666667, 19.9305555556, 'Ljubica Grasic', 'red');
createMarker(map, 39.6097222222, -0.779444444444, 'JOSE VICENTE DIAZ MARTINEZ', 'red');
createMarker(map, 39.7733333333, 32.4302777778, 'Sasha Prokofyev', 'red');
createMarker(map, 53.25, 108.733333333, 'Students BSU Badmaev Boris', 'red');
createMarker(map, 44.2416666667, 19.9305555556, 'Kristina Veljkovic', 'red');
createMarker(map, 53.25, 108.733333333, 'Students BSU Osorov Vladimir', 'red');
createMarker(map, 49.3038888889, 17.3961111111, 'Jakub Koukal', 'red');
createMarker(map, 47.7169444444, 37.5572222222, 'Alexandr Maidik', 'red');
createMarker(map, 52.3333333333, 5.66666666667, 'Koen Miskotte', 'red');
createMarker(map, 44.2416666667, 19.9305555556, 'Jovana Milic', 'red');
createMarker(map, 53.25, 108.733333333, 'Students BSU Ondar Rolanda', 'red');
createMarker(map, 53.25, 108.733333333, 'Students BSU Dondokova Svetlana', 'red');
createMarker(map, 39.4833333333, -0.45, 'Sevilla Lobato Francisco Jose', 'red');
createMarker(map, 44.2416666667, 19.9305555556, 'Snezana Todorovic', 'red');
createMarker(map, 29.2175, -110.760555556, 'Salvador Aguirre', 'red');
createMarker(map, 53.25, 108.733333333, 'Sudents BSU Masheeva Olga', 'red');
createMarker(map, 53.25, 108.733333333, 'Students BSU Masheeva Olga', 'red');
createMarker(map, 40.5530555556, 116.830277778, 'Allen Zhong', 'red');
createMarker(map, 28.2102777778, -16.6447222222, 'Alejandro Sánchez de Miguel', 'red');
createMarker(map, 53.25, 108.733333333, 'Students BSU Muhutdinova Galina', 'red');
createMarker(map, 53.25, 108.733333333, 'Students BSU Mangadaeva Julia', 'red');
createMarker(map, 53.25, 108.733333333, 'Student BSU Tsurendashiev Sogto', 'red');
createMarker(map, 53.25, 108.733333333, 'Students BSU Solominskiy Nikolay', 'red');
createMarker(map, 53.25, 108.733333333, 'STUDENTS BSU Osorov Vladimir', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'Jurgen Rendtel', 'red');
	}