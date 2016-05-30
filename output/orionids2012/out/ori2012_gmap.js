
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
createMarker(map, 32.7583333333, -79.8555555556, 'Mark Davis', 'red');
createMarker(map, 52.2908333333, 13.2586111111, 'Kai Schultze', 'red');
createMarker(map, 43.1201388889, 27.6705555556, 'Ivanka Getsova', 'red');
createMarker(map, 48.81, 22.0263888889, 'Michal Palo', 'red');
createMarker(map, 52.6666666667, 13.85, 'Frank Enzlein', 'red');
createMarker(map, 48.085, 17.5466666667, 'Tibor Csörgei', 'red');
createMarker(map, 24.8388888889, 117.971388889, 'Yi Cao', 'red');
createMarker(map, -7.95, -34.8666666667, 'Josafary Campelo', 'red');
createMarker(map, 40.7569444444, 14.4477777778, 'Roman Kovalyk', 'red');
createMarker(map, 50.7166666667, 3.63333333333, 'Michel Vandeputte', 'red');
createMarker(map, 54.96, 12.3, 'Tom Axelsen', 'red');
createMarker(map, 52.5508333333, 31.9530555556, 'Alexsandr Morozov', 'red');
createMarker(map, 52.415, 6.96638888889, 'Sietse Dijkstra', 'red');
createMarker(map, 48.81, 22.0263888889, 'Milada Jakubecova', 'red');
createMarker(map, 42.6730555556, -78.3847222222, 'William Watson', 'red');
createMarker(map, 47.45, 19.4833333333, 'Csilla Tepliczky', 'red');
createMarker(map, 35.1525, 33.3652777778, 'Sasha Prokofyev', 'red');
createMarker(map, 46.4463888889, 15.5327777778, 'Javor Kac', 'red');
createMarker(map, 40.76, 14.45, 'Roman Kovalyk', 'red');
createMarker(map, 47.6666666667, 18.4, 'Karoly Jonas', 'red');
createMarker(map, 43.1201388889, 27.6705555556, 'Alexandrina Yaneva', 'red');
createMarker(map, 42.5766666667, -121.868055556, 'Wesley Stone', 'red');
createMarker(map, 39.9897222222, 116.308333333, 'Weizhou Zeng', 'red');
createMarker(map, 44.1577777778, 19.68, 'Vesna Slavkovic', 'red');
createMarker(map, 35.1611111111, 33.3652777778, 'Sasha Prokofyev', 'red');
createMarker(map, 55.5833333333, 26.1333333333, 'Audrius Dubietis', 'red');
createMarker(map, 48.4772222222, 15.1433333333, 'Thomas Weiland', 'red');
createMarker(map, 44.1583333333, 19.68, 'Branislav Savic', 'red');
createMarker(map, 45.3666666667, 20.3833333333, 'Laszlo Kocsmaros', 'red');
createMarker(map, 48.81, 22.0263888889, 'Marian Mraz', 'red');
createMarker(map, 43.1201388889, 27.6705555556, 'Vesselina Sadovska', 'red');
createMarker(map, 45.7263888889, 14.0255555556, 'Maru\v{s}ka Mole', 'red');
createMarker(map, 44.2944444444, 26.4497222222, 'Nicolae Adrian Corlaci', 'red');
createMarker(map, 44.5588888889, -77.1158333333, 'Pierre Martin', 'red');
createMarker(map, -6.49305555556, -36.3955555556, 'Anderson Dantas', 'red');
createMarker(map, 19.4166666667, -155.216666667, 'Michael Linnolt', 'red');
createMarker(map, 36.2622222222, 140.101388889, 'Shigeo Uchiyama', 'red');
createMarker(map, 38.463888888889, -76.983055555556, 'Richard Taibi', 'red');
createMarker(map, 43.1201388889, 27.6705555556, 'Alexandrina  Yaneva', 'red');
createMarker(map, 52.2908333333, 13.2591666667, 'Rainer Arlt', 'red');
createMarker(map, 44.1583333333, 19.68, 'Branislav Savic', 'red');
createMarker(map, 52.165, 22.2713888889, 'Maciek Myszkiewicz', 'red');
createMarker(map, 52.415, 6.96611111111, 'Peter van Leuteren', 'red');
createMarker(map, 48.81, 22.0263888889, 'Zdenek Komarek', 'red');
createMarker(map, 48.81, 22.0263888889, 'Jozef Karlik', 'red');
createMarker(map, 29.2175, -110.760555556, 'salvador aguirre', 'red');
createMarker(map, 45.0252777778, 25.3216666667, 'Florin Stancu', 'red');
createMarker(map, 48.81, 22.0263888889, 'Sara Belejova', 'red');
createMarker(map, 30.2763888889, -103.596111111, 'Terrence Ross', 'red');
createMarker(map, 49.3038888889, 17.3961111111, 'Sylvie Gorkova', 'red');
createMarker(map, 48.81, 22.0263888889, 'Katarina Skopalova', 'red');
createMarker(map, 48.3344444444, 15.34, 'Thomas Weiland', 'red');
createMarker(map, 28.6166666667, 77.25, 'chander devgun', 'red');
createMarker(map, 47.7169444444, 37.5572222222, 'Alexandr Maidik', 'red');
createMarker(map, 37.815, 23.8011111111, 'Alex Daskalakis', 'red');
createMarker(map, 49.3038888889, 17.3961111111, 'Jakub Koukal', 'red');
createMarker(map, 44.1583333333, 19.68, 'Marina Arnaut', 'red');
createMarker(map, 49.4302777778, 8.64916666667, 'Christoph Gerber', 'red');
createMarker(map, 44.1583333333, 19.68, 'Vesna Slavkovic', 'red');
createMarker(map, 44.1583333333, 19.68, 'Ana Zegarac', 'red');
createMarker(map, 46.5172222222, 20.4222222222, 'Adam Szabo', 'red');
createMarker(map, 48.5083333333, 16.5530555556, 'Thomas Weiland', 'red');
createMarker(map, 44.1583333333, 19.68, 'Kristina Veljkovic', 'red');
createMarker(map, 45.7263888889, 14.0255555556, 'Javor Kac', 'red');
createMarker(map, 36.055, 14.2005555556, 'Michael Nolle', 'red');
createMarker(map, 46.9666666667, 19.2833333333, 'Karoly Jonas', 'red');
createMarker(map, 52, 106.866666667, 'BSU STUDENTS', 'red');
createMarker(map, 19.0833333333, -155.75, 'Michael Linnolt', 'red');
createMarker(map, -35.8, 145.55, 'Adam Marsh', 'red');
createMarker(map, 48.8411111111, 18.1030555556, 'Martin Polak', 'red');
createMarker(map, 48.8411111111, 18.1030555556, 'Stanislav Simkovic', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'Jurgen Rendtel', 'red');
createMarker(map, 45.8127777778, 14.6955555556, 'Javor Kac', 'red');
createMarker(map, -38.63, 177.883333333, 'John Drummond', 'red');
createMarker(map, 35.8, 145.55, 'Corey Poynton', 'red');
createMarker(map, 51.1683333333, 22.9197222222, 'tomasz lenart', 'red');
createMarker(map, 35.1580555556, 33.3813888889, 'Sasha Prokofyev', 'red');
createMarker(map, 39.1013888889, -91.0136111111, 'Pete Kozich', 'red');
createMarker(map, 49.7833333333, 9.88333333333, 'Pierre Bader', 'red');
createMarker(map, 44.1583333333, 19.68, 'Nina Bogdanovic', 'red');
createMarker(map, 44.1583333333, 19.68, 'Kristina Veljkovic', 'red');
createMarker(map, 38.7763888889, 116.815277778, 'Qiang Ma', 'red');
createMarker(map, 47.8322222222, 16.0441666667, 'Thomas Weiland', 'red');
createMarker(map, 52.2908333333, 13.2588888889, 'Oliver Hanke', 'red');
createMarker(map, 48.8411111111, 18.1030555556, 'Igor Zahornacky', 'red');
createMarker(map, 52.2908333333, 13.2591666667, 'Christian Schmiel', 'red');
createMarker(map, 46.4327777778, 13.7430555556, 'Klemen Cotar', 'red');
createMarker(map, 45.8041666667, 14.6975, 'Javor Kac', 'red');
	}