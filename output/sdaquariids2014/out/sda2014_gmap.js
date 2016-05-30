
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
			createMarker(map, 44.1583333333, 19.6869444444, 'Ivan Stankovic', 'red');
createMarker(map, 46.2272222222, 18.0702777778, 'Kitti Szabo', 'red');
createMarker(map, 36.2305555556, 140.105555556, 'Shigeo Uchiyama', 'red');
createMarker(map, 46.5666666667, 19.7833333333, 'Dorina Balind', 'red');
createMarker(map, 44.1591666667, 19.6869444444, 'Snezana Todorovic', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Ivan Stankovic', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Milos Igrutinovic', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Nikola Vlajnic', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Branisla Savic', 'red');
createMarker(map, 57.5222222222, 18.1088888889, 'Ina Rendtel', 'red');
createMarker(map, 40.3080555556, 115.713333333, 'Fengwu Sun', 'red');
createMarker(map, 46.5666666667, 19.7833333333, 'Mate Toth', 'red');
createMarker(map, 48.9236111111, 17.86, 'Jozef Drga', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Nikola Vlajnic', 'red');
createMarker(map, 46.0291666667, 14.6544444444, 'Javor Kac', 'red');
createMarker(map, 56.9311111111, 18.1380555556, 'Ina Rendtel', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Ema Lupsic', 'red');
createMarker(map, 52.045, 12.6283333333, 'Christoph Gerber', 'red');
createMarker(map, 52.5508333333, 31.9530555556, 'Alexsandr Morozov', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Aleksa Pantic', 'red');
createMarker(map, 41.5666666667, 25.15, 'Ilian Stefchov', 'red');
createMarker(map, 37.2025, 139.748055556, 'Shigeo Uchiyama', 'red');
createMarker(map, 48.9236111111, 17.86, 'Matej Sustr', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Marina Arnaut', 'red');
createMarker(map, 48.8061111111, 21.9666666667, 'Csilla Kalup', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Bratislav Filipovic', 'red');
createMarker(map, 57.9747222222, 19.2663888889, 'Ina Rendtel', 'red');
createMarker(map, 52.3333333333, 5.66666666667, 'Koen Miskotte', 'red');
createMarker(map, 46.5666666667, 19.7833333333, 'Adam Weinhardt - Kovacs', 'red');
createMarker(map, 48.9236111111, 17.86, 'Igor Zahornacky', 'red');
createMarker(map, 30.5180555556, 119.620555556, 'yurun Huang', 'red');
createMarker(map, 48.9236111111, 17.86, 'Samuel Koys', 'red');
createMarker(map, 19.9419444444, 50.0213888889, 'Maciej Kwinta', 'red');
createMarker(map, 41.5666666667, 25.15, 'Irina Kurteva', 'red');
createMarker(map, 49.1308333333, 18.5613888889, 'Nikoleta Martinakova', 'red');
createMarker(map, -22.4011111111, -45.5316666667, 'Gabriel Hickel', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Branislav Savic', 'red');
createMarker(map, 41.5166666667, 25.5166666667, 'Stefani Stefanova', 'red');
createMarker(map, 53.9505555556, 27.3236111111, 'Konstantin Morozov', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Ivan Stankovic', 'red');
createMarker(map, 39.6597222222, -86.0502777778, 'Paul Zeller', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Oliver Toskovic', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Bratislav Filipovic', 'red');
createMarker(map, 35.2386111111, 23.7219444444, 'Thomas Weiland', 'red');
createMarker(map, 45.2688888889, -75.0630555556, 'Pierre Martin', 'red');
createMarker(map, 44.1608333333, 19.6869444444, 'Ivan Stankovic', 'red');
createMarker(map, 49.1308333333, 18.5613888889, 'Martina Birosikova', 'red');
createMarker(map, 49.1308333333, 18.5613888889, 'Radim Volek', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Branislav Savic', 'red');
createMarker(map, 48.9236111111, 17.86, 'Matej Zahornacky', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Ema Lupsic', 'red');
createMarker(map, 54.0011111111, 27.2611111111, 'Konstantin Morozov', 'red');
createMarker(map, 49.1308333333, 18.5613888889, 'Martin Labudik', 'red');
createMarker(map, 46.4977777778, 15.2555555556, 'Javor Kac', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Dusanka Kovacevic', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Debora Pavela', 'red');
createMarker(map, 46.5666666667, 19.7833333333, 'Martin Sallai', 'red');
createMarker(map, 44.1536111111, 19.6869444444, 'Dusanka Kovacevic', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Boris Majic', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Miroslav Zivanovic', 'red');
createMarker(map, 49.7819444444, 20.0216666667, 'Maciej Kwinta', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Miroslav Zivanovic', 'red');
createMarker(map, 49.1308333333, 18.5613888889, 'Jaroslav Drgona', 'red');
createMarker(map, 57.7413888889, 19.0108333333, 'Ina Rendtel', 'red');
createMarker(map, 38.65, -89.3333333333, 'Pete Kozich', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Jovana Jankov', 'red');
createMarker(map, 35.2594444444, 23.7594444444, 'Thomas Weiland', 'red');
createMarker(map, 41.5166666667, 25.5166666667, 'Desislava Kalaidjieva', 'red');
createMarker(map, 45.0252777778, 25.3216666667, 'Stefan Schmeissner', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Caslav Lukic', 'red');
createMarker(map, 52.165, 22.2713888889, 'Maciek Myszkiewicz', 'red');
createMarker(map, 47.7169444444, 37.5572222222, 'Alexandr Maidik Maidik', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Snezana Todorovic', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Marina Arnaut', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Ivana Majranovic', 'red');
createMarker(map, 30.5280555556, 34.6261111111, 'Anna Levina', 'red');
createMarker(map, 46.5666666667, 19.7833333333, 'Jazmin Sikar', 'red');
createMarker(map, 48.5461111111, 35.0130555556, 'Artem Mirgorod', 'red');
createMarker(map, 35.947777777778, -95.7125, 'William Godley', 'red');
createMarker(map, 44.1583333333, 19.6916666667, 'Dunja Pavlovic', 'red');
createMarker(map, 57.9061111111, 19.0236111111, 'Ina Rendtel', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Dusan Pavlovic', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Boris Majic', 'red');
createMarker(map, 42.576666666667, -121.86833333333, 'Wesley Stone', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Nikola Vlajnic', 'red');
createMarker(map, 53.1, 11.9, 'Jurgen Rendtel', 'red');
createMarker(map, 57.7611111111, 18.4133333333, 'Ina Rendtel', 'red');
createMarker(map, 50.6616666667, 10.5583333333, 'Pierre Bader', 'red');
createMarker(map, 49.1308333333, 18.5613888889, 'Martin Dana', 'red');
createMarker(map, 53.5366666667, -112.78, 'Bruce McCurdy', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Snezana Todorovic', 'red');
createMarker(map, 35.2377777778, 23.5925, 'Thomas Weiland', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Vladimir Obradovic', 'red');
createMarker(map, 57.3875, 18.8755555556, 'Ina Rendtel', 'red');
createMarker(map, 51.1255555556, 13.5975, 'Frank Waechter', 'red');
createMarker(map, 47.7169444444, 37.5572222222, 'Alexandr Maidik', 'red');
createMarker(map, 46.3969444444, 16.2688888889, 'Mitja Govedic', 'red');
createMarker(map, 39.6097222222, -0.779444444444, 'Jose Vicente Diaz Martinez', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Miroslav Zivanovic', 'red');
createMarker(map, 45.3833333333, -76.4833333333, 'Pierre Martin', 'red');
createMarker(map, 49.1308333333, 18.5613888889, 'Daniel Marek', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Ljubica Grasic', 'red');
createMarker(map, 44.2833333333, 39.2833333333, 'Aleksei Makarow', 'red');
createMarker(map, 51.1255555556, 13.5975, 'Sabine Waechter', 'red');
createMarker(map, 30.2766666667, -103.596111111, 'Terrence Ross', 'red');
createMarker(map, -38.63, 177.883333333, 'John Drummond', 'red');
createMarker(map, 44.1591666667, 19.6869444444, 'Jovana Jankov', 'red');
createMarker(map, 41.5666666667, 25.15, 'Yulia Yancheva', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Miroslav Zivanovic', 'red');
createMarker(map, 45.8127777778, 14.6955555556, 'Javor Kac', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'Jurgen Rendtel', 'red');
createMarker(map, 57.2180555556, 18.6861111111, 'Ina Rendtel', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Ljubica Grasic', 'red');
createMarker(map, 43.6183333333, 11.2044444444, 'Oliver Wusk', 'red');
createMarker(map, 21.7366666667, 112.227777778, 'Chengye Cao', 'red');
createMarker(map, 49.7833333333, 9.88333333333, 'Pierre Bader', 'red');
createMarker(map, 48.9236111111, 17.86, 'Juraj Kubica', 'red');
createMarker(map, 49.1308333333, 18.5613888889, 'Pavol Habuda', 'red');
	}