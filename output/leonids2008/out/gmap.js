		// Create the gmap
		var map = new GMap2(document.getElementById("map"));
		map.setCenter(new GLatLng(50.7975, 4.35916), 7); // Uccle
		map.addControl(new GLargeMapControl());
		map.addControl(new GMapTypeControl());
		map.enableDoubleClickZoom();
		map.enableContinuousZoom();

	
		// Create an icon
		function createIcon(color) {
			var icon = new GIcon();
			icon.image = "http://labs.google.com/ridefinder/images/mm_20_"+color+".png";
			icon.shadow = "http://labs.google.com/ridefinder/images/mm_20_shadow.png";
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
			//GEvent.addListener(marker, "click", function() {marker.openInfoWindowHtml(html);});// for only html
			GEvent.addListener(marker, "click", function() {marker.openInfoWindowTabsHtml(html);});// for infoTabs
			return marker;
		};
		
		
		function getStationMarker(lon, lat, tab, color) {
			var point = new GLatLng(lat, lon);
			var infoTabs = [
			  tab
			];
			var marker = createMarker(point, infoTabs, createIcon(color));
			return marker;
			// map.addOverlay(marker);			
		}

		var oracle = [];
oracle.push( getStationMarker(2.867778, 51.198056 , new GInfoWindowTab('Station', 'Source: ORACLE<br/>Name: MIDDELKERKE<br/>Network RMI/Climatology<br/> <b>Latitude:</b> 511153<br/> <b>Longitude:</b> 25204<br/>'), 'red') );
oracle.push( getStationMarker(3.293333, 51.34 , new GInfoWindowTab('Station', 'Source: ORACLE<br/>Name: KNOKKE ZWIN<br/>Network RMI/Climatology<br/> <b>Latitude:</b> 512024<br/> <b>Longitude:</b> 31736<br/>'), 'red') );
oracle.push( getStationMarker(2.65, 51.083333 , new GInfoWindowTab('Station', 'Source: ORACLE<br/>Name: KOKSIJDE<br/>Network RMI/Climatology<br/> <b>Latitude:</b> 510500<br/> <b>Longitude:</b> 23900<br/>'), 'red') );

		  var mgr = new GMarkerManager(map);
		  mgr.addMarkers(oracle, 0);
 mgr.refresh();
