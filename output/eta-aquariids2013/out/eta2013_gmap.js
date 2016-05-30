
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
			createMarker(map, -27.6611111111, -48.545, 'Alexandre Amorim', 'red');
createMarker(map, 36.2305555556, 140.105555556, 'Shigeo Uchiyama', 'red');
createMarker(map, 50.7166666667, 3.63333333333, 'Michel Vandeputte', 'red');
createMarker(map, 35.0011111111, 32.8963888889, 'Sasha Prokofyev', 'red');
createMarker(map, 44.7283333333, 34.015, 'Alla Volkova', 'red');
createMarker(map, 44.2466666667, 19.9305555556, 'ivana marjanovic', 'red');
createMarker(map, 31.8119444444, 35.0102777778, 'Tamara Tchenak', 'red');
createMarker(map, 44.1994444444, 19.825, 'Branislav Savic', 'red');
createMarker(map, 25.0169444444, 121.536944444, 'Yidong Yu', 'red');
createMarker(map, 18.6186111111, 73.8036111111, 'Devika Hardikar', 'red');
createMarker(map, 30.2766666667, -103.596111111, 'Ross Terrence', 'red');
createMarker(map, 44.2466666667, 19.9305555556, 'Ivana Marjanovic', 'red');
createMarker(map, 30.3083333333, 35.1352777778, 'Michal Lewenstein', 'red');
createMarker(map, 49.8833333333, 3.43333333333, 'Frederic MERLIN', 'red');
createMarker(map, 31.8119444444, 35.0102777778, 'Ilan Tchenak', 'red');
createMarker(map, 28.3025, -16.5102777778, 'Jurgen Rendtel', 'red');
createMarker(map, 35.4241666667, 138.746111111, 'Mikiya Sato', 'red');
createMarker(map, 34.3363888889, 126.828333333, 'Seokhee Cho', 'red');
createMarker(map, 47.82, 25.82, 'Lucian-Mihai Cosovanu', 'red');
createMarker(map, 44.7283333333, 34.015, 'Selim Yakybov', 'red');
createMarker(map, 44.1994444444, 19.825, 'Branislav  Savic', 'red');
createMarker(map, 44.73, 34.0163888889, 'Anna Pavlova', 'red');
createMarker(map, 53.5366666667, -112.78, 'Bruce McCurdy', 'red');
createMarker(map, 52.5508333333, 31.9530555556, 'Alexsandr Morozov', 'red');
createMarker(map, 28.4, -13.9833333333, 'Enrique de Ferra Fantín', 'red');
createMarker(map, 18.6186111111, 73.8036111111, 'Neeraja Chinchalkar', 'red');
createMarker(map, 31.8119444444, 35.0102777778, 'Ella Ratz', 'red');
createMarker(map, 44.73, 34.0163888889, 'Roman Zvagelsky', 'red');
createMarker(map, 31.8119444444, 35.0102777778, 'Anna Levin', 'red');
createMarker(map, 52.3333333333, 5.66666666667, 'Koen Miskotte', 'red');
createMarker(map, 30.3083333333, 35.1352777778, 'Anna Levin', 'red');
createMarker(map, 44.2466666667, 19.9305555556, 'Ilija Ivanovic', 'red');
createMarker(map, 44.2466666667, 19.9305555556, 'Branislav Savic', 'red');
createMarker(map, 47.4438888889, 19.5377777778, 'Janos Bakos', 'red');
createMarker(map, -27.6611111111, -48.545, 'Adair Cardoso', 'red');
createMarker(map, -22.4011111111, -45.5316666667, 'Gabriel Hickel', 'red');
createMarker(map, 28.2972222222, -16.5083333333, 'Jurgen Rendtel', 'red');
createMarker(map, 31.8125, 35.0105555556, 'Shy Halatzi', 'red');
createMarker(map, 30.2766666667, -103.596111111, 'Terrence Ross', 'red');
createMarker(map, 40.6925, 117.14416666667, 'Tianwei Zhang', 'red');
createMarker(map, 44.73, 34.0163888889, 'Marina Kychyzhyyeva', 'red');
createMarker(map, 25.0169444444, 121.536944444, 'Yidong Yu', 'red');
createMarker(map, 44.2466666667, 19.9305555556, 'dasa spasojevic', 'red');
createMarker(map, 43.671944444444, 41.44, 'Albina Petrova', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'Jurgen Rendtel', 'red');
createMarker(map, 44.73, 34.0163888889, 'Maria Makarova', 'red');
createMarker(map, 47.82, 25.82, 'Ilie Cosovanu', 'red');
createMarker(map, 47.82, 25.82, 'Daniel Cosovanu', 'red');
createMarker(map, 47.4438888889, 19.5377777778, 'Janos Bakos', 'red');
createMarker(map, 44.2466666667, 19.9305555556, 'Ana ?egarac', 'red');
createMarker(map, 45.965, 20.7655555556, 'Florin Leu', 'red');
createMarker(map, 51.1683333333, 22.9197222222, 'tomasz lenart', 'red');
createMarker(map, 45.965, 20.7655555556, 'FLORIN LEU', 'red');
createMarker(map, 35.4241666667, 138.746111111, 'Tomoko Sato', 'red');
createMarker(map, 40.6925, 117.14416666667, 'Weizhou Zeng', 'red');
createMarker(map, 35.0011111111, 32.8963888889, 'Sasha Prokofyev', 'red');
createMarker(map, 35.0011111111, 32.8963888889, 'Sasha Prokophiev', 'red');
createMarker(map, 19.4166666667, -155.216666667, 'Michael Linnolt', 'red');
createMarker(map, 44.7283333333, 34.015, 'Marta Volkova', 'red');
createMarker(map, 31.8119444444, 35.0102777778, 'Nadav Rotenberg', 'red');
createMarker(map, -26.0901944444, 28.3161111111, 'TIM COOPER', 'red');
createMarker(map, 49.7833333333, 9.88333333333, 'Pierre Bader', 'red');
createMarker(map, 35.0011111111, 32.8963888889, 'Sasha Prokofyev', 'red');
createMarker(map, 43.671944444444, 41.44, 'Stanislav Korotkiy', 'red');
createMarker(map, 35.0011111111, 32.8963888889, 'Sasha Prokofyev', 'red');
createMarker(map, 52.165, 22.2713888889, 'Maciek Myszkiewicz', 'red');
createMarker(map, 52.415, 6.96611111111, 'Peter van Leuteren', 'red');
createMarker(map, 44.7283333333, 34.015, 'Daria Maskova', 'red');
	}