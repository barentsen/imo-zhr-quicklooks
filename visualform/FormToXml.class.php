<?php

/**
* Converts posted data from the electronic visual form at imo.net to XML
**/


class FormToXml {
	
	
	var $form;
	
	
	function FormToXml($form) {
		$this->form = $form;		
	}
	
	
	function getXml() {
		$xml = "<?xml version='1.0'?>\n";
		$xml .= "<meteordata xmlns='http://www.imo.net'>\n";
		$xml .= "<visualsummary>\n";
		$xml .= $this->getReportElement();
		$xml .= $this->getObserverElement();
		$xml .= $this->getLocationElement();
		$xml .= "<periodlist>\n";
		$xml .= $this->getRateElements();
		$xml .= $this->getMagnitudeElements();
		$xml .= "</periodlist>\n";
		$xml .= "</visualsummary>\n";
		$xml .= "</meteordata>\n";
		return $xml;
	}
	
	
	
	
	function unixStamp($hhmm) {
		$unix = mktime( intval(substr($hhmm, 0, 2), 10), intval(substr($hhmm, 2, 2), 10), 0, $this->form->headerSection->month,  $this->form->headerSection->day, $this->form->headerSection->year );
		if ( $this->form->headerSection->begin > $hhmm ) {
			// Add day if midnight passed
			$unix += 24*60*60;
		}		
		return $unix;	
	}
	
	
	function getReportElement() {
		$report_element = "<report>\n";	
		$report_element .= "<received>".date("Y-m-d\TH:i:s")."</received>\n";
		$report_element .= "<contact>".$this->form->headerSection->email."</contact>\n";
		$report_element .= "<remarks>".htmlspecialchars($this->form->headerSection->comments)."</remarks>\n";
		$report_element .= "</report>\n";
		return $report_element;
	}
	
	
	function getObserverElement() {
		$observer_element = "<observer>\n";
		if ( $this->form->headerSection->observer->code != "" ) {
			$observer_element .= "<code>".$this->form->headerSection->observer->code."</code>\n";
		}
		$observer_element .= "<firstname>".$this->form->headerSection->observer->firstname."</firstname>\n";
		$observer_element .= "<lastname>".$this->form->headerSection->observer->surname."</lastname>\n";
		$observer_element .= "<country>".$this->form->headerSection->observer->country."</country>\n";
		$observer_element .= "</observer>\n";
		return $observer_element;
	}
	
	
	function getLocationElement() {
		$location_longitude = $this->form->headerSection->location->lon_degree + ($this->form->headerSection->location->lon_minute / 60) + ($this->form->headerSection->location->lon_second / 3600);
		$location_latitude = $this->form->headerSection->location->lat_degree + ($this->form->headerSection->location->lat_minute / 60) + ($this->form->headerSection->location->lat_second / 3600);
		echo $this->form->headerSection->lon_minute;
		// Correct for WESTERN or SOUTHERN coordinates (negative value)
		if ( strtoupper($this->form->headerSection->location->lon_ew) == "W" ) {
			$location_longitude = -1.0 * $location_longitude;	
		}
		if ( strtoupper($this->form->headerSection->location->lat_ns) == "S" ) {
			$location_latitude = -1.0 * $location_latitude;	
		}
		
		$location_element = "<location>\n";
		if ( $this->form->headerSection->location->code != "" ) {
			$location_element .= "<code>".$this->form->headerSection->location->code."</code>\n";
		}
		$location_element .= "<name>".htmlspecialchars($this->form->headerSection->location->place)."</name>\n";
		$location_element .= "<country>".htmlspecialchars($this->form->headerSection->location->country)."</country>\n";
		$location_element .= "<longitude>".$location_longitude."</longitude>\n";
		$location_element .= "<latitude>".$location_latitude."</latitude>\n";
		if ( $this->form->headerSection->location->height != "" ) {
			$location_element .= "<height>".$this->form->headerSection->location->height."</height>\n";
		}
		$location_element .= "</location>\n";
		return $location_element;
	}

	
	function getRateElements() {
		$rate_elements = "";
		foreach ($this->form->numberSection as $period) {
			$rate_elements .= "<rate>\n";
			$startiso = date("Y-m-d\TH:i:s", $this->unixStamp($period['begin']));		
			$stopiso = date("Y-m-d\TH:i:s", $this->unixStamp($period['end']));
			
			$rate_elements .= "<start>".$startiso."</start>\n";
			$rate_elements .= "<stop>".$stopiso."</stop>\n";
			$rate_elements .= "<teff>".$period['teff']."</teff>\n";
			$rate_elements .= "<lm>".$period['lm']."</lm>\n";
			
			$obstruction = ( 1 - (1.0 / $period['f']) ) * 100.0;
			$rate_elements .= "<obstruction>".$obstruction."</obstruction>\n";
			$rate_elements .= "<fov><ra>".$period['ra']."</ra><dec>".$period['dec']."</dec></fov>\n";
			
			// Showerlist
			$rate_elements .= "<showerlist>\n";
			foreach ($period['shower'] as $shower_code => $shower) {
				if ($shower['method'] != "-") {
					$rate_elements .= "<shower><code>".$shower_code."</code><method>".$shower['method']."</method><number>".$shower['number']."</number></shower>\n";
				}
			}		
			$rate_elements .= "</showerlist>\n";
			
			$rate_elements .= "</rate>\n";
		}

		return $rate_elements;		
	}
	

	function getMagnitudeElements() {
		function positive($value) {
			if ($value < 0) {
				return 0;
			}
			return $value;
		}
		
		
		$mag_elements = "";
		if ( is_array($this->form->magnitudeSection) ) {
			foreach ($this->form->magnitudeSection as $showercode => $magperiods) {
				foreach ($magperiods as $magperiod) {
					$mag_elements .= "<magnitude>\n";
					
					$unix_start = $this->unixStamp($magperiod['begin']);
					$unix_stop = $this->unixStamp($magperiod['end']);
					$startiso = date("Y-m-d\TH:i:s", $unix_start);		
					$stopiso = date("Y-m-d\TH:i:s", $unix_stop);
					
					$mag_elements .= "<start>".$startiso."</start>\n";
					$mag_elements .= "<stop>".$stopiso."</stop>\n";
					
					// Calculate weighted mean for the distribution period Limiting Magnitude
					$total_teff = 0;
					$lmteff = 0;
					foreach ($this->form->numberSection as $ratePeriod) {
		
						$rate_start = $this->unixStamp($ratePeriod['begin']);
						$rate_stop = $this->unixStamp($ratePeriod['end']);
						$mag_start = $unix_start;
						$mag_stop = $unix_stop;
												

						
						// Calculate the overlap between period and distribution
						$rate_length = $rate_stop - $rate_start;
						$overlap = positive( $rate_length - positive($mag_start - $rate_start) - positive($rate_stop - $mag_stop) );
						$shared_teff = ($overlap / $rate_length) * $ratePeriod['teff'];
						// Lm will be a weighted mean by all relevant Teff * Lm
						$total_teff += $shared_teff;
						$lmteff += $shared_teff * $ratePeriod['lm'];
					}
					if ($total_teff > 0) {
						$lm = $lmteff / $total_teff;
					} else {
						$lm = "";	
					}
							
					
					$mag_elements .= "<lm>".$lm."</lm>\n";
					
					
					// Showerlist
					$mag_elements .= "<showerlist><shower>\n";
					$mag_elements .= "<code>$showercode</code>\n";
					$mag_elements .= "<magmin6>".floatval($magperiod['mag'][-6])."</magmin6>\n";
					$mag_elements .= "<magmin5>".floatval($magperiod['mag'][-5])."</magmin5>\n";
					$mag_elements .= "<magmin4>".floatval($magperiod['mag'][-4])."</magmin4>\n";
					$mag_elements .= "<magmin3>".floatval($magperiod['mag'][-3])."</magmin3>\n";
					$mag_elements .= "<magmin2>".floatval($magperiod['mag'][-2])."</magmin2>\n";
					$mag_elements .= "<magmin1>".floatval($magperiod['mag'][-1])."</magmin1>\n";
					$mag_elements .= "<mag0>".floatval($magperiod['mag'][0])."</mag0>\n";
					$mag_elements .= "<mag1>".floatval($magperiod['mag'][1])."</mag1>\n";
					$mag_elements .= "<mag2>".floatval($magperiod['mag'][2])."</mag2>\n";
					$mag_elements .= "<mag3>".floatval($magperiod['mag'][3])."</mag3>\n";
					$mag_elements .= "<mag4>".floatval($magperiod['mag'][4])."</mag4>\n";
					$mag_elements .= "<mag5>".floatval($magperiod['mag'][5])."</mag5>\n";
					$mag_elements .= "<mag6>".floatval($magperiod['mag'][6])."</mag6>\n";
					$mag_elements .= "<mag7>".floatval($magperiod['mag'][7])."</mag7>\n";
					
					$mag_elements .= "</shower></showerlist>\n";		
					
					$mag_elements .= "</magnitude>\n";
				}
			}
		}		
		return $mag_elements;	
	}

	
}



?>
