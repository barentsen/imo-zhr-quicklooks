
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
	
			var observers = [];observers.push( createObserverMarker(-155.42277777778,19.759166666667 , new GInfoWindowTab('Observer', 'Observer: SIMONA VADUVESCU<br/>Site: Hale Pohaku, Mauna Kea, Hawaii'), 'red') );observers.push( createObserverMarker(-121.98333333333,37.55 , new GInfoWindowTab('Observer', 'Observer: JOSE ALVARELLOS<br/>Site: Fremont'), 'red') );observers.push( createObserverMarker(-121.49888888889,36.760277777778 , new GInfoWindowTab('Observer', 'Observer: BERND BRINKMANN<br/>Site: Fremont Peak'), 'red') );observers.push( createObserverMarker(-121.49888888889,36.760277777778 , new GInfoWindowTab('Observer', 'Observer: DANIEL FISCHER<br/>Site: Fremont Peak'), 'red') );observers.push( createObserverMarker(-117.55611111111,55.081944444444 , new GInfoWindowTab('Observer', 'Observer: BRUCE MCCURDY<br/>Site: Sturgeon Lake, AB'), 'red') );observers.push( createObserverMarker(-116.53333333333,34.15 , new GInfoWindowTab('Observer', 'Observer: Eran Ofek<br/>Site: Eran Ofek'), 'red') );observers.push( createObserverMarker(-116.495277778,32.8302777778 , new GInfoWindowTab('Observer', 'Observer: ROBERT LUNSFORD<br/>Site: PINE VALLEY CA'), 'red') );observers.push( createObserverMarker(-116.1,43.75 , new GInfoWindowTab('Observer', 'Observer: Peter  Kozich<br/>Site: Peter Kozich'), 'red') );observers.push( createObserverMarker(-110.93027777778,32.269722222222 , new GInfoWindowTab('Observer', 'Observer: CARL HERGENROTHER<br/>Site: Tucson-Winterhaven, Arizona'), 'red') );observers.push( createObserverMarker(-105.21694444444,40.793888888889 , new GInfoWindowTab('Observer', 'Observer: Robin Hegenbarth<br/>Site: Livermore'), 'red') );observers.push( createObserverMarker(-78.386111111111,42.672222222222 , new GInfoWindowTab('Observer', 'Observer: WILLIAM WATSON<br/>Site: North Java, New York'), 'red') );observers.push( createObserverMarker(-74.8983333333,40.6811111111 , new GInfoWindowTab('Observer', 'Observer: WAYNE T. HALLY<br/>Site: HIGH BRIDGE, NJ'), 'red') );observers.push( createObserverMarker(-5.5575,33.903611111111 , new GInfoWindowTab('Observer', 'Observer: Salvador Aguirre<br/>Site: Meknes'), 'red') );observers.push( createObserverMarker(-2.75,51.433333333333 , new GInfoWindowTab('Observer', 'Observer: Mark Cook<br/>Site: Westway'), 'red') );observers.push( createObserverMarker(3.4811111111111,39.324444444444 , new GInfoWindowTab('Observer', 'Observer: JOSEP TRIGO RODRIGUEZ<br/>Site: Puerto Lápice'), 'red') );observers.push( createObserverMarker(12.9638888889,52.4594444444 , new GInfoWindowTab('Observer', 'Observer: JURGEN RENDTEL<br/>Site: MARQUARDT'), 'red') );observers.push( createObserverMarker(16.279166666667,46.402777777778 , new GInfoWindowTab('Observer', 'Observer: MITJA GOVEDIC<br/>Site: Sredisce ob Dravi'), 'red') );observers.push( createObserverMarker(17.396111111111,49.303888888889 , new GInfoWindowTab('Observer', 'Observer: JAKUB KOUKAL<br/>Site: Kromeriz'), 'red') );observers.push( createObserverMarker(18.308888888889,54.573888888889 , new GInfoWindowTab('Observer', 'Observer: Krzysztof Polakowski<br/>Site: Gniewowo'), 'red') );observers.push( createObserverMarker(18.308888888889,54.573888888889 , new GInfoWindowTab('Observer', 'Observer: Krzysztof Polakowski<br/>Site: GNIEWOWO'), 'red') );observers.push( createObserverMarker(21.171388888889,50.569166666667 , new GInfoWindowTab('Observer', 'Observer: Tomasz Adam<br/>Site: Staszow'), 'red') );observers.push( createObserverMarker(26.625833333333,60.915277777778 , new GInfoWindowTab('Observer', 'Observer: ILKKA YRJOLA<br/>Site: Kuusankoski'), 'red') );var mgr = new GMarkerManager(map);
			mgr.addMarkers(observers, 0);
			mgr.refresh();