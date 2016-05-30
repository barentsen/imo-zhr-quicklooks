
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
			createMarker(map, 19.4711111111, 72.2727777778, 'Jatin Rathod', 'red');
createMarker(map, 44.8863888889, 10.775, 'Mariusz Wisniewski', 'red');
createMarker(map, 60.3236111111, 10.6444444444, 'Kai Frode Gaarder', 'red');
createMarker(map, 53.4833333333, 10.5666666667, 'Matthias Growe', 'red');
createMarker(map, 54.9333333333, 38.7166666667, 'Nikolay Nikolaev', 'red');
createMarker(map, 38.6741666667, 66.9002777778, 'Tomoko Sato', 'red');
createMarker(map, 45.7122222222, 8.90722222222, 'Lorenzo Comolli', 'red');
createMarker(map, 44.1583333333, 19.6863888889, 'Stefan Fuks', 'red');
createMarker(map, 43.9166666667, 4.98333333333, 'Stéphane BRUCHET', 'red');
createMarker(map, 27.97, -15.5877777778, 'Miguel Santana Gutiérrez', 'red');
createMarker(map, 54.44, 82.9438888889, 'Maslov Mikhail', 'red');
createMarker(map, 51.7044444444, 5.48777777778, 'Roy Keeris', 'red');
createMarker(map, 40.7569444444, 14.4477777778, 'Roman Kovalyk', 'red');
createMarker(map, 45.595, 14.0877777778, 'Javor Kac', 'red');
createMarker(map, 52.8, 11.2, 'Sirko Molau', 'red');
createMarker(map, 52.2327777778, 12.0638888889, 'Rainer Arlt', 'red');
createMarker(map, 52.165, 22.2713888889, 'Maciej Myszkiewicz', 'red');
createMarker(map, 50.7833333333, 15.75, 'Tomasz Fajfer', 'red');
createMarker(map, 44.1583333333, 19.6863888889, 'Filip Colakovic', 'red');
createMarker(map, 44.1583333333, 19.7363888889, 'Snezana Todorovic', 'red');
createMarker(map, 44.1583333333, 19.6863888889, 'Snezana Todorovic', 'red');
createMarker(map, 53.9758333333, 10.595, 'Marco Langbroek', 'red');
createMarker(map, 53.7958333333, 9.53472222222, 'Luc Bastiaens', 'red');
createMarker(map, 51.1516666667, 10.415, 'Jens Briesemeister', 'red');
createMarker(map, 52.575, 11.3861111111, 'Jurgen Rendtel', 'red');
createMarker(map, 45.5661111111, 8.505, 'Kamil Hornoch', 'red');
createMarker(map, 27.7041666667, 85.3319444444, 'Suresh  Bhattarai', 'red');
createMarker(map, 51.3536111111, 11.4808333333, 'Jan Horsky', 'red');
createMarker(map, 44.1583333333, 19.7363888889, 'Stefan Fuks', 'red');
createMarker(map, 53.9166666667, 9.15, 'Martin Krueger', 'red');
createMarker(map, 52.3333333333, 5.66666666667, 'Koen Miskotte', 'red');
createMarker(map, 44.73, 34.0163888889, 'Maria Makarova', 'red');
createMarker(map, 60.1588888889, 24.9430555556, 'Veikko Mäkelä', 'red');
createMarker(map, 45.595, 14.0880555556, 'Jure Atanackov', 'red');
createMarker(map, 44.73, 34.0163888889, 'Anna Pavlova', 'red');
createMarker(map, 45.595, 14.0880555556, 'Janez Kos', 'red');
createMarker(map, 62.1294444444, 34.0033333333, 'Artyom Novichonok', 'red');
createMarker(map, 49.5997222222, 34.6044444444, 'Roman Kostenko', 'red');
createMarker(map, 38.6741666667, 66.9002777778, 'Mikiya Sato', 'red');
createMarker(map, 37.6677777778, -4.03666666667, 'JOSE CARLOS MILLAN', 'red');
createMarker(map, 44.73, 34.0163888889, 'Seityagiya Terlekchi', 'red');
createMarker(map, 59.9369444444, 10.975, 'Håkon Dahle', 'red');
createMarker(map, 43.005, -78.9038888889, 'William Watson', 'red');
createMarker(map, 44.1583333333, 19.6863888889, 'Zora Beljic', 'red');
createMarker(map, 30.3083333333, 35.1355555556, 'Shy Halatzi', 'red');
createMarker(map, 60.8983333333, 26.4863888889, 'Ilkka Yrjölä', 'red');
createMarker(map, 45.35, 14.4166666667, 'Lovro  Pavletic', 'red');
createMarker(map, 53.9763888889, 10.5947222222, 'Sietse Dijkstra', 'red');
createMarker(map, 51.7833333333, 22.6, 'Mariusz Lemiecha', 'red');
createMarker(map, 45.5233333333, 13.9552777778, 'Antal Igaz', 'red');
createMarker(map, 44.1583333333, 19.6863888889, 'Jelisaveta Ilic', 'red');
createMarker(map, 44.1583333333, 19.7363888889, 'Jelisaveta Ilic', 'red');
createMarker(map, 51.1516666667, 10.415, 'A.O. Woost', 'red');
createMarker(map, 48.7566666667, 19.1736111111, 'Peter Zimnikoval', 'red');
createMarker(map, 45.5463888889, 10.2811111111, 'Marco Micheli', 'red');
createMarker(map, 47.7013888889, 25.8347222222, 'Ilie Cosovanu', 'red');
createMarker(map, 27.97, -15.5861111111, 'Juan Carlos Alcazar Fernandez', 'red');
createMarker(map, 47.7833333333, 37.5, 'Alexandr Maidik', 'red');
createMarker(map, 51.3536111111, 11.4808333333, 'Jan Ebr', 'red');
createMarker(map, 30.3080555556, 35.1427777778, 'Ella Ratz', 'red');
createMarker(map, 53.25, 108.733333333, 'Students BSU', 'red');
createMarker(map, 48.5458333333, 35.0125, 'Artem Mirgorod', 'red');
createMarker(map, 44.1583333333, 19.6863888889, 'Marina Vlajnic', 'red');
createMarker(map, 50.9822222222, 16.3869444444, 'Marcin Chwa?a', 'red');
createMarker(map, 53.2666666667, 108.733333333, 'Students BSU', 'red');
createMarker(map, 55.6111111111, 38.4316666667, 'Alexander Manannikov', 'red');
createMarker(map, -6.49333333333, -36.3955555556, 'Anderson Dantas', 'red');
createMarker(map, 52.5630555556, 11.3758333333, 'Frank Enzlein', 'red');
createMarker(map, 38.7833333333, -7.65, 'Michel Vandeputte', 'red');
createMarker(map, 50.3988888889, 20.0244444444, 'Piotr Guzik', 'red');
createMarker(map, 44.1583333333, 19.6863888889, 'Nevena Ilic', 'red');
createMarker(map, 37.0641666667, -3.38472222222, 'Francisco Ocaña González', 'red');
createMarker(map, 27.97, -15.5877777778, 'ISRAEL TEJERA FALCON', 'red');
createMarker(map, 44.73, 34.0163888889, 'Dasha Maskovay', 'red');
createMarker(map, 40.2794444444, 141.670833333, 'YASUHIRO TONOMURA', 'red');
createMarker(map, 51.3536111111, 11.4808333333, 'Jakub Cerny', 'red');
createMarker(map, 51.3536111111, 11.4808333333, 'Ivana Ebrova', 'red');
createMarker(map, 52.2327777778, 12.0638888889, 'Stela Frencheva', 'red');
createMarker(map, 30.3080555556, 35.1427777778, 'Anna Levina', 'red');
createMarker(map, 30.195, 121.24, 'Tianwei Zhang', 'red');
createMarker(map, 42.9363888889, 0.142777777778, 'Felix Bettonvil', 'red');
createMarker(map, 45.5233333333, 13.9552777778, 'Krisztian Sarneczky', 'red');
createMarker(map, 52.8344444444, 11.1755555556, 'Ulrich Sperberg', 'red');
createMarker(map, 53.7958333333, 9.53472222222, 'Birgit Van Opstal', 'red');
createMarker(map, 43.1266666667, 6.15111111111, 'Jens Lacorne', 'red');
createMarker(map, 52.2327777778, 12.0638888889, 'Christian Schmiel', 'red');
createMarker(map, 44.5655555556, 10.4652777778, 'Sylvie Gorkova', 'red');
createMarker(map, 39.6097222222, -0.779444444444, 'JOSE VICENTE DIAZ MARTINEZ', 'red');
createMarker(map, 44.5655555556, 10.4652777778, 'Jakub Koukal', 'red');
createMarker(map, 44.73, 34.0163888889, 'Marina Kychyzhyyeva', 'red');
createMarker(map, 30.3080555556, 35.1344444444, 'Anna Levin', 'red');
createMarker(map, 51.555, 5.09055555556, 'Glynis van Uden', 'red');
createMarker(map, 37.3766666667, 49.85, 'Reyhaneh Falah', 'red');
createMarker(map, 53.6477777778, 10.2625, 'Hartwig Luethen', 'red');
createMarker(map, 45.595, 14.0877777778, 'Rok Pucer', 'red');
createMarker(map, 44.1583333333, 19.6863888889, 'Branislav Savic', 'red');
createMarker(map, 44.1583333333, 19.7363888889, 'Branislav Savic', 'red');
createMarker(map, 30.3080555556, 35.1344444444, 'Wienie van der Oord', 'red');
createMarker(map, 48.7227777778, 17.2219444444, 'Ivo Micek', 'red');
createMarker(map, 53.9763888889, 10.5947222222, 'Carl Johannink', 'red');
createMarker(map, 28.7144444444, 77.685, 'c b devgun SPACE', 'red');
createMarker(map, 54.8333333333, 40.0344444444, 'Stanislav Korotkiy', 'red');
createMarker(map, 60.115, 23.695, 'Leo Holmberg', 'red');
createMarker(map, 36.3138888889, 58.8822222222, 'Yaser Soleimani', 'red');
createMarker(map, 50.4063888889, 20.1455555556, 'Piotr Guzik', 'red');
createMarker(map, 45.1569444444, 11.0933333333, 'Jakub Mirocha', 'red');
createMarker(map, 44.1583333333, 19.7363888889, 'Jovan Vasiljevic', 'red');
createMarker(map, 46.3969444444, 16.2688888889, 'Mitja Govedi?', 'red');
createMarker(map, 47.7972222222, 26.2858333333, 'Ioan Agavriloaiei', 'red');
createMarker(map, 36.1213888889, 138.290277778, 'Shigeo Uchiyama', 'red');
createMarker(map, 51.3333333333, -1.8, 'Richard  Fleet', 'red');
createMarker(map, 44.73, 34.0163888889, 'Andrey Kychyzhyyev', 'red');
createMarker(map, 35.9769444444, -4.51472222222, 'Blanca Troughton Luque', 'red');
createMarker(map, 43.8466666667, 5.7925, 'Karl Antier', 'red');
createMarker(map, 27.97, -15.5877777778, 'Orlando Benítez Sánchez', 'red');
createMarker(map, 37.3666666667, 49.8597222222, 'raziyeh zahedi', 'red');
createMarker(map, 43.9975, 10.3058333333, 'Luigi D&#039;Argliano', 'red');
createMarker(map, 29.1047222222, -110.961944444, 'Salvador Aguirre', 'red');
createMarker(map, 59.8697222222, 16.0863888889, 'Timo Karhula', 'red');
createMarker(map, 52.2975, 6.39083333333, 'Alex Scholten', 'red');
createMarker(map, 53.6386111111, 10.5966666667, 'Oliver Hanke', 'red');
createMarker(map, 40.7472222222, -4.05861111111, 'Rafael Campillos Ladero', 'red');
createMarker(map, 45.1569444444, 11.0925, 'Andrzej Skoczewski', 'red');
createMarker(map, 44.73, 34.0163888889, 'Marta Volkova', 'red');
createMarker(map, 28.7622222222, -17.8783333333, 'Peter I. Papics', 'red');
createMarker(map, 53.2666666667, 108.75, 'Students BSU', 'red');
createMarker(map, 44.1583333333, 19.7363888889, 'Vladimir Burgic', 'red');
createMarker(map, 44.1583333333, 19.6863888889, 'Aleksandar Matic', 'red');
createMarker(map, 53.6386111111, 10.5966666667, 'Kai Schultze', 'red');
createMarker(map, 25.8005555556, 110.011111111, 'Weizhou Zeng', 'red');
createMarker(map, 47.285, 39.765, 'Konstantin Polyakov', 'red');
createMarker(map, 41.7297222222, 2.53361111111, 'Josep M. Trigo-Rodríguez', 'red');
createMarker(map, 43.7958333333, 6.13027777778, 'Karl Antier', 'red');
createMarker(map, 53.9761111111, 10.5944444444, 'Peter van Leuteren', 'red');
createMarker(map, 35.6833333333, 51.3666666667, 'Amir Hasanzadeh', 'red');
createMarker(map, 37.4138888889, -2.14583333333, 'Jose Luis Maestre Garcia', 'red');
createMarker(map, 52.4708333333, 13.4205555556, 'Sasha Prokofyev', 'red');
createMarker(map, 32.6672222222, 35.4486111111, 'Raluca Rufu', 'red');
	}