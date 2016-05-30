
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
			observers.push( createObserverMarker(-115.53333333333,54.083333333333 , new GInfoWindowTab('Observer', 'Observer: ALISTER LING<br/>Site: Whitecourt'), 'red') );
observers.push( createObserverMarker(-115.26583333333,54.042777777778 , new GInfoWindowTab('Observer', 'Observer: BRUCE MCCURDY<br/>Site: RR 93, TWP 584 near Whitecourt, AB'), 'red') );
observers.push( createObserverMarker(-112.78,53.536666666667 , new GInfoWindowTab('Observer', 'Observer: BRUCE MCCURDY<br/>Site: Beaver Hills DSP (Blackfoot)'), 'red') );
observers.push( createObserverMarker(-110.82277777778,29.319444444444 , new GInfoWindowTab('Observer', 'Observer: Salvador Aguirre<br/>Site: Ejido El Carmen, Hermosillo, Sonora'), 'red') );
observers.push( createObserverMarker(-95.962222222222,35.947777777778 , new GInfoWindowTab('Observer', 'Observer: WILLIAM GODLEY<br/>Site: Coweta, Oklahoma'), 'red') );
observers.push( createObserverMarker(-89.416666666667,38.833333333333 , new GInfoWindowTab('Observer', 'Observer: Peter  Kozich<br/>Site: Greenville, Illinois'), 'red') );
observers.push( createObserverMarker(-79.8555555556,32.7583333333 , new GInfoWindowTab('Observer', 'Observer: MARK DAVIS<br/>Site: SULLIVAN&#039;S ISLAND, S'), 'red') );
observers.push( createObserverMarker(-74.8983333333,40.6811111111 , new GInfoWindowTab('Observer', 'Observer: WAYNE T. HALLY<br/>Site: HIGH BRIDGE, NJ'), 'red') );
observers.push( createObserverMarker(3.3202777777778,50.987222222222 , new GInfoWindowTab('Observer', 'Observer: HENDRIK VANDENBRUAENE<br/>Site: Tielt'), 'red') );
observers.push( createObserverMarker(3.46666666667,51.2861111111 , new GInfoWindowTab('Observer', 'Observer: RENE SCURBECQ<br/>Site: AARDENBURG'), 'red') );
observers.push( createObserverMarker(3.6333333333333,50.716666666667 , new GInfoWindowTab('Observer', 'Observer: MICHEL VANDEPUTTE<br/>Site: Ellezelles'), 'red') );
observers.push( createObserverMarker(3.6333333333333,50.716666666667 , new GInfoWindowTab('Observer', 'Observer: SICCO VAN HOEGEE<br/>Site: Ellezelles'), 'red') );
observers.push( createObserverMarker(4.245,51.179444444444 , new GInfoWindowTab('Observer', 'Observer: MYRIAM VINGERHOETS<br/>Site: Haasdonk'), 'red') );
observers.push( createObserverMarker(5.1383333333333,50.818888888889 , new GInfoWindowTab('Observer', 'Observer: JEAN-MARIE BIETS<br/>Site: Wilderen'), 'red') );
observers.push( createObserverMarker(5.6666666666667,52.333333333333 , new GInfoWindowTab('Observer', 'Observer: KOEN MISKOTTE<br/>Site: Ermelo'), 'red') );
observers.push( createObserverMarker(5.7333333333333,50.733333333333 , new GInfoWindowTab('Observer', 'Observer: Nathan Schulpen<br/>Site: Sint-Pieters Voeren'), 'red') );
observers.push( createObserverMarker(5.7333333333333,50.766666666667 , new GInfoWindowTab('Observer', 'Observer: NATHAN SCHULPEN<br/>Site: Sint-Pieters Voeren'), 'red') );
observers.push( createObserverMarker(5.8247222222222,50.727222222222 , new GInfoWindowTab('Observer', 'Observer: GEERT BARENTSEN<br/>Site: Sint-Pieters-Voeren'), 'red') );
observers.push( createObserverMarker(5.825,50.727222222222 , new GInfoWindowTab('Observer', 'Observer: Greet Lembregts<br/>Site: Sint-Pieters-Voeren'), 'red') );
observers.push( createObserverMarker(5.825,50.727222222222 , new GInfoWindowTab('Observer', 'Observer: JAN LEMBREGTS<br/>Site: Sint-Pieters-Voeren'), 'red') );
observers.push( createObserverMarker(6.1511111111111,43.126666666667 , new GInfoWindowTab('Observer', 'Observer: JENS LACORNE<br/>Site: Hyères'), 'red') );
observers.push( createObserverMarker(6.6955555555556,52.301388888889 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Azelo'), 'red') );
observers.push( createObserverMarker(6.6958333333333,52.301666666667 , new GInfoWindowTab('Observer', 'Observer: SIETSE DIJKSTRA<br/>Site: Azelo'), 'red') );
observers.push( createObserverMarker(6.965,52.414722222222 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Cosmos sterrenwacht Lattrop'), 'red') );
observers.push( createObserverMarker(6.9661111111111,52.415 , new GInfoWindowTab('Observer', 'Observer: SIETSE DIJKSTRA<br/>Site: Cosmos sterrenwacht Lattrop'), 'red') );
observers.push( createObserverMarker(6.9666666666667,52.4 , new GInfoWindowTab('Observer', 'Observer: CARL JOHANNINK<br/>Site: Lattrop'), 'red') );
observers.push( createObserverMarker(6.9666666666667,52.416666666667 , new GInfoWindowTab('Observer', 'Observer: DANIEL VAN OS<br/>Site: Lattrop'), 'red') );
observers.push( createObserverMarker(12.9638888889,52.4594444444 , new GInfoWindowTab('Observer', 'Observer: JURGEN RENDTEL<br/>Site: MARQUARDT'), 'red') );
observers.push( createObserverMarker(15.725833333333,50.035 , new GInfoWindowTab('Observer', 'Observer: Tereza Novotna<br/>Site: PARDUBICE'), 'red') );
observers.push( createObserverMarker(15.725833333333,50.035 , new GInfoWindowTab('Observer', 'Observer: VILEM HEBLIK<br/>Site: PARDUBICE'), 'red') );
observers.push( createObserverMarker(34.762222222222,30.597222222222 , new GInfoWindowTab('Observer', 'Observer: ANNA S. LEVINA<br/>Site: Mizpe Ramon'), 'red') );
observers.push( createObserverMarker(34.762222222222,30.597222222222 , new GInfoWindowTab('Observer', 'Observer: SHLOMI EINI<br/>Site: Mizpe Ramon'), 'red') );
observers.push( createObserverMarker(34.762222222222,30.597222222222 , new GInfoWindowTab('Observer', 'Observer: SHY HALATZI<br/>Site: Mizpe Ramon'), 'red') );
observers.push( createObserverMarker(35.866944444444,31.745833333333 , new GInfoWindowTab('Observer', 'Observer: SAMER DERBI<br/>Site: samer a&gt; derbi'), 'red') );
observers.push( createObserverMarker(51.813055555556,34.298611111111 , new GInfoWindowTab('Observer', 'Observer: Mohammad Nilforoushan<br/>Site: Maranjab Caravansary'), 'red') );
observers.push( createObserverMarker(73.268611111111,19.471666666667 , new GInfoWindowTab('Observer', 'Observer: Akshay Kanchane<br/>Site: Akshay Kanchane'), 'red') );
observers.push( createObserverMarker(73.268611111111,19.471666666667 , new GInfoWindowTab('Observer', 'Observer: Dhanashree Shinde<br/>Site: Dhanashree Shinde'), 'red') );
observers.push( createObserverMarker(73.268611111111,19.471666666667 , new GInfoWindowTab('Observer', 'Observer: Sumeet Deshmukh<br/>Site: Sumeet Deshmukh'), 'red') );
observers.push( createObserverMarker(73.268611111111,19.471666666667 , new GInfoWindowTab('Observer', 'Observer: Swapnil Pawar<br/>Site: Swapnil Pawar'), 'red') );
observers.push( createObserverMarker(73.299166666667,19.256666666667 , new GInfoWindowTab('Observer', 'Observer: Amogh Waghmare<br/>Site: Mamnoli'), 'red') );
observers.push( createObserverMarker(73.299166666667,19.256666666667 , new GInfoWindowTab('Observer', 'Observer: Amol Kate<br/>Site: Mamnoli'), 'red') );
observers.push( createObserverMarker(73.299166666667,19.256666666667 , new GInfoWindowTab('Observer', 'Observer: Nikhil Kolthankar<br/>Site: Mamnoli'), 'red') );
observers.push( createObserverMarker(73.299166666667,19.256666666667 , new GInfoWindowTab('Observer', 'Observer: Rohan Shewale<br/>Site: Mamnoli'), 'red') );
observers.push( createObserverMarker(73.299166666667,19.256666666667 , new GInfoWindowTab('Observer', 'Observer: SHISHIR DESHMUKH<br/>Site: Mamnoli'), 'red') );
observers.push( createObserverMarker(73.299166666667,19.256666666667 , new GInfoWindowTab('Observer', 'Observer: Shridhar Pophali<br/>Site: Mamnoli'), 'red') );
observers.push( createObserverMarker(73.3333333333,22.25 , new GInfoWindowTab('Observer', 'Observer: BHARGAV JOSHI<br/>Site: MASTUPURA, GUJARAT'), 'red') );
observers.push( createObserverMarker(87.1775,43.471111111111 , new GInfoWindowTab('Observer', 'Observer: Xin Li<br/>Site: Urumqi Observatery Station at Mt.Nanshan'), 'red') );
observers.push( createObserverMarker(87.1780555556,43.4708333333 , new GInfoWindowTab('Observer', 'Observer: Jiangping Wu<br/>Site: URUMQI OBS., XINJIAN'), 'red') );
observers.push( createObserverMarker(87.933888888889,44.291944444444 , new GInfoWindowTab('Observer', 'Observer: JIN ZHU<br/>Site: Fukang, Xinjiang'), 'red') );
observers.push( createObserverMarker(140.10555555556,36.230555555556 , new GInfoWindowTab('Observer', 'Observer: SHIGEO UCHIYAMA<br/>Site: Sakuragawa, Ibaraki'), 'red') );
var mgr = new GMarkerManager(map);
			mgr.addMarkers(observers, 0);
			mgr.refresh();