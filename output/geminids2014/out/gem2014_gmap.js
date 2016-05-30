
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
createMarker(map, 47.0244444444, 27.5536111111, 'Ioan Agavriloaiei', 'red');
createMarker(map, 32.7361111111, 118.475833333, 'Longji Bing', 'red');
createMarker(map, 36.2305555556, 140.105555556, 'Shigeo Uchiyama', 'red');
createMarker(map, -22.4105555556, -45.5352777778, 'Gabriel Hickel', 'red');
createMarker(map, 40.9280555556, 116.571666667, 'Yusong Zhu', 'red');
createMarker(map, 28.4141666667, 117.588888889, 'Di Hu', 'red');
createMarker(map, 31.3213888889, 120.320277778, 'Junda Liu', 'red');
createMarker(map, 45.9683333333, 14.1419444444, 'Mitja Govedic', 'red');
createMarker(map, 47.6666666667, 18.4, 'Karoly  Jonas ', 'red');
createMarker(map, 43.4711111111, 87.1780555556, 'Wushuang Chenye', 'red');
createMarker(map, 30.8247222222, 121.567777778, 'Yanyang+ Xiao', 'red');
createMarker(map, 30.4919444444, 119.588611111, 'Haina Huang', 'red');
createMarker(map, 32.1027777778, 52.7305555556, 'alireza akhlaghi', 'red');
createMarker(map, 46.2666666667, 17.7833333333, 'Karoly Jonas', 'red');
createMarker(map, 31.3213888889, 120.320277778, 'Yifei Xia', 'red');
createMarker(map, 32.1030555556, 52.7166666667, 'Mehdi Basiratnia', 'red');
createMarker(map, 53.7191666667, 12.3919444444, 'Frank Enzlein', 'red');
createMarker(map, 47.6666666667, 18.4, 'Karoly Jonas', 'red');
createMarker(map, 52.3333333333, 5.66666666667, 'Koen Miskotte', 'red');
createMarker(map, 35.1219444444, 50.9958333333, 'sanaz jafari', 'red');
createMarker(map, 43.4711111111, 87.1780555556, 'Junxiang Guo', 'red');
createMarker(map, 45.8872222222, 14.5602777778, 'Klemen Cotar', 'red');
createMarker(map, 30.75, 119.816666667, 'shiyue chen', 'red');
createMarker(map, -27.6611111111, -48.545, 'Margarete Jacques Amorim', 'red');
createMarker(map, 44.1583333333, 19.6861111111, 'Branislav Savic', 'red');
createMarker(map, 34.9380555556, 139.131666667, 'Mikiya Sato', 'red');
createMarker(map, 40.3183333333, 115.7175, 'Wei Xiaofan', 'red');
createMarker(map, 43.4711111111, 87.1780555556, 'Jingjing Xiao', 'red');
createMarker(map, 31.3213888889, 120.320277778, 'Junda Liu', 'red');
createMarker(map, 13.7211111111, 100.5775, 'Valentin Velkov', 'red');
createMarker(map, 52.5522222222, 12.9333333333, 'Kai Schultze', 'red');
createMarker(map, 18.3202777778, 73.8525, 'BHAVNA GUPTA', 'red');
createMarker(map, 52.7602777778, 12.5658333333, 'Jurgen Rendtel', 'red');
createMarker(map, 27.1333333333, -15.6, 'Pedro Pérez Corujo', 'red');
createMarker(map, 35.5772222222, 119.148611111, 'Nianfeng  Zhang', 'red');
createMarker(map, 40.3180555556, 115.723611111, 'Hong Shen', 'red');
createMarker(map, 55.4219444444, 13.5547222222, 'Johan Warell', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Ljubica Grasic', 'red');
createMarker(map, 43.4711111111, 87.1780555556, 'Zijian Ding', 'red');
createMarker(map, 43.4711111111, 87.1780555556, 'Tongxin Jiang', 'red');
createMarker(map, 34.9380555556, 139.131666667, 'Hideki Seo', 'red');
createMarker(map, 43.1201388889, 27.6705555556, 'Gabriela Stoyanova', 'red');
createMarker(map, 43.1201388889, 27.6705555556, ' Ivanka Getsova', 'red');
createMarker(map, 35.5541666667, 140.47, 'Shigeo Uchiyama', 'red');
createMarker(map, 18.5116666667, 73.8491666667, 'Omkar Yarguddi', 'red');
createMarker(map, 53.1119444444, 8.82277777778, 'Rafael Neumann', 'red');
createMarker(map, 38.463888888889, -76.983055555556, 'Richard Taibi', 'red');
createMarker(map, -27.1547222222, 152.2625, 'Michael Royal', 'red');
createMarker(map, 18.5202777778, 73.6180555556, 'Vaishnavi  Kenjale', 'red');
createMarker(map, 29.8416666667, 120.610555556, 'Bin Wang', 'red');
createMarker(map, 43.4711111111, 87.1780555556, 'Haocheng Yu', 'red');
createMarker(map, 19.5, 109.801388889, 'zhiwei liu', 'red');
createMarker(map, 47.76, 25.84, 'Ilie Cosovanu', 'red');
createMarker(map, 36.7963888889, 59.0427777778, 'Ali Amiri', 'red');
createMarker(map, 29.0955555556, -110.950833333, 'salvador aguirre', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Aleksandar Matic', 'red');
createMarker(map, 42.6188888889, 23.2605555556, 'Kalina Stoimenova', 'red');
createMarker(map, 43.4711111111, 87.1780555556, 'Iscandar Babur', 'red');
createMarker(map, 45.9777777778, 14.1172222222, 'Javor Kac', 'red');
createMarker(map, 52.7602777778, 12.5655555556, 'Frank Enzlein', 'red');
createMarker(map, 43.4711111111, 87.1780555556, 'Chenxiao Liu', 'red');
createMarker(map, 29.6052777778, 52.9969444444, 'helaleno zarqan', 'red');
createMarker(map, 53.6936111111, -114.020833333, 'Bruce McCurdy', 'red');
createMarker(map, 18.5116666667, 73.8491666667, 'Payas Awadhutkar', 'red');
createMarker(map, 44.1577777778, 19.6866666667, 'Javor Kac', 'red');
createMarker(map, -27.1547222222, 152.2625, 'Adam Marsh', 'red');
createMarker(map, 44.1580555556, 19.6866666667, 'Javor Kac', 'red');
createMarker(map, 34.3363888889, 126.828333333, 'Seokhee Cho', 'red');
createMarker(map, 52.8813888889, 12.4627777778, 'Jurgen Rendtel', 'red');
createMarker(map, 44.1586111111, 19.6861111111, 'Branislav Savic', 'red');
createMarker(map, 43.1201388889, 27.6705555556, 'Marlen Mardirosqn', 'red');
createMarker(map, 53.0311111111, 12.4413888889, 'Jurgen Rendtel', 'red');
createMarker(map, 43.4711111111, 87.1780555556, 'Ruiqi Li', 'red');
createMarker(map, 44.0583333333, 19.6869444444, 'Ivan Stankovic', 'red');
createMarker(map, 52.8894444444, 5.06916666667, 'Koen Miskotte', 'red');
createMarker(map, 43.4711111111, 87.1780555556, 'Yushi Jie', 'red');
createMarker(map, 30.8030555556, 106.047222222, 'Lin Luo', 'red');
createMarker(map, 43.1201388889, 27.6705555556, 'Savina Ivanova', 'red');
createMarker(map, 35.1219444444, 50.9958333333, 'Kazem Kookaram', 'red');
createMarker(map, 46.3983333333, 126.726666667, 'Bo Geng', 'red');
createMarker(map, 44.1586111111, 19.6861111111, 'Branislav Savic', 'red');
createMarker(map, 19.3441666667, 72.8019444444, 'Akshay Khachane', 'red');
createMarker(map, 47.7169444444, 37.5572222222, 'Alexandr Maidik', 'red');
createMarker(map, 31.5786111111, 121.570555556, 'Tianqing Zhang', 'red');
createMarker(map, 30.3083333333, 35.1352777778, 'Anna Levin', 'red');
createMarker(map, 5.06583333333, 52.7463888889, 'Joost Hartman', 'red');
createMarker(map, 31.72, 117.001944444, 'Senbei Du', 'red');
createMarker(map, 34.9380555556, 139.131666667, 'Yukihiro Iyama', 'red');
createMarker(map, 34.8530555556, 33.5841666667, 'Sasha Prokofyev', 'red');
createMarker(map, 46.97, 126.596111111, 'Bo Geng', 'red');
createMarker(map, 39.995, 116.164722222, 'Bingqi Tong', 'red');
createMarker(map, 33.0322222222, -80.3869444444, 'Mark Davis', 'red');
createMarker(map, 25.8005555556, 110.011111111, 'wEIZHOU zeng', 'red');
createMarker(map, 44.9333333333, -71.1811111111, 'Richard Kramer', 'red');
createMarker(map, 37.8997222222, 23.7627777778, 'Alex Daskalakis ', 'red');
createMarker(map, 40.3180555556, 115.723611111, 'Chuanyuan Cheng', 'red');
createMarker(map, 37.42, -122.1725, 'Geng Zhao', 'red');
createMarker(map, 44.1583333333, 19.6922222222, 'Kristina Veljkovic', 'red');
createMarker(map, 47.7675, 25.84, 'Daniel Cosovanu', 'red');
createMarker(map, 47.7675, 25.84, 'Ilie Cosovanu', 'red');
createMarker(map, 30.2766666667, -103.596111111, 'Terrence Ross', 'red');
createMarker(map, 48.55, 11.7166666667, 'Sirko Molau', 'red');
createMarker(map, 40.4419444444, 116.081388889, 'Zesheng YANG', 'red');
createMarker(map, 32.2819444444, -110.768333333, 'Carl Hergenrother', 'red');
createMarker(map, 43.4711111111, 87.1780555556, 'Zhuoqun Li', 'red');
createMarker(map, 49.9786111111, 15.6941666667, 'Vilem Heblik', 'red');
createMarker(map, 23.0955555556, -82.3541666667, 'Mileny Roche Lamas', 'red');
createMarker(map, 18.3202777778, 73.8525, 'SAYLI PATIL', 'red');
createMarker(map, 28.3011111111, -16.5108333333, 'Miguel Rodríguez', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Andrijana Pekovic', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'Jurgen Rendtel', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Miroslav Zivanovic', 'red');
createMarker(map, 27.75, -15.5666666667, 'Pedro Pérez Corujo', 'red');
createMarker(map, 54.4791666667, -1.185, 'Steven Brown', 'red');
createMarker(map, 18.3202777778, 73.8527777778, 'TILAK PAWAR', 'red');
createMarker(map, 30.3013888889, 119.113055556, 'Allen Zhong', 'red');
createMarker(map, 34.8547222222, 33.5827777778, 'Sasha Prokofyev', 'red');
createMarker(map, -34, 151, 'Glenn Hughes', 'red');
createMarker(map, 40.4419444444, 116.081388889, 'Hao Fu', 'red');
createMarker(map, 18.5202777778, 73.6180555556, 'Yogesh Pandey', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Ljubica Grasic', 'red');
createMarker(map, 43.4711111111, 87.1780555556, 'Chenlu Wu', 'red');
createMarker(map, 32.1030555556, 52.7166666667, 'Sina Rezaei', 'red');
createMarker(map, 23.0955555556, -82.3541666667, 'Adrián Lelyén Fernández', 'red');
createMarker(map, 44.1588888889, 19.6922222222, 'Kristina Veljkovic', 'red');
createMarker(map, 19.3441666667, 72.8019444444, 'Akshay Khachane', 'red');
createMarker(map, 43.4711111111, 87.1780555556, 'Kaiyuan Zhang', 'red');
createMarker(map, 38.7763888889, 116.815277778, 'Qiang Ma', 'red');
createMarker(map, 43.4711111111, 87.1780555556, 'Zhiguang Li', 'red');
createMarker(map, 34.9380555556, 139.131666667, 'Kazumi Terakubo', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Miroslav Zivanovic', 'red');
createMarker(map, 23.4747222222, 113.59, 'Chengye Cao', 'red');
createMarker(map, 55.45, 13.4, 'Mikael Anderlund', 'red');
createMarker(map, 53.7194444444, 12.3922222222, 'Jurgen Rendtel', 'red');
createMarker(map, 23, 113.133333333, 'liangchen li', 'red');
createMarker(map, 27.7686111111, -15.6808333333, 'Daniel  Verde Van Ouytsel', 'red');
createMarker(map, 36.4816666667, 117.832222222, 'Peilin Yu', 'red');
createMarker(map, -27.6611111111, -48.545, 'Alexandre Amorim', 'red');
createMarker(map, -27.555, -48.4958333333, 'Adair Cardozo', 'red');
createMarker(map, 53.0333333333, 20.75, 'Jaros?aw Dygos', 'red');
createMarker(map, 34.9380555556, 139.131666667, 'Tomoko Sato', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Ivan  Stankovic', 'red');
createMarker(map, 50.7166666667, 3.63333333333, 'Michel Vandeputte', 'red');
createMarker(map, 43.1201388889, 27.6705555556, 'Ivanka Getsova', 'red');
createMarker(map, -27.1547222222, 152.2625, 'James Marsh', 'red');
createMarker(map, 42.6191666667, 23.2602777778, 'Nadia Dimitrova', 'red');
createMarker(map, 43.12, 27.6705555556, 'Savina Ivanova', 'red');
createMarker(map, 18.5202777778, 73.6180555556, 'Prathamesh  Pawar', 'red');
createMarker(map, 32.6133333333, -116.331944444, 'Craig Ewing', 'red');
createMarker(map, 51.35, -1.8, 'Richard Fleet', 'red');
createMarker(map, 28.91, 116.308333333, 'bright ye', 'red');
createMarker(map, 31.3213888889, 120.320277778, 'Yifan Gu', 'red');
createMarker(map, 43.4711111111, 87.1780555556, 'Siqi Wu', 'red');
createMarker(map, 50.4333333333, 30.5166666667, 'Sergey Stariy', 'red');
createMarker(map, 44.1583333333, 19.6869444444, 'Ivan Stankovic', 'red');
createMarker(map, 19.0666666667, -155.583333333, 'Mike Linnolt', 'red');
createMarker(map, 50.9872222222, 3.32027777778, 'Hendrik Vandenbruaene', 'red');
createMarker(map, -27.1547222222, 152.2625, 'Jemma Marsh', 'red');
	}