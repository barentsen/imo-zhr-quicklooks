
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
createMarker(map, 43.6497222222, 41.4261111111, 'Elena Novichonok', 'red');
createMarker(map, 18.8138888889, 73.9972222222, 'JAMEER MANUR', 'red');
createMarker(map, 18.5202777778, 73.6180555556, 'PAYAL GHOGARE', 'red');
createMarker(map, 39.1075, 117.244722222, 'Qiang Ma', 'red');
createMarker(map, 50.7166666667, 3.63333333333, 'Michel Vandeputte', 'red');
createMarker(map, 18.6519444444, 73.9869444444, 'Mayuresh Prabhune', 'red');
createMarker(map, 18.3483333333, 73.7188888889, 'Kaustubh Vaste', 'red');
createMarker(map, 44.1994444444, 19.825, 'Branislav Savic', 'red');
createMarker(map, 50.7288888889, 3.61444444444, 'Michel Vandeputte', 'red');
createMarker(map, 34.8547222222, 33.5825, 'GEORGE TROULLIAS', 'red');
createMarker(map, 18.5202777778, 73.6180555556, 'aniket raut', 'red');
createMarker(map, 18.3280555556, 73.8516666667, 'Neha Sharma', 'red');
createMarker(map, 40, 116.11, 'Tianwei Zhang', 'red');
createMarker(map, 74.6833333333, 17.7036111111, 'Kanchan Kalunge', 'red');
createMarker(map, 18.5202777778, 73.6180555556, 'Radha Gharapurkar', 'red');
createMarker(map, 34.8525, 33.5852777778, 'Sasha Prokofyev', 'red');
createMarker(map, 23.0955555556, -82.3541666667, 'Mileny Roche Lamas', 'red');
createMarker(map, 50.73, 14.9866666667, 'Kamil Hornoch', 'red');
createMarker(map, 52.5508333333, 31.9530555556, 'Alexsandr Morozov', 'red');
createMarker(map, 51.35, -1.8, 'Richard Fleet', 'red');
createMarker(map, 51.845, 11.0236111111, 'Frank Enzlein', 'red');
createMarker(map, 49.7347222222, 16.035, 'Vilem Heblik', 'red');
createMarker(map, 39.99, 116.301944444, 'Yidong Yu', 'red');
createMarker(map, 74.6833333333, 13.7036111111, 'Vishal Gangurde', 'red');
createMarker(map, 42.6469444444, 23.3430555556, 'Milen Minev', 'red');
createMarker(map, 40.6925, 117.14416666667, 'Yidong Yu', 'red');
createMarker(map, 18.55, 74.6833333333, 'Pankajkumar Yenape', 'red');
createMarker(map, 38.7755555556, 116.817777778, 'Yifan Ma', 'red');
createMarker(map, 51.845, 11.0236111111, 'Jurgen Rendtel', 'red');
createMarker(map, 43.6497222222, 41.4261111111, 'Artyom Novichonok', 'red');
createMarker(map, 18.5202777778, 73.6180555556, 'NILOFAR KURAWLE', 'red');
createMarker(map, 45.7263888889, 14.0255555556, 'Javor Kac', 'red');
createMarker(map, 40.5541666667, 116.83, 'zeng weizhou', 'red');
createMarker(map, 34.8547222222, 33.5822222222, 'Sasha Prokofyev', 'red');
createMarker(map, 18.4986111111, 73.7119444444, 'Mayura Karandikar', 'red');
createMarker(map, 51.2077777778, 13.5897222222, 'Sabine Waechter', 'red');
createMarker(map, 31.3616666667, 121.873611111, 'Wei Shi', 'red');
createMarker(map, 18.3436111111, 79.7191666667, 'Ashutosh  Alekar', 'red');
createMarker(map, 30.2766666667, -103.596111111, 'Terrence Ross', 'red');
createMarker(map, 26.559722222222, 101.84194444444, 'Lin Luo', 'red');
createMarker(map, 32.2819444444, -110.768333333, 'Carl Hergenrother', 'red');
createMarker(map, 74.6833333333, 13.7036111111, 'Shyam Dhamapurkar', 'red');
createMarker(map, 18.5202777778, 74.6833333333, 'veena waghchoure', 'red');
createMarker(map, 46.0527777778, 14.7130555556, 'Javor Kac', 'red');
createMarker(map, 53.1, -2.06666666667, 'Tony Markham', 'red');
createMarker(map, 18.53, 73.84, 'Ameya Shaikh', 'red');
createMarker(map, -7.23722222222, -35.0491666667, 'Josafary Campêlo', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'Jurgen Rendtel', 'red');
createMarker(map, 54.4791666667, -1.185, 'Steven Brown', 'red');
createMarker(map, 18.4986111111, 73.7119444444, 'Shalmalee  Kapse ', 'red');
createMarker(map, 39.5966666667, 116.025, 'wenhui wang', 'red');
createMarker(map, 37.9333333333, 114.516666667, 'Wei GE', 'red');
createMarker(map, 23.0955555556, -82.3541666667, 'Adrian Lelyen Fernandez', 'red');
createMarker(map, 18.3908333333, 73.7113888889, 'SONAL THORVE', 'red');
createMarker(map, 52.2166666667, 7.01666666667, 'Carl Johannink', 'red');
createMarker(map, 39.6097222222, -0.778888888889, 'Jose Vicente Díaz Martínez', 'red');
createMarker(map, 12.9833333333, 77.6666666667, 'Payas Awadhutkar', 'red');
createMarker(map, 43.3041666667, 6.09166666667, 'Michel Deconinck', 'red');
createMarker(map, 32.2819444444, -110.768333333, 'Carl Hergenrother', 'red');
createMarker(map, 18.3480555556, 73.7188888889, 'Devika Hardikar', 'red');
createMarker(map, 46.285, 14.5327777778, 'Javor Kac', 'red');
createMarker(map, 39.4408333333, 117.244722222, 'Qiang Ma', 'red');
createMarker(map, 43.6497222222, 41.4261111111, 'Svetlana Evdokimova', 'red');
createMarker(map, 43.6497222222, 41.4261111111, 'Vladislav Agletdinov', 'red');
createMarker(map, -22.4008333333, -45.535, 'Gabriel Hickel', 'red');
createMarker(map, 23.0955555556, -82.3541666667, 'Ernesto Mota Hernandez', 'red');
createMarker(map, 37.1038888889, -6.73416666667, 'Jakub Cerny', 'red');
createMarker(map, 18.5202777778, 73.6180555556, 'YOGESH PANDEY', 'red');
createMarker(map, 37.4233333333, -122.176944444, 'Geng Zhao', 'red');
createMarker(map, 39.9880555556, 115.974722222, 'Qi Xin', 'red');
createMarker(map, 43.671944444444, 41.44, 'Stanislav Korotkiy', 'red');
createMarker(map, 18.5202777778, 74.6833333333, 'Akash Vispute', 'red');
createMarker(map, 40.3341666667, 116.193611111, 'weizhou zeng', 'red');
createMarker(map, 19.15, -155.75, 'Michael Linnolt', 'red');
createMarker(map, 40.3188888889, 115.716111111, 'Allen Zhong', 'red');
createMarker(map, 34.8547222222, 33.5825, 'Sasha Prokofyev', 'red');
createMarker(map, 35.947777777778, -95.7125, 'William Godley', 'red');
createMarker(map, 47.9, 19.9166666667, 'Karoly Jonas', 'red');
createMarker(map, 18.5202777778, 73.6180555556, 'Monika  Gundecha', 'red');
createMarker(map, 40.3177777778, 115.717222222, 'Xiaofan Wei', 'red');
createMarker(map, 50.0872222222, 19.9352777778, 'Tomasz Adam', 'red');
createMarker(map, 40.5541666667, 116.83, 'Weizhou Zeng', 'red');
createMarker(map, 34.3363888889, 126.828333333, 'Seokhee Cho', 'red');
createMarker(map, 58.8083333333, 25.41, 'Sven-Erik Enno', 'red');
createMarker(map, 18.5202777778, 73.6180555556, 'Tanishka  Soni', 'red');
createMarker(map, 51.2077777778, 13.5897222222, 'Michael Funke', 'red');
createMarker(map, 47.7169444444, 37.5572222222, 'Alexandr Maidik', 'red');
createMarker(map, 40.385, 117.559722222, 'Zhen Xu', 'red');
createMarker(map, 40.4469444444, 116.71, 'Yidong Yu', 'red');
createMarker(map, 18.5202777778, 73.6180555556, 'Monika Gundecha', 'red');
createMarker(map, 47.4355555556, 8.06666666667, 'Jonas Schenker', 'red');
createMarker(map, 18.5202777778, 73.6180555556, 'Chetan Thakur', 'red');
createMarker(map, 38.033333333333, 114.25, 'Wei GE', 'red');
createMarker(map, 18.5355555556, 73.9672222222, 'krishna shende', 'red');
createMarker(map, 78.5202777778, 73.6180555556, 'Prathamesh Pawar', 'red');
	}