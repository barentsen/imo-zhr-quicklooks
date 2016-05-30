
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
	
			var observers = [];observers.push( createObserverMarker(-114.36833333333,52.609166666667 , new GInfoWindowTab('Observer', 'Observer: Alister Ling<br/>Site: Rimbey'), 'red') );observers.push( createObserverMarker(-110.76055555556,29.2175 , new GInfoWindowTab('Observer', 'Observer: Salvador Aguirre<br/>Site: Hermosillo'), 'red') );observers.push( createObserverMarker(-74.8983333333,40.6811111111 , new GInfoWindowTab('Observer', 'Observer: WAYNE T. HALLY<br/>Site: HIGH BRIDGE, NJ'), 'red') );observers.push( createObserverMarker(-71.181111111111,42.108888888889 , new GInfoWindowTab('Observer', 'Observer: Richard Kramer<br/>Site: Sharon'), 'red') );observers.push( createObserverMarker(3.3333333333333,50.333333333333 , new GInfoWindowTab('Observer', 'Observer: David Vansteenlant<br/>Site: Varsenare '), 'red') );observers.push( createObserverMarker(3.6333333333333,50.716666666667 , new GInfoWindowTab('Observer', 'Observer: MICHEL VANDEPUTTE<br/>Site: Ellezelles'), 'red') );observers.push( createObserverMarker(3.6333333333333,50.716666666667 , new GInfoWindowTab('Observer', 'Observer: MICHEL VANDEPUTTE<br/>Site: Ellezelles '), 'red') );observers.push( createObserverMarker(4.7166666666667,50.766666666667 , new GInfoWindowTab('Observer', 'Observer: Gunther  Fleerackers<br/>Site: Hamme Mille'), 'red') );observers.push( createObserverMarker(4.7166666666667,50.766666666667 , new GInfoWindowTab('Observer', 'Observer: Gunther  Fleerackers<br/>Site: Hamme Mille '), 'red') );observers.push( createObserverMarker(5.0666666666667,52.333333333333 , new GInfoWindowTab('Observer', 'Observer: KOEN MISKOTTE<br/>Site: Ermelo'), 'red') );observers.push( createObserverMarker(5.1383333333333,50.818888888889 , new GInfoWindowTab('Observer', 'Observer: JEAN-MARIE BIETS<br/>Site: Wilderen'), 'red') );observers.push( createObserverMarker(5.4877777777778,51.704444444444 , new GInfoWindowTab('Observer', 'Observer: FELIX BETTONVIL<br/>Site: Halley Observatory, Heesch'), 'red') );observers.push( createObserverMarker(5.4877777777778,51.704444444444 , new GInfoWindowTab('Observer', 'Observer: JOOST HARTMAN<br/>Site: Sterrenwacht halley'), 'red') );observers.push( createObserverMarker(5.4877777777778,51.704444444444 , new GInfoWindowTab('Observer', 'Observer: ROY KEERIS<br/>Site: Sterrenwacht Halley'), 'red') );observers.push( createObserverMarker(5.6666666666667,52.033333333333 , new GInfoWindowTab('Observer', 'Observer: KOEN MISKOTTE<br/>Site: Ermelo'), 'red') );observers.push( createObserverMarker(5.6666666666667,52.333333333333 , new GInfoWindowTab('Observer', 'Observer: KOEN MISKOTTE<br/>Site: Ermelo'), 'red') );observers.push( createObserverMarker(8.89944444444,47.3819444444 , new GInfoWindowTab('Observer', 'Observer: ANDREAS BUCHMANN<br/>Site: BAUMA'), 'red') );observers.push( createObserverMarker(9.95,49.833333333333 , new GInfoWindowTab('Observer', 'Observer: PIERRE BADER<br/>Site: Winterhausen'), 'red') );observers.push( createObserverMarker(12.81,42.23 , new GInfoWindowTab('Observer', 'Observer: Roberto Haver<br/>Site: Frasso Sabino'), 'red') );observers.push( createObserverMarker(12.9638888889,52.4594444444 , new GInfoWindowTab('Observer', 'Observer: JURGEN RENDTEL<br/>Site: MARQUARDT'), 'red') );observers.push( createObserverMarker(13.0638888889,52.3277777778 , new GInfoWindowTab('Observer', 'Observer: SVEN NATHER<br/>Site: WILHELMSHORST'), 'red') );observers.push( createObserverMarker(13.65,51.1 , new GInfoWindowTab('Observer', 'Observer: FRANK WACHTER<br/>Site: Radebeul'), 'red') );observers.push( createObserverMarker(13.65,51.1 , new GInfoWindowTab('Observer', 'Observer: SABINE WACHTER<br/>Site: Radebeul'), 'red') );observers.push( createObserverMarker(14.016666666667,50.5 , new GInfoWindowTab('Observer', 'Observer: STELA FRENCHEVA<br/>Site: Liebenhof'), 'red') );observers.push( createObserverMarker(14.016666666667,52.5 , new GInfoWindowTab('Observer', 'Observer: JURGEN RENDTEL<br/>Site: Liebenhof'), 'red') );observers.push( createObserverMarker(14.016666666667,52.5 , new GInfoWindowTab('Observer', 'Observer: RAINER ARLT<br/>Site: Liebenhof'), 'red') );observers.push( createObserverMarker(14.016666666667,52.5 , new GInfoWindowTab('Observer', 'Observer: STELA FRENCHEVA<br/>Site: Liebenhof'), 'red') );observers.push( createObserverMarker(14.016666666667,52.5 , new GInfoWindowTab('Observer', 'Observer: RAINER ARLT<br/>Site: LIebenhof'), 'red') );observers.push( createObserverMarker(14.016666666667,52.55 , new GInfoWindowTab('Observer', 'Observer: ANDRE KNOFEL<br/>Site: Liebenhof'), 'red') );observers.push( createObserverMarker(14.016666666667,52.55 , new GInfoWindowTab('Observer', 'Observer: JURGEN RENDTEL<br/>Site: Liebenhof'), 'red') );observers.push( createObserverMarker(14.016666666667,52.55 , new GInfoWindowTab('Observer', 'Observer: MANUELA TRENN<br/>Site: Liebenhof'), 'red') );observers.push( createObserverMarker(14.016666666667,52.55 , new GInfoWindowTab('Observer', 'Observer: PIERRE BADER<br/>Site: Liebenhof'), 'red') );observers.push( createObserverMarker(14.016666666667,52.55 , new GInfoWindowTab('Observer', 'Observer: ULRICH SPERBERG<br/>Site: Liebenhof'), 'red') );observers.push( createObserverMarker(14.066666666667,52.55 , new GInfoWindowTab('Observer', 'Observer: ULRICH SPERBERG<br/>Site: Liebenhof'), 'red') );observers.push( createObserverMarker(14.7836111111,49.9105555556 , new GInfoWindowTab('Observer', 'Observer: JAN VERFL<br/>Site: ONDREJOV'), 'red') );observers.push( createObserverMarker(14.7836111111,49.9105555556 , new GInfoWindowTab('Observer', 'Observer: MARTIN NEDVED<br/>Site: ONDREJOV'), 'red') );observers.push( createObserverMarker(14.7836111111,49.9105555556 , new GInfoWindowTab('Observer', 'Observer: PAVOL HABUDA<br/>Site: ONDREJOV'), 'red') );observers.push( createObserverMarker(16.266111111111,46.397777777778 , new GInfoWindowTab('Observer', 'Observer: MITJA GOVEDIC<br/>Site: Sredisce ob Dravi'), 'red') );observers.push( createObserverMarker(16.558333333333,48.503055555556 , new GInfoWindowTab('Observer', 'Observer: THOMAS WEILAND<br/>Site: Atzelsdorf'), 'red') );observers.push( createObserverMarker(22.6,51.8 , new GInfoWindowTab('Observer', 'Observer: DARIUSZ DOROSZ<br/>Site: ZABIKOW'), 'red') );observers.push( createObserverMarker(26.2,55.366666666667 , new GInfoWindowTab('Observer', 'Observer: RICARDAS BALCIUNAS<br/>Site: Ignalina'), 'red') );observers.push( createObserverMarker(73.283333333333,19.433333333333 , new GInfoWindowTab('Observer', 'Observer: Jatin Rathod<br/>Site: Asangaon'), 'red') );observers.push( createObserverMarker(73.283333333333,19.433333333333 , new GInfoWindowTab('Observer', 'Observer: Swapnil Pawar<br/>Site: Asangaon'), 'red') );observers.push( createObserverMarker(73.283333333333,19.433333333333 , new GInfoWindowTab('Observer', 'Observer: JAY KANSARA<br/>Site: ASANGAON'), 'red') );var mgr = new GMarkerManager(map);
			mgr.addMarkers(observers, 0);
			mgr.refresh();