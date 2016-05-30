
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
			createMarker(map, 43.4708333333, 87.1775, 'meiru zhu', 'red');
createMarker(map, 39.7819444444, 115.524722222, 'jin geng', 'red');
createMarker(map, 52.165, 22.2713888889, 'Maciek Myszkiewicz', 'red');
createMarker(map, 43.4708333333, 87.1777777778, 'Wushuang Chenye', 'red');
createMarker(map, 36.055, 14.2005555556, 'Michael Nolle', 'red');
createMarker(map, 50.1708333333, 19.8847222222, 'Andrzej Skoczewski', 'red');
createMarker(map, 39.7822222222, 115.525, 'xiang zhan', 'red');
createMarker(map, 42.2363888889, 14.4022222222, 'Costantino Sigismondi', 'red');
createMarker(map, 43.4708333333, 87.1777777778, 'Jingyi Zhao', 'red');
createMarker(map, 50.7288888889, 3.61444444444, 'Michel Vandeputte', 'red');
createMarker(map, 49.8833333333, 3.43333333333, 'Frederic MERLIN', 'red');
createMarker(map, 34.3363888889, 126.828333333, 'Seok-hee Cho', 'red');
createMarker(map, 43.4708333333, 87.1777777778, 'kexuan wu', 'red');
createMarker(map, 50.105, 22.2322222222, 'LUKASZ WOZNIAK', 'red');
createMarker(map, 34.8536111111, 33.5830555556, 'Sasha Prokofyev', 'red');
createMarker(map, 30.3077777778, 35.1352777778, 'Ilan Tchenak', 'red');
createMarker(map, 19.9263888889, 44.2458333333, 'Marija Todorovic', 'red');
createMarker(map, 52.2894444444, 12.0363888889, 'Roland Winkler', 'red');
createMarker(map, 30.3083333333, 35.1352777778, 'Anna Levina', 'red');
createMarker(map, 45.0505555556, 37.3241666667, 'Roman Makhnenko', 'red');
createMarker(map, 23.695, 113.876111111, 'SHAN HUANG', 'red');
createMarker(map, 30.3086111111, 35.1330555556, 'Ella Ratz', 'red');
createMarker(map, 40.2766666667, 116.830277778, 'Yinxing Ma', 'red');
createMarker(map, 49.4302777778, 8.64916666667, 'Christoph Gerber', 'red');
createMarker(map, 19.9163888889, 99.8277777778, 'Valentin Velkov', 'red');
createMarker(map, 50.9872222222, 3.32027777778, 'Hendrik Vandenbruaene', 'red');
createMarker(map, 47.6930555556, 25.8394444444, 'Daniel Cosovanu', 'red');
createMarker(map, 47.6930555556, 25.8394444444, 'Ilie Cosovanu', 'red');
createMarker(map, 43.4708333333, 87.1777777778, 'Xinge Liu', 'red');
createMarker(map, 39.2833333333, 44.2833333333, 'Aleksei Makarow', 'red');
createMarker(map, 42.5766666667, -121.868055556, 'Wesley Stone', 'red');
createMarker(map, 33.0322222222, -80.3869444444, 'Mark Davis', 'red');
createMarker(map, 34.8544444444, 33.5822222222, 'Sasha Prokofyev', 'red');
createMarker(map, 52.6427777778, 13.2833333333, 'Kai Schultze', 'red');
createMarker(map, 48.085, 17.5466666667, 'Tibor Csorgei', 'red');
createMarker(map, 44.2458333333, 19.9263888889, 'Branislav Savic', 'red');
createMarker(map, 43.4708333333, 87.1775, 'reizhe li', 'red');
createMarker(map, 39.5808333333, 117.644166667, 'Qiang Ma', 'red');
createMarker(map, 49.9786111111, 15.6941666667, 'Vilem Heblik', 'red');
createMarker(map, 32.2819444444, -110.768333333, 'Carl Hergenrother', 'red');
createMarker(map, 30.2766666667, -103.596111111, 'Terrence Ross', 'red');
createMarker(map, 40.2766666667, 116.830277778, 'Yusong Zhu', 'red');
createMarker(map, 12.9047222222, 77.6477777778, 'Rushikesh Tilak', 'red');
createMarker(map, 34.3363888889, 126.828333333, 'Seok-hee Cho', 'red');
createMarker(map, 31.4469444444, 121.885277778, 'Chengyun  Huang', 'red');
createMarker(map, 44.2458333333, 15.9263888889, 'Ana Cernok', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'Jurgen Rendtel', 'red');
createMarker(map, 43.4708333333, 87.1775, 'keixuan wu', 'red');
createMarker(map, 43.4708333333, 87.1777777778, 'reizhe li', 'red');
createMarker(map, 44.2458333333, 19.9263888889, 'Marija Todorovic', 'red');
createMarker(map, 51.1683333333, 22.9197222222, 'tomasz lenart', 'red');
createMarker(map, 35.8533333333, 119.36, 'Nianfeng Zhang', 'red');
createMarker(map, 52.4166666667, 13.3333333333, 'Oliver Wusk', 'red');
createMarker(map, 47.5833333333, 17.65, 'Karoly  Jonas', 'red');
createMarker(map, 52.8, 11.2, 'Ulrich Sperberg', 'red');
createMarker(map, 43.4708333333, 87.1775, 'yuqin xu', 'red');
createMarker(map, 38.8333333333, -89.1666666667, 'Pete Kozich', 'red');
createMarker(map, 44.2458333333, 19.9263888889, 'Ana Cernok', 'red');
createMarker(map, 47.8613888889, 25.8269444444, 'Daniel Cosovanu', 'red');
createMarker(map, 39.7822222222, 115.524722222, 'xing ren', 'red');
createMarker(map, 49.9833333333, 19.8833333333, 'Maciej Kwinta', 'red');
createMarker(map, 30.3080555556, 35.1327777778, 'Omri Katz', 'red');
createMarker(map, 19.9263888889, 44.2458333333, 'Ana Cernok', 'red');
createMarker(map, 53.0544444444, 18.54, 'TOMASZ FAJFER', 'red');
	}