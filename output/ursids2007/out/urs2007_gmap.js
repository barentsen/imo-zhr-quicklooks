
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
			observers.push( createObserverMarker(-110.90694444444,29.175277777778 , new GInfoWindowTab('Observer', 'Observer: Salvador Aguirre<br/>Site: San Pedro El Saucito, Hermosillo, Sonora'), 'red') );
observers.push( createObserverMarker(-110.90694444444,29.175277777778 , new GInfoWindowTab('Observer', 'Observer: Salvador Aguirre<br/>Site: San Pedro El Saucito, Hermosillo, Sonora '), 'red') );
observers.push( createObserverMarker(-110.82277777778,29.319444444444 , new GInfoWindowTab('Observer', 'Observer: Salvador Aguirre<br/>Site: Ejido El Carmen, Hermosillo, Sonora'), 'red') );
observers.push( createObserverMarker(-17.876111111111,28.759444444444 , new GInfoWindowTab('Observer', 'Observer: FELIX BETTONVIL<br/>Site: Roque de los Muchachos, La Palma'), 'red') );
observers.push( createObserverMarker(-1.5669444444444,46.666944444444 , new GInfoWindowTab('Observer', 'Observer: KARL ANTIER<br/>Site: Landeronde'), 'red') );
observers.push( createObserverMarker(3.6333333333333,50.716666666667 , new GInfoWindowTab('Observer', 'Observer: MICHEL VANDEPUTTE<br/>Site: Ellezelles'), 'red') );
observers.push( createObserverMarker(5.6666666666667,52.333333333333 , new GInfoWindowTab('Observer', 'Observer: KOEN MISKOTTE<br/>Site: Ermelo'), 'red') );
observers.push( createObserverMarker(6.0575,52.114722222222 , new GInfoWindowTab('Observer', 'Observer: Alex Scholten<br/>Site: Eerbeek'), 'red') );
observers.push( createObserverMarker(6.9661111111111,52.415 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Cosmos Sterrenwacht Lattrop'), 'red') );
observers.push( createObserverMarker(6.9663888888889,52.415 , new GInfoWindowTab('Observer', 'Observer: SIETSE DIJKSTRA<br/>Site: cosmos sterrenwacht Lattrop'), 'red') );
observers.push( createObserverMarker(6.9666666666667,52.433333333333 , new GInfoWindowTab('Observer', 'Observer: CARL JOHANNINK<br/>Site: Lattrop'), 'red') );
observers.push( createObserverMarker(6.9666666666667,52.433333333333 , new GInfoWindowTab('Observer', 'Observer: SIETSE DIJKSTRA<br/>Site: Lattrop'), 'red') );
observers.push( createObserverMarker(6.9666666666667,52.683333333333 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Cosmos Sterrenwacht Lattrop'), 'red') );
observers.push( createObserverMarker(8.55,51.333333333333 , new GInfoWindowTab('Observer', 'Observer: CARL JOHANNINK<br/>Site: Velmede'), 'red') );
observers.push( createObserverMarker(15.725833333333,50.035 , new GInfoWindowTab('Observer', 'Observer: Tereza Novotna<br/>Site: PARDUBICE'), 'red') );
observers.push( createObserverMarker(15.725833333333,50.035 , new GInfoWindowTab('Observer', 'Observer: VILEM HEBLIK<br/>Site: PARDUBICE'), 'red') );
observers.push( createObserverMarker(16.347222222222,50.971388888889 , new GInfoWindowTab('Observer', 'Observer: Marcin Chwala<br/>Site: Strzegom'), 'red') );
observers.push( createObserverMarker(17.226944444444,50.076111111111 , new GInfoWindowTab('Observer', 'Observer: Jakub Koukal<br/>Site: Praded'), 'red') );
observers.push( createObserverMarker(18.263333333333,49.486666666667 , new GInfoWindowTab('Observer', 'Observer: JAKUB KOUKAL<br/>Site: Radhost'), 'red') );
observers.push( createObserverMarker(18.308888888889,54.573888888889 , new GInfoWindowTab('Observer', 'Observer: Krzysztof Polakowski<br/>Site: Gniewowo'), 'red') );
observers.push( createObserverMarker(18.5666666667,51.2166666667 , new GInfoWindowTab('Observer', 'Observer: IZABELA SPALENIAK<br/>Site: WIELUN'), 'red') );
observers.push( createObserverMarker(18.6333333333,51.4166666667 , new GInfoWindowTab('Observer', 'Observer: TADEUSZ SOBCZAK<br/>Site: ZLOCZEW'), 'red') );
observers.push( createObserverMarker(22.23,50.068333333333 , new GInfoWindowTab('Observer', 'Observer: LUKASZ WOZNIAK<br/>Site: Lancut'), 'red') );
observers.push( createObserverMarker(25.416666666667,45.033333333333 , new GInfoWindowTab('Observer', 'Observer: VALENTIN GRIGORE<br/>Site: Priboiu'), 'red') );
observers.push( createObserverMarker(28.389166666667,62.315 , new GInfoWindowTab('Observer', 'Observer: MARKKU NISSINEN<br/>Site: Varkaus'), 'red') );
observers.push( createObserverMarker(121.9,42.229166666667 , new GInfoWindowTab('Observer', 'Observer: Jiawei MA<br/>Site: unknown'), 'red') );
var mgr = new GMarkerManager(map);
			mgr.addMarkers(observers, 0);
			mgr.refresh();