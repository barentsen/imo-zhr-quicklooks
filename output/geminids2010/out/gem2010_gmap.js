
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
			createMarker(map, 21.2813888889, -157.825833333, 'Marco Micheli', 'red');
createMarker(map, 19.0833333333, -155.75, 'MIKE LINNOLT', 'red');
createMarker(map, 33.4083333333, -116.593333333, 'Craig Ewing', 'red');
createMarker(map, 32.3, -110.916666667, 'CARL HERGENROTHER', 'red');
createMarker(map, 29.2175, -110.76055555556, 'Salvador Aguirre', 'red');
createMarker(map, 19.4766666667, -99.2291666667, 'RODRIGO LOPEZ SOLORZANO', 'red');
createMarker(map, 35.947777777778, -95.7125, 'WILLIAM GODLEY', 'red');
createMarker(map, 43.0847222222, -89.6530555556, 'ANDREAS BUCHMANN', 'red');
createMarker(map, 43.0847222222, -89.6530555556, 'ANDREAS BUCHMANN', 'red');
createMarker(map, 38.8, -89.3166666667, 'Peter  Kozich', 'red');
createMarker(map, 42.26, -87.9997222222, 'Jeremy Jefferis', 'red');
createMarker(map, 32.7583333333, -79.8555555556, 'MARK DAVIS', 'red');
createMarker(map, 38.463888888889, -76.983055555556, 'RICHARD TAIBI', 'red');
createMarker(map, 40.6811111111, -74.8983333333, 'WAYNE T. HALLY', 'red');
createMarker(map, -27.6602777778, -48.5436111111, 'ALEXANDRE AMORIM', 'red');
createMarker(map, -23.1902777778, -47.2947222222, 'João Ricardo Santos', 'red');
createMarker(map, -23.1902777778, -47.2947222222, 'Joao Santos', 'red');
createMarker(map, -6.49305555556, -36.3955555556, 'Anderson Dantas', 'red');
createMarker(map, 40.0966666667, -2.89166666667, 'FRANCISCO OCANA GONZALEZ', 'red');
createMarker(map, 37.9666666667, -0.683333333333, 'RAFAEL RUBEN TORREGROSA SOLER', 'red');
createMarker(map, 40.4033333333, -0.27, 'Daniel Verde Van Ouytsel', 'red');
createMarker(map, 48.8347222222, 2.33555555556, 'COSTANTINO SIGISMONDI', 'red');
createMarker(map, 50.9872222222, 3.32027777778, 'HENDRIK VANDENBRUAENE', 'red');
createMarker(map, 50.7166666667, 3.63333333333, 'MICHEL VANDEPUTTE', 'red');
createMarker(map, 50.7166666667, 3.63333333333, 'MICHEL VANDEPUTTE', 'red');
createMarker(map, 52.3333333333, 5.66666666667, 'KOEN MISKOTTE', 'red');
createMarker(map, 52.1972222222, 6.11888888889, 'Alex Scholten', 'red');
createMarker(map, 52.3013888889, 6.69555555556, 'PETER VAN LEUTEREN', 'red');
createMarker(map, 52.2952777778, 6.74777777778, 'PETER VAN LEUTEREN', 'red');
createMarker(map, 52.2144444444, 7.015, 'Carl Johannink', 'red');
createMarker(map, 50.0972222222, 8.1925, 'Sergei Schmalz', 'red');
createMarker(map, 53.235, 9.82944444444, 'HARTWIG LUTHEN', 'red');
createMarker(map, 52.1369444444, 11.5863888889, 'Jens Briesemeister', 'red');
createMarker(map, 52.1, 11.6, 'Jens Briesemeister', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'JURGEN RENDTEL', 'red');
createMarker(map, 52.4166666667, 13.3333333333, 'OLIVER WUSK', 'red');
createMarker(map, 40.76, 14.45, 'Roman Kovalyk', 'red');
createMarker(map, 49.4372222222, 14.6319444444, 'Stanislav Fort', 'red');
createMarker(map, 45.8130555556, 14.6955555556, 'JAVOR KAC', 'red');
createMarker(map, 49.913055555556, 14.781666666667, 'KAMIL HORNOCH', 'red');
createMarker(map, 46.4344444444, 15.4830555556, 'JAVOR KAC', 'red');
createMarker(map, 50.035, 15.7258333333, 'VILEM HEBLIK', 'red');
createMarker(map, 45.8972222222, 15.9436111111, 'Mladen Dabic', 'red');
createMarker(map, 46.3969444444, 16.2688888889, 'MITJA GOVEDIC', 'red');
createMarker(map, 49.2838888889, 17.0225, 'JAKUB KOUKAL', 'red');
createMarker(map, 49.2838888889, 17.0225, 'SYLVIE GORKOVA', 'red');
createMarker(map, 49.2838888889, 17.0227777778, 'PETR HORALEK', 'red');
createMarker(map, 49.3038888889, 17.3961111111, 'JAKUB KOUKAL', 'red');
createMarker(map, 47.4255555556, 19.4447222222, 'János Bakos', 'red');
createMarker(map, 47.5680555556, 26.18, 'IOAN AGAVRILOAIEI', 'red');
createMarker(map, -22.5, 29.1166666667, 'TIM COOPER', 'red');
createMarker(map, 30.3080555556, 35.1344444444, 'ANNA S. LEVINA', 'red');
createMarker(map, 30.3080555556, 35.1344444444, 'SHLOMI EINI', 'red');
createMarker(map, 30.3080555556, 35.1344444444, 'SIMON LEVIN', 'red');
createMarker(map, 30.3080555556, 35.1344444444, 'Wienie van der Oord', 'red');
createMarker(map, 43.671944444444, 41.44, 'Stanislav Korotkiy', 'red');
createMarker(map, 51.2066666667, 58.3280555556, 'Vitaliy Nikolaev', 'red');
createMarker(map, 24.9038888889, 68.0566666667, 'KHALID MARWAT', 'red');
createMarker(map, 19.3305555556, 72.8144444444, 'Akshay Khachane', 'red');
createMarker(map, 19.3305555556, 72.8144444444, 'Dhanashree Shinde', 'red');
createMarker(map, 19.3305555556, 72.8144444444, 'JAY KANSARA', 'red');
createMarker(map, 19.3305555556, 72.8144444444, 'Mayuresh Marathe', 'red');
createMarker(map, 19.3305555556, 72.8144444444, 'NEHA DAS', 'red');
createMarker(map, 22.3, 73.0833333333, 'BHARGAV JOSHI', 'red');
createMarker(map, 19.93, 73.55, 'Rishikesh Pandit', 'red');
createMarker(map, 18.2666666667, 73.6166666667, 'Swapnil Bokade', 'red');
createMarker(map, 18.2961111111, 73.6372222222, 'RHISHIKESH KULKARNI', 'red');
createMarker(map, 18.8138888889, 74.0444444444, 'Sneha Kulkarni', 'red');
createMarker(map, 19.0963888889, 74.0497222222, 'ASMITA BHANDARE', 'red');
createMarker(map, 19.0963888889, 74.0497222222, 'SHERRY CHHABRA', 'red');
createMarker(map, 19.0963888889, 74.0497222222, 'ASMITA BHANDARE', 'red');
createMarker(map, 19.0963888889, 74.0497222222, 'Sanket Sen', 'red');
createMarker(map, 19.0963888889, 74.0497222222, 'SHERRY CHHABRA', 'red');
createMarker(map, 19.0963888889, 74.0497222222, 'Suraj Dhiwar', 'red');
createMarker(map, 19.1505555556, 74.0616666667, 'Rishikesh Pandit', 'red');
createMarker(map, 52.2911111111, 76.9666666667, 'ANDREY SEMENUTA', 'red');
createMarker(map, 52.2911111111, 76.9666666667, 'ANDREY SEMENUTA', 'red');
createMarker(map, 28.3577777778, 77.0469444444, 'SHASHANK SHEKHAR', 'red');
createMarker(map, 29.44, 79.0763888889, 'chander, sachin,  devgun, bahmba', 'red');
createMarker(map, 54.94, 82.9438888889, 'MIKHAIL MASLOV', 'red');
createMarker(map, 27.7172222222, 85.3380555556, 'Suresh Bhattarai', 'red');
createMarker(map, 26.5177777778, 88.2525, 'Debasis Sarkar', 'red');
createMarker(map, 26.7666666667, 89.05, 'SANTOSH MAHATO', 'red');
createMarker(map, 37.8675, 112.560555556, 'Zefeng Li', 'red');
createMarker(map, 38.033333333333, 114.25, 'Wei Ge', 'red');
createMarker(map, 40.1105555556, 116.100555556, 'Dantong Zhu', 'red');
createMarker(map, 40.334444444444, 116.19333333333, 'Xiang Zhan', 'red');
createMarker(map, 40.1016666667, 116.275, 'Yufei Shen', 'red');
createMarker(map, 39.99, 116.301944444, 'Weizhou Zeng', 'red');
createMarker(map, 39.915, 116.306666667, 'Longji Bing', 'red');
createMarker(map, 39.9041666667, 116.406944444, 'Simiao CHENG', 'red');
createMarker(map, 40.5538888889, 116.829166667, 'Xiaofan Wei', 'red');
createMarker(map, 40.554166666667, 116.83, 'Hongyi Qin', 'red');
createMarker(map, 40.554166666667, 116.83, 'Kunlun Wang', 'red');
createMarker(map, 40.554166666667, 116.83, 'Shao Chendi', 'red');
createMarker(map, 40.554166666667, 116.83, 'Suqin Wang', 'red');
createMarker(map, 40.554166666667, 116.83, 'Weiliang Jin', 'red');
createMarker(map, 40.554166666667, 116.83, 'Weizhou Zeng', 'red');
createMarker(map, 31.7191666667, 117.008611111, 'Xi Qian', 'red');
createMarker(map, 39.1075, 117.244722222, 'Qiang Ma', 'red');
createMarker(map, 40.2238888889, 117.257222222, 'Xiang Zhan', 'red');
createMarker(map, 24.7008333333, 117.989722222, 'Yi Cao', 'red');
createMarker(map, 14.6525, 121.070555556, 'CARMELITA COOK', 'red');
createMarker(map, 14.6525, 121.070555556, 'HERMITANIO QUINTO', 'red');
createMarker(map, 24.1055555556, 121.186944444, 'Jer Nan Lou', 'red');
createMarker(map, 43.8202777778, 125.268333333, 'Jiawei MA', 'red');
createMarker(map, 45.9302777778, 126.343888889, 'di hu', 'red');
createMarker(map, 45.9302777778, 126.343888889, 'di hu', 'red');
createMarker(map, 44.5863888889, 129.553611111, 'Bin Wang', 'red');
createMarker(map, 35.4405555556, 138.736666667, 'Hideki Seo', 'red');
createMarker(map, 35.4405555556, 138.736666667, 'Kazumi Terakubo', 'red');
createMarker(map, 35.4405555556, 138.736666667, 'Mikiya Sato', 'red');
createMarker(map, 35.4405555556, 138.736666667, 'Tomoko Sato', 'red');
createMarker(map, 35.4405555556, 138.736666667, 'Kazumi Terakubo', 'red');
createMarker(map, 36.2305555556, 140.105555556, 'SHIGEO UCHIYAMA', 'red');
createMarker(map, -37.2958333333, 145.057222222, 'GEOFF CARSTAIRS', 'red');
createMarker(map, -35.8222222222, 145.606944444, 'ADAM MARSH', 'red');
createMarker(map, -35.8222222222, 145.606944444, 'Martin Rudd', 'red');
createMarker(map, -35.749166666667, 149.27444444444, 'Paul Craft', 'red');
	}