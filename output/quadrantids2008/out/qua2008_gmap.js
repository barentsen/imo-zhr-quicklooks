
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
			observers.push( createObserverMarker(-114.79805555556,52.912222222222 , new GInfoWindowTab('Observer', 'Observer: BRUCE MCCURDY<br/>Site: Buck Lake, Alberta'), 'red') );
observers.push( createObserverMarker(-114.79777777778,52.912777777778 , new GInfoWindowTab('Observer', 'Observer: Alister Ling<br/>Site: Alister Ling'), 'red') );
observers.push( createObserverMarker(-110.82277777778,29.319444444444 , new GInfoWindowTab('Observer', 'Observer: Salvador Aguirre<br/>Site: Ejido El Carmen, Hermosillo, Sonora'), 'red') );
observers.push( createObserverMarker(-95.962222222222,35.947777777778 , new GInfoWindowTab('Observer', 'Observer: WILLIAM GODLEY<br/>Site: Coweta, Oklahoma'), 'red') );
observers.push( createObserverMarker(-82.1666666667,32.8166666667 , new GInfoWindowTab('Observer', 'Observer: KIM S. YOUMANS<br/>Site: EMANUEL COUNTY, GA'), 'red') );
observers.push( createObserverMarker(-79.8555555556,32.7583333333 , new GInfoWindowTab('Observer', 'Observer: MARK DAVIS<br/>Site: SULLIVAN&#039;S ISLAND, S'), 'red') );
observers.push( createObserverMarker(-76.983055555556,38.463888888889 , new GInfoWindowTab('Observer', 'Observer: RICHARD TAIBI<br/>Site: Bel Alton, Maryland'), 'red') );
observers.push( createObserverMarker(-75.705,40.301666666667 , new GInfoWindowTab('Observer', 'Observer: PETER DETTERLINE<br/>Site: Douglassville, PA'), 'red') );
observers.push( createObserverMarker(-74.8983333333,40.6811111111 , new GInfoWindowTab('Observer', 'Observer: PIERRE MARTIN<br/>Site: HIGH BRIDGE, NJ'), 'red') );
observers.push( createObserverMarker(-74.8983333333,40.6811111111 , new GInfoWindowTab('Observer', 'Observer: WAYNE T. HALLY<br/>Site: HIGH BRIDGE, NJ'), 'red') );
observers.push( createObserverMarker(-71.181111111111,42.108888888889 , new GInfoWindowTab('Observer', 'Observer: Richard Kramer<br/>Site: Lake Massapoag, Sharon MA'), 'red') );
observers.push( createObserverMarker(-66.933333333333,46.141666666667 , new GInfoWindowTab('Observer', 'Observer: PAUL GRAY<br/>Site: Dorn Ridge'), 'red') );
observers.push( createObserverMarker(-66.933333333333,46.141666666667 , new GInfoWindowTab('Observer', 'Observer: Ted Dunphy<br/>Site: Dorn Ridge'), 'red') );
observers.push( createObserverMarker(-17.890833333333,28.761666666667 , new GInfoWindowTab('Observer', 'Observer: Robert Wagner<br/>Site: Observatorio Roque de los Mu'), 'red') );
observers.push( createObserverMarker(-17.760833333333,28.647777777778 , new GInfoWindowTab('Observer', 'Observer: FELIX BETTONVIL<br/>Site: Los Cancajos, La Palma'), 'red') );
observers.push( createObserverMarker(2.5205555555556,41.721388888889 , new GInfoWindowTab('Observer', 'Observer: JOSEP TRIGO RODRIGUEZ<br/>Site: Riells i Viabrea'), 'red') );
observers.push( createObserverMarker(3.6333333333333,50.716666666667 , new GInfoWindowTab('Observer', 'Observer: MICHEL VANDEPUTTE<br/>Site: Ellezelles'), 'red') );
observers.push( createObserverMarker(6.6744444444444,52.387777777778 , new GInfoWindowTab('Observer', 'Observer: SIETSE DIJKSTRA<br/>Site: Almelo lateraalkanaal'), 'red') );
observers.push( createObserverMarker(6.7477777777778,52.295277777778 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Borne'), 'red') );
observers.push( createObserverMarker(6.9663888888889,52.415 , new GInfoWindowTab('Observer', 'Observer: SIETSE DIJKSTRA<br/>Site: Cosmos sterrenwacht Lattrop'), 'red') );
observers.push( createObserverMarker(9.95,49.833333333333 , new GInfoWindowTab('Observer', 'Observer: PIERRE BADER<br/>Site: Winterhausen'), 'red') );
observers.push( createObserverMarker(11,53.175 , new GInfoWindowTab('Observer', 'Observer: FRANK ENZLEIN<br/>Site: HITZACKER'), 'red') );
observers.push( createObserverMarker(12.0363888889,52.2894444444 , new GInfoWindowTab('Observer', 'Observer: ROLAND WINKLER<br/>Site: SCHKEUDITZ'), 'red') );
observers.push( createObserverMarker(13.0638888889,52.3277777778 , new GInfoWindowTab('Observer', 'Observer: SVEN NATHER<br/>Site: WILHELMSHORST'), 'red') );
observers.push( createObserverMarker(13.665,52.76 , new GInfoWindowTab('Observer', 'Observer: JURGEN RENDTEL<br/>Site: BIESENTHAL'), 'red') );
observers.push( createObserverMarker(13.665,52.76 , new GInfoWindowTab('Observer', 'Observer: ULRICH SPERBERG<br/>Site: BIESENTHAL'), 'red') );
observers.push( createObserverMarker(13.748333333333,52.985 , new GInfoWindowTab('Observer', 'Observer: RAINER ARLT<br/>Site: Friedrichswalde'), 'red') );
observers.push( createObserverMarker(13.748333333333,52.985 , new GInfoWindowTab('Observer', 'Observer: STELA FRENCHEVA<br/>Site: Friedrichswalde'), 'red') );
observers.push( createObserverMarker(14.1166666667,52.2166666667 , new GInfoWindowTab('Observer', 'Observer: ANDRE KNOFEL<br/>Site: LINDENBERG'), 'red') );
observers.push( createObserverMarker(14.225,53.5202777778 , new GInfoWindowTab('Observer', 'Observer: JURGEN RENDTEL<br/>Site: MEWEGEN'), 'red') );
observers.push( createObserverMarker(14.225,53.5202777778 , new GInfoWindowTab('Observer', 'Observer: ULRICH SPERBERG<br/>Site: MEWEGEN'), 'red') );
observers.push( createObserverMarker(15.650833333333,49.820833333333 , new GInfoWindowTab('Observer', 'Observer: PETR HORALEK<br/>Site: Ustupky'), 'red') );
observers.push( createObserverMarker(15.725833333333,50.035 , new GInfoWindowTab('Observer', 'Observer: Tereza Novotna<br/>Site: PARDUBICE'), 'red') );
observers.push( createObserverMarker(15.725833333333,50.035 , new GInfoWindowTab('Observer', 'Observer: VILEM HEBLIK<br/>Site: PARDUBICE'), 'red') );
observers.push( createObserverMarker(16.347222222222,50.971388888889 , new GInfoWindowTab('Observer', 'Observer: Marcin Chwala<br/>Site: Strzegom'), 'red') );
observers.push( createObserverMarker(16.55,52.6 , new GInfoWindowTab('Observer', 'Observer: MACIEJ RESZELSKI<br/>Site: Galowo'), 'red') );
observers.push( createObserverMarker(16.5722222222,52.6138888889 , new GInfoWindowTab('Observer', 'Observer: MACIEJ RESZELSKI<br/>Site: SZAMOTULY'), 'red') );
observers.push( createObserverMarker(17.396111111111,49.303888888889 , new GInfoWindowTab('Observer', 'Observer: Irena Divisova<br/>Site: Kromeriz'), 'red') );
observers.push( createObserverMarker(17.396111111111,49.303888888889 , new GInfoWindowTab('Observer', 'Observer: JAKUB KOUKAL<br/>Site: Kromeriz'), 'red') );
observers.push( createObserverMarker(18.308888888889,54.573888888889 , new GInfoWindowTab('Observer', 'Observer: Krzysztof Polakowski<br/>Site: Gniewowo'), 'red') );
observers.push( createObserverMarker(18.6333333333,51.4166666667 , new GInfoWindowTab('Observer', 'Observer: TADEUSZ SOBCZAK<br/>Site: ZLOCZEW'), 'red') );
observers.push( createObserverMarker(19.979166666667,47.883333333333 , new GInfoWindowTab('Observer', 'Observer: Andras Uhrin<br/>Site: Matrahaza'), 'red') );
observers.push( createObserverMarker(19.979166666667,47.883333333333 , new GInfoWindowTab('Observer', 'Observer: Antal Igaz<br/>Site: Matrahaza'), 'red') );
observers.push( createObserverMarker(19.979166666667,47.883333333333 , new GInfoWindowTab('Observer', 'Observer: Istvan Tepliczky<br/>Site: Matrahaza'), 'red') );
observers.push( createObserverMarker(19.979166666667,47.883333333333 , new GInfoWindowTab('Observer', 'Observer: Krisztian Sarneczky<br/>Site: Matrahaza'), 'red') );
observers.push( createObserverMarker(20.75,53.0333333333 , new GInfoWindowTab('Observer', 'Observer: JAROSLAW DYGOS<br/>Site: CZERNICE BOROWE'), 'red') );
observers.push( createObserverMarker(21.2,41.9 , new GInfoWindowTab('Observer', 'Observer: Martin Stojanovski<br/>Site: Mala Matka'), 'red') );
observers.push( createObserverMarker(22.7,51.2 , new GInfoWindowTab('Observer', 'Observer: LUKASZ WOZNIAK<br/>Site: LUBLIN'), 'red') );
observers.push( createObserverMarker(23.7,47.966666666667 , new GInfoWindowTab('Observer', 'Observer: Arnold Gentz<br/>Site: Sapanta, Maramures'), 'red') );
observers.push( createObserverMarker(23.7,47.966666666667 , new GInfoWindowTab('Observer', 'Observer: Maria Turda<br/>Site: Sapanta, Maramures'), 'red') );
observers.push( createObserverMarker(23.883333333333,47.933333333333 , new GInfoWindowTab('Observer', 'Observer: Sorin Hotea<br/>Site: Sighetu Marmatiei'), 'red') );
observers.push( createObserverMarker(29.9,59.883333333333 , new GInfoWindowTab('Observer', 'Observer: ANDREY IGOSHEV<br/>Site: St. Petersburg, Peterhof'), 'red') );
observers.push( createObserverMarker(30.8833333333,52.4833333333 , new GInfoWindowTab('Observer', 'Observer: ALEKSANDR POBIAKHA<br/>Site: GOMEL'), 'red') );
observers.push( createObserverMarker(30.8833333333,52.4833333333 , new GInfoWindowTab('Observer', 'Observer: SERGEY DOBROWSKY<br/>Site: GOMEL'), 'red') );
observers.push( createObserverMarker(34.766666666667,30.6 , new GInfoWindowTab('Observer', 'Observer: Aleksey Kobets<br/>Site: Mizpe Ramon'), 'red') );
observers.push( createObserverMarker(34.766666666667,30.6 , new GInfoWindowTab('Observer', 'Observer: ANNA S. LEVINA<br/>Site: Mizpe Ramon'), 'red') );
observers.push( createObserverMarker(34.766666666667,30.6 , new GInfoWindowTab('Observer', 'Observer: SHLOMI EINI<br/>Site: Mizpe Ramon'), 'red') );
observers.push( createObserverMarker(105.8075,19.471388888889 , new GInfoWindowTab('Observer', 'Observer: Duc Thien Ngo<br/>Site: Hunter2-Tinh Gia-Thanh Hoa'), 'red') );
observers.push( createObserverMarker(115.93361111111,40.201666666667 , new GInfoWindowTab('Observer', 'Observer: Xiang ZHAN<br/>Site: Hezijian, Changping, Beijing'), 'red') );
observers.push( createObserverMarker(115.93361111111,40.201944444444 , new GInfoWindowTab('Observer', 'Observer: Xin Li<br/>Site: Heizijian,Changping,Beijing'), 'red') );
observers.push( createObserverMarker(115.93361111111,40.201944444444 , new GInfoWindowTab('Observer', 'Observer: Simiao CHENG<br/>Site: Hezijian,Changping,Beijing '), 'red') );
observers.push( createObserverMarker(121.95666666667,30.959722222222 , new GInfoWindowTab('Observer', 'Observer: Ling Feng<br/>Site: DongHai Shanghai'), 'red') );
observers.push( createObserverMarker(139.13166666667,34.938055555556 , new GInfoWindowTab('Observer', 'Observer: Hideki Seo<br/>Site: Ito-city'), 'red') );
observers.push( createObserverMarker(139.13166666667,34.938055555556 , new GInfoWindowTab('Observer', 'Observer: Katsuyuki Kobayashi<br/>Site: Ito-city'), 'red') );
observers.push( createObserverMarker(139.13166666667,34.938055555556 , new GInfoWindowTab('Observer', 'Observer: Kazumi Terakubo<br/>Site: Ito-city'), 'red') );
observers.push( createObserverMarker(139.13166666667,34.938055555556 , new GInfoWindowTab('Observer', 'Observer: Mikiya Sato<br/>Site: Ito-city'), 'red') );
observers.push( createObserverMarker(140.04777777778,35.383055555556 , new GInfoWindowTab('Observer', 'Observer: SHIGEO UCHIYAMA<br/>Site: Sodegaura, Chiba'), 'red') );
observers.push( createObserverMarker(140.10555555556,36.230555555556 , new GInfoWindowTab('Observer', 'Observer: SHIGEO UCHIYAMA<br/>Site: Sakuragawa, Ibaraki'), 'red') );
var mgr = new GMarkerManager(map);
			mgr.addMarkers(observers, 0);
			mgr.refresh();