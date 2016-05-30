
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
			createMarker(map, 36.2305555556, 140.105555556, 'Shigeo Uchiyama', 'red');
createMarker(map, 32.7583333333, -79.8555555556, 'Mark Davis', 'red');
createMarker(map, 42.6730555556, -78.3847222222, 'William Watson', 'red');
createMarker(map, 51.3, 13.3, 'Christian Bartzsch Sternwarte Riesa', 'red');
createMarker(map, 32.48, 119.005555556, 'Zhijian Xu', 'red');
createMarker(map, 51.29, 12.36, 'Roland Winkler', 'red');
createMarker(map, 52.6666666667, 13.85, 'Frank Enzlein', 'red');
createMarker(map, 52.1011111111, 21.0997222222, 'Mariusz Lemiecha', 'red');
createMarker(map, 40.7569444444, 14.4477777778, 'Roman Kovalyk', 'red');
createMarker(map, 52.165, 22.2713888889, 'Maciej Myszkiewicz', 'red');
createMarker(map, 50.7166666667, 3.63333333333, 'Michel Vandeputte', 'red');
createMarker(map, 10.05, -69.3, 'Rafael Barrios', 'red');
createMarker(map, 44.1583333333, 19.7363888889, 'Snezana Todorovic', 'red');
createMarker(map, 19.4711111111, 73.2727777778, 'Himanshu Karkhanis', 'red');
createMarker(map, 28.6166666667, 77.2666666667, 'c b Devgun SPACE', 'red');
createMarker(map, 35.0302777778, -116.551666667, 'Robert Lunsford', 'red');
createMarker(map, 50.7233333333, 5.72333333333, 'Jean-Marie Biets', 'red');
createMarker(map, 50.7166666667, 3.6, 'Michel Vandeputte', 'red');
createMarker(map, 51.1516666667, 10.415, 'Jens Briesemeister', 'red');
createMarker(map, 45.5661111111, 8.505, 'Kamil Hornoch', 'red');
createMarker(map, 47.6666666667, 18.4, 'Karoly Jonas', 'red');
createMarker(map, 52.3333333333, 5.66666666667, 'Koen Miskotte', 'red');
createMarker(map, 44.1583333333, 19.7363888889, 'Stefan Fuks', 'red');
createMarker(map, 52.4122222222, 12.7927777778, 'Kai Schultze', 'red');
createMarker(map, 18.5186111111, 73.7827777778, 'Rushikesh Tilak', 'red');
createMarker(map, 42.5766666667, -121.868055556, 'Wesley Stone', 'red');
createMarker(map, 52.3863888889, 20.9266666667, 'Joanna Antosik', 'red');
createMarker(map, 45.5833333333, -75.1333333333, 'Pierre Martin', 'red');
createMarker(map, 44.1583333333, 19.7363888889, 'Branislav Savic', 'red');
createMarker(map, 52.4444444444, 6.59305555556, 'Sietse Dijkstra', 'red');
createMarker(map, 48.55, 11.7166666667, 'Sirko Molau', 'red');
createMarker(map, 28.2972222222, -16.5083333333, 'Jurgen Rendtel', 'red');
createMarker(map, 22.6333333333, 108.733333333, 'Jiangao Ruan', 'red');
createMarker(map, 29.2175, -110.76055555556, 'Salvador Aguirre', 'red');
createMarker(map, 45.2505555556, -76.2638888889, 'Pierre Martin', 'red');
createMarker(map, 52.3877777778, 6.67444444444, 'Sietse Dijkstra', 'red');
createMarker(map, 38.9566666667, 117.103333333, 'Qiang Ma', 'red');
createMarker(map, 19.4711111111, 73.2727777778, 'Jatin Rathod', 'red');
createMarker(map, 29.15, -81.55, 'Paul  Jones', 'red');
createMarker(map, 49.8333333333, 9.95, 'Pierre Bader', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'Jurgen Rendtel', 'red');
createMarker(map, 52.2908333333, 13.2591666667, 'Clara Ricken', 'red');
createMarker(map, -27.6602777778, -48.5436111111, 'Alexandre Amorim', 'red');
createMarker(map, 43.005, -78.9038888889, 'William  Watson', 'red');
createMarker(map, 47.6666666667, 18.4, 'Csilla Tepliczky', 'red');
createMarker(map, 44.1583333333, 19.7363888889, 'Jovan Vasiljevic', 'red');
createMarker(map, 43.1201388889, 27.6705555556, 'Alexsandrina Yaneva', 'red');
createMarker(map, 44.1583333333, 19.7363888889, 'Jelisaveta Ilic', 'red');
createMarker(map, 36.1213888889, 138.290277778, 'Shigeo Uchiyama', 'red');
createMarker(map, 52.3011111111, 6.69666666667, 'Sietse Dijkstra', 'red');
createMarker(map, 52.4166666667, 13.3333333333, 'Oliver Wusk', 'red');
createMarker(map, 48.1105555556, 20.6288888889, 'Zsofia Biro', 'red');
createMarker(map, 52.2908333333, 13.2591666667, 'Miroslav Frenchev', 'red');
createMarker(map, 40.7511111111, 14.4436111111, 'Roman Kovalyk', 'red');
createMarker(map, 47.5927777778, 26.3363888889, 'Ioan Agavriloaiei', 'red');
createMarker(map, 38.463888888889, -76.983055555556, 'Richard Taibi', 'red');
createMarker(map, 52.8, 11.2, 'Ulrich Sperberg', 'red');
createMarker(map, 52.5744444444, 13.0005555556, 'Schultze Kai', 'red');
createMarker(map, 54.94, 82.9438888889, 'Mikhail Maslov', 'red');
createMarker(map, 52.3013888889, 6.69555555556, 'Peter van Leuteren', 'red');
createMarker(map, 29.2175, -110.963333333, 'Salvador Aguirre', 'red');
createMarker(map, 52.2908333333, 13.2591666667, 'Rainer Arlt', 'red');
createMarker(map, 27.8119444444, 86.7186111111, 'Suresh Bhattarai', 'red');
createMarker(map, 43.12, 27.6702777778, 'Alexandrina Yaneva', 'red');
createMarker(map, 19.4711111111, 73.2727777778, 'Nitin Walmiki', 'red');
createMarker(map, 44.1583333333, 19.7363888889, 'Vladimir Burgic', 'red');
createMarker(map, 22.6333333333, 108.733333333, 'Jiangao Ruan', 'red');
createMarker(map, 52.2908333333, 13.2591666667, 'Christian Schmiel', 'red');
createMarker(map, 47.6666666667, 18.4, 'Zsofia Biro', 'red');
createMarker(map, 54.9588888889, 12.3027777778, 'Tom Axelsen', 'red');
createMarker(map, 27.9619444444, -15.5719444444, 'Israel Tejera Falcón', 'red');
createMarker(map, 19.4711111111, 73.2727777778, 'Sonal Patel', 'red');
createMarker(map, 40.6811111111, -74.8983333333, 'Wayne T Hally', 'red');
createMarker(map, 47.6666666667, 18.4, 'Károly Jónás', 'red');
createMarker(map, 47.6666666667, 18.4, 'Istvan Tepliczky', 'red');
createMarker(map, 52.415, 6.96611111111, 'Peter van Leuteren', 'red');
createMarker(map, 51.1188888889, 13.6094444444, 'Frank Waechter', 'red');
createMarker(map, 29.2175, -110.760555556, 'Salvador Aguirre', 'red');
createMarker(map, 23.3111111111, 109.253611111, 'Jiangao Ruan', 'red');
createMarker(map, 43.1201388889, 27.6705555556, 'Borislav Gospodinov', 'red');
createMarker(map, 40.2794444444, 141.670833333, 'YASUHIRO TONOMURA', 'red');
createMarker(map, 52.415, 6.96638888889, 'Sietse Dijkstra', 'red');
createMarker(map, 51.1188888889, 13.6094444444, 'Sabine  Waechter', 'red');
createMarker(map, 50.6616666667, 10.5583333333, 'Pierre Bader', 'red');
createMarker(map, 42.9363888889, 0.142777777778, 'Felix Bettonvil', 'red');
createMarker(map, 29.15, -81.55, 'Paul Jones', 'red');
createMarker(map, 49.3038888889, 17.3961111111, 'Sylvie Gorkova', 'red');
createMarker(map, 52.2908333333, 13.2591666667, 'Stela Arlt', 'red');
createMarker(map, 52.3863888889, 20.9266666667, 'Przemyslaw Zoladek', 'red');
createMarker(map, 49.3038888889, 17.3961111111, 'Jakub Koukal', 'red');
createMarker(map, 19.4711111111, 73.2727777778, 'Reena Oberoi', 'red');
createMarker(map, 49.4302777778, 8.64916666667, 'Christoph Gerber', 'red');
	}