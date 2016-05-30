
			// Create the gmap
			var map = new GMap2(document.getElementById('map'));
			map.setCenter(new GLatLng(25, 5), 2);
			map.addControl(new GLargeMapControl());
			map.addControl(new GMapTypeControl());
			map.addControl(new GOverviewMapControl());
			map.addControl(new GScaleControl());
			map.enableDoubleClickZoom();
			map.enableContinuousZoom();
	
			// Create an icon
			function createIcon(color) {
				var icon = new GIcon();
				icon.image = 'http://labs.google.com/ridefinder/images/mm_20_'+color+'.png';
				icon.shadow = 'http://labs.google.com/ridefinder/images/mm_20_shadow.png';
				icon.iconSize = new GSize(12, 20);
				icon.shadowSize = new GSize(22, 20);
				icon.iconAnchor = new GPoint(6, 20);
				icon.infoWindowAnchor = new GPoint(5, 1);	
				return icon;
			}
			
			// Create a marker
			function createMarker(point, infoTabs, icon) {
				var marker = new GMarker(point, icon);
				// Show this markers index in the info window when it is clicked
				var html = infoTabs;
				//GEvent.addListener(marker, 'click', function() {marker.openInfoWindowHtml(html);});// for only html
				GEvent.addListener(marker, 'click', function() {marker.openInfoWindowTabsHtml(html);});// for infoTabs
				return marker;
			};
			
			// Create an observer marker
			function createObserverMarker(lon, lat, tab, color) {
				var point = new GLatLng(lat, lon);
				var infoTabs = [
				  tab
				];
				var marker = createMarker(point, infoTabs, createIcon(color));
				return marker;		
			}
	
			var observers = [];
			observers.push( createObserverMarker(-110.76055555556,29.2175 , new GInfoWindowTab('Observer', 'Observer: Salvador Aguirre<br/>Site: Observatorio Ernesto Juarez D, Mpo. Hermosillo, Sonora.'), 'red') );
observers.push( createObserverMarker(-95.7125,35.947777777778 , new GInfoWindowTab('Observer', 'Observer: WILLIAM GODLEY<br/>Site: Coweta, Oklahoma'), 'red') );
observers.push( createObserverMarker(-74.8983333333,40.6811111111 , new GInfoWindowTab('Observer', 'Observer: WAYNE T. HALLY<br/>Site: HIGH BRIDGE, NJ'), 'red') );
observers.push( createObserverMarker(-0.683333333333,37.9666666667 , new GInfoWindowTab('Observer', 'Observer: RAFAEL RUBEN TORREGROSA SOLER<br/>Site: TORREVIEJA'), 'red') );
observers.push( createObserverMarker(3.6333333333333,50.716666666667 , new GInfoWindowTab('Observer', 'Observer: MICHEL VANDEPUTTE<br/>Site: Ellezelles'), 'red') );
observers.push( createObserverMarker(5.4875,51.703333333333 , new GInfoWindowTab('Observer', 'Observer: ERWIN VAN BALLEGOY<br/>Site: Halley Public Observatory'), 'red') );
observers.push( createObserverMarker(5.6666666666667,52.333333333333 , new GInfoWindowTab('Observer', 'Observer: KOEN MISKOTTE<br/>Site: Ermelo'), 'red') );
observers.push( createObserverMarker(5.9416666666667,43.824444444444 , new GInfoWindowTab('Observer', 'Observer: KARL ANTIER<br/>Site: Valensole'), 'red') );
observers.push( createObserverMarker(6.6711111111111,52.387777777778 , new GInfoWindowTab('Observer', 'Observer: SIETSE DIJKSTRA<br/>Site: Almelo, lateraalkanaal'), 'red') );
observers.push( createObserverMarker(6.6955555555556,52.301388888889 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Azelo'), 'red') );
observers.push( createObserverMarker(6.6966666666667,52.301111111111 , new GInfoWindowTab('Observer', 'Observer: SIETSE DIJKSTRA<br/>Site: Azelo, arkmansweg'), 'red') );
observers.push( createObserverMarker(6.7,52.3 , new GInfoWindowTab('Observer', 'Observer: DANIEL VAN OS<br/>Site: Azelo'), 'red') );
observers.push( createObserverMarker(6.7477777777778,52.295277777778 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Borne'), 'red') );
observers.push( createObserverMarker(7.0166666666667,52.216666666667 , new GInfoWindowTab('Observer', 'Observer: CARL JOHANNINK<br/>Site: Gronau'), 'red') );
observers.push( createObserverMarker(12.9638888889,52.4594444444 , new GInfoWindowTab('Observer', 'Observer: JURGEN RENDTEL<br/>Site: MARQUARDT'), 'red') );
observers.push( createObserverMarker(17.396111111111,49.303888888889 , new GInfoWindowTab('Observer', 'Observer: JAKUB KOUKAL<br/>Site: Kromeriz'), 'red') );
observers.push( createObserverMarker(17.856944444444,49.475555555556 , new GInfoWindowTab('Observer', 'Observer: Jakub Koukal<br/>Site: Komarovice'), 'red') );
observers.push( createObserverMarker(18.259166666667,49.491388888889 , new GInfoWindowTab('Observer', 'Observer: JAKUB KOUKAL<br/>Site: Pustevny'), 'red') );
observers.push( createObserverMarker(20.75,53.0333333333 , new GInfoWindowTab('Observer', 'Observer: JAROSLAW DYGOS<br/>Site: CZERNICE BOROWE'), 'red') );
observers.push( createObserverMarker(26.1,54.2 , new GInfoWindowTab('Observer', 'Observer: IVAN M. SERGEY<br/>Site: MOLODECHNO'), 'red') );
observers.push( createObserverMarker(31.75,35.1 , new GInfoWindowTab('Observer', 'Observer: ANNA S. LEVINA<br/>Site: Har HaTayasim'), 'red') );
observers.push( createObserverMarker(34.111388888889,44.956388888889 , new GInfoWindowTab('Observer', 'Observer: Alisa Shurova<br/>Site: Simferopol'), 'red') );
observers.push( createObserverMarker(34.111388888889,44.956388888889 , new GInfoWindowTab('Observer', 'Observer: Anna Brylyakova<br/>Site: Simferopol'), 'red') );
observers.push( createObserverMarker(34.111388888889,44.956388888889 , new GInfoWindowTab('Observer', 'Observer: Anna Pavlova<br/>Site: Simferopol'), 'red') );
observers.push( createObserverMarker(34.111388888889,44.956388888889 , new GInfoWindowTab('Observer', 'Observer: Ekaterina Prihod&#039;ko<br/>Site: Simferopol'), 'red') );
observers.push( createObserverMarker(34.111388888889,44.956388888889 , new GInfoWindowTab('Observer', 'Observer: Marina Kychyzhyyeva<br/>Site: Simferopol'), 'red') );
observers.push( createObserverMarker(34.111388888889,44.956388888889 , new GInfoWindowTab('Observer', 'Observer: Oleg Gorlatenko<br/>Site: Simferopol'), 'red') );
observers.push( createObserverMarker(34.111388888889,44.956388888889 , new GInfoWindowTab('Observer', 'Observer: Sergey Belan<br/>Site: Simferopol'), 'red') );
observers.push( createObserverMarker(35.09,31.774166666667 , new GInfoWindowTab('Observer', 'Observer: Ella Ratz<br/>Site: Har Hatayasim'), 'red') );
observers.push( createObserverMarker(50.1,36.26 , new GInfoWindowTab('Observer', 'Observer: mina alizadeh<br/>Site: qazvin'), 'red') );
observers.push( createObserverMarker(51,35.866666666667 , new GInfoWindowTab('Observer', 'Observer: Mohammad Nilforoushan<br/>Site: Karaj, Hasanabad'), 'red') );
observers.push( createObserverMarker(73.5,18.5 , new GInfoWindowTab('Observer', 'Observer: TUSHAR PUROHIT<br/>Site: Pirangut'), 'red') );
observers.push( createObserverMarker(73.7,18.5 , new GInfoWindowTab('Observer', 'Observer: Sumedh Kulkarni<br/>Site: Pirangut'), 'red') );
observers.push( createObserverMarker(73.700555555556,18.488055555556 , new GInfoWindowTab('Observer', 'Observer: KSHITIJA KELKAR<br/>Site: Piangut, Pune, India'), 'red') );
observers.push( createObserverMarker(73.700555555556,18.488055555556 , new GInfoWindowTab('Observer', 'Observer: SUSHRUT BHANUSHALI<br/>Site: Pirangut, Pune, India'), 'red') );
observers.push( createObserverMarker(112.44388888889,34.84 , new GInfoWindowTab('Observer', 'Observer: Minghui Liang<br/>Site: Mengjin'), 'red') );
observers.push( createObserverMarker(113.5,23.475 , new GInfoWindowTab('Observer', 'Observer: Quanzhi Ye<br/>Site: A&#039;Lazyboy Observatory, Guangzhou'), 'red') );
observers.push( createObserverMarker(114.25,38.033333333333 , new GInfoWindowTab('Observer', 'Observer: Wei Ge<br/>Site: 3302,ShiJiaZhuang'), 'red') );
observers.push( createObserverMarker(116.08416666667,39.873611111111 , new GInfoWindowTab('Observer', 'Observer: Xiang Zhan<br/>Site: Jietaisi, Beijing'), 'red') );
observers.push( createObserverMarker(116.82944444444,40.551388888889 , new GInfoWindowTab('Observer', 'Observer: Weizhou Zeng<br/>Site: Shitanglu,Miyun,Beijing'), 'red') );
observers.push( createObserverMarker(117.11583333333,36.195833333333 , new GInfoWindowTab('Observer', 'Observer: Li Xue<br/>Site: Taian Shandong Province'), 'red') );
observers.push( createObserverMarker(117.45055555556,39.300277777778 , new GInfoWindowTab('Observer', 'Observer: Qiang Ma<br/>Site: Qilihai, Tianjin '), 'red') );
observers.push( createObserverMarker(121.16472222222,24.088055555556 , new GInfoWindowTab('Observer', 'Observer: Jer Nan Lou<br/>Site: Meifeng, Nantou County'), 'red') );
var mgr = new GMarkerManager(map);
			mgr.addMarkers(observers, 0);
			mgr.refresh();