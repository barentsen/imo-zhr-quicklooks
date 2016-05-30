<?
/**
* Converts the electronic visual form at imo.net to ascii text format
*/

class FormToText {
	
	var $data;
	
	
	function FormToText($form) {
		$this->data = $form;	
	}
	
	
	/**
	* Parse an ascii form
	*/
	function getText() {
	
		/* HEADER SECTION */
		
		$result = "// Header section\r\n";
		// Datetime
		$result .= sprintf("night    \t %04u-%02u-%02u/%02u\r\n", $this->data->headerSection->local_night_year, $this->data->headerSection->local_night_month, $this->data->headerSection->local_night_begin, $this->data->headerSection->local_night_end);
		$result .= sprintf("begin    \t %04u-%02u-%02u %04u\r\n", $this->data->headerSection->year, $this->data->headerSection->month, $this->data->headerSection->day, $this->data->headerSection->begin);
		$result .= sprintf("end      \t %04u-%02u-%02u %04u\r\n", $this->data->headerSection->year_end, $this->data->headerSection->month_end, $this->data->headerSection->day_end, $this->data->headerSection->end);

		// $result .= sprintf("date    \t %04u-%02u-%02u\r\n", $this->data->headerSection->year, $this->data->headerSection->month, $this->data->headerSection->day);
		// $result .= "interval\t ".$this->data->headerSection->begin."-". $this->data->headerSection->end."\r\n";
		// Observer
		$result .= "observer\t \"".$this->data->headerSection->observer->firstname."\" \"".$this->data->headerSection->observer->surname."\"";
		if ( $this->data->headerSection->observer->code != "" ) {
			$result .= " \"".$this->data->headerSection->observer->code."\"\r\n";
		} else {
			$result .= "\r\n";
		}
		// Location
		$result .= sprintf("location\t %02u %02u %02u %s", $this->data->headerSection->location->lon_degree,  $this->data->headerSection->location->lon_minute, $this->data->headerSection->location->lon_second, $this->data->headerSection->location->lon_ew);
		$result .= ", ";
		$result .= sprintf("%02u %02u %02u %s\r\n", $this->data->headerSection->location->lat_degree,  $this->data->headerSection->location->lat_minute, $this->data->headerSection->location->lat_second, $this->data->headerSection->location->lat_ns);
		$result .= "site    \t \"".$this->data->headerSection->location->place."\" \"".$this->data->headerSection->location->country."\"";
		if ( $this->data->headerSection->location->code != "" ) {
			$result .= " \"".$this->data->headerSection->location->code."\"\r\n";
		} else {
			$result .= "\r\n";
		}
		// Reporter
		if ( $this->data->headerSection->email != "" ) {
			$result .= "reporter\t \"".$this->data->headerSection->email."\"\r\n";
		}
		
		
		/* SHOWER SECTION */
		$result .= "\r\n// Shower section\r\n";
		foreach ($this->data->showerSection as $shower) {
			$result .= "shower\t".$shower['code']." ";
			if ($shower['ra'] != "" AND $shower['dec'] != "") {
				$result .= sprintf("%03u %+03d", $shower['ra'], $shower['dec']);
			}
			$result .= "\r\n";
		}
		
		
		/* NUMBER SECTION */
		$result .= "\r\n// Number section\r\n";  
		
		$result .= "// \tInterval  \tRA  \tDec \tTeff \tF    \tLm  ";
		foreach ($this->data->showerSection as $shower) {
			$result .= "\t   ".$shower['code']." ";
		}    
		$result .= "\r\n";
		
		foreach ($this->data->numberSection as $period) {
			$result .= "period\t".$period['begin']."-".$period['end']." \t";
			$result .= sprintf("%03u \t%+03d \t%5.3f \t%4.2f \t%4.2f", $period['ra'], $period['dec'], $period['teff'], $period['f'], $period['lm']);
			foreach ($this->data->showerSection as $shower) {
				if ( $period['shower'][$shower['code']]['method'] == "-" ) {
					$result .= sprintf("\t %s %3s ", $period['shower'][$shower['code']]['method'], $period['shower'][$shower['code']]['number']);
				} else {
					$result .= sprintf("\t %s %3u ", $period['shower'][$shower['code']]['method'], $period['shower'][$shower['code']]['number']);
				}
			}    
			$result .= "\r\n";
		}    
		
		
		/* MAGNITUDE SECTION */
		if ( is_array($this->data->magnitudeSection) ) {
			$result .= "\r\n// Magnitude section\r\n";
			$result .= "//          \tShow\tInterval ";
			for ($mag=-6; $mag<8; $mag++) {
				$result .= sprintf(" %+5d", $mag);
			}
			$result .= "    Tot\r\n";
			
			foreach ($this->data->magnitudeSection as $shower => $intervals) {
				foreach ($intervals as $int) {	
					$result .= "distribution\t".$shower." \t";
					$result .= $int['begin']."-".$int['end'];
					for ($mag=-6; $mag<8; $mag++) {
						// Catch a bug in PHP 4.3.x
						//if ( floor($intervals[0]->mag[$mag]) == 0 ) {
						//	$result .= sprintf("\t%3.1f", $intervals[0]->mag[$mag]);
						//} else {
							if ($int['mag'][$mag] == 0) {
								$result .= "     -";
							} else {
								$result .= sprintf(" %5.1f", $int['mag'][$mag]);
							}
						//}
					}
					$result .= sprintf("  %5.1f", $int['total']);
					$result .= "\r\n";	
				}
			}
		}
	
		/* COMMENTS */
		if ( $this->data->headerSection->comments != "" ) {
			$result .= "\r\n// Personal comments\r\n".$this->data->headerSection->comments."\r\n";
		}
		
		// RETURN THE ASCII RESULT
		return $result;
	}
	
	
}

?>
