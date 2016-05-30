
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
			createMarker(map, 73.8425, 18.5247222222, 'ARIJIT GUPTA', 'red');
createMarker(map, 27.9666666667, -15.5833333333, 'PEDRO PÉREZ', 'red');
createMarker(map, -22.4105555556, -45.5352777778, 'Gabriel Hickel', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Antonija Radulovic', 'red');
createMarker(map, 47.8927777778, 7.89333333333, 'Carl Johannink', 'red');
createMarker(map, 30.3077777778, 35.1352777778, 'Anna Levin', 'red');
createMarker(map, 27.9688888889, -15.5888888889, 'Orlando Benítez Sánchez', 'red');
createMarker(map, 49.7833333333, 9.88333333333, 'Pierre  Bader', 'red');
createMarker(map, 44.1094444444, 27.2663888889, 'Irina Kurteva', 'red');
createMarker(map, 30.8794444444, 121.708333333, 'Wei Shi', 'red');
createMarker(map, 18.5166666667, 73.8166666667, 'Yogesh Pandey', 'red');
createMarker(map, 18.6330555556, 73.6138888889, 'Sonal, Atharva, Chaitanya Thorve, Wangikar, Kulkarni', 'red');
createMarker(map, 29.0955555556, -110.950833333, 'Salvador Aguirre', 'red');
createMarker(map, 37.9072222222, 114.293611111, 'Wei Ge', 'red');
createMarker(map, 19.256666666667, 73.299166666667, 'MAYURESH DESAI', 'red');
createMarker(map, 48.6833333333, 1.85, 'Frederic Merlin', 'red');
createMarker(map, 18.3655555556, 73.7552777778, 'Divyanshu Ranjan', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Caslav Lukic', 'red');
createMarker(map, 47.7138888889, 12.0416666667, 'Sirko Molau', 'red');
createMarker(map, 33.8333333333, -111.908055556, 'Sam Insana', 'red');
createMarker(map, 47.7413888889, 25.8541666667, 'Alexandru Tehanciuc', 'red');
createMarker(map, 28.2102777778, -16.6444444444, 'Roy Keeris', 'red');
createMarker(map, 23.0955555556, -82.3541666667, 'Adrian Lelyen Fernández', 'red');
createMarker(map, 18.39, 73.8102777778, 'Sonal Thorve', 'red');
createMarker(map, 50.5094444444, 13.2575, 'Mikael Anderlund', 'red');
createMarker(map, 23.0955555556, -82.3541666667, 'Mileny Roche Lamas', 'red');
createMarker(map, 39.99, 116.301944444, 'Fujie Tang', 'red');
createMarker(map, 44.1094444444, 27.2672222222, 'Iva Ivanova', 'red');
createMarker(map, 46.7591666667, 23.1875, 'István Mátis', 'red');
createMarker(map, 43.4877777778, 87.1777777778, 'tianwenshe yizhong', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Caslav Lukic', 'red');
createMarker(map, 40.76, 14.45, 'Roman Kovalyk', 'red');
createMarker(map, 47.6666666667, 18.4, 'Karoly Jonas', 'red');
createMarker(map, 39.99, 116.301944444, 'Xiangxi Meng', 'red');
createMarker(map, 18.4777777778, 73.83, 'Tilaksingh Pawar', 'red');
createMarker(map, 52.4561111111, 12.9711111111, 'Jurgen Rendtel', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Milica Dodevski', 'red');
createMarker(map, 18.83, 73.52, 'Pradnya Raje', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Branislav Savic', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Ilija Bogdanovic', 'red');
createMarker(map, 43.4711111111, 87.1777777778, 'Yizhi Zhou', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Ljubomir Brankovic', 'red');
createMarker(map, 52.4036111111, 13.3069444444, 'Kai Schultze', 'red');
createMarker(map, 18.9116666667, 114.455, 'Jerald Barnhardt', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Nastasija Petkovic', 'red');
createMarker(map, 39.8594444444, 116.570555556, 'Xiaofan Wei', 'red');
createMarker(map, 27.9666666667, -15.5833333333, 'PEDRO PEREZ', 'red');
createMarker(map, 43.4711111111, 87.1777777778, 'Chenyang Ge', 'red');
createMarker(map, 5.28638888889, 73.1130555556, 'Jatin Rathod', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Milica Dodevski', 'red');
createMarker(map, 30.3080555556, 35.1330555556, 'Tamara Tchenak', 'red');
createMarker(map, 18.5955555556, 73.8147222222, 'Kartik Neralwar', 'red');
createMarker(map, 39.1122222222, 117.163888889, ' Desheng  Ma', 'red');
createMarker(map, 18.52, 73.83, 'Nilofar Kurawle', 'red');
createMarker(map, 18.4761111111, 73.3625, 'Mandar Karandikar', 'red');
createMarker(map, 52.4797222222, 13.0252777778, 'Ina Rendtel', 'red');
createMarker(map, 18.4777777778, 73.83, 'Hitesh Lala', 'red');
createMarker(map, 44.1094444444, 27.2672222222, 'Teodora Demirova', 'red');
createMarker(map, 44.1583333333, 41.3202777778, 'Milica Maletic', 'red');
createMarker(map, 52.2908333333, 13.2591666667, 'Rainer Arlt', 'red');
createMarker(map, 48.3736111111, 8.76444444444, 'Robin Hegenbarth', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Ljubica Grasic', 'red');
createMarker(map, 30.3077777778, 35.1352777778, 'ann Levin', 'red');
createMarker(map, 27.9666666667, -15.55, 'PEDRO PEREZ CORUJO', 'red');
createMarker(map, 34.8533333333, 33.5841666667, 'Sasha Prokofyev', 'red');
createMarker(map, 40.4483333333, 116.088333333, 'Desheng Ma', 'red');
createMarker(map, 34.3363888889, 126.828333333, 'Seokhee Cho', 'red');
createMarker(map, -27.2333333333, 145.416666667, 'Adam Marsh', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Ljubomir Brankovic', 'red');
createMarker(map, 37.1525, 114.835555556, 'Yingyi Cao', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Milica Maletic', 'red');
createMarker(map, 53.6333333333, 10.25, 'Hartwig Luethen', 'red');
createMarker(map, 18.3666666667, 73.2166666667, 'Pradnya Raje', 'red');
createMarker(map, 27.0983333333, 100.254722222, 'Yandong Hu', 'red');
createMarker(map, 44.1086111111, 27.2663888889, 'Irina Kurteva', 'red');
createMarker(map, 47.6666666667, 18.4, 'Istvan Tepliczky', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Marina Arnaut', 'red');
createMarker(map, 44.1091666667, 27.2669444444, 'Teodora Demirova', 'red');
createMarker(map, 36.055, 14.2005555556, 'Michael Nolle', 'red');
createMarker(map, 18.3666666667, 73.2166666667, 'Nilofar Kurawle', 'red');
createMarker(map, 40.9222222222, 116.586111111, 'Zesheng Yang', 'red');
createMarker(map, 30.3077777778, 35.1352777778, 'anna Levin', 'red');
createMarker(map, 52.4166666667, 13.3333333333, 'Oliv+ Wusk', 'red');
createMarker(map, 55.16, -1.69666666667, 'Alastair McBeath', 'red');
createMarker(map, 47.2963888889, 7.56555555556, 'Mirco Saner', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'David Buzgo', 'red');
createMarker(map, 19.4166666667, -155.25, 'Mike Linnolt', 'red');
createMarker(map, 53.5366666667, -112.78, 'Bruce McCurdy', 'red');
createMarker(map, 45.9702777778, 14.1352777778, 'Javor Kac', 'red');
createMarker(map, 28.3, -16.5097222222, 'Miguel Rodriguez-Alarcon', 'red');
createMarker(map, 25.1355555556, 121.539722222, 'Hanjie Tan', 'red');
createMarker(map, 35.9844444444, 140.3625, 'Shigeo Uchiyama', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Snezana Todorovic', 'red');
createMarker(map, 54.25, 12.85, 'Ralf Koschack', 'red');
createMarker(map, 52.2908333333, 13.2591666667, 'Stela Arlt', 'red');
createMarker(map, -38.6286111111, 177.883611111, 'John Drummond', 'red');
createMarker(map, 49.4302777778, 8.64916666667, 'Christoph Gerber', 'red');
createMarker(map, 13.7211111111, 100.5775, 'Valentin Velkov', 'red');
createMarker(map, 32.6513888889, 51.6791666667, 'sepideh haghighi', 'red');
createMarker(map, -27.5841666667, -48.6219444444, 'Lucas Camargo da Silva', 'red');
createMarker(map, 47.3819444444, 8.89944444444, 'Andreas Buchmann', 'red');
createMarker(map, 46.2847222222, 14.5325, 'Javor Kac', 'red');
createMarker(map, 40.4483333333, 116.088333333, 'Zesheng Yang', 'red');
createMarker(map, 30.2766666667, -103.596111111, 'Terrence Ross', 'red');
createMarker(map, 32.2819444444, -110.768333333, 'Carl Hergenrother', 'red');
createMarker(map, 43.4711111111, 87.1777777778, 'Dengbing Lei', 'red');
createMarker(map, -27.6611111111, -48.545, 'Amorim Alexandre', 'red');
createMarker(map, 18.6166666667, 73.77, 'NILESH PUNTAMBEKAR', 'red');
createMarker(map, 34.8536111111, 33.5844444444, 'Sasha Prokofyev', 'red');
createMarker(map, 43.4711111111, 87.1777777778, 'Yixing Gao', 'red');
createMarker(map, 48.5013888889, 35.0333333333, 'Artem Mirgorod', 'red');
createMarker(map, 28.3166666667, -13.9333333333, 'Enrique de Ferra Fantin', 'red');
createMarker(map, 29.1311111111, 40.0966666667, 'Tunç Tezel', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Ljubica Grasic', 'red');
createMarker(map, 52.4166666667, 13.3333333333, 'Oliver Wusk', 'red');
createMarker(map, 40.5633333333, 116.843055556, 'Gang Li', 'red');
createMarker(map, 38.7763888889, 116.815277778, 'Qiang Ma', 'red');
	}