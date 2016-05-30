
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
observers.push( createObserverMarker(-113.7875,53.371111111111 , new GInfoWindowTab('Observer', 'Observer: BRUCE MCCURDY<br/>Site: Sanctuary Road'), 'red') );
observers.push( createObserverMarker(-112.78,53.536666666667 , new GInfoWindowTab('Observer', 'Observer: BRUCE MCCURDY<br/>Site: Beaver Hills DSP (Blackfoot)'), 'red') );
observers.push( createObserverMarker(-110.96166666667,29.104722222222 , new GInfoWindowTab('Observer', 'Observer: Salvador Aguirre<br/>Site: Hermosillo, Sonora'), 'red') );
observers.push( createObserverMarker(-110.82277777778,29.319444444444 , new GInfoWindowTab('Observer', 'Observer: Salvador Aguirre<br/>Site: Ejido El Carmen, Hermosillo, Sonora'), 'red') );
observers.push( createObserverMarker(-110.82277777778,29.319444444444 , new GInfoWindowTab('Observer', 'Observer: Salvador Aguirre<br/>Site: Ejido El Carmen, Hermosillo, Sonora '), 'red') );
observers.push( createObserverMarker(-89,38.666666666667 , new GInfoWindowTab('Observer', 'Observer: Peter  Kozich<br/>Site: Greenville, IL'), 'red') );
observers.push( createObserverMarker(-82.354166666667,23.095 , new GInfoWindowTab('Observer', 'Observer: MARIANO GARCIA VILCHEZ<br/>Site: Lawton, 10 de Octubre, (Mileny&#039;s home)'), 'red') );
observers.push( createObserverMarker(-78.454166666667,43.116666666667 , new GInfoWindowTab('Observer', 'Observer: WILLIAM WATSON<br/>Site: Buffalo, New York'), 'red') );
observers.push( createObserverMarker(-76.983055555556,38.463888888889 , new GInfoWindowTab('Observer', 'Observer: RICHARD TAIBI<br/>Site: Bel Alton, Maryland'), 'red') );
observers.push( createObserverMarker(-75.830555555556,44.930555555556 , new GInfoWindowTab('Observer', 'Observer: PIERRE MARTIN<br/>Site: Merrickville'), 'red') );
observers.push( createObserverMarker(-75.611666666667,40.321666666667 , new GInfoWindowTab('Observer', 'Observer: Daniel Delaney<br/>Site: Gilbertsville'), 'red') );
observers.push( createObserverMarker(-75.091666666667,45.756944444444 , new GInfoWindowTab('Observer', 'Observer: PIERRE MARTIN<br/>Site: Bourget'), 'red') );
observers.push( createObserverMarker(-74.8983333333,40.6811111111 , new GInfoWindowTab('Observer', 'Observer: WAYNE T. HALLY<br/>Site: HIGH BRIDGE, NJ'), 'red') );
observers.push( createObserverMarker(-70.278611111111,-23.705833333333 , new GInfoWindowTab('Observer', 'Observer: Farid Char<br/>Site: Antofagasta'), 'red') );
observers.push( createObserverMarker(-17.876111111111,28.759444444444 , new GInfoWindowTab('Observer', 'Observer: FELIX BETTONVIL<br/>Site: Roque de los Muchachos, La Palma'), 'red') );
observers.push( createObserverMarker(-7.9,38.566666666667 , new GInfoWindowTab('Observer', 'Observer: MICHEL VANDEPUTTE<br/>Site: Evora'), 'red') );
observers.push( createObserverMarker(-7.75,38.833333333333 , new GInfoWindowTab('Observer', 'Observer: Koen Miskotte<br/>Site: Videnha (near Evora)'), 'red') );
observers.push( createObserverMarker(-7.75,38.833333333333 , new GInfoWindowTab('Observer', 'Observer: KOEN MISKOTTE<br/>Site: Videnha (near Evora)'), 'red') );
observers.push( createObserverMarker(-7.4,38.6 , new GInfoWindowTab('Observer', 'Observer: CARL JOHANNINK<br/>Site: Evora'), 'red') );
observers.push( createObserverMarker(-4.175,40.683333333333 , new GInfoWindowTab('Observer', 'Observer: FRANCISCO OCANA GONZALEZ<br/>Site: Peguerinos-Alto Leones'), 'red') );
observers.push( createObserverMarker(-2.8916666666667,40.096666666667 , new GInfoWindowTab('Observer', 'Observer: FRANCISCO OCANA GONZALEZ<br/>Site: Barajas de Melo - Huelves'), 'red') );
observers.push( createObserverMarker(-2.8916666666667,40.096666666667 , new GInfoWindowTab('Observer', 'Observer: Antonio Rodríguez Anaya<br/>Site: Huelves-Barajas de Melo'), 'red') );
observers.push( createObserverMarker(-0.683333333333,37.9666666667 , new GInfoWindowTab('Observer', 'Observer: RAFAEL RUBEN TORREGROSA SOLER<br/>Site: TORREVIEJA'), 'red') );
observers.push( createObserverMarker(5.4877777777778,51.704166666667 , new GInfoWindowTab('Observer', 'Observer: Joost Hartman<br/>Site: sterrenwacht Halley'), 'red') );
observers.push( createObserverMarker(5.4877777777778,51.704444444444 , new GInfoWindowTab('Observer', 'Observer: ROY KEERIS<br/>Site: Roy Keeris'), 'red') );
observers.push( createObserverMarker(5.86,52.205833333333 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Veluwe'), 'red') );
observers.push( createObserverMarker(6.1511111111111,43.126666666667 , new GInfoWindowTab('Observer', 'Observer: JENS LACORNE<br/>Site: HYERES'), 'red') );
observers.push( createObserverMarker(6.4877777777778,52.23 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Markelo'), 'red') );
observers.push( createObserverMarker(6.8677777777778,52.4225 , new GInfoWindowTab('Observer', 'Observer: SIETSE DIJKSTRA<br/>Site: Vasse'), 'red') );
observers.push( createObserverMarker(6.9661111111111,52.415 , new GInfoWindowTab('Observer', 'Observer: PETER VAN LEUTEREN<br/>Site: Cosmos Sterrenwacht Lattrop'), 'red') );
observers.push( createObserverMarker(6.9677777777778,52.415833333333 , new GInfoWindowTab('Observer', 'Observer: SIETSE DIJKSTRA<br/>Site: Cosmos publiekscentrum Lattrop'), 'red') );
observers.push( createObserverMarker(7.2661111111111,43.703333333333 , new GInfoWindowTab('Observer', 'Observer: COSTANTINO SIGISMONDI<br/>Site: Nice Av. Notre Dame/Rue Italie'), 'red') );
observers.push( createObserverMarker(7.2711111111111,43.694722222222 , new GInfoWindowTab('Observer', 'Observer: COSTANTINO SIGISMONDI<br/>Site: Nice Promenade des Anglais'), 'red') );
observers.push( createObserverMarker(9.95,49.833333333333 , new GInfoWindowTab('Observer', 'Observer: PIERRE BADER<br/>Site: Winterhausen'), 'red') );
observers.push( createObserverMarker(11.7166666667,48.55 , new GInfoWindowTab('Observer', 'Observer: SIRKO MOLAU<br/>Site: SEYSDORF'), 'red') );
observers.push( createObserverMarker(12.81,42.23 , new GInfoWindowTab('Observer', 'Observer: Roberto Haver<br/>Site: Frasso Sabino'), 'red') );
observers.push( createObserverMarker(12.816666666667,52.533333333333 , new GInfoWindowTab('Observer', 'Observer: RAINER ARLT<br/>Site: Tremmen'), 'red') );
observers.push( createObserverMarker(12.9638888889,52.4594444444 , new GInfoWindowTab('Observer', 'Observer: JURGEN RENDTEL<br/>Site: MARQUARDT'), 'red') );
observers.push( createObserverMarker(13.829166666667,45.56 , new GInfoWindowTab('Observer', 'Observer: JAVOR KAC<br/>Site: Tinjan'), 'red') );
observers.push( createObserverMarker(13.85,52.6666666667 , new GInfoWindowTab('Observer', 'Observer: FRANK ENZLEIN<br/>Site: TIEFENSEE'), 'red') );
observers.push( createObserverMarker(14.1166666667,52.2166666667 , new GInfoWindowTab('Observer', 'Observer: ANDRE KNOFEL<br/>Site: LINDENBERG'), 'red') );
observers.push( createObserverMarker(14.6,45.916666666667 , new GInfoWindowTab('Observer', 'Observer: JAVOR KAC<br/>Site: Vrh Nad Zelimljami'), 'red') );
observers.push( createObserverMarker(15.725833333333,50.035 , new GInfoWindowTab('Observer', 'Observer: VILEM HEBLIK<br/>Site: PARDUBICE'), 'red') );
observers.push( createObserverMarker(16.2688888889,46.3969444444 , new GInfoWindowTab('Observer', 'Observer: Mitja Govedic<br/>Site: SREDISCE OB DRAVI'), 'red') );
observers.push( createObserverMarker(17.101666666667,48.591111111111 , new GInfoWindowTab('Observer', 'Observer: JAKUB KOUKAL<br/>Site: Laksarska Nova Ves'), 'red') );
observers.push( createObserverMarker(17.396111111111,49.303888888889 , new GInfoWindowTab('Observer', 'Observer: Irena Divisova<br/>Site: Kromeriz'), 'red') );
observers.push( createObserverMarker(17.396111111111,49.303888888889 , new GInfoWindowTab('Observer', 'Observer: JAKUB KOUKAL<br/>Site: Kromeriz'), 'red') );
observers.push( createObserverMarker(17.396111111111,49.303888888889 , new GInfoWindowTab('Observer', 'Observer: SYLVIE GORKOVA<br/>Site: Kromeriz'), 'red') );
observers.push( createObserverMarker(17.5166666667,48.1 , new GInfoWindowTab('Observer', 'Observer: TIBOR CSORGEI<br/>Site: BELLOVA VES'), 'red') );
observers.push( createObserverMarker(20.75,53.0333333333 , new GInfoWindowTab('Observer', 'Observer: JAROSLAW DYGOS<br/>Site: CZERNICE BOROWE'), 'red') );
observers.push( createObserverMarker(23.7,47.966666666667 , new GInfoWindowTab('Observer', 'Observer: Arnold Gentz<br/>Site: Sapanta, Maramures'), 'red') );
observers.push( createObserverMarker(23.883333333333,47.933333333333 , new GInfoWindowTab('Observer', 'Observer: Sorin Hotea<br/>Site: Sighetu Marmatiei'), 'red') );
observers.push( createObserverMarker(26.635555555556,58.587222222222 , new GInfoWindowTab('Observer', 'Observer: Jaak Jaaniste<br/>Site: Raigastvere'), 'red') );
observers.push( createObserverMarker(35.103055555556,30.288055555556 , new GInfoWindowTab('Observer', 'Observer: ANNA S. LEVINA<br/>Site: Km101 (Be&#039;er Menucha)'), 'red') );
observers.push( createObserverMarker(35.103055555556,30.288055555556 , new GInfoWindowTab('Observer', 'Observer: SHLOMI EINI<br/>Site: Km101 (Be&#039;er Menucha)'), 'red') );
observers.push( createObserverMarker(35.103055555556,30.288055555556 , new GInfoWindowTab('Observer', 'Observer: SHY HALATZI<br/>Site: Km101 (Be&#039;er Menucha)'), 'red') );
observers.push( createObserverMarker(35.133333333333,30.308333333333 , new GInfoWindowTab('Observer', 'Observer: Maria Eriksson<br/>Site: Km101 (Be&#039;er Menucha)'), 'red') );
observers.push( createObserverMarker(35.133333333333,30.308333333333 , new GInfoWindowTab('Observer', 'Observer: SHLOMI EINI<br/>Site: Km101 (Be&#039;er Menucha)'), 'red') );
observers.push( createObserverMarker(35.166666666667,30.483333333333 , new GInfoWindowTab('Observer', 'Observer: ANNA S. LEVINA<br/>Site: Be&#039;er Manucha'), 'red') );
observers.push( createObserverMarker(37.108888888889,31.71 , new GInfoWindowTab('Observer', 'Observer: SAMER DERBI<br/>Site: al-azraq'), 'red') );
observers.push( createObserverMarker(37.108888888889,31.71 , new GInfoWindowTab('Observer', 'Observer: tareq bdran<br/>Site: Al-Azraq'), 'red') );
observers.push( createObserverMarker(39.3375,51.641666666667 , new GInfoWindowTab('Observer', 'Observer: Alexey Berezhnoy<br/>Site: Alexey Berezhnoy'), 'red') );
observers.push( createObserverMarker(51.799444444444,34.294166666667 , new GInfoWindowTab('Observer', 'Observer: ARASH NABIZADEH<br/>Site: Maranjab Desert, Aran &amp; Bid Gol'), 'red') );
observers.push( createObserverMarker(52.738888888889,35.26 , new GInfoWindowTab('Observer', 'Observer: Mohammad Nilforoushan<br/>Site: Deh Namak Caravansary'), 'red') );
observers.push( createObserverMarker(72.711944444444,18.498611111111 , new GInfoWindowTab('Observer', 'Observer: AMOL KANKARIYA<br/>Site: PIRANGUTE'), 'red') );
observers.push( createObserverMarker(72.8,19.35 , new GInfoWindowTab('Observer', 'Observer: ASHVINI GHADIGAVKAR<br/>Site: VASAI'), 'red') );
observers.push( createObserverMarker(72.904166666667,19.386944444444 , new GInfoWindowTab('Observer', 'Observer: Vimal Mamania<br/>Site: Vegaclub (Chinchoti)'), 'red') );
observers.push( createObserverMarker(73.153055555556,22.304444444444 , new GInfoWindowTab('Observer', 'Observer: Shyamal Patel<br/>Site: Vadodara'), 'red') );
observers.push( createObserverMarker(73.299166666667,19.256666666667 , new GInfoWindowTab('Observer', 'Observer: Rohan Shewale<br/>Site: Mamnoli'), 'red') );
observers.push( createObserverMarker(73.299166666667,19.256666666667 , new GInfoWindowTab('Observer', 'Observer: SHISHIR DESHMUKH<br/>Site: Mamnoli'), 'red') );
observers.push( createObserverMarker(73.3333333333,22.25 , new GInfoWindowTab('Observer', 'Observer: SARTHAK DASADIA<br/>Site: MASTUPURA, GUJARAT'), 'red') );
observers.push( createObserverMarker(73.5,18.5 , new GInfoWindowTab('Observer', 'Observer: TUSHAR PUROHIT<br/>Site: PIRANGUTE'), 'red') );
observers.push( createObserverMarker(73.741944444444,18.554722222222 , new GInfoWindowTab('Observer', 'Observer: Shrikant Vinchurkar<br/>Site: PIRANGUT,PUNE'), 'red') );
observers.push( createObserverMarker(73.966666666667,18.566666666667 , new GInfoWindowTab('Observer', 'Observer: Rushikesh Tilak<br/>Site: Sinhagad, Pune'), 'red') );
observers.push( createObserverMarker(76.383333333333,27.383333333333 , new GInfoWindowTab('Observer', 'Observer: Amitabh Pandey (S.P.A.C.E.)<br/>Site: Sariska'), 'red') );
observers.push( createObserverMarker(76.383333333333,27.383333333333 , new GInfoWindowTab('Observer', 'Observer: Gunjan Bansal<br/>Site: Sariska'), 'red') );
observers.push( createObserverMarker(76.633333333333,27.633333333333 , new GInfoWindowTab('Observer', 'Observer: Akshay Gupta<br/>Site: sariska'), 'red') );
observers.push( createObserverMarker(77.25,28.616666666667 , new GInfoWindowTab('Observer', 'Observer: chander devgun SPACE<br/>Site: NEW DELHI'), 'red') );
observers.push( createObserverMarker(82.95,54.95 , new GInfoWindowTab('Observer', 'Observer: Mikhail Maslov<br/>Site: Novosibirsk'), 'red') );
observers.push( createObserverMarker(87.1780555556,43.4708333333 , new GInfoWindowTab('Observer', 'Observer: Jiangping Wu<br/>Site: URUMQI OBS., XINJIAN'), 'red') );
observers.push( createObserverMarker(87.1780555556,43.4708333333 , new GInfoWindowTab('Observer', 'Observer: Yue Hu<br/>Site: URUMQI OBS., XINJIAN'), 'red') );
observers.push( createObserverMarker(87.1780555556,43.4708333333 , new GInfoWindowTab('Observer', 'Observer: Zhongyang Hu<br/>Site: URUMQI OBS., XINJIAN'), 'red') );
observers.push( createObserverMarker(100.3325,14.025277777778 , new GInfoWindowTab('Observer', 'Observer: SUPARERK PANAROT<br/>Site: Ladluamkaew  Patumtanee'), 'red') );
observers.push( createObserverMarker(112.46666666667,27.766666666667 , new GInfoWindowTab('Observer', 'Observer: Quanzhi Ye<br/>Site: Gaocun, Foshan'), 'red') );
observers.push( createObserverMarker(113.26666666667,23.066666666667 , new GInfoWindowTab('Observer', 'Observer: Quanzhi Ye<br/>Site: Higher Education Mega Center, Guangzhou'), 'red') );
observers.push( createObserverMarker(113.91666666667,38.05 , new GInfoWindowTab('Observer', 'Observer: GE Wei<br/>Site: Wei GE'), 'red') );
observers.push( createObserverMarker(115.49916666667,38.494722222222 , new GInfoWindowTab('Observer', 'Observer: hao wu<br/>Site: TanZhuang'), 'red') );
observers.push( createObserverMarker(115.71694444444,40.317777777778 , new GInfoWindowTab('Observer', 'Observer: Xiang ZHAN<br/>Site: Xiaonanxinpu, Yanqing, Beijing'), 'red') );
observers.push( createObserverMarker(115.93416666667,40.201111111111 , new GInfoWindowTab('Observer', 'Observer: Xiang ZHAN<br/>Site: Hezijian, Changping, Beijing'), 'red') );
observers.push( createObserverMarker(116.19444444444,40.334166666667 , new GInfoWindowTab('Observer', 'Observer: Sihao Cheng<br/>Site: Mayufang,Changping,Beijing'), 'red') );
observers.push( createObserverMarker(116.19444444444,40.334166666667 , new GInfoWindowTab('Observer', 'Observer: Simiao CHENG<br/>Site: Mayufang,Changping,Beijing'), 'red') );
observers.push( createObserverMarker(116.82916666667,40.553888888889 , new GInfoWindowTab('Observer', 'Observer: su zou<br/>Site: shitanglu,miyun,beijing'), 'red') );
observers.push( createObserverMarker(116.925,39.145277777778 , new GInfoWindowTab('Observer', 'Observer: Di Ma<br/>Site: DaLiutan,TianJin'), 'red') );
observers.push( createObserverMarker(117.15555555556,39.186388888889 , new GInfoWindowTab('Observer', 'Observer: Zhong Yang<br/>Site: Zhong Yang'), 'red') );
observers.push( createObserverMarker(119.59472222222,30.469444444444 , new GInfoWindowTab('Observer', 'Observer: Jiaqing Yang<br/>Site: Tianhuangping'), 'red') );
observers.push( createObserverMarker(120.87361111111,23.468611111111 , new GInfoWindowTab('Observer', 'Observer: Quanzhi Ye<br/>Site: Lulin Observatory'), 'red') );
observers.push( createObserverMarker(121.96638888889,30.94 , new GInfoWindowTab('Observer', 'Observer: LiYang Yu<br/>Site: Donghai Shanghai'), 'red') );
observers.push( createObserverMarker(121.96638888889,30.94 , new GInfoWindowTab('Observer', 'Observer: TengHuiRui Qu<br/>Site: Donghai Shanghai'), 'red') );
observers.push( createObserverMarker(122.07833333333,37.529722222222 , new GInfoWindowTab('Observer', 'Observer: Hao Zhou<br/>Site: Weihai,Shandong,China'), 'red') );
observers.push( createObserverMarker(125.58333333333,43.9925 , new GInfoWindowTab('Observer', 'Observer: Jia Wei MA Jia Wei MA<br/>Site: Jia Wei MA'), 'red') );
observers.push( createObserverMarker(140.10555555556,36.230555555556 , new GInfoWindowTab('Observer', 'Observer: SHIGEO UCHIYAMA<br/>Site: Sakuragawa, Ibaraki'), 'red') );
observers.push( createObserverMarker(144.33333333333,-35.8 , new GInfoWindowTab('Observer', 'Observer: ADAM MARSH<br/>Site: EAMN Home Base'), 'red') );
observers.push( createObserverMarker(144.33333333333,-35.8 , new GInfoWindowTab('Observer', 'Observer: LANCE KELLY<br/>Site: EAMN Home Base'), 'red') );
observers.push( createObserverMarker(144.58333333333,-35.816666666667 , new GInfoWindowTab('Observer', 'Observer: GEOFF CARSTAIRS<br/>Site: EAMN Home Base'), 'red') );
var mgr = new GMarkerManager(map);
			mgr.addMarkers(observers, 0);
			mgr.refresh();