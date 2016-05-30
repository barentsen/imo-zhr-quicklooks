<?php
// Defines the `Circular` class to create a ZHR report page.


// Helper function for scientific notation
function sci($x, $d=1) {
   $min=($x<0)?"-":"";
   $x=abs($x); 
   $e=floor(($x!=0)?log10($x):0);
   $x*=pow(10,-$e);
   $fmt=($d>=0)?".".$d:"";
   $e=($e>=0)?"+".sprintf("%d",$e):"-".sprintf("%d",-$e);
   return sprintf("$min%".$fmt."f&#215;10<sup>%s</sup>",$x,$e);
}


/**
* Class to generate automated analysis results of visual meteor shower observation
* @author Geert Barentsen (gbar@urania.be)
* @version 2009-08-11
**/ 
class Circular {
	
	private $fShowerName;
	private $fYear;
	private $fShowerCode;
	private $fPopIndex;
	private $fVelInf;
	private $fStart;
	private $fStop;
	private $fMinMeteors;
	private $fMinInterval;
	private $fMaxInterval;
	private $fMaxCorrection;
	private $fMinLm;
	private $fMaxError;
	
	private $db;
	
	
	
	/**
	* Constructor
	* Set the general parameters
	**/
	function __construct($showername, $year, $showercode, $popindex, $vel_inf, $start, $stop, $min_meteors, $min_interval, $max_interval, $max_correction, $min_lm, $max_error) {
		$this->fShowerName = $showername;
		$this->fYear = $year;
		$this->fShowerCode = $showercode;
		$this->fPopIndex = $popindex;
		$this->fVelInf = $vel_inf;
		$this->fStart = $start;
		$this->fStop = $stop;
		$this->fMinMeteors = $min_meteors;
		$this->fMinInterval = $min_interval;
		$this->fMaxInterval = $max_interval;
		$this->fMaxCorrection = $max_correction;
		$this->fMinLm = $min_lm;
		$this->fMaxError = $max_error;
		
		require_once('../database/Database.class.php');
		$this->db = new Database();
	}
	

	
	/**
	* Return the filename prefix for files generated
	**/
	public function getFilePrefix() {
		return strtolower($this->fShowerCode.$this->fYear);		
	}
	
	
	/**
	* Get path to temporary local files
	**/
	private function getPrefixLocal() {
		return "/tmp/".$this->getFilePrefix();		
	}
	
	
	/**
	* Get path to public files
	**/
	private function getPrefixPublic() { 
		return "/export/imozhr/".strtolower($this->fShowerName).$this->fYear."/out/".$this->getFilePrefix();		
	}
	
	
	/**
	* Write the contents of a variable to a file
	**/
	private function writeFile($filename, $contents) {
		$fp = fopen($filename, "w");
		fwrite ($fp, $contents);
		fclose($fp);		
	}
	
	
	/**
	* Calculate the time this circular spans (in seconds)
	**/
	private function getTimespan() {
		// We use PostgreSQL's excellent time math to calculate the number of seconds between the circular start and stop
		$this->db->query("SELECT EXTRACT(epoch FROM '".$this->fStop."'::timestamp - '".$this->fStart."'::timestamp) AS epoch");
		return $this->db->getResultObject()->epoch;	
	}
	
	
	/**
	* Convert a ZHR to the flux density
	**/
	function zhr2flux($zhr) {
		// Formula from Koschack (1990)
		$Q_mag = ( $zhr * (13.1*$r - 16.45) * pow($r - 1.3, 0.748)  ) / 37200.0;
		//$Q_mass = $Q_mag * pow($r, 9.775*log10(29 / $vel_inf));
		// Units of the above is particles per square km per hour
		$Q = $Q_mag;
		return $Q;
	}
	
	
	/**
	* Convert a ZHR to particle density
	**/
	function zhr2density($zhr) {
		$r = $this->fPopIndex;
		$vel_inf = $this->fVelInf;
		// Formula from Koschack (1990)
		$Q_mag = ( $zhr * (13.1*$r - 16.45) * pow($r - 1.3, 0.748)  ) / 37200.0;
		$rho = $Q_mag / (3600.0 * $vel_inf);
		// Change the units to km^9
		return ($rho * 1e9);
	}
	
	
	function zhr2density_foxpro($zhr, $e_zhr, $mean_lm) {
		$ZHR=$zhr;
		$ERRO_ZHR = $e_zhr;
		$mDELTA_LIM = 6.5 - $mean_lm;
		$mERRO_DLIM = 0;
		$R = $this->fPopIndex;
		$ERRO_R = 0;
		$mV = $this->fVelInf;
		
		$mA_RED = 37200 / pow($R-1.3, 0.748);
		$mC = 13.1*$R-16.45;
		$mERRO_C = 0.198*$R*$R + 0.617*$R - 1.45;
		$mZHR_S = $zhr*pow($R, $mDELTA_LIM);
		$mDEN_m65 = 1.0E9*$mZHR_S*$mC/$mA_RED/3600/$mV;
		
		$mERRO_65 = 0;
		$mERRO_65 += pow(1.0E9*$mZHR_S*$mERRO_C/$mA_RED, 2);
		$mERRO_65 += pow(1.0E9*pow($R, ($mDELTA_LIM)*$mC*$ERRO_ZHR/$mA_RED), 2);
		// $mERRO_65 += pow(1.0E9*$ZHR/ pow($R, (6.5-$LM_AVG-$mDELTA_LIM)*$ERRO_R/37200  * (   ( 13.1* (7.5-$LM_AVG)*$R**(6.5-$LM_AVG)-16.45*(6.5-$LM_AVG)*pow($R,(5.5-$LM_AVG)) )   *  pow($R-1.3, 0.748) + 0.748*(13.1*pow($R, 7.5-$LM_AVG) - 16.45*pow($R,6.5-$LM_AVG) )  / pow($R-1.3, 0.252) ), 2);
		//$mERRO_65 += pow(1.0E9*$mZHR_S*$mC*LOG10($R)*$mERRO_DLIM/$mA_RED), 2);
		$mERRO_65 += pow(1.0E9*$mZHR_S*$mC*0.1/$mA_RED, 2);
		$mERRO_65 = SQRT($mERRO_65) / 3600 / $mV;
		
		return array($mDEN_m65, $mERRO_65);
	}
	
	
	/**
	* Show a section with a ZHR graph and table
	* We use $name because multiple ZHR graphs may be requested for the same shower (dirty hack)
	**/
	function zhr_section($name, $verbose = true) {
		// Perform ZHR calculation using PostgreSQL stored procedure
		/* $query = "SELECT * FROM visualsummary.create_circular('".$this->fShowerCode."'::text, ".$this->fPopIndex."::numeric, '".$this->fStart."'::timestamp, '".$this->fStop."'::timestamp,
					".$this->fMinMeteors.", '".$this->fMinInterval."'::interval, '".$this->fMaxInterval."'::interval, 
					".$this->fMaxCorrection."::numeric, ".$this->fMinLm."::numeric);";
		*/			
		$query = "SELECT * FROM visualsummary.create_circular_animation('".$this->fShowerCode."'::text, ".$this->fPopIndex."::numeric, '".$this->fStart."'::timestamp, '".$this->fStop."'::timestamp,
					".$this->fMinMeteors.", '".$this->fMinInterval."'::interval, '".$this->fMaxInterval."'::interval,
					".$this->fMaxCorrection."::numeric, ".$this->fMinLm."::numeric, 10000)
				WHERE error < zhr*".$this->fMaxError;		
					
		$this->db->query($query);
		$allresults = $this->db->getAllResults();
		
		// Test if observations are available
		if ( ! $allresults) {
			echo "<p>No observations available yet!</p>";
			return;
		}
	
		// Write the results to a datafile for gnuplot
		$gnuplot_data = "time \t zhr \t error \n";
		foreach ($allresults as $result) {
			$gnuplot_data .= $result["time"]." \t ".$result["zhr"]." \t ".$result["error"]."\n"; 
		}
		$this->writeFile($this->getPrefixLocal().$name.".data", $gnuplot_data);
		$this->zhr_plot($name);

		// Calculate maximum zhr and number of intervals and meteors
		$max_zhr = 0;
		$n_used = 0;
		$n_met = 0;
		foreach ($allresults as $result) {
			$n_used += $result["periods_used"];
			$n_met += $result["meteors"];
			if ( $result["zhr"] > $max_zhr ) {
				$max_zhr = $result["zhr"];
			}
		}		
		
		
		$max_density = $this->zhr2density($max_zhr);
		
		// Display results
		if ($verbose) {
			echo "<p>The graph below shows the ZHR (Zenithal Hourly Rate), which is the number of meteors an observer would see under a very dark sky with the radiant of the shower in zenith.
			<br/>ZHR<sub>max</sub> = $max_zhr based on $n_met $this->fShowerName reported in $n_used intervals, assuming population index r = ".sprintf("%.1f", $this->fPopIndex)."</p>";
			
			//<br />ZHR<sub>max</sub> = $max_zhr (assuming population index r = ".sprintf("%.1f", $this->fPopIndex)."),
			//which corresponds to a particle density of ".round($max_density)." particles causing meteors brighter than magnitude +6.5 per 10<sup>9</sup> cubic kilometer.
			//</p>";
			//echo "<p><b>Note: the estimated ZHR may be affected by the strong moonlight. The limiting magnitude correction in the ZHR does not fully account for the disturbance.</b></p>";
		}
		
		// based on $n_met reported ".$this->fShowerName."
		
		echo "<p><img src='out/".$this->getFilePrefix().$name.".png?time=".time()."' alt='ZHR graph' /></p>";
		 
		// Display ZHR table
		echo "<table>";
		echo "<thead><tr><th>Time (UTC)</th><th class='numfield'>Solarlon</th>
				<th class='numfield'>nINT</th>
				<th class='numfield'>n".$this->fShowerCode."</th>
				<th class='numfield'>ZHR</th>
				<th></th>
				<th class='numfield'>Particle density</th></tr></thead>";
		echo "<tbody>";
		foreach ($allresults as $result) {
			echo "<tr>
				<td>".substr($result["time"],0,16)."</td>
				<td class='numfield'>".$result["solarlon"]."</td>
				<td class='numfield'>".$result["periods_used"]."</td>
				<td class='numfield'>".$result["meteors"]."</td>
				<td class='numfield'>".$result["zhr"]."</td><td>&plusmn;".$result["error"]."</td>
				<td class='numfield'>".round($this->zhr2density($result["zhr"]))." / 10<sup>9</sup>&#183;km<sup>3</sup></td>
			     </tr>\n";	  
		}
		echo "</tbody>";
		echo "</table>";

		if ($verbose) {
			echo "<p>The reported intervals are automatically added together into the bins shown above, based on the number of meteors and the distribution of the intervals. For each bin, the following parameters are computed:</p>  
				<ul>
				<li><i>Time</i> is the averaged centre of the reported intervals in Universal Time (UTC);</li> 
				<li><i>Solarlon</i> is the astronomical position of the earth relative to the sun at the above time (equinox J2000.0);</li>
				<li><i>nINT</i> is the number of reported intervals used;</li>
				<li><i>n".$this->fShowerCode."</i> is the number of ".$this->fShowerName." observed in those intervals;</li>
				<li><i>ZHR</i> is the Zenithal Hourly Rate, defined as (1 + sum n".$this->fShowerCode.") / sum(Teff/C) where Teff is the effective observing time and C is the total correction coefficient for limiting magnitude, clouds and zenith correction 1/sin(h<sub>R</sub>);</li>
				<li><i>Particle density</i> is the approximate number of particles (meteoroids) causing meteors brighter than magnitude +6.5 per billion cubic kilometer (i.e., a cube with 1000 km edge length). 
				The ZHR depends on this density (which can be variable) and the velocity (which is roughly constant) of the meteoroid stream. For more information about the computation method, see the references at the bottom.</li>
				</ul>
				";
		}
	}
	
	
	
	/**
	* Create a ZHR graph using gnuplot
	**/
	function zhr_plot($name) {
		// Use hour ticks if the interval span is small
		$span = $this->getTimespan();

		if ($span < (72.5*60*60)) {
			$format_x = "%d, %H:%M";
			$xlabel = "Time (UTC)";
		} else {
			$format_x = "%b %d";
			$xlabel = "Day (UTC)";			
		}
		$format_x = "%b %d\\n%H:%M";
		$xlabel = "Time (UTC)";

		
		// Generate the gnuplot script and execute
		// The output is written to tmp/ on the webserver
		$scriptname = $this->getPrefixLocal().$name.".gnuplot";
		$outname = $this->getPrefixPublic().$name.".png";
		$script='
			set terminal png size 860,380 font "/usr/share/fonts/truetype/msttcorefonts/verdana.ttf" 9
			set output "'.$outname.'"
			
			set grid
			unset key
			
			set timefmt "%Y-%m-%d %H:%M:%S"
			set xdata time
			set format x "'.$format_x.'"
			set xlabel "'.$xlabel.'"
			set ylabel "ZHR (Corrected hourly meteor rate)"
			set offsets 10,1000,10,0
			set style data errorbars
			plot [] [0:] "'.$this->getPrefixLocal().$name.'.data" using 1:3:4'; 
		$this->writeFile($scriptname, $script);
		shell_exec("gnuplot $scriptname");	
	}
	
	
	

	/**
	* Show a section containing observer statics (spatial distribution, temporal distribution and table)
	*/
	function observer_section() {
		// Show general observer statistics
 		$query = "SELECT COUNT(DISTINCT observer.last_name) AS obs, count(DISTINCT location.country_id) AS loc
				FROM visualsummary.rate_shower
				JOIN meta.period ON period.period_id = rate_shower.period_id
				JOIN meta.observation ON observation.observation_id = period.observation_id
				JOIN meta.observer ON observer.observer_id = observation.observer_id
				JOIN meta.location ON location.location_id = observation.location_id
				WHERE period.start > '".$this->fStart."'::timestamp
				AND period.stop < '".$this->fStop."'::timestamp
				AND rate_shower.shower_id = (SELECT shower_id FROM meta.shower WHERE code = '".$this->fShowerCode."')
				";
		$this->db->query($query);
		$obj = $this->db->getResultObject();
		
		if ( $obj->obs > 0 ) {
			echo "<p>Data has been received from ".$obj->obs." observers in ".$obj->loc." countries. Thank you for your efforts!</p>"; 
			// Spatial distribution map
			$this->observer_spatial();
			// Temporal distribution graph
			$this->observer_temporal();
			// Observers table
			$this->observer_table();
		} else {
			echo "<p>No observations available yet!</p>";
		}
	}
	
	
	
	/**
	* Show a table of observers
	**/
	function observer_table() {
		// Select the observers from the database
		$query = "SELECT observer.code AS obscode, observer.last_name, observer.first_name || ' ' || observer.last_name AS obsname, country.name as country, round(sum(teff)::numeric, 2) AS totalteff, sum(number) AS nmet, count(DISTINCT observation.observation_id) AS nobs
			FROM visualsummary.rate_shower
			JOIN visualsummary.rate_period ON rate_period.period_id = rate_shower.period_id
			JOIN meta.shower ON rate_shower.shower_id = shower.shower_id
			JOIN meta.period ON period.period_id = rate_period.period_id
			JOIN meta.observation ON observation.observation_id = period.observation_id
			JOIN meta.observer ON observer.observer_id = observation.observer_id
			JOIN meta.location ON location.location_id = observation.location_id
			JOIN meta.country ON country.country_id = observer.country_id
			WHERE period.start > '".$this->fStart."'::timestamp
			AND period.stop < '".$this->fStop."'::timestamp
			AND observer.code != 'TEST'
			AND upper(shower.code) = upper('".$this->fShowerCode."')
			GROUP BY obscode, last_name, obsname, country.name";
		$this->db->query($query);
		$n_observers = $this->db->getNumberOfRows();
		$allobservers = $this->db->getAllResults();	
			
		// Remove duplicate names
		$nodupes = array();
		foreach ($allobservers as $result) {
			if ( array_key_exists(ucwords(strtolower($result["obsname"])), $nodupes) ) {
				$nodupes[ ucwords(strtolower($result["obsname"])) ]["totalteff"] += $result["totalteff"];
				$nodupes[ ucwords(strtolower($result["obsname"])) ]["nmet"] += $result["nmet"];
			} else {
				$nodupes[ ucwords(strtolower($result["obsname"])) ]["country"] = $result["country"];
				$nodupes[ ucwords(strtolower($result["obsname"])) ]["totalteff"] = $result["totalteff"];
				$nodupes[ ucwords(strtolower($result["obsname"])) ]["nmet"] = $result["nmet"];
			}
		}
		
		
		// Create the table
		echo "<h3>Table of observers</h3>";
		echo "<table>";
		echo "<thead><tr><th>Observer</th><th>Country</th><th class='numfield'>Teff</th><th class='numfield'>n".$this->fShowerCode."</th></tr></thead>";
		echo "<tbody>";		
		foreach ($nodupes as $name=>$result) {
			/* $nights = "SELECT daystart || CASE WHEN daystart != daystop THEN '-' || daystop::text ELSE '' END || '/' || month AS name FROM
				(SELECT EXTRACT(day FROM start) AS daystart, EXTRACT(day FROM stop) AS daystop, EXTRACT(month FROM start) AS month 
				FROM visualsummary.rate_observations WHERE upper(obscode) = upper('".$result["obscode"]."') AND upper(shower) = upper('".$this->fShowerCode."')) nights";
			$this->db->query($nights);
			$allnights = $this->db->getAllResults();
			$nightstring = "";
			foreach ($allnights as $night) {
				$nightstring .= $night["name"]." ";
			} */

			
			
			echo "<tr>";
			// Note: we uppercase the first char of each name because the VMDB has uppercase names. This may cause errors for some names tho :-(
			//echo "<td><a href='http://umdb.urania.be/v2/obsview/".strtolower($this->fShowerName).$this->fYear.".php'>".ucwords(strtolower($name))."</a></td>
			echo "<td><a href='http://vmo.imo.net/imozhr/obsview/".strtolower($this->fShowerName).$this->fYear.".php'>".ucwords(strtolower($name))."</a></td>
				<td>".$result["country"]."</td>
				<td class='numfield'>".$result["totalteff"]."h</td>
				<td class='numfield'>".$result["nmet"]."</td>";
			echo "</tr>";
		}
		echo "</tbody></table>";

	}

	

	/**
	* Show a map with the spatial distribution of observers
	**/
	function observer_spatial() {
		// Select the location coordinates
		$query = "SELECT DISTINCT longitude, latitude, location.name AS locname, first_name || ' ' || last_name AS obsname FROM
					visualsummary.rate_shower
					JOIN meta.shower ON shower.shower_id = rate_shower.shower_id
					JOIN meta.period ON period.period_id = rate_shower.period_id
					JOIN meta.observation ON observation.observation_id = period.observation_id
					JOIN meta.location ON location.location_id = observation.location_id
					JOIN meta.observer ON observer.observer_id = observation.observer_id
				WHERE shower.code = '".$this->fShowerCode."'
					AND period.start > '".$this->fStart."'::timestamp
					AND period.stop < '".$this->fStop."'::timestamp";
		$this->db->query($query);
		$alllocations = $this->db->getAllResults();

		// Write the locations to a file
		// IMPORANT: Run the script "createmap.sh" separately to truely update the map!!!! 
		// (this would take much time for the php script, so I prefer to leave it out here)
		$location_data = "";	
		foreach ($alllocations as $location) {
			$location_data .= $location["longitude"]."  ".$location["latitude"]."\n";
		}
		$this->writeFile($this->getPrefixLocal().".locations", $location_data);
		
		// Create gmap js script
		$this->observer_gmap($alllocations);

		// Show the map
		echo '<h3>Spatial distribution of observers</h3>';
		echo '<p>Note: click on the map for an interactive version.</p>';
		echo '<p><a href="out/'.$this->getFilePrefix().'_gmap.html"><img src="out/world_small.png" alt="Spatial distribution" /></a></p>';

	}
	
	

	/**
	* Create javascript file for observer map using google maps api
	**/
	function observer_gmap($locations_array) {
		
		$js ="
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
			";
			
			foreach ($locations_array as $location) {
				$js .= "createMarker(map, ".$location["latitude"].", ".$location["longitude"].", '".htmlspecialchars($location["obsname"], ENT_QUOTES)."', 'red');\n";
			}			
			
		$js .="	}";
			
		$this->writeFile($this->getPrefixPublic()."_gmap.js", $js);
		
		
		$html = "
		<html>
			<head>
				<title>Observer spread</title>
				<script type='text/javascript' src='http://maps.google.com/maps/api/js?sensor=false'></script>
				<script type='text/javascript' src='".$this->getFilePrefix()."_gmap.js'></script>
			</head>
			
			<body onload='initialize()'>
				<p align='center'>
					<div id='map' style='width: 950px; height: 500px;'></div>
				</p>
			</body>
		</html>";
		
		$this->writeFile($this->getPrefixPublic()."_gmap.html", $html);
		
	}
	
	
	
	/**
	* Show a graph with the temporal distribution of observers
	**/
	function observer_temporal() {
		// Calculate the number of observations per 1-hour timebin for the database (slow query! :-( )
		$query = "SELECT bin, COUNT(DISTINCT observer_id) AS nr
				FROM visualsummary.rate_period 
				JOIN meta.period ON period.period_id = rate_period.period_id
							AND period.observation_id IN (
                                                        	SELECT DISTINCT observation_id FROM meta.period
									JOIN visualsummary.rate_period ON rate_period.period_id = period.period_id
									JOIN visualsummary.rate_shower ON rate_shower.period_id = rate_period.period_id
									WHERE start + ((stop-start) / 2) > '".$this->fStart."'::timestamp
									AND start + ((stop-start) / 2) < '".$this->fStop."'::timestamp
									AND shower_id = (SELECT shower_id FROM meta.shower WHERE upper(code) = upper('".$this->fShowerCode."'))
									ORDER BY observation_id
									LIMIT 10000) 				
				
				JOIN meta.observation ON observation.observation_id = period.observation_id
				RIGHT JOIN 
					(SELECT '".$this->fStart."'::timestamp + (n || ' hours')::interval AS sta, '".$this->fStart."'::timestamp + (n || ' hours')::interval + '1 hour'::interval AS sto, to_char('".$this->fStart."'::timestamp + (n || ' hours')::interval, 'YYYY-MM-DD HH24') AS bin
					FROM (SELECT generate_series(0, (SELECT EXTRACT( epoch FROM (SELECT '".$this->fStop."'::timestamp - '".$this->fStart."'::timestamp)) / 3600)::integer) AS n) AS series) AS bins 
					ON (bins.sta >= start AND bins.sta < stop) OR (bins.sto >= start AND bins.sto < stop) OR (bins.sta < start AND bins.sto >= stop)
				GROUP BY bin
				ORDER BY bin
			";
			
			
		$this->db->query($query);
		$allresults = $this->db->getAllResults();
		
		// Write the results to a datafile for gnuplot
		$datafile = $this->getPrefixLocal()."temporal.data";
		$covdata = "";
		foreach ($allresults as $result) {
			$covdata .= $result["bin"]."  ".$result["nr"]."\n";
		}
		$this->writeFile($datafile, $covdata);
		
		// Generate and execute a gnuplot script and execute
		$scriptname = $this->getPrefixLocal()."temporal.gnuplot";
		$script='
			set terminal png size 664,355 font "/usr/share/fonts/truetype/msttcorefonts/verdana.ttf" 9
			set output "'.$this->getPrefixPublic().'temporal.png"
			
			set grid
			unset key
			
			set timefmt "%Y-%m-%d %H"
			set xdata time
			set format x "%d/%m"
			set xlabel "Day (UTC)"
			set ylabel "Observers"
			set offsets 0,0,4,0
			set style fill solid 1.0
			set style data boxes
			plot [] [0:] "'.$datafile.'" using 1:3';
		$this->writeFile($scriptname, $script);
		shell_exec("gnuplot $scriptname");	

		// Show the generated graph
		echo "<h3>Temporal distribution of observers</h3><p style='margin-left:0;'><img src='out/".$this->getFilePrefix()."temporal.png' alt='Temporal distribution' /></p>";
	}

	
	
	/**
	* Create a CSV file with the interval data, so users can make their own analysis
	**/
	function create_csv() {
		
		// Rate intervals
		$query = "SELECT 
				observer.code,
				observer.first_name || ' ' || observer.last_name AS name,
				location.code AS sitecode,
				ROUND(location.latitude::numeric,4) AS lat,
				ROUND(location.longitude::numeric,4) AS lon,
				start,
				stop,			
				ROUND(teff::numeric, 4) AS teff, 
				ROUND(lm::numeric, 3) AS lm, 
				ROUND((100 / (100 - fov_obstruction))::numeric,3) AS f,
				number AS ".$this->fShowerCode."
			FROM visualsummary.rate_shower
				JOIN visualsummary.rate_period ON rate_period.period_id = rate_shower.period_id
				JOIN meta.period ON period.period_id = rate_shower.period_id
				JOIN meta.observation ON observation.observation_id = period.observation_id
				JOIN meta.observer ON observer.observer_id = observation.observer_id
				JOIN meta.location ON location.location_id = observation.location_id
			WHERE 
				start + ((stop-start) / 2) > '".$this->fStart."'::timestamp
				AND start + ((stop-start) / 2) < '".$this->fStop."'::timestamp
				AND shower_id = (SELECT shower_id FROM meta.shower WHERE upper(code) = upper('".$this->fShowerCode."'))
				ORDER BY observer.code, start";
		$this->db->query($query);
		$csv = $this->db->getCsv();
		$this->writeFile($this->getPrefixPublic()."_rate.csv", $csv);
		
		// Magnitude distributions
		$query = "SELECT 
				observer.code,
				observer.first_name || ' ' || observer.last_name AS name,
				location.code AS sitecode,
				ROUND(location.latitude::numeric,4) AS lat,
				ROUND(location.longitude::numeric,4) AS lon,
				start,
				stop,			
				ROUND(lm::numeric, 3) AS lm,
				magmin6 AS m_6,
				magmin5 AS m_5,
				magmin4 AS m_4,
				magmin3 AS m_3,
				magmin2 AS m_2,
				magmin1 AS m_1,
				mag0 AS m0,
				mag1 AS m1,
				mag2 AS m2,
				mag3 AS m3,
				mag4 AS m4,
				mag5 AS m5,
				mag6 AS m6,
				mag7 AS m7
			FROM visualsummary.magnitude_shower
				JOIN visualsummary.magnitude_period ON magnitude_period.period_id = magnitude_shower.period_id
				JOIN meta.period ON period.period_id = magnitude_shower.period_id
				JOIN meta.observation ON observation.observation_id = period.observation_id
				JOIN meta.observer ON observer.observer_id = observation.observer_id
				JOIN meta.location ON location.location_id = observation.location_id
			WHERE 
				start + ((stop-start) / 2) > '".$this->fStart."'::timestamp
				AND start + ((stop-start) / 2) < '".$this->fStop."'::timestamp
				AND shower_id = (SELECT shower_id FROM meta.shower WHERE upper(code) = upper('".$this->fShowerCode."'))
				ORDER BY observer.code, start";
		$this->db->query($query);
		$csv = $this->db->getCsv();
		$this->writeFile($this->getPrefixPublic()."_magn.csv", $csv);
	}

}
