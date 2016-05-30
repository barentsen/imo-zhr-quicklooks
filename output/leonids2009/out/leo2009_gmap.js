
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
			createMarker(map, 21.0666666667, -156.933333333, 'MIKE LINNOLT', 'red');
createMarker(map, 19.0833333333, -155.75, 'MIKE LINNOLT', 'red');
createMarker(map, 37.3555555556, -122.059166667, 'yanzhe liu', 'red');
createMarker(map, 42.576666666667, -121.86833333333, 'WESLEY STONE', 'red');
createMarker(map, 32.3, -110.916666667, 'CARL HERGENROTHER', 'red');
createMarker(map, 29.319444444444, -110.82277777778, 'Salvador Aguirre', 'red');
createMarker(map, 29.2175, -110.76055555556, 'Salvador Aguirre', 'red');
createMarker(map, 36.6938888889, -101.197222222, 'KEN HODONSKY', 'red');
createMarker(map, 35.947777777778, -95.7125, 'WILLIAM GODLEY', 'red');
createMarker(map, 29.7338888889, -95.6258333333, 'Abbas Mokhtarzadeh', 'red');
createMarker(map, 29.9916666667, -91.78, 'David Hostetter', 'red');
createMarker(map, 32.7583333333, -79.8555555556, 'MARK DAVIS', 'red');
createMarker(map, 43.1111111111, -78.4541666667, 'WILLIAM WATSON', 'red');
createMarker(map, 42.6730555556, -78.3847222222, 'WILLIAM WATSON', 'red');
createMarker(map, 42.6730555556, -78.3847222222, 'WILLIAM WATSON', 'red');
createMarker(map, 38.463888888889, -76.983055555556, 'RICHARD TAIBI', 'red');
createMarker(map, 39.0069444444, -76.8655555556, 'Douglas Love', 'red');
createMarker(map, 45.3833333333, -76.4833333333, 'PIERRE MARTIN', 'red');
createMarker(map, 40.6811111111, -74.8983333333, 'WAYNE T. HALLY', 'red');
createMarker(map, -27.6602777778, -48.5436111111, 'ALEXANDRE AMORIM', 'red');
createMarker(map, -22.4155555556, -45.5819444444, 'Gabriel Hickel', 'red');
createMarker(map, 28.2972222222, -16.5083333333, 'JURGEN RENDTEL', 'red');
createMarker(map, 37.4138888889, -2.14583333333, 'JOSE LUIS MAESTRE GARCIA', 'red');
createMarker(map, 37.9666666667, -0.683333333333, 'RAFAEL RUBEN TORREGROSA SOLER', 'red');
createMarker(map, 40.4033333333, -0.27, 'DANIEL VERDE', 'red');
createMarker(map, 40.4033333333, -0.27, 'Daniel Verde Van Ouytsel', 'red');
createMarker(map, 41.7297222222, 2.53361111111, 'JOSEP TRIGO RODRIGUEZ', 'red');
createMarker(map, 50.9872222222, 3.32027777778, 'HENDRIK VANDENBRUAENE', 'red');
createMarker(map, 51.2861111111, 3.46666666667, 'RENE SCURBECQ', 'red');
createMarker(map, 50.7166666667, 3.6, 'MICHEL VANDEPUTTE', 'red');
createMarker(map, 50.7166666667, 3.63333333333, 'MICHEL VANDEPUTTE', 'red');
createMarker(map, 50.8061111111, 4.79111111111, 'Tom CORSTJENS', 'red');
createMarker(map, 52.3333333333, 5.66666666667, 'KOEN MISKOTTE', 'red');
createMarker(map, 52.1, 6.11666666667, 'Alex Scholten', 'red');
createMarker(map, 43.1266666667, 6.15111111111, 'JENS LACORNE', 'red');
createMarker(map, 52.2952777778, 6.74777777778, 'PETER VAN LEUTEREN', 'red');
createMarker(map, 52.415, 6.96611111111, 'PETER VAN LEUTEREN', 'red');
createMarker(map, 52.415, 6.96638888889, 'CARL JOHANNINK', 'red');
createMarker(map, 52.415, 6.96638888889, 'SIETSE DIJKSTRA', 'red');
createMarker(map, 49.2330555556, 7, 'Yann Kempf', 'red');
createMarker(map, 49.4302777778, 8.64916666667, 'CHRISTOPH GERBER', 'red');
createMarker(map, 49.4302777778, 8.64916666667, 'CHRISTOPH GERBER', 'red');
createMarker(map, 48.8658333333, 9.44027777778, 'DANIEL GRUEN', 'red');
createMarker(map, 49.8333333333, 9.95, 'PIERRE BADER', 'red');
createMarker(map, 43.9986111111, 10.2975, 'Luigi D&#039;Argliano', 'red');
createMarker(map, 50.6616666667, 10.5583333333, 'PIERRE BADER', 'red');
createMarker(map, 50.9552777778, 11.1997222222, 'Jens Briesemeister', 'red');
createMarker(map, 41.879166666667, 12.451944444444, 'Costantino Sigismondi', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'JURGEN RENDTEL', 'red');
createMarker(map, 52.3277777778, 13.0638888889, 'SVEN NATHER', 'red');
createMarker(map, 52.3, 13.2, 'RAINER ARLT', 'red');
createMarker(map, 52.3, 13.2, 'STELA FRENCHEVA', 'red');
createMarker(map, 46.4338888889, 15.4827777778, 'JAVOR KAC', 'red');
createMarker(map, 46.4344444444, 15.4830555556, 'JAVOR KAC', 'red');
createMarker(map, 46.495, 15.5088888889, 'JAVOR KAC', 'red');
createMarker(map, 50.035, 15.7258333333, 'VILEM HEBLIK', 'red');
createMarker(map, 47.6505555556, 16.5269444444, 'Gyula Kiss', 'red');
createMarker(map, 49.19, 17.3544444444, 'JAKUB KOUKAL', 'red');
createMarker(map, 49.3038888889, 17.3961111111, 'JAKUB KOUKAL', 'red');
createMarker(map, 47.4616666667, 17.4238888889, 'JAKUB KOUKAL', 'red');
createMarker(map, 47.1913888889, 17.8280555556, 'KAMIL HORNOCH', 'red');
createMarker(map, 39.7102777778, 19.7575, 'Vasilis Metallinos', 'red');
createMarker(map, 44.2463888889, 19.9311111111, 'Aleksandra Djukic', 'red');
createMarker(map, 44.2463888889, 19.9311111111, 'BRANISLAV SAVIC', 'red');
createMarker(map, 44.2463888889, 19.9311111111, 'IVANA BELIC', 'red');
createMarker(map, 49.6722222222, 21.475, 'PAWEL TRYBUS', 'red');
createMarker(map, 50.994444444444, 22.141111111111, 'Krzysztof Polakowski', 'red');
createMarker(map, 50.994444444444, 22.141111111111, 'Magdalena Sieniawska', 'red');
createMarker(map, 50.994444444444, 22.141111111111, 'PRZEMYSLAW ZOLADEK', 'red');
createMarker(map, 50.994444444444, 22.141111111111, 'TOMASZ FAJFER', 'red');
createMarker(map, 42.4833333333, 23.4166666667, 'KATJA KOLEVA', 'red');
createMarker(map, 42.4833333333, 23.4166666667, 'PLAMENA ALEXANDROVA', 'red');
createMarker(map, 35.1761111111, 24.9030555556, 'GRIGORIS MARAVELIAS', 'red');
createMarker(map, 35.2794444444, 24.9263888889, 'GRIGORIS MARAVELIAS', 'red');
createMarker(map, 35.2866666667, 25.1247222222, 'GRIGORIS MARAVELIAS', 'red');
createMarker(map, 43.1201388889, 27.6705555556, 'Daniela Urumova', 'red');
createMarker(map, 43.1201388889, 27.6705555556, 'PLAMENA ENIKOVA', 'red');
createMarker(map, 43.1201388889, 27.6705555556, 'Todor Dimitrov', 'red');
createMarker(map, 43.1201388889, 27.6705555556, 'VALENTIN VELKOV', 'red');
createMarker(map, 50.8666666667, 27.8, 'GENNADIJ BUGAREVYCH', 'red');
createMarker(map, 50.3983333333, 30.5330555556, 'Sergey Stariy', 'red');
createMarker(map, 44.7288888889, 34.0152777778, 'Vladimir Sliusarenko', 'red');
createMarker(map, 44.7297222222, 34.0211111111, 'Amiraly Kandymov', 'red');
createMarker(map, 30.5133333333, 34.6158333333, 'ANNA S. LEVINA', 'red');
createMarker(map, 31.5325, 34.9133333333, 'Ella Ratz', 'red');
createMarker(map, 31.7161111111, 37.1125, 'Ahmad Alhudban', 'red');
createMarker(map, 31.7161111111, 37.1125, 'KHALED TELL', 'red');
createMarker(map, 32.3161111111, 37.5458333333, 'ANNA S. LEVINA', 'red');
createMarker(map, 32.3161111111, 37.5458333333, 'SHY HALATZI', 'red');
createMarker(map, 32.3161111111, 37.5458333333, 'Evgeny Gorbikov', 'red');
createMarker(map, 23.8947222222, 54.4158333333, 'MOHAMMAD ODEH', 'red');
createMarker(map, 19.3866666667, 72.9041666667, 'Vimal Mamania', 'red');
createMarker(map, 19.4816666667, 73.2525, 'Ashwini Ghadigaonkar', 'red');
createMarker(map, 19.256666666667, 73.299166666667, 'MAYURESH DESAI', 'red');
createMarker(map, 19.256666666667, 73.299166666667, 'Rohan Shewale', 'red');
createMarker(map, 22.25, 73.3333333333, 'BHARGAV JOSHI', 'red');
createMarker(map, 19.7666666667, 73.45, 'Akshay Khanchane', 'red');
createMarker(map, 19.7833333333, 73.45, 'Jatin Rathod', 'red');
createMarker(map, 19.7833333333, 73.45, 'Swapnil Pawar', 'red');
createMarker(map, 19.7833333333, 73.45, 'Vaishali Kharat', 'red');
createMarker(map, 25.1316666667, 73.5336111111, 'THOMAS WEILAND', 'red');
createMarker(map, 18.6083333333, 73.7552777778, 'NILESH PUNTAMBEKAR', 'red');
createMarker(map, 18.545833333333, 73.781111111111, 'Rushikesh Tilak', 'red');
createMarker(map, 18.8988888889, 73.8194444444, 'MAYURESH G. PRABHUNE', 'red');
createMarker(map, 18.8666666667, 73.9, 'Darshan Lohade', 'red');
createMarker(map, 18.8666666667, 73.9, 'DEVDATTA URANKAR', 'red');
createMarker(map, 18.8666666667, 73.9, 'GAYATRI URANKAR', 'red');
createMarker(map, 18.8666666667, 73.9, 'Kaustubh  Vaste', 'red');
createMarker(map, 18.8666666667, 73.9, 'Sneha Kulkarni', 'red');
createMarker(map, 27.404722222222, 76.402222222222, 'Amitabh Pandey', 'red');
createMarker(map, 27.404722222222, 76.402222222222, 'Shomita Goswami', 'red');
createMarker(map, 27.404722222222, 76.402222222222, 'Vikrant Narang', 'red');
createMarker(map, 54.94, 82.9438888889, 'MIKHAIL MASLOV', 'red');
createMarker(map, 23.1166666667, 112.433333333, 'Quanzhi Ye', 'red');
createMarker(map, 22.7247222222, 112.437777778, 'Shan Huang', 'red');
createMarker(map, 37.95, 114.55, 'Wei Ge', 'red');
createMarker(map, 39.6686111111, 115.4425, 'Weizhou Zeng', 'red');
createMarker(map, 39.6722222222, 115.444444444, 'yunpeng Li', 'red');
createMarker(map, 40.3344444444, 116.193333333, 'Xiaofan Wei', 'red');
createMarker(map, 40.3344444444, 116.193333333, 'Wu xijun', 'red');
createMarker(map, 40.3344444444, 116.193333333, 'Xiang Zhan', 'red');
createMarker(map, 40.3341666667, 116.194444444, 'Simiao CHENG', 'red');
createMarker(map, 40.7333333333, 116.583333333, 'Dantong Zhu', 'red');
createMarker(map, 40.5544444444, 116.809166667, 'Jingjing He', 'red');
createMarker(map, 40.5541666667, 116.813611111, 'Hao Zhou', 'red');
createMarker(map, 40.5513888889, 116.829444444, 'Xin Li', 'red');
createMarker(map, 31.7319444444, 117.011111111, 'Cong Zhao', 'red');
createMarker(map, 39.3333333333, 117.416666667, 'Xiaoyun Ma', 'red');
createMarker(map, 39.300277777778, 117.45055555556, 'Qiang Ma', 'red');
createMarker(map, 35.3794444444, 119.295833333, 'Nianfeng Zhang', 'red');
createMarker(map, 30.4694444444, 119.594722222, 'jiaqing Yang', 'red');
createMarker(map, 31.8152777778, 121.244444444, 'Yuechao Wang', 'red');
createMarker(map, 31.87, 131.368333333, 'Kenta Kouno', 'red');
createMarker(map, 31.82, 131.42, 'Kouji Maeda', 'red');
createMarker(map, 34.8833333333, 134, 'Seishi Akagi', 'red');
createMarker(map, 35.4997222222, 138.659166667, 'Hideki Seo', 'red');
createMarker(map, 35.4997222222, 138.659166667, 'Kazumi Terakubo', 'red');
createMarker(map, 35.4997222222, 138.659166667, 'Mikiya Sato', 'red');
createMarker(map, 36.230555555556, 140.10555555556, 'SHIGEO UCHIYAMA', 'red');
createMarker(map, -34.2666666667, 141.583333333, 'ADAM MARSH', 'red');
	}