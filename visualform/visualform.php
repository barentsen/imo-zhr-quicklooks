<?php
/**
* Script to generate the electronic visual form on www.imo.net
* Author: Geert Barentsen
* Version: 2009-10-31
*/


define('TEST', false);

// Set the name to use for the javascript and form target (append "_test" for the test version)
if (TEST) {
	define('NAME', '/script/visualform/visualform_test');
} else {
	define('NAME', '/script/visualform/visualform');
	define('NAME_JS', '/script/visualform/visualform');
	//define('NAME', 'http://vmo.imo.net/imozhr/visualform/visualform');
}



// Set the number of showers, period rows, distribution rows
if ( isset($_GET["showers"]) AND is_numeric($_GET["showers"]) AND $_GET["showers"] >= 0 ) {
	define("SHOWERS", $_GET["showers"]);
} else {
	define("SHOWERS", 5);
	// Leonids
	//define("SHOWERS", 5);
}
if ( isset($_GET["periods"]) AND is_numeric($_GET["periods"]) AND $_GET["periods"] > 0 ) {
	define("PERIODS", $_GET["periods"]);
} else {
	define("PERIODS", 20);
	// Leonids
	//define("PERIODS", 25);
}
if ( isset($_GET["distributions"]) AND is_numeric($_GET["distributions"]) AND $_GET["distributions"] > 0 ) {
	define("DISTRIBUTIONS", $_GET["distributions"]);
} else {
	define("DISTRIBUTIONS", 25);
	// Leonids
	//define("DISTRIBUTIONS", 30);
}


define("WARNING_COLOR", "#FF5A00");
define("ERROR_COLOR", "#B70000");
define("DEFAULT_COLOR", "#0000CD");
?>


<!-- The form checking routines are defined in visualform.js -->
<script type="text/javascript" src="<?php echo NAME_JS; ?>.js"></script>

<style type="text/css">

	.assist {
		font-size: 0.82em;
	}

	td {
		text-align:center;
		vertical-align:top;
		padding: 0.3em;
		margin: 0em;
	}
	
	.PeriodInput {
		margin: 0.15em;	
		padding: 0.1em;
		text-align:center;
		background-color:#EFEEF7;
		border: 1px solid #FFFFFF;
		border-bottom: 1px solid <?php echo DEFAULT_COLOR; ?>;
		color:<?php echo DEFAULT_COLOR; ?>;
	}
		
	.InputReadonly {
		text-align:center;
		background-color:#FFF;
		border: 0 solid;
		border-bottom: 1px solid;
		border-color:#000;
		color:#000;	
	}
		
	.BottomBorder {
		border-bottom-width:1px;
		border-bottom-style:solid;
		border-color:#000;
	}
	
	.LeftBorder {
		border-left-width:1px;
		border-left-style:solid;
		border-color:#000;
	}
</style>

<?php
/*
<form action="" method="get">
Showers: <input class="PeriodInput" style="width:2.3em;" type="text" name="showers" value="<?php echo SHOWERS; ?>" />
Periods: <input class="PeriodInput" style="width:2.3em;" type="text" name="periods" value="<?php echo PERIODS; ?>" />
Distributions: <input class="PeriodInput" style="width:2.3em;" type="text" name="distributions" value="<?php echo DISTRIBUTIONS; ?>" />
<input type="submit" value="Restart" />
</form>
*/

if (TEST) {
	echo "<p>";
	echo "<b style='color:red; font-size:1.5em;'>This is a test version of the form. Do not use to report real observations!</b><br/><br/>";
	echo "<input type='button' value='Populate form with artificial data' onclick='populateTestData();' /><br/><br/>";
	echo "</p>";
}
?>

<h2>Introduction</h2>

<p>
The form below validates and submits data for entry in the <a href='/data/visual'>IMO visual meteor database</a>
and the creation of ZHR activity graphs. 
For instructions on filling out a visual report form, 
please consult the <a href="/visual/major/observation">observing instructions</a> and the <a href="/visual/major/report">instructions for filing a report</a>.
In addition, read through the <a href="/visual/report/electronic/help"><b>hints for the electronic form</b></a>.
</p>
<!--
<p></p>


<h2>Special instructions for the Draconids</h2>
<p>
Please take the following guidelines into account for reporting Draconid observations:
</p>
<ol>
<li>use <b>shower code 'DRA' for the Draconids</b>;</li>
<li>please avoid intervals longer than 5 to 10 minutes (also when the activity appears low);</li>
<li>avoid magnitude distributions with more than 30 meteors;</li>
<li>intervals do not have to start at round times (e.g., 2100-2115); irregular intervals are fine (e.g., 2102-2116);</li>
<li>feel free to submit your observation in parts using multiple forms.</li>
</ol>
 -->


<p>
To submit a large number of intervals, you may <a href="/visual/report">customize the number of rows in the form</a> (click the link) or simply submit multiple forms.
</p>

<!--<p><font size=3 color=#F04020><b>Currently, the form does not save the 
data to the database erratically. Please stay tuned until the problem is 
fixed, if you do not wish to risk data lost.</b></font> (2012 Aug 27)</p> -->

<!--
<p>
Note that in the case of high meteor activity, you should report short intervals to allow for detailed analysis. 
As a rule of thumb, try to avoid intervals with more than 10 shower meteors and magnitude distributions with more than 30 meteors. To submit a large number of intervals, you may
<a href="/visual/report">customize the layout</a> or submit multiple forms.</p>
-->
<p></p>

<h2>Form</h2>
<p></p>
<form onkeyup="disableSubmit();" method="post" action="<?php echo NAME; ?>_submit.php" id="VisualForm" accept-charset="utf-8"> 
<input type="hidden" name="numberOfShowers" id="numberOfShowers" value="<?php echo SHOWERS; ?>" />
<input type="hidden" name="numberOfPeriods" id="numberOfPeriods" value="<?php echo PERIODS; ?>" />
<input type="hidden" name="numberOfDistributions" id="numberOfDistributions" value="<?php echo DISTRIBUTIONS; ?>" />


<div style="margin-left:1em;">


<div style="margin-top:1em;">	
	<font class="assist">Observer details.</font>
	<br />
	First name(s)*:
	<input name="observer_firstname" id="observer_firstname" type="text" maxlength="100" style="width:10.2em; text-align:left;" class="PeriodInput" />.
	Family name(s)*:
	<input name="observer_surname" id="observer_surname" type="text" maxlength="100" style="width:19.5em; text-align:left;" class="PeriodInput" />.
	<br />
	Country*:
	<select name="observer_country" id="observer_country" class="PeriodInput" style="width:13.2em; text-align:left;">
		<?php include('select_countries.html'); ?>
	</select>.
	IMO Code:
	<input name="observer_code" id="observer_code" type="text" maxlength="5" style="width:12.3em; text-align:left;" class="PeriodInput" /> (leave empty if new).
</div>

<div style="margin-top:2em;">
	<font class="assist">Observing location.</font>
	<br />
	
	Longitude*:
	<input name="lon_degree" id="lon_degree" type="text" maxlength="3" style="width:1.8em;" class="PeriodInput" />°
	<input name="lon_minute" id="lon_minute" type="text" maxlength="2" style="width:1.8em;" class="PeriodInput" />'
	<input name="lon_second" id="lon_second" type="text" maxlength="2" style="width:1.8em;" class="PeriodInput" />"
					<select name="lon_ew" id="lon_ew" class="PeriodInput" style="width:3em;">
						<option value="E">E</option>
						<option value="W">W</option>
					</select>
	. Latitude*:
	<input name="lat_degree" id="lat_degree" type="text" maxlength="2" style="width:1.8em;" class="PeriodInput" />°
	<input name="lat_minute" id="lat_minute" type="text" maxlength="2" style="width:1.8em;" class="PeriodInput" />'
	<input name="lat_second" id="lat_second" type="text" maxlength="2" style="width:1.8em;" class="PeriodInput" />"
					<select name="lat_ns" id="lat_ns" class="PeriodInput" style="width:3em;">
						<option value="N">N</option>
						<option value="S">S</option>
					</select>
	. Height:
	<input name="location_height" id="location_height" type="text" maxlength="4" style="width:3em;" class="PeriodInput" />m.

	<br />
	Name*:
	<input name="location_place" id="location_place" type="text" maxlength="100" style="width:14.9em; text-align:left;" class="PeriodInput" />.
	Country*:
	<select name="location_country" id="location_country" class="PeriodInput" style="width:11.4em; text-align:left;">
		<?php include('select_countries.html'); ?>
	</select>	
	IMO Code:
	<input name="location_code" id="location_code" type="text" maxlength="10" style="width:4em;" class="PeriodInput" />.
</div>

<div style="margin-top:2em;">
<font class="assist">Specify the night as a pair of <b>local dates</b> (enter two consecutive days: day1 / day2, month, year).</font>
	<br />
	Night (Local Time)*:
	<input name="local_night_begin" id="local_night_begin" type="text" maxlength="2" style="width:2.7em;" class="PeriodInput" /> 
	/ <input name="local_night_end" id="local_night_end" type="text" maxlength="2" style="width:2.7em;" class="PeriodInput" />(dd<sub>1</sub>/dd<sub>2</sub>),
	<input name="local_night_month" id="local_night_month" type="text" maxlength="2" style="width:2.7em;" class="PeriodInput" />(mm<sub>1</sub>),
	<input name="local_night_year" id="local_night_year" type="text" maxlength="4" style="width:4.3em;" class="PeriodInput" />(yyyy<sub>1</sub>).
	<br />
</div>

<div style="margin-top:2em;">
	<font class="assist">Specify the observation begin and end in <b>Universal Time</b>. (hour, day, month, year)</font>
	<br />
	Observation begin (Universal Time)*:
	<input name="begin" id="begin" type="text" maxlength="4" style="width:3.3em;" class="PeriodInput" onkeyup="suggestDate();" />(hhmm),
	<input name="day" id="day" type="text" maxlength="2" style="width:2.7em;" class="PeriodInput" />(dd),
	<input name="month" id="month" type="text" maxlength="2" style="width:2.7em;" class="PeriodInput" />(mm),
	<input name="year" id="year" type="text" maxlength="4" style="width:4.3em;" class="PeriodInput" />(yyyy).
	<br />
	Observation end (Universal Time)*:
	<input name="end" id="end" type="text" maxlength="4" style="width:3.3em;" class="PeriodInput" onkeyup="suggestDate();" />(hhmm),
	<input name="day_end" id="day_end" type="text" maxlength="2" style="width:2.7em;" class="PeriodInput" />(dd),
	<input name="month_end" id="month_end" type="text" maxlength="2" style="width:2.7em;" class="PeriodInput" />(mm),
	<input name="year_end" id="year_end" type="text" maxlength="4" style="width:4.3em;" class="PeriodInput" />(yyyy).
</div>

<div style="margin-top:1em; color:blue; font-weight:bold;">
At this point, please re-check the above times <u>and dates</u> to make sure the conversion is correct.<br/>
HINT: When you loaded this page, the Universal Time was 
<?php
date_default_timezone_set("UTC");
echo date("H\hi\m")." (".date("d F Y").").";
?>
</div>


<!-- Observed showers list -->    
<div style="margin-top:2em;">

<?php if ( SHOWERS > 0 ) { ?>
<font class="assist">Showers considered for observation. Use IMO three-letter codes.<br>
<div style="color:red; font-weight:bold;">
List also showers, if you clearly detected 0 members.</div></font>
<br/>

<table cellpadding="5" cellspacing="0" style="float:left; margin-right:0.6em; border-width:1px; border-style:solid; border-color:#000;">
	<thead>
		<tr>
			<td class="BottomBorder">Shower</td>
			<td class="LeftBorder BottomBorder">RA</td>
			<td class="LeftBorder BottomBorder">Dec.</td>
		</tr>
	</thead>	
	<tbody>

	<?php
		for ($showerNumber=1; $showerNumber <= SHOWERS; $showerNumber++) {
	?>
		<tr>
			<td>
				<input name="shower<?php echo $showerNumber; ?>_code" id="shower<?php echo $showerNumber; ?>_code" type="text" maxlength="3" style="width:3em;" class="PeriodInput" onchange="completeShower(<?php echo $showerNumber; ?>); document.getElementById('period_showercode<?php echo $showerNumber; ?>').value=this.value;" />
			</td>
			<td class="LeftBorder">
				<input name="shower<?php echo $showerNumber; ?>_ra" id="shower<?php echo $showerNumber; ?>_ra" type="text" maxlength="3" style="width:2em;" class="PeriodInput" />°
			</td>
			<td class="LeftBorder">
				<input name="shower<?php echo $showerNumber; ?>_dec" id="shower<?php echo $showerNumber; ?>_dec" type="text" maxlength="3" style="width:2em;" class="PeriodInput" />°
			</td>
		</tr>
	<?php
		}
	?>
			
	</tbody>
</table>
         
<?php 
	}
	// IMPORTANT: by convention, when N showers are given, sporadics is the N+1'th shower 
?>
<input type="hidden" name="shower<?php echo SHOWERS+1; ?>_code" id="shower<?php echo SHOWERS+1; ?>_code" value="SPO" />     
<input type="hidden" name="shower<?php echo SHOWERS+1; ?>_ra" id="shower<?php echo SHOWERS+1; ?>_ra" value="" /> 
<input type="hidden" name="shower<?php echo SHOWERS+1; ?>_dec" id="shower<?php echo SHOWERS+1; ?>_dec" value="" />  
</div>


<!-- Number section -->
<br style="clear:left" />

<div style="margin-top:1em;">
<br />
<font class="assist">
Observed number of meteors per period and per shower. Use short periods in case of shower maxima or outbursts (e.g. 5 minuts).<br />
(M: observing method (C(ounting), P(lotting), R (meteor coordinates estimated directly) or "-" (shower not observed during the period))<br />
(N: number of meteors observed).<br>Try to define periods as to comprise <b>no more than 20 meteors</b> in line.
</font>
</div>


<table cellspacing="0" style="padding:0em; margin:0em; border-width:1px; border-style:solid; border-color:#000;">

	<thead>
		<tr>
			<td colspan="3">Period (UT)</td>
			<td colspan="2" class="LeftBorder BottomBorder">Field (°)</td>
			<td class="LeftBorder">Teff</td>
			<td class="LeftBorder">F</td>
			<td class="LeftBorder">Lm</td>

			<?php for ($showerCount=1; $showerCount <= SHOWERS; $showerCount++) { ?>
				<td colspan="2" class="BottomBorder LeftBorder">
						<input name="period_showercode<?php echo $showerCount; ?>" id="period_showercode<?php echo $showerCount; ?>" type="text" maxlength="3" style="width:3em;" readonly="readonly" class="InputReadonly" />
				</td>
			<?php } ?>
			
			<td colspan="2" class="BottomBorder LeftBorder">
				<input name="period_showercode<?php echo SHOWERS+1; ?>" id="period_showercode<?php echo SHOWERS+1; ?>" value="SPO" type="text" style="width:3em;" readonly="readonly" class="InputReadonly" />
			</td>
		</tr>

		<tr>
			<td colspan="3" class="BottomBorder"><sup>hhmm</sup> - <sup>hhmm</sup></td>
			<td class="BottomBorder LeftBorder">RA(&#176;)</td>
			<td class="BottomBorder LeftBorder">Dec(&#176;)</td>
			<td class="BottomBorder LeftBorder"><sup>(h.hhh)</sup></td>
			<td class="BottomBorder LeftBorder"><sup>(f.ff)</sup></td>
			<td class="BottomBorder LeftBorder"><sup>(m.mm)</sup></td>
			<?php for ($showerCount=1; $showerCount <= (SHOWERS+1); $showerCount++) { ?>
				<td class="BottomBorder LeftBorder">M</td>
				<td class="BottomBorder LeftBorder">N</td>
			<?php } ?>
		</tr>

	</thead>

	<tbody>
		
	<?php
		// PRINT THE PERIOD ROWS
		for ($periodCount=1; $periodCount <= PERIODS; $periodCount++) { 
	?>
		
		<tr>
			<td>
				<input name="period<?php echo $periodCount; ?>_begin" id="period<?php echo $periodCount; ?>_begin" type="text" maxlength="4" style="width:2.7em;" class="PeriodInput" />
			</td>
			<td style="padding-left:0; padding-right:0;">
				-
			</td>
			<td>
				<input name="period<?php echo $periodCount; ?>_end" id="period<?php echo $periodCount; ?>_end" type="text" maxlength="4" style="width:2.7em;" class="PeriodInput" />
			</td>
			<td class="LeftBorder">
				<input name="period<?php echo $periodCount; ?>_ra" id="period<?php echo $periodCount; ?>_ra" type="text" maxlength="4" style="width:2em;" class="PeriodInput" />
			</td>
			<td class="LeftBorder">
				<input name="period<?php echo $periodCount; ?>_dec" id="period<?php echo $periodCount; ?>_dec" type="text" maxlength="4" style="width:2em;" class="PeriodInput" />
			</td>
			<td class="LeftBorder">
				<input name="period<?php echo $periodCount; ?>_teff" id="period<?php echo $periodCount; ?>_teff" type="text" maxlength="6" style="width:3em;" class="PeriodInput" />
			</td>
			<td class="LeftBorder">
				<input name="period<?php echo $periodCount; ?>_f" id="period<?php echo $periodCount; ?>_f" type="text" maxlength="5" style="width:2.5em;" class="PeriodInput" />
			</td>
			<td class="LeftBorder">
				<input name="period<?php echo $periodCount; ?>_lm"  id="period<?php echo $periodCount; ?>_lm" type="text" maxlength="5" style="width:2.5em;" class="PeriodInput" />
			</td>

			<?php for ($showerCount=1; $showerCount<=(SHOWERS+1); $showerCount++) { ?>

			<td class="LeftBorder">
				<input name="period<?php echo $periodCount; ?>_shower<?php echo $showerCount; ?>_method" id="period<?php echo $periodCount; ?>_shower<?php echo $showerCount; ?>_method" type="text" maxlength="1" style="width:1em;" class="PeriodInput" />
			</td>
			<td class="LeftBorder">
				<input name="period<?php echo $periodCount; ?>_shower<?php echo $showerCount; ?>_number" id="period<?php echo $periodCount; ?>_shower<?php echo $showerCount; ?>_number" type="text" maxlength="3" style="width:1.8em;" class="PeriodInput" />
			</td>
			
			<?php 
				} 
			?>

		</tr>
	
		<?php 
			} 
		?>
	</tbody>
</table>



<!-- Magnitude distributions table -->

<div style="margin-top:2em;">

<font class="assist">Magnitude distributions for showers <b>and sporadics</b>.<br>Try to group the above periods as to comprise <b>no more than 30 meteors</b> in a magnitude distribution.</font>
</div>

<table cellspacing="0" style="padding:0em; margin:0em; border-width:1px; border-style:solid; border-color:#000;">
	<thead>
		<tr>
			<td class="BottomBorder">Shower</td>
			<td class="LeftBorder BottomBorder">Period (UT)</td>
			<td class="LeftBorder BottomBorder">-6</td>
			<td class="LeftBorder BottomBorder">-5</td>
			<td class="LeftBorder BottomBorder">-4</td>
			<td class="LeftBorder BottomBorder">-3</td>
			<td class="LeftBorder BottomBorder">-2</td>
			<td class="LeftBorder BottomBorder">-1</td>
			<td class="LeftBorder BottomBorder">0</td>
			<td class="LeftBorder BottomBorder">+1</td>
			<td class="LeftBorder BottomBorder">+2</td>
			<td class="LeftBorder BottomBorder">+3</td>
			<td class="LeftBorder BottomBorder">+4</td>
			<td class="LeftBorder BottomBorder">+5</td>
			<td class="LeftBorder BottomBorder">+6</td>
			<td class="LeftBorder BottomBorder">+7</td>
			<td class="LeftBorder BottomBorder">Tot</td>
		</tr>
	</thead>

	<tbody>
	<?php 
		// PRINT MAGNITUDE DISTRIBUTION ROWS
		for ($distributionCount=1; $distributionCount <= DISTRIBUTIONS; $distributionCount++) { 
	?>
		<tr>
			<td>
				<input id="distribution<?php echo $distributionCount; ?>_code" name="distribution<?php echo $distributionCount; ?>_code" type="text" maxlength="3" style="width:3em;" class="PeriodInput" onkeyup="completeDistributionInterval(<?php echo $distributionCount; ?>);" />
			</td>

			<td class="LeftBorder">
				<input id="distribution<?php echo $distributionCount; ?>_begin" name="distribution<?php echo $distributionCount; ?>_begin" type="text" maxlength="4" style="width:2.7em;" class="PeriodInput" />
				-
				<input id="distribution<?php echo $distributionCount; ?>_end" name="distribution<?php echo $distributionCount; ?>_end" type="text" maxlength="4" style="width:2.7em;" class="PeriodInput" />
			</td>
			
			<?php for ($magnitude=-6; $magnitude<8; $magnitude++) { ?>
			
				<td class="LeftBorder">
					<input id="distribution<?php echo $distributionCount; ?>_magnitude<?php echo $magnitude; ?>" name="distribution<?php echo $distributionCount; ?>_magnitude<?php echo $magnitude; ?>" onkeyup="calculateDistributionTotal(<?php echo $distributionCount; ?>);" type="text" maxlength="4" style="width:2em;" class="PeriodInput" />
				</td>	
			
			<?php }?>

				<td class="LeftBorder">
					<input id="distribution<?php echo $distributionCount; ?>_total" name="distribution<?php echo $distributionCount; ?>_total" type="text" maxlength="4" style="width:2em;" readonly="readonly" class="InputReadonly" />
				</td>	
																																	
		</tr>
		<?php } ?>
		
	</tbody>
</table>

<font class="assist">
<div style="color:red; font-weight:bold;">
Please do not forget the magnitude distribution of sporadic meteors (SPO).</div></font>

<div style="margin-top:2em;">
<font class="assist">Comments (add your name if you report for somebody else):</font><br />
<textarea wrap="off" name="comments" id="comments" class="PeriodInput" style="width:55em; height:8em; text-align:left;">
</textarea>
<br />
<font class="assist">Reporter e-mail*: (you will receive a copy of the observation)</font><br />
<input name="email" id="email" type="text" maxlength="100" style="width:18em; text-align:left;" class="PeriodInput" />
</div>

<div>
<br />
</div>

<div id="errors" style="font-size:1em; margin:0; padding:0; color:<?php echo ERROR_COLOR; ?>;">
</div>
<div id="warnings" style="font-size:1em; margin:0; padding:0; color:<?php echo WARNING_COLOR; ?>">
</div>
<div id="messages" style="font-size:1em; margin:0; padding:0; color:<?php echo DEFAULT_COLOR; ?>;">
</div>


<div>
	<br />
	<input type="button" value="Check for errors" onclick="validate();" />   
	<input type="submit" id="submit_button" value="Submit" disabled="disabled" style="color:#909090;" />
	<br />
	<font class="assist">
	The "Submit"-button will become available when no errors are found.
	<br />
	Please contact <a href="mailto:visual@imo.net">visual@imo.net</a> if you feel your observation triggered incorrect errors.
	</font>
</div>
	
</div>

</form>
