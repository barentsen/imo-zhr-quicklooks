
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
observers.push( createObserverMarker(-95.962222222222,35.947777777778 , new GInfoWindowTab('Observer', 'Observer: WILLIAM GODLEY<br/>Site: Coweta, Oklahoma'), 'red') );
observers.push( createObserverMarker(-74.8983333333,40.6811111111 , new GInfoWindowTab('Observer', 'Observer: WAYNE T. HALLY<br/>Site: HIGH BRIDGE, NJ'), 'red') );
observers.push( createObserverMarker(5.6666666666667,52.333333333333 , new GInfoWindowTab('Observer', 'Observer: KOEN MISKOTTE<br/>Site: Ermelo'), 'red') );
observers.push( createObserverMarker(6.0563888888889,52.114444444444 , new GInfoWindowTab('Observer', 'Observer: Alex Scholten<br/>Site: Eerbeek'), 'red') );
observers.push( createObserverMarker(6.1511111111111,43.126666666667 , new GInfoWindowTab('Observer', 'Observer: JENS LACORNE<br/>Site: Hyeres'), 'red') );
observers.push( createObserverMarker(6.6955555555556,52.301388888889 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Azelo'), 'red') );
observers.push( createObserverMarker(6.6966666666667,52.301111111111 , new GInfoWindowTab('Observer', 'Observer: SIETSE DIJKSTRA<br/>Site: Azelo'), 'red') );
observers.push( createObserverMarker(6.9638888888889,52.416111111111 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Cosmos Sterrenwacht Lattrop'), 'red') );
observers.push( createObserverMarker(6.9638888888889,52.416111111111 , new GInfoWindowTab('Observer', 'Observer: CARL JOHANNINK<br/>Site: Lattrop'), 'red') );
observers.push( createObserverMarker(6.9638888888889,52.416111111111 , new GInfoWindowTab('Observer', 'Observer: SIETSE DIJKSTRA<br/>Site: Lattrop Kloostschietbaan'), 'red') );
observers.push( createObserverMarker(7,52.623055555556 , new GInfoWindowTab('Observer', 'Observer: ARNOLD TUKKERS<br/>Site: Arnold Tukkers'), 'red') );
observers.push( createObserverMarker(10.125555555556,54.328611111111 , new GInfoWindowTab('Observer', 'Observer: Florian Zschage<br/>Site: Kiel'), 'red') );
observers.push( createObserverMarker(12.81,42.23 , new GInfoWindowTab('Observer', 'Observer: Roberto Haver<br/>Site: Frasso Sabino'), 'red') );
observers.push( createObserverMarker(12.9638888889,52.4594444444 , new GInfoWindowTab('Observer', 'Observer: JURGEN RENDTEL<br/>Site: MARQUARDT'), 'red') );
observers.push( createObserverMarker(15.725833333333,50.035 , new GInfoWindowTab('Observer', 'Observer: VILEM HEBLIK<br/>Site: PARDUBICE'), 'red') );
observers.push( createObserverMarker(16.386111111111,50.326388888889 , new GInfoWindowTab('Observer', 'Observer: PETR HORALEK<br/>Site: Serlich'), 'red') );
observers.push( createObserverMarker(16.403333333333,49.319166666667 , new GInfoWindowTab('Observer', 'Observer: KAMIL HORNOCH<br/>Site: Vohancice'), 'red') );
observers.push( createObserverMarker(17.396111111111,49.303888888889 , new GInfoWindowTab('Observer', 'Observer: Irena Divisova<br/>Site: Kromeriz'), 'red') );
observers.push( createObserverMarker(17.396111111111,49.303888888889 , new GInfoWindowTab('Observer', 'Observer: JAKUB KOUKAL<br/>Site: Kromeriz'), 'red') );
observers.push( createObserverMarker(17.396111111111,49.303888888889 , new GInfoWindowTab('Observer', 'Observer: SYLVIE GORKOVA<br/>Site: Kromeriz'), 'red') );
observers.push( createObserverMarker(20.75,53.0333333333 , new GInfoWindowTab('Observer', 'Observer: JAROSLAW DYGOS<br/>Site: CZERNICE BOROWE'), 'red') );
observers.push( createObserverMarker(25.124722222222,35.286666666667 , new GInfoWindowTab('Observer', 'Observer: GRIGORIS MARAVELIAS<br/>Site: Lofoypoli, Irakleio of Crete'), 'red') );
observers.push( createObserverMarker(25.433888888889,45.033333333333 , new GInfoWindowTab('Observer', 'Observer: VALENTIN GRIGORE<br/>Site: Priboiu'), 'red') );
observers.push( createObserverMarker(30.8833333333,52.4833333333 , new GInfoWindowTab('Observer', 'Observer: SERGEY DOBROWSKY<br/>Site: GOMEL'), 'red') );
observers.push( createObserverMarker(35.083333333333,31.753333333333 , new GInfoWindowTab('Observer', 'Observer: SHY HALATZI<br/>Site: Har HaTayasim'), 'red') );
observers.push( createObserverMarker(114.25,38.033333333333 , new GInfoWindowTab('Observer', 'Observer: Wei Ge<br/>Site: 3302,ShiJiaZhuang'), 'red') );
observers.push( createObserverMarker(116.19388888889,40.334444444444 , new GInfoWindowTab('Observer', 'Observer: Xin Li<br/>Site: Mayufang,Beijing'), 'red') );
observers.push( createObserverMarker(116.82944444444,40.551388888889 , new GInfoWindowTab('Observer', 'Observer: Weizhou Zeng<br/>Site: Shitanglu,Miyun,Beijing'), 'red') );
observers.push( createObserverMarker(120.8975,23.928888888889 , new GInfoWindowTab('Observer', 'Observer: Jer Nan Lou<br/>Site: Yuchih, Nantou County'), 'red') );
observers.push( createObserverMarker(140.10555555556,36.230555555556 , new GInfoWindowTab('Observer', 'Observer: SHIGEO UCHIYAMA<br/>Site: Sakuragawa, Ibaraki'), 'red') );
var mgr = new GMarkerManager(map);
			mgr.addMarkers(observers, 0);
			mgr.refresh();