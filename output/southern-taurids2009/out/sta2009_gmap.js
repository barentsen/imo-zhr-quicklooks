
			// Create a marker
			function createMarker(map, lat, lon, title, color) {
				    var image = 'http://labs.google.com/ridefinder/images/mm_20_'+color+'.png';
				    var myLatLng = new google.maps.LatLng(lat, lon);
				    var myMarker = new google.maps.Marker({
						    position: myLatLng,
						    map: map,
						    icon: image,
						    title: title
				    });
			}		
		
			// Initialize map
			function initialize() {
				// Create the gmap
				  var myLatlng = new google.maps.LatLng(25,5);
				  var myOptions = {
				    zoom: 2,
				    center: myLatlng,
				    mapTypeId: google.maps.MapTypeId.ROADMAP
				  }
				  var map = new google.maps.Map(document.getElementById('map'), myOptions);
			createMarker(map, 21.066666666667, -156.93333333333, 'MIKE LINNOLT', 'red');
createMarker(map, 21.0666666667, -156.933333333, 'MIKE LINNOLT', 'red');
createMarker(map, 37.355555555556, -122.05916666667, 'yanzhe liu', 'red');
createMarker(map, 42.576666666667, -121.86833333333, 'WESLEY STONE', 'red');
createMarker(map, 32.8383333333, -116.625, 'ROBERT LUNSFORD', 'red');
createMarker(map, 35.030277777778, -116.55166666667, 'ROBERT LUNSFORD', 'red');
createMarker(map, 29.319444444444, -110.82277777778, 'Salvador Aguirre', 'red');
createMarker(map, 29.2175, -110.76055555556, 'Salvador Aguirre', 'red');
createMarker(map, 36.6938888889, -101.197222222, 'KEN HODONSKY', 'red');
createMarker(map, 35.947777777778, -95.7125, 'WILLIAM GODLEY', 'red');
createMarker(map, 42.263055555556, -88.003888888889, 'Jeremy Jefferis', 'red');
createMarker(map, 32.7583333333, -79.8555555556, 'MARK DAVIS', 'red');
createMarker(map, 43.1111111111, -78.4541666667, 'WILLIAM WATSON', 'red');
createMarker(map, 42.673055555556, -78.384722222222, 'WILLIAM WATSON', 'red');
createMarker(map, 42.673055555556, -78.384722222222, 'WILLIAM WATSON', 'red');
createMarker(map, 42.6730555556, -78.3847222222, 'WILLIAM WATSON', 'red');
createMarker(map, 42.6730555556, -78.3847222222, 'WILLIAM WATSON', 'red');
createMarker(map, 38.463888888889, -76.983055555556, 'RICHARD TAIBI', 'red');
createMarker(map, 39.0069444444, -76.8655555556, 'Douglas Love', 'red');
createMarker(map, 45.383333333333, -76.483333333333, 'PIERRE MARTIN', 'red');
createMarker(map, 45.3833333333, -76.4833333333, 'PIERRE MARTIN', 'red');
createMarker(map, 40.6811111111, -74.8983333333, 'WAYNE T. HALLY', 'red');
createMarker(map, 28.2972222222, -16.5083333333, 'JURGEN RENDTEL', 'red');
createMarker(map, 41.7297222222, 2.53361111111, 'JOSEP TRIGO RODRIGUEZ', 'red');
createMarker(map, 51.2861111111, 3.46666666667, 'RENE SCURBECQ', 'red');
createMarker(map, 50.7166666667, 3.6, 'MICHEL VANDEPUTTE', 'red');
createMarker(map, 50.7166666667, 3.63333333333, 'MICHEL VANDEPUTTE', 'red');
createMarker(map, 50.716666666667, 3.6333333333333, 'Michel Vandeputte', 'red');
createMarker(map, 50.716666666667, 3.6333333333333, 'MICHEL VANDEPUTTE', 'red');
createMarker(map, 52.333333333333, 5.6666666666667, 'KOEN MISKOTTE', 'red');
createMarker(map, 52.3333333333, 5.66666666667, 'KOEN MISKOTTE', 'red');
createMarker(map, 52.1, 6.11666666667, 'Alex Scholten', 'red');
createMarker(map, 43.1266666667, 6.15111111111, 'JENS LACORNE', 'red');
createMarker(map, 52.295277777778, 6.7477777777778, 'PETER VAN LEUTEREN', 'red');
createMarker(map, 52.2952777778, 6.74777777778, 'PETER VAN LEUTEREN', 'red');
createMarker(map, 52.415, 6.96611111111, 'PETER VAN LEUTEREN', 'red');
createMarker(map, 52.415, 6.9661111111111, 'PETER VAN LEUTEREN', 'red');
createMarker(map, 52.415, 6.9663888888889, 'SIETSE DIJKSTRA', 'red');
createMarker(map, 52.415, 6.96638888889, 'SIETSE DIJKSTRA', 'red');
createMarker(map, 52.214444444444, 7.015, 'CARL JOHANNINK', 'red');
createMarker(map, 52.253888888889, 7.0688888888889, 'CARL JOHANNINK', 'red');
createMarker(map, 49.4302777778, 8.64916666667, 'CHRISTOPH GERBER', 'red');
createMarker(map, 49.4302777778, 8.64916666667, 'CHRISTOPH GERBER', 'red');
createMarker(map, 48.8658333333, 9.44027777778, 'DANIEL GRUEN', 'red');
createMarker(map, 49.8333333333, 9.95, 'PIERRE BADER', 'red');
createMarker(map, 49.833333333333, 9.95, 'PIERRE BADER', 'red');
createMarker(map, 50.6616666667, 10.5583333333, 'PIERRE BADER', 'red');
createMarker(map, 53.903888888889, 11.171666666667, 'CARL JOHANNINK', 'red');
createMarker(map, 53.903888888889, 11.171666666667, 'KOEN MISKOTTE', 'red');
createMarker(map, 52.8, 11.2, 'ULRICH SPERBERG', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'JURGEN RENDTEL', 'red');
createMarker(map, 52.3277777778, 13.0638888889, 'SVEN NATHER', 'red');
createMarker(map, 45.984722222222, 14.228333333333, 'JAVOR KAC', 'red');
createMarker(map, 45.984722222222, 14.228333333333, 'JURE ATANACKOV', 'red');
createMarker(map, 45.813055555556, 14.695555555556, 'JAVOR KAC', 'red');
createMarker(map, 45.813055555556, 14.695555555556, 'Rok Pucer', 'red');
createMarker(map, 46.200555555556, 14.876388888889, 'Rok Pucer', 'red');
createMarker(map, 46.200555555556, 14.876388888889, 'JAVOR KAC', 'red');
createMarker(map, 46.4338888889, 15.4827777778, 'JAVOR KAC', 'red');
createMarker(map, 46.4344444444, 15.4830555556, 'JAVOR KAC', 'red');
createMarker(map, 46.495, 15.5088888889, 'JAVOR KAC', 'red');
createMarker(map, 50.035, 15.725833333333, 'VILEM HEBLIK', 'red');
createMarker(map, 47.6505555556, 16.5269444444, 'Gyula Kiss', 'red');
createMarker(map, 48.503055555556, 16.558333333333, 'THOMAS WEILAND', 'red');
createMarker(map, 48.1, 17.5166666667, 'TIBOR CSORGEI', 'red');
createMarker(map, 49.344166666667, 17.996388888889, 'PAVEL SVOZIL', 'red');
createMarker(map, 50.1166666667, 18.75, 'MICHAL GORAUS', 'red');
createMarker(map, 44.247222222222, 19.930555555556, 'Filip Colakovic', 'red');
createMarker(map, 44.246666666667, 19.935555555556, 'Du?an Pavlovi?', 'red');
createMarker(map, 44.246666666667, 19.935555555556, 'Filip ?olakovi?', 'red');
createMarker(map, 49.6722222222, 21.475, 'PAWEL TRYBUS', 'red');
createMarker(map, 51.709722222222, 21.731388888889, 'Tomasz Lojek', 'red');
createMarker(map, 51.7097222222, 21.7313888889, 'Tomasz Lojek', 'red');
createMarker(map, 50.994444444444, 22.141111111111, 'TOMASZ FAJFER', 'red');
createMarker(map, 42.654722222222, 23.342222222222, 'PLAMENA ALEXANDROVA', 'red');
createMarker(map, 42.4833333333, 23.4166666667, 'KATJA KOLEVA', 'red');
createMarker(map, 42.4833333333, 23.4166666667, 'PLAMENA ALEXANDROVA', 'red');
createMarker(map, 35.1761111111, 24.9030555556, 'GRIGORIS MARAVELIAS', 'red');
createMarker(map, 35.2794444444, 24.9263888889, 'GRIGORIS MARAVELIAS', 'red');
createMarker(map, 35.2866666667, 25.1247222222, 'GRIGORIS MARAVELIAS', 'red');
createMarker(map, 35.286666666667, 25.124722222222, 'GRIGORIS MARAVELIAS', 'red');
createMarker(map, 43.1201388889, 27.6705555556, 'PLAMENA ENIKOVA', 'red');
createMarker(map, 43.1201388889, 27.6705555556, 'Todor Dimitrov', 'red');
createMarker(map, 43.1201388889, 27.6705555556, 'VALENTIN VELKOV', 'red');
createMarker(map, 50.8666666667, 27.8, 'GENNADIJ BUGAREVYCH', 'red');
createMarker(map, 19.256666666667, 73.299166666667, 'MAYURESH DESAI', 'red');
createMarker(map, 19.256666666667, 73.299166666667, 'Rohan Shewale', 'red');
createMarker(map, 25.1316666667, 73.5336111111, 'THOMAS WEILAND', 'red');
createMarker(map, 54.94, 82.943888888889, 'MIKHAIL MASLOV', 'red');
createMarker(map, 39.6686111111, 115.4425, 'Weizhou Zeng', 'red');
createMarker(map, 40.572777777778, 116.16805555556, 'Simiao CHENG', 'red');
createMarker(map, 40.3341666667, 116.194444444, 'Simiao CHENG', 'red');
createMarker(map, 24.220833333333, 118.04027777778, 'Yi Cao', 'red');
createMarker(map, 24.088055555556, 121.16472222222, 'Jer Nan Lou', 'red');
createMarker(map, 36.230555555556, 140.10555555556, 'SHIGEO UCHIYAMA', 'red');
createMarker(map, -34.2666666667, 141.583333333, 'ADAM MARSH', 'red');
createMarker(map, -35.816666666667, 145.56666666667, 'ADAM MARSH', 'red');
createMarker(map, -35.816666666667, 145.56666666667, 'LANCE KELLY', 'red');
createMarker(map, -35.749166666667, 149.27444444444, 'Paul Craft', 'red');
	}