
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
			observers.push( createObserverMarker(-116.495277778,32.8302777778 , new GInfoWindowTab('Observer', 'Observer: ROBERT LUNSFORD<br/>Site: PINE VALLEY CA'), 'red') );
observers.push( createObserverMarker(-116.33222222222,32.613333333333 , new GInfoWindowTab('Observer', 'Observer: ROBERT LUNSFORD<br/>Site: TIERRA DEL SOL'), 'red') );
observers.push( createObserverMarker(-110.916666667,32.3 , new GInfoWindowTab('Observer', 'Observer: CARL HERGENROTHER<br/>Site: TUCSON AZ'), 'red') );
observers.push( createObserverMarker(-110.82277777778,29.319444444444 , new GInfoWindowTab('Observer', 'Observer: Salvador Aguirre<br/>Site: Ejido El Carmen, Hermosillo, Sonora'), 'red') );
observers.push( createObserverMarker(-96.14,34.1844444444 , new GInfoWindowTab('Observer', 'Observer: DAVID SWANN<br/>Site: TAS SITE,OKLAHOMA'), 'red') );
observers.push( createObserverMarker(-95.962222222222,35.947777777778 , new GInfoWindowTab('Observer', 'Observer: WILLIAM GODLEY<br/>Site: Coweta, Oklahoma'), 'red') );
observers.push( createObserverMarker(-82.4475,23.089722222222 , new GInfoWindowTab('Observer', 'Observer: ADRIAN LELYEN<br/>Site: Instituto Superior de Arte'), 'red') );
observers.push( createObserverMarker(-82.4475,23.089722222222 , new GInfoWindowTab('Observer', 'Observer: Orley Cruz<br/>Site: Instituto Superior de Arte'), 'red') );
observers.push( createObserverMarker(-79.8555555556,32.7583333333 , new GInfoWindowTab('Observer', 'Observer: MARK DAVIS<br/>Site: SULLIVAN&#039;S ISLAND, S'), 'red') );
observers.push( createObserverMarker(-74.8983333333,40.6811111111 , new GInfoWindowTab('Observer', 'Observer: WAYNE T. HALLY<br/>Site: HIGH BRIDGE, NJ'), 'red') );
observers.push( createObserverMarker(-65.916666666667,-23.666666666667 , new GInfoWindowTab('Observer', 'Observer: JAN HATTENBACH<br/>Site: Salinas Grandes'), 'red') );
observers.push( createObserverMarker(3.6333333333333,50.716666666667 , new GInfoWindowTab('Observer', 'Observer: MICHEL VANDEPUTTE<br/>Site: Ellezelles'), 'red') );
observers.push( createObserverMarker(5.3333333333333,52.333333333333 , new GInfoWindowTab('Observer', 'Observer: KOEN MISKOTTE<br/>Site: Ermelo'), 'red') );
observers.push( createObserverMarker(5.6666666666667,52.333333333333 , new GInfoWindowTab('Observer', 'Observer: KOEN MISKOTTE<br/>Site: Ermelo'), 'red') );
observers.push( createObserverMarker(6.7477777777778,52.295277777778 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Borne'), 'red') );
observers.push( createObserverMarker(6.9661111111111,42.415 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Cosmos Sterrenwacht Lattrop'), 'red') );
observers.push( createObserverMarker(6.9661111111111,52.415 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Cosmos Sterrenwacht Lattrop'), 'red') );
observers.push( createObserverMarker(7.0166666666667,52.216666666667 , new GInfoWindowTab('Observer', 'Observer: CARL JOHANNINK<br/>Site: Gronau'), 'red') );
observers.push( createObserverMarker(8.64916666667,49.4302777778 , new GInfoWindowTab('Observer', 'Observer: CHRISTOPH GERBER<br/>Site: HEIDELBERG-WIEBLINGE'), 'red') );
observers.push( createObserverMarker(9.95,49.833333333333 , new GInfoWindowTab('Observer', 'Observer: PIERRE BADER<br/>Site: Winterhausen'), 'red') );
observers.push( createObserverMarker(12.81,42.23 , new GInfoWindowTab('Observer', 'Observer: Roberto Haver<br/>Site: Frasso Sabino'), 'red') );
observers.push( createObserverMarker(12.9638888889,52.4594444444 , new GInfoWindowTab('Observer', 'Observer: JURGEN RENDTEL<br/>Site: MARQUARDT'), 'red') );
observers.push( createObserverMarker(12.9638888889,52.4594444444 , new GInfoWindowTab('Observer', 'Observer: PIERRE BADER<br/>Site: MARQUARDT'), 'red') );
observers.push( createObserverMarker(12.9638888889,52.4594444444 , new GInfoWindowTab('Observer', 'Observer: RAINER ARLT<br/>Site: MARQUARDT'), 'red') );
observers.push( createObserverMarker(12.9638888889,52.4594444444 , new GInfoWindowTab('Observer', 'Observer: STELA FRENCHEVA<br/>Site: MARQUARDT'), 'red') );
observers.push( createObserverMarker(15.725833333333,50.035 , new GInfoWindowTab('Observer', 'Observer: VILEM HEBLIK<br/>Site: PARDUBICE'), 'red') );
observers.push( createObserverMarker(17.396111111111,49.303888888889 , new GInfoWindowTab('Observer', 'Observer: Irena Divisova<br/>Site: Kromeriz'), 'red') );
observers.push( createObserverMarker(17.396111111111,49.303888888889 , new GInfoWindowTab('Observer', 'Observer: JAKUB KOUKAL<br/>Site: Kromeriz'), 'red') );
observers.push( createObserverMarker(17.396111111111,49.303888888889 , new GInfoWindowTab('Observer', 'Observer: SYLVIE GORKOVA<br/>Site: Kromeriz'), 'red') );
observers.push( createObserverMarker(17.973611111111,48.877222222222 , new GInfoWindowTab('Observer', 'Observer: BRANISLAV PELECH<br/>Site: Kostolna Zariecie'), 'red') );
observers.push( createObserverMarker(17.973611111111,48.877222222222 , new GInfoWindowTab('Observer', 'Observer: Dominik Rajsky<br/>Site: Kostolna Zariecie'), 'red') );
observers.push( createObserverMarker(17.973611111111,48.877222222222 , new GInfoWindowTab('Observer', 'Observer: MATEJ SUSTR<br/>Site: Kostolna Zariecie'), 'red') );
observers.push( createObserverMarker(17.973611111111,48.877222222222 , new GInfoWindowTab('Observer', 'Observer: MICHAL SUSTR<br/>Site: Kostolna Zariecie'), 'red') );
observers.push( createObserverMarker(17.973611111111,48.877222222222 , new GInfoWindowTab('Observer', 'Observer: Monika Skvarilova<br/>Site: Kostolna Zariecie'), 'red') );
observers.push( createObserverMarker(18.6333333333,51.4166666667 , new GInfoWindowTab('Observer', 'Observer: TADEUSZ SOBCZAK<br/>Site: ZLOCZEW'), 'red') );
observers.push( createObserverMarker(19.931111111111,44.246388888889 , new GInfoWindowTab('Observer', 'Observer: BRANISLAV SAVIC<br/>Site: Petnica - Valjevo'), 'red') );
observers.push( createObserverMarker(19.931111111111,44.246388888889 , new GInfoWindowTab('Observer', 'Observer: Dusan Pavlovic<br/>Site: Petnica - Valjevo'), 'red') );
observers.push( createObserverMarker(19.931111111111,44.246388888889 , new GInfoWindowTab('Observer', 'Observer: IVANA MARJANOVIC<br/>Site: Petnica - Valjevo'), 'red') );
observers.push( createObserverMarker(19.931111111111,44.246388888889 , new GInfoWindowTab('Observer', 'Observer: Katarina Stankovic<br/>Site: Petnica - Valjevo'), 'red') );
observers.push( createObserverMarker(19.931111111111,44.246388888889 , new GInfoWindowTab('Observer', 'Observer: Milos Maric<br/>Site: Petnica - Valjevo'), 'red') );
observers.push( createObserverMarker(19.931111111111,44.246388888889 , new GInfoWindowTab('Observer', 'Observer: Nemanja Vojvodic<br/>Site: Petnica - Valjevo'), 'red') );
observers.push( createObserverMarker(27.7977777778,43.0694444444 , new GInfoWindowTab('Observer', 'Observer: Daniela Urumova<br/>Site: BOLYARCI'), 'red') );
observers.push( createObserverMarker(27.7977777778,43.0694444444 , new GInfoWindowTab('Observer', 'Observer: Momchil Molnar<br/>Site: BOLYARCI'), 'red') );
observers.push( createObserverMarker(27.7977777778,43.0694444444 , new GInfoWindowTab('Observer', 'Observer: PLAMENA ALEXANDROVA<br/>Site: BOLYARCI'), 'red') );
observers.push( createObserverMarker(27.7977777778,43.0694444444 , new GInfoWindowTab('Observer', 'Observer: PLAMENA ENIKOVA<br/>Site: BOLYARCI'), 'red') );
observers.push( createObserverMarker(27.7977777778,43.0694444444 , new GInfoWindowTab('Observer', 'Observer: Todor Dimitrov<br/>Site: BOLYARCI'), 'red') );
observers.push( createObserverMarker(27.7977777778,43.0694444444 , new GInfoWindowTab('Observer', 'Observer: VALENTIN VELKOV<br/>Site: BOLYARCI'), 'red') );
observers.push( createObserverMarker(34.983333333333,30.37 , new GInfoWindowTab('Observer', 'Observer: ANNA S. LEVINA<br/>Site: Nachal Barak'), 'red') );
observers.push( createObserverMarker(34.983333333333,30.37 , new GInfoWindowTab('Observer', 'Observer: Avi Osher<br/>Site: Nachal Barak'), 'red') );
observers.push( createObserverMarker(34.983333333333,30.37 , new GInfoWindowTab('Observer', 'Observer: Hodaya Guedg<br/>Site: Nachal Barak'), 'red') );
observers.push( createObserverMarker(34.983333333333,30.37 , new GInfoWindowTab('Observer', 'Observer: Netanel Hershkovitz<br/>Site: Nachal Barak'), 'red') );
observers.push( createObserverMarker(34.983333333333,30.37 , new GInfoWindowTab('Observer', 'Observer: SHY HALATZI<br/>Site: Nachal Barak'), 'red') );
observers.push( createObserverMarker(34.983333333333,30.37 , new GInfoWindowTab('Observer', 'Observer: Gadi Eidelheit<br/>Site: Nahal Baraq'), 'red') );
observers.push( createObserverMarker(35.016388888889,31.846388888889 , new GInfoWindowTab('Observer', 'Observer: ANNA S. LEVINA<br/>Site: Neve Shalom'), 'red') );
observers.push( createObserverMarker(35.02,31.85 , new GInfoWindowTab('Observer', 'Observer: SHY HALATZI<br/>Site: Neve Shalom'), 'red') );
observers.push( createObserverMarker(35.049722222222,31.846388888889 , new GInfoWindowTab('Observer', 'Observer: SHLOMI EINI<br/>Site: Neve Shalom'), 'red') );
observers.push( createObserverMarker(144.9,-35.8 , new GInfoWindowTab('Observer', 'Observer: ADAM MARSH<br/>Site: Mathoura NSW'), 'red') );
observers.push( createObserverMarker(144.9,-35.8 , new GInfoWindowTab('Observer', 'Observer: GEOFF CARSTAIRS<br/>Site: Mathoura NSW'), 'red') );
observers.push( createObserverMarker(144.9,-35.8 , new GInfoWindowTab('Observer', 'Observer: Jacqueline Marsh<br/>Site: Mathoura NSW'), 'red') );
observers.push( createObserverMarker(144.9,-35.8 , new GInfoWindowTab('Observer', 'Observer: JAN MARCIS<br/>Site: Mathoura NSW'), 'red') );
observers.push( createObserverMarker(144.9,-35.8 , new GInfoWindowTab('Observer', 'Observer: Phil Snelling<br/>Site: Mathoura NSW'), 'red') );
observers.push( createObserverMarker(145.56666666667,-35.816666666667 , new GInfoWindowTab('Observer', 'Observer: ADAM MARSH<br/>Site: Rivergum Observatory'), 'red') );
observers.push( createObserverMarker(145.56666666667,-35.816666666667 , new GInfoWindowTab('Observer', 'Observer: GEOFF CARSTAIRS<br/>Site: Rivergum Observatory'), 'red') );
observers.push( createObserverMarker(149.27444444444,-35.749166666667 , new GInfoWindowTab('Observer', 'Observer: Paul Craft<br/>Site: Michelago'), 'red') );
var mgr = new GMarkerManager(map);
			mgr.addMarkers(observers, 0);
			mgr.refresh();