
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
createMarker(map, 37.355555555556, -122.05916666667, 'yanzhe liu', 'red');
createMarker(map, 42.576666666667, -121.86833333333, 'WESLEY STONE', 'red');
createMarker(map, 37.1875, -121.55027777778, 'yanzhe liu', 'red');
createMarker(map, 32.8383333333, -116.625, 'ROBERT LUNSFORD', 'red');
createMarker(map, 35.030277777778, -116.55166666667, 'ROBERT LUNSFORD', 'red');
createMarker(map, 32.3, -110.916666667, 'CARL HERGENROTHER', 'red');
createMarker(map, 29.319444444444, -110.82277777778, 'Salvador Aguirre', 'red');
createMarker(map, 29.2175, -110.76055555556, 'Salvador Aguirre', 'red');
createMarker(map, 35.947777777778, -95.7125, 'WILLIAM GODLEY', 'red');
createMarker(map, 42.263055555556, -88.003888888889, 'Jeremy Jefferis', 'red');
createMarker(map, 32.7583333333, -79.8555555556, 'MARK DAVIS', 'red');
createMarker(map, 42.673055555556, -78.384722222222, 'WILLIAM WATSON', 'red');
createMarker(map, 42.673055555556, -78.384722222222, 'WILLIAM WATSON', 'red');
createMarker(map, 38.463888888889, -76.983055555556, 'RICHARD TAIBI', 'red');
createMarker(map, 45.383333333333, -76.483333333333, 'PIERRE MARTIN', 'red');
createMarker(map, 40.6811111111, -74.8983333333, 'WAYNE T. HALLY', 'red');
createMarker(map, -62.161388888889, -58.469444444444, 'TADEUSZ SOBCZAK', 'red');
createMarker(map, 50.716666666667, 3.6333333333333, 'Michel Vandeputte', 'red');
createMarker(map, 50.716666666667, 3.6333333333333, 'MICHEL VANDEPUTTE', 'red');
createMarker(map, 52.333333333333, 5.6666666666667, 'KOEN MISKOTTE', 'red');
createMarker(map, 52.387777777778, 6.6744444444444, 'SIETSE DIJKSTRA', 'red');
createMarker(map, 52.295277777778, 6.7477777777778, 'PETER VAN LEUTEREN', 'red');
createMarker(map, 52.415, 6.9661111111111, 'PETER VAN LEUTEREN', 'red');
createMarker(map, 52.415, 6.9663888888889, 'SIETSE DIJKSTRA', 'red');
createMarker(map, 52.214444444444, 7.015, 'CARL JOHANNINK', 'red');
createMarker(map, 49.4302777778, 8.64916666667, 'CHRISTOPH GERBER', 'red');
createMarker(map, 49.833333333333, 9.95, 'PIERRE BADER', 'red');
createMarker(map, 53.903888888889, 11.171666666667, 'CARL JOHANNINK', 'red');
createMarker(map, 53.903888888889, 11.171666666667, 'KOEN MISKOTTE', 'red');
createMarker(map, 52.8, 11.2, 'ULRICH SPERBERG', 'red');
createMarker(map, 48.55, 11.7166666667, 'SIRKO MOLAU', 'red');
createMarker(map, 52.4594444444, 12.9638888889, 'JURGEN RENDTEL', 'red');
createMarker(map, 45.984722222222, 14.211666666667, 'Rok Pucer', 'red');
createMarker(map, 45.984722222222, 14.228333333333, 'JAVOR KAC', 'red');
createMarker(map, 45.984722222222, 14.228333333333, 'JURE ATANACKOV', 'red');
createMarker(map, 45.984722222222, 14.228333333333, 'MANCA BEHRIC', 'red');
createMarker(map, 45.813055555556, 14.695555555556, 'JAVOR KAC', 'red');
createMarker(map, 45.813055555556, 14.695555555556, 'Rok Pucer', 'red');
createMarker(map, 46.200555555556, 14.876388888889, 'Rok Pucer', 'red');
createMarker(map, 46.200555555556, 14.876388888889, 'JAVOR KAC', 'red');
createMarker(map, 46.5111111111, 15.5633333333, 'MITJA GOVEDIC', 'red');
createMarker(map, 50.035, 15.725833333333, 'VILEM HEBLIK', 'red');
createMarker(map, 48.503055555556, 16.558333333333, 'THOMAS WEILAND', 'red');
createMarker(map, 49.19, 17.354444444444, 'JAKUB KOUKAL', 'red');
createMarker(map, 49.303888888889, 17.396111111111, 'JAKUB KOUKAL', 'red');
createMarker(map, 48.1, 17.5166666667, 'TIBOR CSORGEI', 'red');
createMarker(map, 49.344166666667, 17.996388888889, 'PAVEL SVOZIL', 'red');
createMarker(map, 50.1166666667, 18.75, 'MICHAL GORAUS', 'red');
createMarker(map, 44.247222222222, 19.930555555556, 'Filip Colakovic', 'red');
createMarker(map, 44.246666666667, 19.935555555556, 'Du?an Pavlovi?', 'red');
createMarker(map, 44.246666666667, 19.935555555556, 'Filip ?olakovi?', 'red');
createMarker(map, 46.810277777778, 20.846666666667, 'Otto Hanyecz', 'red');
createMarker(map, 42.654722222222, 23.342222222222, 'PLAMENA ALEXANDROVA', 'red');
createMarker(map, 35.286666666667, 25.124722222222, 'GRIGORIS MARAVELIAS', 'red');
createMarker(map, 43.1201388889, 27.6705555556, 'Todor Dimitrov', 'red');
createMarker(map, 43.1201388889, 27.6705555556, 'VALENTIN VELKOV', 'red');
createMarker(map, 32.096944444444, 34.839722222222, 'ANNA S. LEVINA', 'red');
createMarker(map, 31.518055555556, 34.902777777778, 'ANNA S. LEVINA', 'red');
createMarker(map, 31.5325, 34.913333333333, 'Ella Ratz', 'red');
createMarker(map, 19.256666666667, 73.299166666667, 'MAYURESH DESAI', 'red');
createMarker(map, 19.256666666667, 73.299166666667, 'Rohan Shewale', 'red');
createMarker(map, 54.94, 82.943888888889, 'MIKHAIL MASLOV', 'red');
createMarker(map, 23.166666666667, 113.31666666667, 'Quanzhi Ye', 'red');
createMarker(map, 40.572777777778, 116.16777777778, 'Xin Li', 'red');
createMarker(map, 40.572777777778, 116.16805555556, 'Simiao CHENG', 'red');
createMarker(map, 40.281944444444, 117.26583333333, 'Xiang Zhan', 'red');
createMarker(map, 39.300277777778, 117.45055555556, 'Qiang Ma', 'red');
createMarker(map, 24.220833333333, 118.04027777778, 'Yi Cao', 'red');
createMarker(map, 24.088055555556, 121.16472222222, 'Jer Nan Lou', 'red');
createMarker(map, 30.913055555556, 121.97305555556, 'ling feng', 'red');
createMarker(map, 35.440833333333, 138.74611111111, 'Kazumi Terakubo', 'red');
createMarker(map, 35.440833333333, 138.74611111111, 'Mikiya Sato', 'red');
createMarker(map, 35.440833333333, 138.74611111111, 'Tomoko Sato', 'red');
createMarker(map, 36.230555555556, 140.10555555556, 'SHIGEO UCHIYAMA', 'red');
createMarker(map, -35.816666666667, 145.56666666667, 'ADAM MARSH', 'red');
createMarker(map, -35.816666666667, 145.56666666667, 'LANCE KELLY', 'red');
createMarker(map, -35.749166666667, 149.27444444444, 'Paul Craft', 'red');
	}