
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
			observers.push( createObserverMarker(-121.86833333333,42.576666666667 , new GInfoWindowTab('Observer', 'Observer: WESLEY STONE<br/>Site:  Chiloquin, OR'), 'red') );
observers.push( createObserverMarker(-117.72666666667,40.968333333333 , new GInfoWindowTab('Observer', 'Observer: Salvador Aguirre<br/>Site: Winnemucca, Nevada'), 'red') );
observers.push( createObserverMarker(-112.78,53.536666666667 , new GInfoWindowTab('Observer', 'Observer: BRUCE MCCURDY<br/>Site: Beaver Hills Dark Sky Preserve'), 'red') );
observers.push( createObserverMarker(-110.916666667,32.3 , new GInfoWindowTab('Observer', 'Observer: CARL HERGENROTHER<br/>Site: TUCSON AZ'), 'red') );
observers.push( createObserverMarker(-110.82277777778,29.319444444444 , new GInfoWindowTab('Observer', 'Observer: Salvador Aguirre<br/>Site: Ejido El Carmen, Hermosillo, Sonora'), 'red') );
observers.push( createObserverMarker(-110.76055555556,29.2175 , new GInfoWindowTab('Observer', 'Observer: Salvador Aguirre<br/>Site: Observatorio Ernesto Juarez D, Mpo. Hermosillo, Sonora.'), 'red') );
observers.push( createObserverMarker(-110.76055555556,29.2175 , new GInfoWindowTab('Observer', 'Observer: Salvador Aguirre<br/>Site: Observ. Ernesto Juarez D. Mpo. Hermosillo, Sonora.'), 'red') );
observers.push( createObserverMarker(-95.962222222222,35.947777777778 , new GInfoWindowTab('Observer', 'Observer: WILLIAM GODLEY<br/>Site: Coweta, Oklahoma'), 'red') );
observers.push( createObserverMarker(-78.384722222222,42.673055555556 , new GInfoWindowTab('Observer', 'Observer: William Watson<br/>Site: Beaver Meadows Obs. N. Java NY'), 'red') );
observers.push( createObserverMarker(-78.384722222222,42.673055555556 , new GInfoWindowTab('Observer', 'Observer: WILLIAM WATSON<br/>Site: Beaver Meadows Obs. N. Java, NY'), 'red') );
observers.push( createObserverMarker(-75.022222222222,45.388888888889 , new GInfoWindowTab('Observer', 'Observer: PIERRE MARTIN<br/>Site: Moosecreek'), 'red') );
observers.push( createObserverMarker(-74.8983333333,40.6811111111 , new GInfoWindowTab('Observer', 'Observer: WAYNE T. HALLY<br/>Site: HIGH BRIDGE, NJ'), 'red') );
observers.push( createObserverMarker(-16.5083333333,28.2972222222 , new GInfoWindowTab('Observer', 'Observer: JURGEN RENDTEL<br/>Site: IZANA TENERIFE'), 'red') );
observers.push( createObserverMarker(3.46666666667,51.2861111111 , new GInfoWindowTab('Observer', 'Observer: RENE SCURBECQ<br/>Site: AARDENBURG'), 'red') );
observers.push( createObserverMarker(3.6,50.716666666667 , new GInfoWindowTab('Observer', 'Observer: MICHEL VANDEPUTTE<br/>Site: Ellezelles'), 'red') );
observers.push( createObserverMarker(3.6166666666667,50.716666666667 , new GInfoWindowTab('Observer', 'Observer: MICHEL VANDEPUTTE<br/>Site: Ronse'), 'red') );
observers.push( createObserverMarker(3.6333333333333,50.7 , new GInfoWindowTab('Observer', 'Observer: MICHEL VANDEPUTTE<br/>Site: Frasnes lez Anvaing'), 'red') );
observers.push( createObserverMarker(3.6333333333333,50.716666666667 , new GInfoWindowTab('Observer', 'Observer: MICHEL VANDEPUTTE<br/>Site: Ellezelles'), 'red') );
observers.push( createObserverMarker(5.0961111111111,50.723333333333 , new GInfoWindowTab('Observer', 'Observer: jean-marie Biets<br/>Site: Walshoutem'), 'red') );
observers.push( createObserverMarker(5.0961111111111,50.723333333333 , new GInfoWindowTab('Observer', 'Observer: JEAN-MARIE BIETS<br/>Site: Walshoutem'), 'red') );
observers.push( createObserverMarker(5.6666666666667,52.333333333333 , new GInfoWindowTab('Observer', 'Observer: KOEN MISKOTTE<br/>Site: Ermelo'), 'red') );
observers.push( createObserverMarker(6.0563888888889,52.114444444444 , new GInfoWindowTab('Observer', 'Observer: Alex Scholten<br/>Site: Eerbeek'), 'red') );
observers.push( createObserverMarker(6.1511111111111,43.126666666667 , new GInfoWindowTab('Observer', 'Observer: JENS LACORNE<br/>Site: Hyeres'), 'red') );
observers.push( createObserverMarker(6.6744444444444,52.387777777778 , new GInfoWindowTab('Observer', 'Observer: SIETSE DIJKSTRA<br/>Site: Almelo lateraalkanaal'), 'red') );
observers.push( createObserverMarker(6.6744444444444,52.387777777778 , new GInfoWindowTab('Observer', 'Observer: SIETSE DIJKSTRA<br/>Site: Almelo Lateraalkanaal'), 'red') );
observers.push( createObserverMarker(6.6747222222222,52.387777777778 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Almelo - Lateraalkanaal'), 'red') );
observers.push( createObserverMarker(6.6955555555556,52.301388888889 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Azelo'), 'red') );
observers.push( createObserverMarker(6.6966666666667,52.301111111111 , new GInfoWindowTab('Observer', 'Observer: SIETSE DIJKSTRA<br/>Site: Azelo'), 'red') );
observers.push( createObserverMarker(6.7477777777778,52.295277777778 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Borne'), 'red') );
observers.push( createObserverMarker(6.8677777777778,52.4225 , new GInfoWindowTab('Observer', 'Observer: SIETSE DIJKSTRA<br/>Site: Vasse'), 'red') );
observers.push( createObserverMarker(6.8688888888889,52.4225 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Vasse'), 'red') );
observers.push( createObserverMarker(6.9638888888889,52.416111111111 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Cosmos Sterrenwacht Lattrop'), 'red') );
observers.push( createObserverMarker(6.9638888888889,52.416111111111 , new GInfoWindowTab('Observer', 'Observer: CARL JOHANNINK<br/>Site: Lattrop'), 'red') );
observers.push( createObserverMarker(6.9638888888889,52.416111111111 , new GInfoWindowTab('Observer', 'Observer: SIETSE DIJKSTRA<br/>Site: Lattrop Cosmos sterrenwacht klb'), 'red') );
observers.push( createObserverMarker(7.0166666666667,52.216666666667 , new GInfoWindowTab('Observer', 'Observer: CARL JOHANNINK<br/>Site: Gronau'), 'red') );
observers.push( createObserverMarker(9.95,49.833333333333 , new GInfoWindowTab('Observer', 'Observer: PIERRE BADER<br/>Site: Winterhausen'), 'red') );
observers.push( createObserverMarker(10.5583333333,50.6616666667 , new GInfoWindowTab('Observer', 'Observer: PIERRE BADER<br/>Site: VIERNAU'), 'red') );
observers.push( createObserverMarker(12.9638888889,52.4594444444 , new GInfoWindowTab('Observer', 'Observer: JURGEN RENDTEL<br/>Site: MARQUARDT'), 'red') );
observers.push( createObserverMarker(14.599722222222,45.905833333333 , new GInfoWindowTab('Observer', 'Observer: JAVOR KAC<br/>Site: Vrh nad \v{Z}elimljami'), 'red') );
observers.push( createObserverMarker(15.4627777778,46.4377777778 , new GInfoWindowTab('Observer', 'Observer: JAVOR KAC<br/>Site: TRIJE KRALJI'), 'red') );
observers.push( createObserverMarker(15.5633333333,46.5111111111 , new GInfoWindowTab('Observer', 'Observer: JAVOR KAC<br/>Site: MARIBORSKA KOCA'), 'red') );
observers.push( createObserverMarker(15.725833333333,50.035 , new GInfoWindowTab('Observer', 'Observer: VILEM HEBLIK<br/>Site: PARDUBICE'), 'red') );
observers.push( createObserverMarker(16.044166666667,47.832222222222 , new GInfoWindowTab('Observer', 'Observer: THOMAS WEILAND<br/>Site: Hohe Wand'), 'red') );
observers.push( createObserverMarker(16.2688888889,46.3969444444 , new GInfoWindowTab('Observer', 'Observer: MITJA GOVEDIC<br/>Site: SREDISCE OB DRAVI'), 'red') );
observers.push( createObserverMarker(16.403333333333,49.319166666667 , new GInfoWindowTab('Observer', 'Observer: KAMIL HORNOCH<br/>Site: Vohancice'), 'red') );
observers.push( createObserverMarker(20.233333333333,50.066666666667 , new GInfoWindowTab('Observer', 'Observer: LUKASZ WOZNIAK<br/>Site: Lancut'), 'red') );
observers.push( createObserverMarker(20.75,53.0333333333 , new GInfoWindowTab('Observer', 'Observer: JAROSLAW DYGOS<br/>Site: CZERNICE BOROWE'), 'red') );
observers.push( createObserverMarker(22.566666666667,51.233333333333 , new GInfoWindowTab('Observer', 'Observer: LUKASZ WOZNIAK<br/>Site: Lublin'), 'red') );
observers.push( createObserverMarker(23.216666666667,53.116666666667 , new GInfoWindowTab('Observer', 'Observer: Magdalena Sieniawska<br/>Site: BIALYSTOK'), 'red') );
observers.push( createObserverMarker(25.124722222222,35.286666666667 , new GInfoWindowTab('Observer', 'Observer: GRIGORIS MARAVELIAS<br/>Site: Lofoypoli, Irakleio of Crete'), 'red') );
observers.push( createObserverMarker(25.433888888889,45.033333333333 , new GInfoWindowTab('Observer', 'Observer: VALENTIN GRIGORE<br/>Site: Priboiu'), 'red') );
observers.push( createObserverMarker(27.7977777778,43.0694444444 , new GInfoWindowTab('Observer', 'Observer: DESISLAVA ZHIVKOVA<br/>Site: BOLYARCI'), 'red') );
observers.push( createObserverMarker(27.7977777778,43.0694444444 , new GInfoWindowTab('Observer', 'Observer: Todor Dimitrov<br/>Site: BOLYARCI'), 'red') );
observers.push( createObserverMarker(27.7977777778,43.0694444444 , new GInfoWindowTab('Observer', 'Observer: VALENTIN VELKOV<br/>Site: BOLYARCI'), 'red') );
observers.push( createObserverMarker(70.618611111111,26.873055555556 , new GInfoWindowTab('Observer', 'Observer: THOMAS WEILAND<br/>Site: Thar Desert / Jaisalmer'), 'red') );
observers.push( createObserverMarker(70.795833333333,26.986666666667 , new GInfoWindowTab('Observer', 'Observer: THOMAS WEILAND<br/>Site: Lodhruva'), 'red') );
observers.push( createObserverMarker(73.299166666667,19.256666666667 , new GInfoWindowTab('Observer', 'Observer: Ameya Deshpande<br/>Site: Mamnoli'), 'red') );
observers.push( createObserverMarker(73.299166666667,19.256666666667 , new GInfoWindowTab('Observer', 'Observer: AMOGH WAGHMARE<br/>Site: Mamnoli'), 'red') );
observers.push( createObserverMarker(73.299166666667,19.256666666667 , new GInfoWindowTab('Observer', 'Observer: MAYURESH DESAI<br/>Site: Mamnoli'), 'red') );
observers.push( createObserverMarker(73.299166666667,19.256666666667 , new GInfoWindowTab('Observer', 'Observer: NIKHIL SHEWALE<br/>Site: Mamnoli'), 'red') );
observers.push( createObserverMarker(73.299166666667,19.256666666667 , new GInfoWindowTab('Observer', 'Observer: ROHAN SHEWALE<br/>Site: Mamnoli'), 'red') );
observers.push( createObserverMarker(73.398055555556,27.015 , new GInfoWindowTab('Observer', 'Observer: THOMAS WEILAND<br/>Site: Khimsar'), 'red') );
observers.push( createObserverMarker(75.147777777778,28.039444444444 , new GInfoWindowTab('Observer', 'Observer: THOMAS WEILAND<br/>Site: Mandawa'), 'red') );
observers.push( createObserverMarker(75.148055555556,28.039722222222 , new GInfoWindowTab('Observer', 'Observer: THOMAS WEILAND<br/>Site: Mandawa'), 'red') );
observers.push( createObserverMarker(114.25,38.033333333333 , new GInfoWindowTab('Observer', 'Observer: Wei Ge<br/>Site: 3302,ShiJiaZhuang'), 'red') );
observers.push( createObserverMarker(116.82944444444,40.551388888889 , new GInfoWindowTab('Observer', 'Observer: Weizhou Zeng<br/>Site: Shitanglu,Miyun,Beijing'), 'red') );
observers.push( createObserverMarker(120.8975,23.928888888889 , new GInfoWindowTab('Observer', 'Observer: Jer Nan Lou<br/>Site: Yuchih, Nantou County'), 'red') );
observers.push( createObserverMarker(121.22222222222,24.114444444444 , new GInfoWindowTab('Observer', 'Observer: Jer Nan Lou<br/>Site: Hsingenkang, Nantou County'), 'red') );
observers.push( createObserverMarker(140.10555555556,36.230555555556 , new GInfoWindowTab('Observer', 'Observer: SHIGEO UCHIYAMA<br/>Site: Sakuragawa, Ibaraki'), 'red') );
observers.push( createObserverMarker(145.56666666667,-35.816666666667 , new GInfoWindowTab('Observer', 'Observer: ADAM MARSH<br/>Site: Tocumwal, NSW'), 'red') );
observers.push( createObserverMarker(145.6,-35.816666666667 , new GInfoWindowTab('Observer', 'Observer: GEOFF CARSTAIRS<br/>Site: Tocumwal, NSW'), 'red') );
observers.push( createObserverMarker(146,-36 , new GInfoWindowTab('Observer', 'Observer: ADAM MARSH<br/>Site: Howlong, NSW'), 'red') );
var mgr = new GMarkerManager(map);
			mgr.addMarkers(observers, 0);
			mgr.refresh();