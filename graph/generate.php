<?php
// Generates the ZHR report html page
date_default_timezone_set('UTC'); 

// All the queries and calculations are defined in the Circular library
require_once("Circular.class.php");


/**
* CONFIGURATION PARAMETERS 
**/

$showername = "Geminids";
$showercode = "GEM";
$year = 2015;
$popindex = 2.0;
$vel_inf = 35.0;
$min_interval = "01:00:00";  	// Minimum bin width
$max_interval = "24:00:00";  	// Maximum bin width
$max_correction = "10";		// Maximum total correction factor for a period
$min_lm = "5.0";  		// Periods below this Lm will be ignored
$max_error = "15"; 		// If a ZHR point exceeds this error bar, it will not be shown

$start = "2015-12-09 00:00:00";
$stop = "2015-12-20 00:00:00";
$min_meteors = 20;		// Optimal number of meteors in a bin
$overview = new Circular($showername, $year, $showercode, $popindex, $vel_inf, $start, $stop, $min_meteors, $min_interval, $max_interval, $max_correction, $min_lm, $max_error);

/*
$min_lm = "4.9"; 
$max_correction = "10";	
$start = "2013-08-11 06:00:00";
$stop = "2013-08-14 06:00:00";
$min_interval = "00:30:00";
$min_meteors = 100;		// Optimal number of meteors in a bin
$peak = new Circular($showername, $year, $showercode, $popindex, $vel_inf, $start, $stop, $min_meteors, $min_interval, $max_interval, $max_correction, $min_lm, $max_error);
*/

try {


/**
* DISPLAY THE ZHR PAGE
**/
?>


<?php echo '<?xml version="1.0" encoding="utf-8" ?>'; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

	<head>
		<title><? echo $showername." ".$year; ?>: visual data quicklook</title>
		<link rel="stylesheet" href="zhr.css" type="text/css" />
	</head>
	
	<body>
	<div style="float:right; text-align:center; margin:1em; margin-top:0;">
		
		<a href="http://www.imo.net"><img src="out/imo.jpg" style="border:none; margin-bottom:0;" /></a><br/>
		[ <a href="http://www.imo.net">www.imo.net</a> ]
	</div>
	
		<h1><? echo $showername." ".$year; ?>: visual data quicklook</h1>
		
		
		
		<h2>Introduction</h2>
		<p>
		This page shows automated results of the <? echo $showername." ".$year; ?>, 
		based on visual observations reported by citizen scientists through the <a href="http://www.imo.net/visual/report">report form</a> of the <a href="http://www.imo.net">International Meteor Organization</a> (IMO).
		The information on this page is generated automatically; for scientific use  
		please refer to manual analyses published in scientific journals (such as <a href="http://www.imo.net/imo/wgn">WGN</a>).
		Send your feedback regarding this page to <a href="mailto:geert@barentsen.be">Geert Barentsen</a>.
		</p>
		<p>Page contents:</p>
		<div class="list"><img src="immy_bullet.png" style="margin:0; margin-right:0.3em;" alt="Immy" /> <a href="#overview">Activity profile</a></div>
		<!-- <div class="list"><img src="immy_bullet.png" style="margin:0; margin-right:0.3em;" alt="Immy" /> <a href="#peak">12-13 August in detail</a> <b style='color:red;'>(NEW)</b></div> -->

		<div class="list"><img src="immy_bullet.png" style="margin:0; margin-right:0.3em;" alt="Immy" /> <a href="#observers">Observer statistics</a></div>
		<div class="list"><img src="immy_bullet.png" style="margin:0; margin-right:0.3em;" alt="Immy" /> <a href="#download">Data access</a></div>
		<div class="list"><img src="immy_bullet.png" style="margin:0; margin-right:0.3em;" alt="Immy" /> <a href="#credits">Credits and references</a></div>
		<p>Note that the data will finally go into the <a href="/data/visual">Visual Meteor Database (VMDB)</a> with manual inspection and rectifications. We are curretly completing the files of 2008-2011. The VMDB is an enormous project - any help will be greatly appreciated.</p>
                <p>Page generated: <?php echo date("Y F j"); ?> at <?php echo date("G:i"); ?> UTC. </p>

		<h2><a name="overview" />Activity profile</h2>
                <?php $overview->zhr_section("overview"); ?>

		<!-- <h2><a name="peak" />12-13 August in detail</h2> -->
                <?php // $peak->zhr_section("peak", false);
		?>

		<h2><a name="observers" />Observer statistics</h2>
		<?php $overview->observer_section(); 
		?>
	
		<h2><a name="download" />Data access</h2>
		
		<p>
		<b>Create your own analysis.</b> The files below can be opened using Excel:<br/>
		<a href="out/<? echo $overview->getFilePrefix() ?>_rate.csv"><? echo $overview->getFilePrefix(); ?>_rate.csv</a> (number of meteors per interval per observer)<br />
		<a href="out/<? echo $overview->getFilePrefix() ?>_magn.csv"><? echo $overview->getFilePrefix(); ?>_magn.csv</a> (number of meteors per magnitude bin per observer)
		</p>
		
		
		<?php
		// Create the CSV file
		$overview->create_csv();
			  
		} catch (DatabaseException $e) {
			 echo "<h1>Internal error</h1>";
			 echo "<p>".$e->getMessage()."</p>";
		}
		
		
		?>
	
		<p/>
		
		<h2><a name="credits" />Credits and references</h2>
		
		<p>
		The information on this page may be distributed freely provided credit is given to the <a href="http://www.imo.net">International Meteor Organization</a> (IMO) and, when possible, to the individual observers.
		The computer facilities to generate this page are provided by <a href="http://www.rssd.esa.int/meteors">ESA/RSSD</a> and <a href="http://www.arm.ac.uk">Armagh Observatory</a>.</p>
		
		<p>
		References:
		<ol style='margin-top:0.2em;'>
		<li>Rendtel J. and Arlt R., editors (2009). <i>Handbook for meteor observations; Chapter 9, Analyses and Calculations</i>. International Meteor Organization. ISBN 978-2-87355-020-2.</li>
		<li>Koschack R., Rendtel J. (1990). <i>Determination of spatial number density and mass index from visual meteor observations (II).</i> WGN 18, 119-140.</li>
		</ol>
		</p>

	<script type="text/javascript">
	var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
	document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
	</script>
	<script type="text/javascript">
	try {
	var pageTracker = _gat._getTracker("UA-69171-2");
	pageTracker._trackPageview();
	} catch(err) {}</script>
		
	</body>
</html>

