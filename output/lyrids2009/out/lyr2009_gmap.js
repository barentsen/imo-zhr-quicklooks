
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
observers.push( createObserverMarker(-116.55166666667,35.030277777778 , new GInfoWindowTab('Observer', 'Observer: ROBERT LUNSFORD<br/>Site: FIELD ROAD, CA'), 'red') );
observers.push( createObserverMarker(-110.916666667,32.3 , new GInfoWindowTab('Observer', 'Observer: CARL HERGENROTHER<br/>Site: TUCSON AZ'), 'red') );
observers.push( createObserverMarker(-110.76055555556,29.2175 , new GInfoWindowTab('Observer', 'Observer: Salvador Aguirre<br/>Site: Observatorio Ernesto Juarez D, Mpo. Hermosillo, Sonora.'), 'red') );
observers.push( createObserverMarker(-88.15,40.8666666667 , new GInfoWindowTab('Observer', 'Observer: KEN HODONSKY<br/>Site: CULLOM, IL'), 'red') );
observers.push( createObserverMarker(-79.7463888889,33.085 , new GInfoWindowTab('Observer', 'Observer: MARK DAVIS<br/>Site: MT PLEASANT SC'), 'red') );
observers.push( createObserverMarker(3.6333333333333,50.716666666667 , new GInfoWindowTab('Observer', 'Observer: MICHEL VANDEPUTTE<br/>Site: Ellezelles'), 'red') );
observers.push( createObserverMarker(5.6666666666667,52.333333333333 , new GInfoWindowTab('Observer', 'Observer: KOEN MISKOTTE<br/>Site: Ermelo'), 'red') );
observers.push( createObserverMarker(6.6955555555556,52.301388888889 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Azelo'), 'red') );
observers.push( createObserverMarker(6.7477777777778,52.295277777778 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Borne'), 'red') );
observers.push( createObserverMarker(6.9661111111111,52.415 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Cosmos Observatory Lattrop'), 'red') );
observers.push( createObserverMarker(6.9663888888889,52.415 , new GInfoWindowTab('Observer', 'Observer: SIETSE DIJKSTRA<br/>Site: Cosmos, Lattrop'), 'red') );
observers.push( createObserverMarker(6.9663888888889,52.415 , new GInfoWindowTab('Observer', 'Observer: CARL JOHANNINK<br/>Site: Lattrop'), 'red') );
observers.push( createObserverMarker(7.015,52.214444444444 , new GInfoWindowTab('Observer', 'Observer: CARL JOHANNINK<br/>Site: Gronau'), 'red') );
observers.push( createObserverMarker(8.64916666667,49.4302777778 , new GInfoWindowTab('Observer', 'Observer: CHRISTOPH GERBER<br/>Site: HEIDELBERG-WIEBLINGE'), 'red') );
observers.push( createObserverMarker(9.95,49.833333333333 , new GInfoWindowTab('Observer', 'Observer: PIERRE BADER<br/>Site: Winterhausen'), 'red') );
observers.push( createObserverMarker(11.2,52.8 , new GInfoWindowTab('Observer', 'Observer: ULRICH SPERBERG<br/>Site: SALZWEDEL'), 'red') );
observers.push( createObserverMarker(11.7166666667,48.55 , new GInfoWindowTab('Observer', 'Observer: SIRKO MOLAU<br/>Site: SEYSDORF'), 'red') );
observers.push( createObserverMarker(12.9638888889,52.4594444444 , new GInfoWindowTab('Observer', 'Observer: JURGEN RENDTEL<br/>Site: MARQUARDT'), 'red') );
observers.push( createObserverMarker(13.85,52.6666666667 , new GInfoWindowTab('Observer', 'Observer: FRANK ENZLEIN<br/>Site: TIEFENSEE'), 'red') );
observers.push( createObserverMarker(14.7836111111,49.9105555556 , new GInfoWindowTab('Observer', 'Observer: JAKUB CERNY<br/>Site: ONDREJOV'), 'red') );
observers.push( createObserverMarker(14.7836111111,49.9105555556 , new GInfoWindowTab('Observer', 'Observer: JAN VERFL<br/>Site: ONDREJOV'), 'red') );
observers.push( createObserverMarker(14.7836111111,49.9105555556 , new GInfoWindowTab('Observer', 'Observer: MARTIN NEDVED<br/>Site: ONDREJOV'), 'red') );
observers.push( createObserverMarker(14.7836111111,49.9105555556 , new GInfoWindowTab('Observer', 'Observer: PAVOL HABUDA<br/>Site: ONDREJOV'), 'red') );
observers.push( createObserverMarker(15.1075,46.1875 , new GInfoWindowTab('Observer', 'Observer: JAVOR KAC<br/>Site: Mrzlica'), 'red') );
observers.push( createObserverMarker(15.110277777778,46.188888888889 , new GInfoWindowTab('Observer', 'Observer: MITJA GOVEDIC<br/>Site: Mrzlica'), 'red') );
observers.push( createObserverMarker(15.725833333333,50.035 , new GInfoWindowTab('Observer', 'Observer: Tereza Novotna<br/>Site: PARDUBICE'), 'red') );
observers.push( createObserverMarker(15.725833333333,50.035 , new GInfoWindowTab('Observer', 'Observer: VILEM HEBLIK<br/>Site: PARDUBICE'), 'red') );
observers.push( createObserverMarker(16.347222222222,50.971388888889 , new GInfoWindowTab('Observer', 'Observer: Marcin Chwa?a<br/>Site: Strzegom'), 'red') );
observers.push( createObserverMarker(16.558333333333,48.503055555556 , new GInfoWindowTab('Observer', 'Observer: THOMAS WEILAND<br/>Site: Atzelsdorf'), 'red') );
observers.push( createObserverMarker(17.396111111111,49.303888888889 , new GInfoWindowTab('Observer', 'Observer: JAKUB KOUKAL<br/>Site: Kromeriz'), 'red') );
observers.push( createObserverMarker(17.396111111111,49.303888888889 , new GInfoWindowTab('Observer', 'Observer: SYLVIE GORKOVA<br/>Site: Kromeriz'), 'red') );
observers.push( createObserverMarker(17.5166666667,48.1 , new GInfoWindowTab('Observer', 'Observer: Tibor Csorgei<br/>Site: BELLOVA VES'), 'red') );
observers.push( createObserverMarker(17.5166666667,48.1 , new GInfoWindowTab('Observer', 'Observer: TIBOR CSORGEI<br/>Site: BELLOVA VES'), 'red') );
observers.push( createObserverMarker(17.829444444444,49.366111111111 , new GInfoWindowTab('Observer', 'Observer: Ivo Vespalec<br/>Site: Maruska'), 'red') );
observers.push( createObserverMarker(17.829444444444,49.366111111111 , new GInfoWindowTab('Observer', 'Observer: JAKUB KOUKAL<br/>Site: Maruska'), 'red') );
observers.push( createObserverMarker(18.016666666667,49.333333333333 , new GInfoWindowTab('Observer', 'Observer: Emil Brezina<br/>Site: Jezuvka'), 'red') );
observers.push( createObserverMarker(18.0166666667,49.35 , new GInfoWindowTab('Observer', 'Observer: PAVEL SVOZIL<br/>Site: VSETIN'), 'red') );
observers.push( createObserverMarker(18.05,48.8833333333 , new GInfoWindowTab('Observer', 'Observer: MATEJ SUSTR<br/>Site: TRENCIN'), 'red') );
observers.push( createObserverMarker(18.05,48.8833333333 , new GInfoWindowTab('Observer', 'Observer: PETER BAKALIK<br/>Site: TRENCIN'), 'red') );
observers.push( createObserverMarker(18.83,51.460277777778 , new GInfoWindowTab('Observer', 'Observer: Angelika Ju?kiewicz<br/>Site: Burzenin'), 'red') );
observers.push( createObserverMarker(18.83,51.460277777778 , new GInfoWindowTab('Observer', 'Observer: Justyna Mamzer<br/>Site: Burzenin'), 'red') );
observers.push( createObserverMarker(18.83,51.460277777778 , new GInfoWindowTab('Observer', 'Observer: Karolina Paprocka<br/>Site: Burzenin'), 'red') );
observers.push( createObserverMarker(18.83,51.460277777778 , new GInfoWindowTab('Observer', 'Observer: Katarzyna Mielczarek<br/>Site: Burzenin'), 'red') );
observers.push( createObserverMarker(18.83,51.460277777778 , new GInfoWindowTab('Observer', 'Observer: Magdalena Buczkowska<br/>Site: Burzenin'), 'red') );
observers.push( createObserverMarker(18.83,51.460277777778 , new GInfoWindowTab('Observer', 'Observer: Magdalena Sendak<br/>Site: Burzenin'), 'red') );
observers.push( createObserverMarker(18.83,51.460277777778 , new GInfoWindowTab('Observer', 'Observer: MARIAN MAJERIK<br/>Site: Burzenin'), 'red') );
observers.push( createObserverMarker(18.83,51.460277777778 , new GInfoWindowTab('Observer', 'Observer: Natalia Smus<br/>Site: Burzenin'), 'red') );
observers.push( createObserverMarker(18.83,51.460277777778 , new GInfoWindowTab('Observer', 'Observer: Urszula Dzikowicz<br/>Site: Burzenin'), 'red') );
observers.push( createObserverMarker(18.83,51.460277777778 , new GInfoWindowTab('Observer', 'Observer: DOMINIKA P?CZEK<br/>Site: LIRYDY'), 'red') );
observers.push( createObserverMarker(18.83,51.460277777778 , new GInfoWindowTab('Observer', 'Observer: KLAUDIA SICINSKA<br/>Site: LIRYDY'), 'red') );
observers.push( createObserverMarker(18.83,51.460277777778 , new GInfoWindowTab('Observer', 'Observer: PAULINA KEDZIERSKA<br/>Site: LIRYDY'), 'red') );
observers.push( createObserverMarker(19.935555555556,44.246666666667 , new GInfoWindowTab('Observer', 'Observer: Branislav Savic<br/>Site: Petnica'), 'red') );
observers.push( createObserverMarker(19.935555555556,44.246666666667 , new GInfoWindowTab('Observer', 'Observer: BRANISLAV SAVIC<br/>Site: Petnica'), 'red') );
observers.push( createObserverMarker(19.935555555556,44.246666666667 , new GInfoWindowTab('Observer', 'Observer: Filip ?olakovi?<br/>Site: Petnica'), 'red') );
observers.push( createObserverMarker(19.935555555556,44.246666666667 , new GInfoWindowTab('Observer', 'Observer: IVANA MARJANOVIC<br/>Site: Petnica'), 'red') );
observers.push( createObserverMarker(19.935555555556,44.246666666667 , new GInfoWindowTab('Observer', 'Observer: Lidija Jovanovic<br/>Site: Petnica'), 'red') );
observers.push( createObserverMarker(19.935555555556,44.246666666667 , new GInfoWindowTab('Observer', 'Observer: Vilena  Velikic<br/>Site: Petnica'), 'red') );
observers.push( createObserverMarker(20.611944444444,52.344166666667 , new GInfoWindowTab('Observer', 'Observer: Joanna Antosik<br/>Site: Dabrowka'), 'red') );
observers.push( createObserverMarker(20.611944444444,52.344166666667 , new GInfoWindowTab('Observer', 'Observer: PRZEMYSLAW ZOLADEK<br/>Site: Dabrowka'), 'red') );
observers.push( createObserverMarker(21.731388888889,51.709722222222 , new GInfoWindowTab('Observer', 'Observer: Tomasz Lojek<br/>Site: Grabniak'), 'red') );
observers.push( createObserverMarker(22.6,51.8 , new GInfoWindowTab('Observer', 'Observer: DARIUSZ DOROSZ<br/>Site: ZABIKOW'), 'red') );
observers.push( createObserverMarker(23.216666666667,53.116666666667 , new GInfoWindowTab('Observer', 'Observer: Magdalena Sieniawska<br/>Site: BIALYSTOK'), 'red') );
observers.push( createObserverMarker(23.466666666667,52.466666666667 , new GInfoWindowTab('Observer', 'Observer: ULRICH SPERBERG<br/>Site: Salzwedel'), 'red') );
observers.push( createObserverMarker(24.512222222222,46.642777777778 , new GInfoWindowTab('Observer', 'Observer: Raul Truta<br/>Site: Ceuasu de Campie'), 'red') );
observers.push( createObserverMarker(26.1,54.2 , new GInfoWindowTab('Observer', 'Observer: IVAN M. SERGEY<br/>Site: MOLODECHNO'), 'red') );
observers.push( createObserverMarker(26.1,54.2 , new GInfoWindowTab('Observer', 'Observer: Ivan Sergey<br/>Site: MOLODECHNO'), 'red') );
observers.push( createObserverMarker(26.2,55.366666666667 , new GInfoWindowTab('Observer', 'Observer: RICARDAS BALCIUNAS<br/>Site: Vidiskes'), 'red') );
observers.push( createObserverMarker(26.486388888889,60.898333333333 , new GInfoWindowTab('Observer', 'Observer: ILKKA YRJOLA<br/>Site: Anhava'), 'red') );
observers.push( createObserverMarker(26.743888888889,54.279444444444 , new GInfoWindowTab('Observer', 'Observer: Ivan Sergey<br/>Site: Molodechno'), 'red') );
observers.push( createObserverMarker(30.524166666667,50.298055555556 , new GInfoWindowTab('Observer', 'Observer: Igor Chalenko<br/>Site: Lisniki'), 'red') );
observers.push( createObserverMarker(30.714444444444,36.875833333333 , new GInfoWindowTab('Observer', 'Observer: ANTONIO MARTINEZ<br/>Site: Antalya'), 'red') );
observers.push( createObserverMarker(30.8833333333,52.4833333333 , new GInfoWindowTab('Observer', 'Observer: SERGEY DOBROWSKY<br/>Site: GOMEL'), 'red') );
observers.push( createObserverMarker(34.604444444444,49.599722222222 , new GInfoWindowTab('Observer', 'Observer: Roman Kostenko<br/>Site: Poltava'), 'red') );
observers.push( createObserverMarker(34.979722222222,31.8175 , new GInfoWindowTab('Observer', 'Observer: ANNA S. LEVINA<br/>Site: Neve Shalom'), 'red') );
observers.push( createObserverMarker(34.979722222222,31.8175 , new GInfoWindowTab('Observer', 'Observer: Ella Ratz<br/>Site: Neve Shalom'), 'red') );
observers.push( createObserverMarker(47.083888888889,24.5925 , new GInfoWindowTab('Observer', 'Observer: Raul Truta<br/>Site: Orheiul Bistritei'), 'red') );
observers.push( createObserverMarker(49.820833333333,15.650833333333 , new GInfoWindowTab('Observer', 'Observer: Petr Horalek<br/>Site: Ustupky'), 'red') );
observers.push( createObserverMarker(73.299166666667,19.256666666667 , new GInfoWindowTab('Observer', 'Observer: Ameya Deshpande<br/>Site: Mamnoli'), 'red') );
observers.push( createObserverMarker(73.299166666667,19.256666666667 , new GInfoWindowTab('Observer', 'Observer: Amogh Waghmare<br/>Site: Mamnoli'), 'red') );
observers.push( createObserverMarker(73.299166666667,19.256666666667 , new GInfoWindowTab('Observer', 'Observer: MAYURESH DESAI<br/>Site: Mamnoli'), 'red') );
observers.push( createObserverMarker(73.299166666667,19.256666666667 , new GInfoWindowTab('Observer', 'Observer: Rohan Shewale<br/>Site: Mamnoli'), 'red') );
observers.push( createObserverMarker(73.666666666667,18.5 , new GInfoWindowTab('Observer', 'Observer: NILESH PUNTAMBEKAR<br/>Site: Wakad'), 'red') );
observers.push( createObserverMarker(116.83,40.554166666667 , new GInfoWindowTab('Observer', 'Observer: Weihou Zeng<br/>Site: Shitanglu,Miyun,Beijing'), 'red') );
observers.push( createObserverMarker(121.16472222222,24.088055555556 , new GInfoWindowTab('Observer', 'Observer: Jer Nan Lou<br/>Site: Meifeng, Nantou County'), 'red') );
var mgr = new GMarkerManager(map);
			mgr.addMarkers(observers, 0);
			mgr.refresh();