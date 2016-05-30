
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
observers.push( createObserverMarker(-114.35944444444,62.550277777778 , new GInfoWindowTab('Observer', 'Observer: BRUCE MCCURDY<br/>Site: Vee Lake, Northwest Territories'), 'red') );
observers.push( createObserverMarker(-114.35944444444,62.550277777778 , new GInfoWindowTab('Observer', 'Observer: Stephen Bedingfield<br/>Site: Vee Lake, Northwest Territories'), 'red') );
observers.push( createObserverMarker(-110.916666667,32.3 , new GInfoWindowTab('Observer', 'Observer: CARL HERGENROTHER<br/>Site: TUCSON AZ'), 'red') );
observers.push( createObserverMarker(-110.82277777778,29.319444444444 , new GInfoWindowTab('Observer', 'Observer: Salvador Aguirre<br/>Site: Ejido El Carmen, Hermosillo, Sonora'), 'red') );
observers.push( createObserverMarker(-110.76055555556,29.2175 , new GInfoWindowTab('Observer', 'Observer: Salvador Aguirre<br/>Site: Observatorio Ernesto Juarez D, Mpo. Hermosillo, Sonora.'), 'red') );
observers.push( createObserverMarker(-95.7125,35.947777777778 , new GInfoWindowTab('Observer', 'Observer: WILLIAM GODLEY<br/>Site: Coweta, Oklahoma'), 'red') );
observers.push( createObserverMarker(-88.15,40.8666666667 , new GInfoWindowTab('Observer', 'Observer: KEN HODONSKY<br/>Site: CULLOM, IL'), 'red') );
observers.push( createObserverMarker(-79.136388888889,38.131388888889 , new GInfoWindowTab('Observer', 'Observer: E. Brett Waller<br/>Site: Staunton, Virginia'), 'red') );
observers.push( createObserverMarker(-76.983055555556,38.463888888889 , new GInfoWindowTab('Observer', 'Observer: RICHARD TAIBI<br/>Site: Bel Alton, Maryland'), 'red') );
observers.push( createObserverMarker(-75.700555555556,40.301388888889 , new GInfoWindowTab('Observer', 'Observer: PETER DETTERLINE<br/>Site: Fancy Hill Observatory'), 'red') );
observers.push( createObserverMarker(-75.0875,45.419444444444 , new GInfoWindowTab('Observer', 'Observer: PIERRE MARTIN<br/>Site: Bourget, ON'), 'red') );
observers.push( createObserverMarker(-74.8983333333,40.6811111111 , new GInfoWindowTab('Observer', 'Observer: WAYNE T. HALLY<br/>Site: HIGH BRIDGE, NJ'), 'red') );
observers.push( createObserverMarker(-63.8,11 , new GInfoWindowTab('Observer', 'Observer: José Cappelletto<br/>Site: Pampatar'), 'red') );
observers.push( createObserverMarker(-1.5,50.983333333333 , new GInfoWindowTab('Observer', 'Observer: Andrew Clarke<br/>Site: Romsey'), 'red') );
observers.push( createObserverMarker(-1.5,50.983333333333 , new GInfoWindowTab('Observer', 'Observer: David Scanlan<br/>Site: Romsey'), 'red') );
observers.push( createObserverMarker(3.6166666666667,50.716666666667 , new GInfoWindowTab('Observer', 'Observer: MICHEL VANDEPUTTE<br/>Site: Ronse'), 'red') );
observers.push( createObserverMarker(3.6333333333333,50.716666666667 , new GInfoWindowTab('Observer', 'Observer: MICHEL VANDEPUTTE<br/>Site: Ellezelles'), 'red') );
observers.push( createObserverMarker(5.6666666666667,52.333333333333 , new GInfoWindowTab('Observer', 'Observer: KOEN MISKOTTE<br/>Site: Ermelo'), 'red') );
observers.push( createObserverMarker(5.6833333333333,52.266666666667 , new GInfoWindowTab('Observer', 'Observer: MICHEL VANDEPUTTE<br/>Site: Ermelo'), 'red') );
observers.push( createObserverMarker(5.9422222222222,43.824166666667 , new GInfoWindowTab('Observer', 'Observer: KARL ANTIER<br/>Site: Valensole'), 'red') );
observers.push( createObserverMarker(6.0563888888889,52.114444444444 , new GInfoWindowTab('Observer', 'Observer: Alex Scholten<br/>Site: Eerbeek'), 'red') );
observers.push( createObserverMarker(6.1511111111111,43.126666666667 , new GInfoWindowTab('Observer', 'Observer: JENS LACORNE<br/>Site: Hyeres'), 'red') );
observers.push( createObserverMarker(6.6744444444444,52.387777777778 , new GInfoWindowTab('Observer', 'Observer: SIETSE DIJKSTRA<br/>Site: Almelo, lateraalkanaal'), 'red') );
observers.push( createObserverMarker(6.7477777777778,52.295277777778 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Borne'), 'red') );
observers.push( createObserverMarker(6.8677777777778,52.4225 , new GInfoWindowTab('Observer', 'Observer: SIETSE DIJKSTRA<br/>Site: Nutter,  Bovenesweg'), 'red') );
observers.push( createObserverMarker(6.9638888888889,52.416111111111 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Cosmos Observatory Lattrop'), 'red') );
observers.push( createObserverMarker(7.0138888888889,52.214722222222 , new GInfoWindowTab('Observer', 'Observer: CARL JOHANNINK<br/>Site: Gronau'), 'red') );
observers.push( createObserverMarker(7.015,52.214444444444 , new GInfoWindowTab('Observer', 'Observer: CARL JOHANNINK<br/>Site: Gronau'), 'red') );
observers.push( createObserverMarker(7.325,51.971944444444 , new GInfoWindowTab('Observer', 'Observer: MARCO LANGBROEK<br/>Site: Baumberge, Billerbeck'), 'red') );
observers.push( createObserverMarker(7.325,51.971944444444 , new GInfoWindowTab('Observer', 'Observer: CARL JOHANNINK<br/>Site: Billerbeck'), 'red') );
observers.push( createObserverMarker(9.95,49.833333333333 , new GInfoWindowTab('Observer', 'Observer: PIERRE BADER<br/>Site: Winterhausen'), 'red') );
observers.push( createObserverMarker(11,53.175 , new GInfoWindowTab('Observer', 'Observer: FRANK ENZLEIN<br/>Site: HITZACKER'), 'red') );
observers.push( createObserverMarker(12.3325,48.381111111111 , new GInfoWindowTab('Observer', 'Observer: THOMAS RATTEI<br/>Site: Asenreit'), 'red') );
observers.push( createObserverMarker(12.6341666667,52.4955555556 , new GInfoWindowTab('Observer', 'Observer: SIRKO MOLAU<br/>Site: KETZUR'), 'red') );
observers.push( createObserverMarker(12.9638888889,52.4594444444 , new GInfoWindowTab('Observer', 'Observer: JURGEN RENDTEL<br/>Site: MARQUARDT'), 'red') );
observers.push( createObserverMarker(13.2,52.3 , new GInfoWindowTab('Observer', 'Observer: RAINER ARLT<br/>Site: TREMSDORF'), 'red') );
observers.push( createObserverMarker(13.2,52.3 , new GInfoWindowTab('Observer', 'Observer: STELA FRENCHEVA<br/>Site: TREMSDORF'), 'red') );
observers.push( createObserverMarker(14.162777777778,49.481111111111 , new GInfoWindowTab('Observer', 'Observer: Al?b?ta Kadlecová<br/>Site: Bubovice'), 'red') );
observers.push( createObserverMarker(14.162777777778,49.974444444444 , new GInfoWindowTab('Observer', 'Observer: Al?b?ta Kadlecová<br/>Site: Bubovice'), 'red') );
observers.push( createObserverMarker(14.162777777778,49.974444444444 , new GInfoWindowTab('Observer', 'Observer: JAN VERFL<br/>Site: Bubovice'), 'red') );
observers.push( createObserverMarker(15.4627777778,46.4377777778 , new GInfoWindowTab('Observer', 'Observer: JAVOR KAC<br/>Site: TRIJE KRALJI'), 'red') );
observers.push( createObserverMarker(15.4627777778,46.4377777778 , new GInfoWindowTab('Observer', 'Observer: MITJA GOVEDIC<br/>Site: TRIJE KRALJI'), 'red') );
observers.push( createObserverMarker(15.725833333333,50.035 , new GInfoWindowTab('Observer', 'Observer: VILEM HEBLIK<br/>Site: PARDUBICE'), 'red') );
observers.push( createObserverMarker(16.403333333333,49.319166666667 , new GInfoWindowTab('Observer', 'Observer: KAMIL HORNOCH<br/>Site: Vohancice'), 'red') );
observers.push( createObserverMarker(17.354444444444,49.19 , new GInfoWindowTab('Observer', 'Observer: JAKUB KOUKAL<br/>Site: Bunc'), 'red') );
observers.push( createObserverMarker(17.396111111111,49.303888888889 , new GInfoWindowTab('Observer', 'Observer: JAKUB KOUKAL<br/>Site: Kromeriz'), 'red') );
observers.push( createObserverMarker(17.5166666667,48.1 , new GInfoWindowTab('Observer', 'Observer: Tibor Csorgei<br/>Site: BELLOVA VES'), 'red') );
observers.push( createObserverMarker(18.260555555556,46.070277777778 , new GInfoWindowTab('Observer', 'Observer: AGOSTON SZAUER<br/>Site: Palé'), 'red') );
observers.push( createObserverMarker(18.260555555556,46.070277777778 , new GInfoWindowTab('Observer', 'Observer: Anna Rieth<br/>Site: Palé'), 'red') );
observers.push( createObserverMarker(18.260555555556,46.070277777778 , new GInfoWindowTab('Observer', 'Observer: BALAZS FODOR<br/>Site: Palé'), 'red') );
observers.push( createObserverMarker(18.260555555556,46.070277777778 , new GInfoWindowTab('Observer', 'Observer: János Bakos<br/>Site: Palé'), 'red') );
observers.push( createObserverMarker(19.9775,47.881388888889 , new GInfoWindowTab('Observer', 'Observer: Antal Igaz<br/>Site: Mátraháza'), 'red') );
observers.push( createObserverMarker(19.9775,47.881666666667 , new GInfoWindowTab('Observer', 'Observer: István Tepliczky<br/>Site: Mátraháza'), 'red') );
observers.push( createObserverMarker(20.654444444444,49.508055555556 , new GInfoWindowTab('Observer', 'Observer: ANDRZEJ SKOCZEWSKI<br/>Site: Barcice - zabronie'), 'red') );
observers.push( createObserverMarker(21.196388888889,62.93 , new GInfoWindowTab('Observer', 'Observer: VESA TORNQVIST<br/>Site: Korsnas'), 'red') );
observers.push( createObserverMarker(21.196388888889,62.93 , new GInfoWindowTab('Observer', 'Observer: VESA TORNQVIST<br/>Site: Korsnäs'), 'red') );
observers.push( createObserverMarker(22.6,51.8 , new GInfoWindowTab('Observer', 'Observer: DARIUSZ DOROSZ<br/>Site: ZABIKOW'), 'red') );
observers.push( createObserverMarker(23.466666666667,52.466666666667 , new GInfoWindowTab('Observer', 'Observer: ULRICH SPERBERG<br/>Site: Salzwedel'), 'red') );
observers.push( createObserverMarker(35.1,30.29 , new GInfoWindowTab('Observer', 'Observer: ANNA S. LEVINA<br/>Site: km101(Beer Manucha)'), 'red') );
observers.push( createObserverMarker(35.1,30.29 , new GInfoWindowTab('Observer', 'Observer: SHY HALATZI<br/>Site: Km101 (Be&#039;er Menucha)'), 'red') );
observers.push( createObserverMarker(48.48,36.66 , new GInfoWindowTab('Observer', 'Observer: mina alizadeh<br/>Site: zanjan university'), 'red') );
observers.push( createObserverMarker(73.588055555556,18.401388888889 , new GInfoWindowTab('Observer', 'Observer: MUKUL MHASKEY<br/>Site: Suryashibir,Varasgaon lake, Pune'), 'red') );
observers.push( createObserverMarker(73.781111111111,18.545833333333 , new GInfoWindowTab('Observer', 'Observer: Rushikesh Tilak<br/>Site: Pashan'), 'red') );
observers.push( createObserverMarker(116.16805555556,41.572777777778 , new GInfoWindowTab('Observer', 'Observer: Simiao CHENG<br/>Site: Xiangying'), 'red') );
observers.push( createObserverMarker(121.17055555556,24.0625 , new GInfoWindowTab('Observer', 'Observer: JER NAN LOU<br/>Site: CINGJING FARM, NANTOU COUNTY'), 'red') );
observers.push( createObserverMarker(139.13166666667,34.938055555556 , new GInfoWindowTab('Observer', 'Observer: Hideki Seo<br/>Site: Ito city, Shizuoka pref.'), 'red') );
observers.push( createObserverMarker(139.13166666667,34.938055555556 , new GInfoWindowTab('Observer', 'Observer: Katsuyuki Kobayashi<br/>Site: Ito city, Shizuoka pref.'), 'red') );
observers.push( createObserverMarker(139.13166666667,34.938055555556 , new GInfoWindowTab('Observer', 'Observer: Kazumi Terakubo<br/>Site: Ito city, Shizuoka pref.'), 'red') );
observers.push( createObserverMarker(139.13166666667,34.938055555556 , new GInfoWindowTab('Observer', 'Observer: Mikiya Sato<br/>Site: Ito city, Shizuoka pref.'), 'red') );
observers.push( createObserverMarker(140.10555555556,36.230555555556 , new GInfoWindowTab('Observer', 'Observer: SHIGEO UCHIYAMA<br/>Site: Sakuragawa, Ibaraki'), 'red') );
var mgr = new GMarkerManager(map);
			mgr.addMarkers(observers, 0);
			mgr.refresh();