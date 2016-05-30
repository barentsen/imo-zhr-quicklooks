
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
			observers.push( createObserverMarker(-110.82277777778,29.319444444444 , new GInfoWindowTab('Observer', 'Observer: Salvador Aguirre<br/>Site: Ejido El Carmen, Hermosillo, Sonora'), 'red') );
observers.push( createObserverMarker(-110.76055555556,29.2175 , new GInfoWindowTab('Observer', 'Observer: Salvador Aguirre<br/>Site: Observatorio Ernesto Juarez D, Mpo. Hermosillo, Sonora.'), 'red') );
observers.push( createObserverMarker(-48.545,-27.6611111111 , new GInfoWindowTab('Observer', 'Observer: ALEXANDRE AMORIM<br/>Site: FLORIANOPOLIS'), 'red') );
observers.push( createObserverMarker(-45.953055555556,-23.208055555556 , new GInfoWindowTab('Observer', 'Observer: Gabriel Hickel<br/>Site: Sao Jose dos Campos'), 'red') );
observers.push( createObserverMarker(-0.683333333333,37.9666666667 , new GInfoWindowTab('Observer', 'Observer: RAFAEL RUBEN TORREGROSA SOLER<br/>Site: TORREVIEJA'), 'red') );
observers.push( createObserverMarker(5.6666666666667,52.333333333333 , new GInfoWindowTab('Observer', 'Observer: KOEN MISKOTTE<br/>Site: Ermelo'), 'red') );
observers.push( createObserverMarker(6.6955555555556,52.301388888889 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Azelo'), 'red') );
observers.push( createObserverMarker(6.6966666666667,52.301111111111 , new GInfoWindowTab('Observer', 'Observer: SIETSE DIJKSTRA<br/>Site: Azelo, Arkmansweg'), 'red') );
observers.push( createObserverMarker(7.015,52.214444444444 , new GInfoWindowTab('Observer', 'Observer: CARL JOHANNINK<br/>Site: Gronau'), 'red') );
observers.push( createObserverMarker(8.64916666667,49.4302777778 , new GInfoWindowTab('Observer', 'Observer: CHRISTOPH GERBER<br/>Site: HEIDELBERG-WIEBLINGE'), 'red') );
observers.push( createObserverMarker(12.9638888889,52.4594444444 , new GInfoWindowTab('Observer', 'Observer: JURGEN RENDTEL<br/>Site: MARQUARDT'), 'red') );
observers.push( createObserverMarker(15.725833333333,50.035 , new GInfoWindowTab('Observer', 'Observer: VILEM HEBLIK<br/>Site: PARDUBICE'), 'red') );
observers.push( createObserverMarker(17.396111111111,49.303888888889 , new GInfoWindowTab('Observer', 'Observer: JAKUB KOUKAL<br/>Site: Kromeriz'), 'red') );
observers.push( createObserverMarker(17.396111111111,49.303888888889 , new GInfoWindowTab('Observer', 'Observer: SYLVIE GORKOVA<br/>Site: Kromeriz'), 'red') );
observers.push( createObserverMarker(19.935555555556,44.246666666667 , new GInfoWindowTab('Observer', 'Observer: BRANISLAV SAVIC<br/>Site: Petnica'), 'red') );
observers.push( createObserverMarker(19.935555555556,44.246666666667 , new GInfoWindowTab('Observer', 'Observer: Filip Colakovic<br/>Site: Petnica'), 'red') );
observers.push( createObserverMarker(19.935555555556,44.246666666667 , new GInfoWindowTab('Observer', 'Observer: Visnja Jovanovic<br/>Site: Petnica'), 'red') );
observers.push( createObserverMarker(24.779166666667,34.927777777778 , new GInfoWindowTab('Observer', 'Observer: GRIGORIS MARAVELIAS<br/>Site: Agiofaraggo (Gorge of Saints), Iraklio of Crete'), 'red') );
observers.push( createObserverMarker(27.6705555556,43.1201388889 , new GInfoWindowTab('Observer', 'Observer: VALENTIN VELKOV<br/>Site: AVREN'), 'red') );
observers.push( createObserverMarker(27.797777777778,43.069444444444 , new GInfoWindowTab('Observer', 'Observer: PLAMENA ENIKOVA<br/>Site: Bolyarci  Village'), 'red') );
observers.push( createObserverMarker(27.7977777778,43.0694444444 , new GInfoWindowTab('Observer', 'Observer: Adam Avramov<br/>Site: BOLYARCI'), 'red') );
observers.push( createObserverMarker(27.7977777778,43.0694444444 , new GInfoWindowTab('Observer', 'Observer: Daniela Urumova<br/>Site: BOLYARCI'), 'red') );
observers.push( createObserverMarker(27.7977777778,43.0694444444 , new GInfoWindowTab('Observer', 'Observer: Momchil Molnar<br/>Site: BOLYARCI'), 'red') );
observers.push( createObserverMarker(27.7977777778,43.0694444444 , new GInfoWindowTab('Observer', 'Observer: Todor Dimitrov<br/>Site: BOLYARCI'), 'red') );
observers.push( createObserverMarker(27.7977777778,43.0694444444 , new GInfoWindowTab('Observer', 'Observer: VALENTIN VELKOV<br/>Site: BOLYARCI'), 'red') );
observers.push( createObserverMarker(27.7977777778,43.0694444444 , new GInfoWindowTab('Observer', 'Observer: Yulia Yancheva<br/>Site: BOLYARCI'), 'red') );
observers.push( createObserverMarker(34.979722222222,31.8175 , new GInfoWindowTab('Observer', 'Observer: ANNA S. LEVINA<br/>Site: Neve Shalom'), 'red') );
observers.push( createObserverMarker(34.979722222222,31.8175 , new GInfoWindowTab('Observer', 'Observer: Ella Ratz<br/>Site: Neve Shalom'), 'red') );
observers.push( createObserverMarker(34.979722222222,31.8175 , new GInfoWindowTab('Observer', 'Observer: Gadi Eidelheit<br/>Site: Neve Shalom'), 'red') );
observers.push( createObserverMarker(41.44,43.671944444444 , new GInfoWindowTab('Observer', 'Observer: Stanislav Korotkiy<br/>Site: Special Astrophysical Observatory of the Russian Academy of Science'), 'red') );
observers.push( createObserverMarker(73.299166666667,19.256666666667 , new GInfoWindowTab('Observer', 'Observer: Atharva Dixit<br/>Site: Mamnoli'), 'red') );
observers.push( createObserverMarker(73.299166666667,19.256666666667 , new GInfoWindowTab('Observer', 'Observer: MAYURESH DESAI<br/>Site: Mamnoli'), 'red') );
observers.push( createObserverMarker(73.299166666667,19.256666666667 , new GInfoWindowTab('Observer', 'Observer: Rohan Shewale<br/>Site: Mamnoli'), 'red') );
observers.push( createObserverMarker(73.299166666667,19.256666666667 , new GInfoWindowTab('Observer', 'Observer: SHISHIR DESHMUKH<br/>Site: Mamnoli'), 'red') );
observers.push( createObserverMarker(112.44388888889,34.84 , new GInfoWindowTab('Observer', 'Observer: Minghui Liang<br/>Site: Minghui Liang'), 'red') );
observers.push( createObserverMarker(113.39,23.051666666667 , new GInfoWindowTab('Observer', 'Observer: QUANZHI YE<br/>Site: Xiaoguwei, Guangzhou'), 'red') );
observers.push( createObserverMarker(116.16805555556,40.572777777778 , new GInfoWindowTab('Observer', 'Observer: Simiao CHENG<br/>Site: Xiangying,Yanqing,Beijing,China'), 'red') );
observers.push( createObserverMarker(116.33583333333,40.415555555556 , new GInfoWindowTab('Observer', 'Observer: Weihou Zeng<br/>Site: Huanghuacheng Great Wall,Huairou,Beijing'), 'red') );
observers.push( createObserverMarker(117.10333333333,38.956666666667 , new GInfoWindowTab('Observer', 'Observer: Qiang Ma<br/>Site:  Tuan bo lake Tianjin'), 'red') );
observers.push( createObserverMarker(117.578333333,40.3963888889 , new GInfoWindowTab('Observer', 'Observer: Weihou Zeng<br/>Site: XINGLONG, HEBEI'), 'red') );
observers.push( createObserverMarker(119.59472222222,30.469444444444 , new GInfoWindowTab('Observer', 'Observer: Yandong Hu<br/>Site: Tianhuangping'), 'red') );
observers.push( createObserverMarker(121.22222222222,24.114444444444 , new GInfoWindowTab('Observer', 'Observer: Jer Nan Lou<br/>Site: Hsingenkang, Nantou County'), 'red') );
observers.push( createObserverMarker(145.58333333333,-35.8 , new GInfoWindowTab('Observer', 'Observer: ADAM MARSH<br/>Site: Tocumwal, NSW'), 'red') );
observers.push( createObserverMarker(145.58333333333,-35.8 , new GInfoWindowTab('Observer', 'Observer: RICHARD POLLARD<br/>Site: Tocumwal, NSW'), 'red') );
observers.push( createObserverMarker(149.27444444444,-35.749166666667 , new GInfoWindowTab('Observer', 'Observer: Paul Craft<br/>Site: Michelago'), 'red') );
observers.push( createObserverMarker(149.27444444444,-33.749166666667 , new GInfoWindowTab('Observer', 'Observer: Paul Craft<br/>Site: Michelago'), 'red') );
var mgr = new GMarkerManager(map);
			mgr.addMarkers(observers, 0);
			mgr.refresh();