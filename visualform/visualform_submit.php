<?
/**
* Script to handle data submitted through the electronic visual form at imo.net
* This is fairly old code
* Author: Geert Barentsen
* Version: 2009-10-31
**/

// Make sure the period symbol is a point!
setlocale(LC_NUMERIC, "en_US.UTF-8");

define('TEST', false);

require_once('FormToText.class.php');
require_once('FormToXml.class.php');



// Where should observations be mailed to?
if (TEST) {
	define("MAIL_TARGET", "YOUR_EMAIL");
	define("ERROR_TARGET", "YOUR_EMAIL");
} else {
	define("MAIL_TARGET", "YOUR_EMAIL");
	// define("UMDB_TARGET", "http://umdb.urania.be/zhr/imofetch/visualsummary.php");
	define("ERROR_TARGET", "YOUR_EMAIL");
}

// Ignore spam bots
if ($_POST["email"] == "sample@email.tst") {
    exit;
}
$year = intval( $_POST["local_night_year"], 10);
if ($year < 1990) {
    exit;
}

// Quick test to see if page was called without POST
if ($_POST["numberOfPeriods"] == "") {
	echo "<pre>ERROR -- Do not access this page directly.</pre>";	
	exit;
}




/**
* PUT THE POSTED DATA INTO A SILLY DATA STRUCTURE
**/

// Observation parameters
$numberOfShowers = $_POST["numberOfShowers"];
$numberOfPeriods = $_POST["numberOfPeriods"];
$numberOfDistributions = $_POST["numberOfDistributions"];

// Header Section
$headerSection->local_night_begin = intval( $_POST["local_night_begin"], 10 );
$headerSection->local_night_end = intval( $_POST["local_night_end"], 10 );
$headerSection->local_night_month = intval( $_POST["local_night_month"], 10 );
$headerSection->local_night_year = intval( $_POST["local_night_year"], 10 );

$headerSection->begin = $_POST["begin"];
$headerSection->day = intval( $_POST["day"], 10 );
$headerSection->month = intval( $_POST["month"], 10 );
$headerSection->year = intval( $_POST["year"], 10 );

$headerSection->end = $_POST["end"];
$headerSection->day_end = intval( $_POST["day_end"], 10 );
$headerSection->month_end = intval( $_POST["month_end"], 10 );
$headerSection->year_end = intval( $_POST["year_end"], 10 );

$headerSection->email = $_POST["email"];
$headerSection->comments = $_POST["comments"];
$headerSection->observer->firstname = $_POST["observer_firstname"];
$headerSection->observer->surname = $_POST["observer_surname"];
$headerSection->observer->code = strtoupper( $_POST["observer_code"] );
$headerSection->observer->country = $_POST["observer_country"];
$headerSection->location->lon_degree = $_POST["lon_degree"];
$headerSection->location->lon_minute = $_POST["lon_minute"];
$headerSection->location->lon_second = $_POST["lon_second"];
$headerSection->location->lon_ew = $_POST["lon_ew"];
$headerSection->location->lat_degree = $_POST["lat_degree"];
$headerSection->location->lat_minute = $_POST["lat_minute"];
$headerSection->location->lat_second = $_POST["lat_second"];
$headerSection->location->lat_ns = $_POST["lat_ns"];
$headerSection->location->height = $_POST["location_height"];
$headerSection->location->code = $_POST["location_code"];
$headerSection->location->place = $_POST["location_place"];
$headerSection->location->country = $_POST["location_country"];

// Shower section (run over all showers)
$showerSection = array();
for ($showerNr=1; $showerNr <= ($numberOfShowers+1); $showerNr++) {
	if ( $_POST["shower".$showerNr."_code"] != "" )  {
		$shower = array();
		$shower['code'] = strtoupper($_POST["shower".$showerNr."_code"]);
		$shower['ra'] = $_POST["shower".$showerNr."_ra"];
		$shower['dec'] =$_POST["shower".$showerNr."_dec"];
		$showerSection[] = $shower;
	}
}
	
// NumberSection (run over all periods)
$numberSection = array();
for ($periodNr=1; $periodNr <= $numberOfPeriods; $periodNr++) {
	// Ignore empty period rows
	if ( $_POST["period".$periodNr."_begin"] != "" )  {
		$period = array();
		$period['begin'] = $_POST["period".$periodNr."_begin"];
		$period['end'] = $_POST["period".$periodNr."_end"];
		$period['ra'] = $_POST["period".$periodNr."_ra"];
		$period['dec'] = $_POST["period".$periodNr."_dec"];
		$period['teff'] = $_POST["period".$periodNr."_teff"];
		$period['f'] = $_POST["period".$periodNr."_f"];
		$period['lm'] = $_POST["period".$periodNr."_lm"];
		// Run over all showers
		$period['shower'] = array();
		for ($showerNr=1; $showerNr <= ($numberOfShowers+1); $showerNr++) {
			if ( $_POST["period_showercode".$showerNr] != "" )  {
				$period['shower'][ strtoupper($_POST["period_showercode".$showerNr]) ]['method'] = strtoupper($_POST["period".$periodNr."_shower".$showerNr."_method"]);
				$period['shower'][ strtoupper($_POST["period_showercode".$showerNr]) ]['number'] = $_POST["period".$periodNr."_shower".$showerNr."_number"];
			}
		}
		
		$numberSection[] = $period;
	}
}
	
// Magnitude section
$magnitudeSection = array();
for ($distributionNr=1; $distributionNr <= $numberOfDistributions; $distributionNr++) {
	if ( $_POST["distribution".$distributionNr."_total"] > 0 )  {
		$dis = array();
		// Period interval
		$dis['begin'] = $_POST["distribution".$distributionNr."_begin"];
		$dis['end'] = $_POST["distribution".$distributionNr."_end"];
		// Run over the magnitudes
		$dis['mag'] = array();
		for ($mag=-6; $mag<8; $mag++) {
			// 0 if empty string
			if ( $_POST["distribution".$distributionNr."_magnitude".$mag] == "") {
				$dis['mag'][$mag] = 0;
			} else {
				$dis['mag'][$mag] = floatval( $_POST["distribution".$distributionNr."_magnitude".$mag] );
			}
		}
		// Total
		if ( $_POST["distribution".$distributionNr."_total"] == "") {
			$dis['total'] = 0;
		} else {
			$dis['total'] = intval( $_POST["distribution".$distributionNr."_total"] );
		}
		
		$magnitudeSection[ strtoupper($_POST["distribution".$distributionNr."_code"]) ][] = $dis;
	}
}

// Add sections to an observation variable
$obs->headerSection = $headerSection;
$obs->showerSection = $showerSection;
$obs->numberSection = $numberSection;
$obs->magnitudeSection = $magnitudeSection;


/** ANTI-SPAM TEST **/
// Silly anti-spam test, this may be improved by a captcha
if ( "0000-00-00" == sprintf("%04u-%02u-%02u", $obs->headerSection->year, $obs->headerSection->month, $obs->headerSection->day) ) {
	echo "
	<h1>FATAL ERROR</h1>
	<p>The observation has NOT been submitted because we detect a spam robot!</p>
	<p>If you receive this message in error, please contact visual (a) imo.net! </p>
	";
	exit();	
};



/**
* Panic function: call when error occurs
**/
function panic($msg, $display = true) {
	if ($display) {
		echo "<p><strong>ERROR: a technical problem has occured. Your observation may NOT have been submitted. Please contact <a href='mailto:gbar@urania.be'>Geert Barentsen</a>.</strong></p>";
		echo "<p>$msg</p>";
	}
	mail(ERROR_TARGET, "Error in visual form submit at www.imo.net", $msg, "From: IMO website <geert@barentsen.be>\r\nErrors-To: <gbar@urania.be>\r\n");	
}


/**
* Create text and xml versions
**/
$form2text = new FormToText($obs);
$text = $form2text->getText(); 
$form2xml = new FormToXml($obs);
$xml = $form2xml->getXml();


/**
* Mail the observation (text)
**/
$header = "Content-type: text/plain; charset=UTF-8\r\n";
$header .= "Cc: ".$_POST["email"]."\r\n";
$header .= "Bcc: ".ERROR_TARGET."\r\n";
$header .= "From: ".$_POST["observer_firstname"]." ".$_POST["observer_surname"]." <".$_POST["email"].">\r\n";
$header .= "Reply-To: ".$_POST["email"]."\r\n";
$header .= "Errors-To: ".ERROR_TARGET."\r\n";
$header .= "Return-Path: ".$_POST["email"]."\r\n";           
$header .= "Return-Receipt-To: ".ERROR_TARGET."\r\n";

$subject = "Electronic visual form for ".$_POST["year"]."-".$_POST["month"]."-".$_POST["day"];
$mailresult = mail(MAIL_TARGET, $subject, $text, $header);
if ( ! $mailresult ) {
	panic("Info: error while sending mail.");
	exit;
}


/**
* Store the observation in the database (both text and xml)
**/
require_once('../account.inc.php');
$link = mysql_connect($dbhost, $dbuser, $dbpass);
if ( ! $link) {
	panic( mysql_error() );	
	exit;
}
mysql_select_db($dbname);
$result = mysql_query("INSERT INTO obs_dump (observation) values (\"".mysql_real_escape_string(utf8_decode($text))."\")", $link);
$result = mysql_query("INSERT INTO obs_xmldump (observation, fetched) values (\"".mysql_real_escape_string(utf8_decode($xml))."\", 0)", $link);
if ( ! $result) {
	panic( mysql_error() );	
	mail(ERROR_TARGET, "Visual form error -- recovered data", utf8_decode($xml), "From: IMO website <geert@barentsen.be>\r\nErrors-To: <gbar@urania.be>\r\n");	
	exit;
}


?>




<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" 
    "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
  <title>Electronic visual report form | International Meteor Organization</title>
  <meta http-equiv="content-type" content="text/html;charset=utf-8" />
  <meta http-equiv="Content-Style-Type" content="text/css" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<style type="text/css" media="all">@import "misc/drupal.css";</style><link type="text/css" rel="stylesheet" href="modules/glossary/glossary.css" />
  <style type="text/css" media="all">@import "themes/marvin_2k_phptemplate/style.css";</style>  <script type="text/javascript"> </script>

</head>

<body>

<div class="main-content">

	<div class="node">
		<h1 class="title">Visual Observing Form - Summary report results</h1>
	<div>
  
	<p>
	The results shown below were succesfully submitted to the VMDB administrator.
	You should receive a copy in your mailbox within a couple of minutes.
	Thank you for using the online report form.
	Do not hesitate to contact <a href="mailto:visual@imo.net">visual@imo.net</a> in case of problems.
	</p>
  
  <p>Submit <a href="http://www.imo.net/visual/report/electronic">another report</a> if you wish.
  </p>

	<p>
		<pre style="background-color:#EFEEF7; padding:1.5em; font-family: monospace;"><?php echo utf8_decode($text); ?></pre>	
	</p>

	<p>Your observation may be included realtime in a ZHR graph at the <a href="http://www.imo.net/">IMO frontpage</a>.</p>
	
<?php

/**
* Finally: warn UMDB that a new observation has arrived in the database at imo.net
**/
/*
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, UMDB_TARGET );
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$curl_result = curl_exec($ch);

if (curl_errno($ch)) {
	panic( curl_error($ch), false );
} else {
	echo '<p>Your observation may be included realtime in a ZHR graph at the <a href="http://www.imo.net/">IMO frontpage</a>.</p>'; 
}
curl_close($ch);
*/

?>

</p>


 </div><!-- mainContent -->

</div><!-- pageFrame -->
 </body>
</html>
