/**
* These javascript functions search for warnings and errors in the online visual meteor observing form.
* This code is rather complex. Feel free to suggest or implement improvements.
* Compatibility: "recent" versions of MS Internet Explorer (>5.5), Mozilla and Opera should work without problems.
* @version: 2008-10-05
* @author: Geert Barentsen (gbar@urania.be)
*/


// TODO: advice on splitting magnitude distributions or periods during high activity?

// Info: by convention, when N showers are given, sporadics is the N+1'th shower


// List of IMO shower codes
// var showers = new Array("DIV", "ANT", "ELY", "SPE", "AAU", "ABO", "ACA", "ACE", "ACG", "ACM", "ACN", "ACR", "AHY", "ALE", "AMO", "AND", "APY", "AQU", "ARI", "ASC", "AUR", "AVA", "AVB", "BAQ", "BCR", "BHY", "BPA", "BPH", "BRC", "CAM", "CAP", "CAU", "CET", "COL", "COM", "COR", "CSC", "DAQ", "DAR", "DAU", "DBO", "DBT", "DCA", "DDP", "DDR", "DER", "DLE", "DME", "DOR", "DVE", "ECA", "ECR", "EER", "EGE", "ERI", "ETA", "FBO", "GCA", "GCO", "GDO", "GEM", "GIA", "GNO", "GPH", "GPU", "GSA", "HYD", "IAQ", "ISC", "JBO", "JLY", "JPE", "KAQ", "KCG", "KSC", "KSE", "LEO", "LIB", "LMI", "LSA", "LVL", "LYR", "MON", "MVI", "NDA", "NEC", "NIA", "NOP", "NPH", "NPI", "NSC", "NTA", "OCC", "OCE", "OCM", "ODR", "ORI", "ORN", "ORS", "OSC", "PAQ", "PAU", "PEG", "PER", "PHE", "PHO", "PIP", "PLE", "PPU", "PUP", "QUA", "RSA", "SAG", "SDA", "SEC", "SEX", "SIA", "SLE", "SOP", "SOR", "SPI", "SPU", "STA", "TAQ", "TAU", "TCE", "THE", "TOP", "TPU", "URS", "VEL", "VIR", "WCA", "XOR", "ZPU");
// List of IMO shower codes on the working list
var showers = new Array("DIV", "ANT", "SPO", "TAU", "QUA", "ACE", "DLE", "GNO", "LYR", "PPU", "ETA", "ELY", "JBO", "PAU", "SDA", "CAP", "PER", "KCG", "AUR", "SPE", "DAU", "GIA", "DRA", "EGE", "ORI", "LMI", "STA", "NTA", "LEO", "AMO", "PHO", "PUP", "MON", "HYD", "GEM", "COM", "URS", "CBE");


// Global variables (this is bad programming, this application could be better designed)
var observedShowers = new Array();
var missingFields = false;
var fatalErrors = false;
var numberOfShowers = 0;
var numberOfPeriods = 0;
var numberOfDistributions = 0;


/**
* Function for testing: populate form with artificial data
**/
function populateTestData() {
	document.getElementById("local_night_begin").value = "31";
	document.getElementById("local_night_end").value = "01";
	document.getElementById("local_night_month").value = "12";
	document.getElementById("local_night_year").value = "2000";
	
	document.getElementById("day").value = "31";
	document.getElementById("day_end").value = "01";
	document.getElementById("month").value = "12";
	document.getElementById("month_end").value = "01";
	document.getElementById("year").value = "2000";
	document.getElementById("year_end").value = "2001";
	document.getElementById("begin").value = "2300";
	document.getElementById("end").value = "0100";
	document.getElementById("lon_degree").value = "5";
	document.getElementById("lon_minute").value = "0";
	document.getElementById("lon_second").value = "0";
	document.getElementById("lat_degree").value = "50";
	document.getElementById("lat_minute").value = "0";
	document.getElementById("lat_second").value = "0";
	document.getElementById("location_height").value = "123";
	document.getElementById("location_place").value = "Test";
	document.getElementById("location_country").value = "Belgium";
	document.getElementById("observer_firstname").value = "Geert";
	document.getElementById("observer_surname").value = "Barentsen (testing!!)";
	document.getElementById("observer_country").value = "Belgium";
	
	document.getElementById("shower1_code").value = "QUA";
	
	document.getElementById("period1_begin").value = "2300";
	document.getElementById("period1_end").value = "0015";
	document.getElementById("period1_ra").value = "30";
	document.getElementById("period1_dec").value = "40";
	document.getElementById("period1_teff").value = "1.25";
	document.getElementById("period1_f").value = "1.02";
	document.getElementById("period1_lm").value = "6.50";
	document.getElementById("period1_shower1_method").value = "C";
	document.getElementById("period1_shower1_number").value = "0";
	document.getElementById("period1_shower8_method").value = "C";
	document.getElementById("period1_shower8_number").value = "0";

	document.getElementById("period2_begin").value = "0045";
	document.getElementById("period2_end").value = "0100";
	document.getElementById("period2_ra").value = "30";
	document.getElementById("period2_dec").value = "40";
	document.getElementById("period2_teff").value = "0.25";
	document.getElementById("period2_f").value = "1.02";
	document.getElementById("period2_lm").value = "6.50";
	document.getElementById("period2_shower1_method").value = "C";
	document.getElementById("period2_shower1_number").value = "0";
	document.getElementById("period2_shower8_method").value = "C";
	document.getElementById("period2_shower8_number").value = "0";

	document.getElementById("distribution1_code").value = "QUA";
	document.getElementById("distribution1_begin").value = "2300";
	document.getElementById("distribution1_end").value = "0015";
	
	document.getElementById("email").value = "geert@barentsen.be";
	document.getElementById("comments").value = "This is a fake observation for testing purposes. IGNORE!!";	
}



/**
* Functions to suggest begin/end date based on local night date
**/

// Suggest a date based on the local night dates and the observer's longitude
function suggestDate() {
	if ( hasValue('lon_degree') && hasValue('local_night_begin') && hasValue('local_night_end') && hasValue('local_night_month') && hasValue('local_night_year') ) {
		var night_begin = parseInt(getValue('local_night_begin'), 10);
		var night_end = parseInt(getValue('local_night_end'), 10);
		var night_month = parseInt(getValue('local_night_month'), 10);
		var night_year = parseInt(getValue('local_night_year'), 10);
			
		// Calculate the hour of local noon in UT
		var longitude = getValue('lon_degree');
		if ( getValue('lon_ew') == 'W' ) {
			longitude = -1.0 * longitude;	
		}
		var localnoon = 12 - (longitude/360)*24;
		
		// Suggest date for observation begin
		if ( hasValue('begin') && getValue('begin').length == 4  &&  ! hasValue('day') && ! hasValue('month') && ! hasValue('year')) {
			var hour = getValue('begin')/100;
			if (hour >= localnoon) {
				document.getElementById('day').value = night_begin;
				document.getElementById('month').value = night_month;
				document.getElementById('year').value = night_year;				
			} else if (hour < localnoon) {
				document.getElementById('day').value = night_end;
				// Take crossing of a month or year into account
				if (night_end > night_begin) {
					document.getElementById('month').value = night_month;
					document.getElementById('year').value = night_year;
				} else {
					var next = nextMonth(night_month, night_year);
					document.getElementById('month').value = next[0];
					document.getElementById('year').value = next[1];
				}
			}
		}
		
		// Suggest date for observation end
		if ( hasValue('end') && getValue('end').length == 4  &&  ! hasValue('day_end') && ! hasValue('month_end') && ! hasValue('year_end')) {
			var hour = getValue('end')/100;
			if (hour >= localnoon) {
				document.getElementById('day_end').value = night_begin;
				document.getElementById('month_end').value = night_month;
				document.getElementById('year_end').value = night_year;				
			} else if (hour < localnoon) {
				document.getElementById('day_end').value = night_end;
				// Take crossing of a month or year into account
				if (night_end > night_begin) {
					document.getElementById('month_end').value = night_month;
					document.getElementById('year_end').value = night_year;
				} else {
					var next = nextMonth(night_month, night_year);
					document.getElementById('month_end').value = next[0];
					document.getElementById('year_end').value = next[1];
				}
			}
		}
	}
}

// Add one month to a given month/year 
function nextMonth(month, year) {
	if (month == 12) {
		return new Array(1, year+1);
	}
	return new Array(month+1, year);	
}

// Return the number of days in a given month
function daysInMonth (year, month) {
	// Correct for the weird interpretation of months in javascript (0=January, 1=February, ..., 11=December)
	month = month - 1;
	// Return number of days
	return 32 - new Date(year, month, 32).getDate();
}



/**
* Main validation function
*/
function validate() {
	// Initiate the global variables
	missingFields = false;
	fatalErrors = false;
	observedShowers = new Array();
	numberOfShowers = getValue("numberOfShowers");
	numberOfPeriods = getValue("numberOfPeriods");
	numberOfDistributions = getValue("numberOfDistributions");
	
	// Empty the error- and warning-containers
	document.getElementById('errors').innerHTML = "";
	document.getElementById('warnings').innerHTML = "";
	document.getElementById('messages').innerHTML = "";
	
	// Validate the header section, shower section and period sectuib
	validateHeader();
	validateShowers();	
	validatePeriods();
	validateDistributions();
		
	// Report a fatal error when missing fields were detected
	if (missingFields) {
		reportError("some required fields are empty. Please complete them.");	
	}
	
	// Disable the submit button if fatal errors occured
	if (fatalErrors) {
		disableSubmit();
	} else {
		document.getElementById('submit_button').disabled = false;
		document.getElementById('submit_button').style.color = '#000000';
		reportMessage("No fatal errors were found, you can submit the observation.");
	}

}

function disableSubmit() {
	document.getElementById('submit_button').disabled = true;	
	document.getElementById('submit_button').style.color = '#909090';	
}

// VALIDATE SECTIONS

/**
* Validate the header fields
*/
function validateHeader() {
	// Check input values
	
	checkInt('local_night_begin', "night day begin", 1, 31, true, "header");
	checkInt('local_night_end', "night day end", 1, 31, true, "header");
	checkInt('local_night_month', "night month", 1, 12, false, "header");
	checkInt('local_night_year', "night year", 1950, 2050, false, "header");
	
	checkInt('day', "begin day", 1, 31, true, "header");
	checkInt('month', "begin month", 1, 12, true, "header");
	checkInt('year', "begin year", 1950, 2050, true, "header");
	
	checkInt('day_end', "end day", 1, 31, true, "header");
	checkInt('month_end', "end month", 1, 12, true, "header");
	checkInt('year_end', "end year", 1950, 2050, true, "header");
	
	checkTime('begin');
	checkTime('end');
	checkInt('lon_degree', "longitude", 0, 180, true, "header");
	checkInt('lon_minute', "longitude", 0, 59, true, "header");
	checkInt('lon_second', "longitude", 0, 59, true, "header");
	checkInt('lat_degree', "latitude", 0, 90, true, "header");
	checkInt('lat_minute', "latitude", 0, 59, true, "header");
	checkInt('lat_second', "latitude", 0, 59, true, "header");
	checkInt('location_height', "height", 0, 10000, false, "header");
	checkInt('location_code', "location IMO code", 0, 9999999999, false, "header");
	checkString('location_place');
	checkString('location_country');
	checkString('observer_firstname');
	checkString('observer_surname');
	checkString('observer_country');
	checkString('email');
	
	// Check validity of the dates
	if ( ! fatalErrors ) {	
		checkDate(parseInt( getValue('local_night_year'), 10 ), parseInt( getValue('local_night_month'), 10 ), parseInt( getValue('local_night_begin'), 10 ));
		checkDate(parseInt( getValue('year'), 10 ), parseInt( getValue('month'), 10 ), parseInt( getValue('day'), 10 ));
		checkDate(parseInt( getValue('year_end'), 10 ), parseInt( getValue('month_end'), 10 ), parseInt( getValue('day_end'), 10 ));
	}
	
	// Constraint on the solar altitude and valid date
	if ( ! fatalErrors ) {
		// Solar constraints
		var year = parseInt( getValue('year'), 10 );
		var month = parseInt( getValue('month'), 10 );
		var day = parseInt( getValue('day'), 10 );
		var day_end = parseInt( getValue('day_end'), 10 );
		var lon = getLongitude();
		var lat = getLatitude();
		var hour = parseInt( getValue('begin').substr(0,2), 10 );
		var minute = parseInt( getValue('begin').substr(2,2), 10 );
		
		// Day begin and day end should be identical or consecutive days
		var date_diff = day_end - day;
		// if ( date_diff == 0  ||  date_diff == 1  || (day == daysInMonth(year, month) && day_end == 1) ) {
		if ( date_diff == 0  ||  date_diff == 1  || (day > 27 && day_end == 1) ) {
			// No error
		} else {
			// Error!
			reportError("'day begin' and 'day end' must be identical or consecutive. Don't enter multiple nights in one form!");
			makeRed('day');
			makeRed('day_end');
		}
	
		// Night begin and night end should be consecutive days
		var local_night_begin = parseInt( getValue('local_night_begin'), 10 );
		var local_night_end = parseInt( getValue('local_night_end'), 10 );
		var local_night_month = parseInt( getValue('local_night_month'), 10 ) - 1;
		var local_night_year = parseInt( getValue('local_night_year'), 10 );		
		var date_diff = local_night_end - local_night_begin;
		// if ( date_diff == 1  || (local_night_begin == daysInMonth(year, month) && local_night_end == 1) ) {
		if ( date_diff == 1  || (local_night_begin > 27 && local_night_end == 1) ) {
			// No error
		} else {
			// Error!
			reportError("the local night should be two consecutive days!");
			makeRed('local_night_begin');
			makeRed('local_night_end');
			makeRed('local_night_month');
			makeRed('local_night_year');
		}
		
		// Warning if the sun is NOT below -10 degrees altitude at the begin time of the observation 
		// + Error if the sun is NOT below -6 degrees altitude at the begin time of the observation
		var sol = getSolarCoordinates(year, month, day, hour, minute, 0);
		if ( -10 < getAltitude(year, month, day, hour, minute, 0, lon, lat, sol[0], sol[1]) ) {
			if ( -6 < getAltitude(year, month, day, hour, minute, 0, lon, lat, sol[0], sol[1]) ) {
				reportError("the sun was less than 6 degrees below the horizon at the beginning of this observation! (Did you miscalculate the Universal Time?)");
				makeRed('begin');
			} else {
				reportWarning("the sun was less than 10 degrees below the horizon at the beginning of this observation! (Did you miscalculate the Universal Time?)");				
			}
		} else {
			// ELSE: check solar altitude at the end time of the observation
			// We do not check if midnight point was crossed (=day+1), this would only have a minimal effect on the altitude
			// For the same reason we do not re-calculate the coordinates
			var hour = parseInt( getValue('end').substr(0,2), 10 );
			var minute = parseInt( getValue('end').substr(2,2), 10 );
			if ( -10 < getAltitude(year, month, day, hour, minute, 0, lon, lat, sol[0], sol[1]) ) {
				if ( -6 < getAltitude(year, month, day, hour, minute, 0, lon, lat, sol[0], sol[1]) ) {
					reportError("the sun was less than 6 degrees below the horizon at the end of this observation! (Did you miscalculate the Universal Time?)");
					makeRed('end');
				} else {
					reportWarning("the sun was less than 10 degrees below the horizon at the end of this observation! (Did you miscalculate the Universal Time?)");				
				}
			}
		}
	} 

	
}


/**
* Validate the shower section
*/
function validateShowers() {
	// Run over the showers
	for (var showerNr = 1; showerNr <= (1*numberOfShowers+1); showerNr++) {
		// CODE VALUE
		// Validate shower code input
		checkShowerCode(showerNr); 
		
		// COORDINATE VALUES
		// We will only check R.A. and DEC coordinates if at least one of these fields has a value
		if (hasValue('shower'+showerNr+'_ra') || hasValue('shower'+showerNr+'_dec')) {
			// Validate shower R.A. and dec. values
			checkInt('shower'+showerNr+'_ra', "shower radiant R.A.", 0, 360, true, getValue('shower'+showerNr+'_code'));
			checkInt('shower'+showerNr+'_dec', "shower radiant declination", -90, +90, true, getValue('shower'+showerNr+'_code'));	
			// The radiant should not be below the horizon in any period!!
			var ra = getValue('shower'+showerNr+'_ra');
			var dec = getValue('shower'+showerNr+'_dec');
			for (var periodNr=1; periodNr <= numberOfPeriods; periodNr++) {
				var method = getValue('period'+periodNr+'_shower'+showerNr+'_method').toLowerCase();
				if ( (! fatalErrors)  &&  (method == "c" || method == "p") ) {		
					var year = parseInt( getValue('year'), 10 );
					var month = parseInt( getValue('month'), 10 );
					var day = parseInt( getValue('day'), 10 );
					var lon = getLongitude();
					var lat = getLatitude();
					var hour = parseInt( getValue('period'+periodNr+'_begin').substr(0,2), 10 );
					var minute = parseInt( getValue('period'+periodNr+'_begin').substr(2,2), 10 );
					// Warning if radiant is below the horizon at the beginning of the period
					if ( 0 > getAltitude(year, month, day, hour, minute, 0, lon, lat, ra, dec) ) {
						reportWarning("period "+getValue('period'+periodNr+'_begin')+"-"+getValue('period'+periodNr+'_end')+": radiant of shower "+getValue('shower'+showerNr+'_code')+" was below the horizon at the beginning of this period.");
					} else {
						// ELSE: warning if radiant is below the horizon at the end of the period
						// We do not check if midnight point was crossed (=day+1), this would only have a minimal effect on the altitude
						var hour = parseInt( getValue('period'+periodNr+'_end').substr(0,2), 10 );
						var minute = parseInt( getValue('period'+periodNr+'_end').substr(2,2), 10 );	
						if ( 0 > getAltitude(year, month, day, hour, minute, 0, lon, lat, ra, dec) ) {
							reportWarning("period "+getValue('period'+periodNr+'_begin')+"-"+getValue('period'+periodNr+'_end')+": radiant of shower "+getValue('shower'+showerNr+'_code')+" was below the horizon at the end of this period.");
						}
					}
				}
			}
		}
		
		// Total meteor numbers in the magnitude distribution lines should be equal to the relevant number given in the periods.	
		var periodTotal = 0;
		for (var periodNr=1; periodNr <= numberOfPeriods; periodNr++) {
			if ( hasValue('period'+periodNr+'_shower'+showerNr+'_number') ) {
				// Sum period totals
				periodTotal += parseInt(getValue('period'+periodNr+'_shower'+showerNr+'_number'), 10);
			}
		}
		var distributionTotal = 0;
		var distributionFound = false;
		for (var distributionNr = 1; distributionNr <= numberOfDistributions; distributionNr++) {
			if ( (getValue('distribution'+distributionNr+'_code').toUpperCase() == getValue('shower'+showerNr+'_code').toUpperCase()) && hasValue('distribution'+distributionNr+'_total') ) {
				var distributionFound = true;
				// Sum distribution totals
				distributionTotal += parseInt(getValue('distribution'+distributionNr+'_total'), 10);
			}
		}
		if (distributionFound) {
			// Warning if less shower members in the distribution line than in the periods 
			if ( periodTotal > distributionTotal ) {
				reportWarning("magnitude distribution total for shower '"+getValue('shower'+showerNr+'_code')+"' is less than the observed number of meteors for this shower.");
			// Fatal error if more shower members in the distribution line than in the periods 
			} else if ( periodTotal < distributionTotal ) {
				reportError("magnitude distribution total for shower '"+getValue('shower'+showerNr+'_code')+"' is more than the observed number of meteors for this shower.");
			}
		}
	}
	
	// Check showers in the distribution lines
	for (var distributionNr = 1; distributionNr <= numberOfDistributions; distributionNr++) {
		// Distributions should preferably not have more than 30 meteors
		if ( parseInt(getValue('distribution'+distributionNr+'_total'), 10) > 30 && getValue('distribution'+distributionNr+'_code') != "SPO" ) {
			reportWarning("magnitude distribution "+distributionNr+" for shower "+getValue('distribution'+distributionNr+'_code')+" contains more than 30 meteors. Split into smaller intervals to allow accurate analysis!!");
		}
		
		// Distributions can only be given for observed showers
	 	if ( hasValue('distribution'+distributionNr+'_code') ) {
			if ( observedShowers.in_array( getValue('distribution'+distributionNr+'_code').toUpperCase() ) == false ) {
				// Non-observed shower in a distribution line
				makeRed('distribution'+distributionNr+'_code');
				reportError("magnitude distribution: '"+getValue('distribution'+distributionNr+'_code')+"' is not an observed shower.");	
			} else {
				// Else: no error
				makeBlue('distribution'+distributionNr+'_code');
			}
			
			// There must be a value in the interval fields!
			checkTime('distribution'+distributionNr+'_begin');
			checkTime('distribution'+distributionNr+'_end');
		} else {
			// Empty shower field: no error
			makeBlue('distribution'+distributionNr+'_code');
		}
	}
}


/**
* Validate the period section
*/
function validatePeriods() {
	var validatedPeriods = 0;
	// Run over periods
	for (var periodNr=1; periodNr <= numberOfPeriods; periodNr++) {
		// Only validate if at least one meta field of the period line has a value
		if ( hasValue('period'+periodNr+'_begin') || hasValue('period'+periodNr+'_end') || hasValue('period'+periodNr+'_ra') 
			|| hasValue('period'+periodNr+'_dec') || hasValue('period'+periodNr+'_teff') || hasValue('period'+periodNr+'_f') || hasValue('period'+periodNr+'_lm') 
			
		|| hasValue('period'+periodNr+'_shower1_method') || hasValue('period'+periodNr+'_shower1_number')  ) {
				
				validatedPeriods++;
				
				// Check for skipped period lines
				if (validatedPeriods != periodNr) {
					makeRed("period"+validatedPeriods+"_begin");
					makeRed("period"+validatedPeriods+"_end");
					makeRed("period"+validatedPeriods+"_ra");
					makeRed("period"+validatedPeriods+"_dec");
					makeRed("period"+validatedPeriods+"_teff");
					makeRed("period"+validatedPeriods+"_f");
					makeRed("period"+validatedPeriods+"_lm");
					missingFields = true;
				}
				
				// Check period fields
				checkTime('period'+periodNr+'_begin');
				checkTime('period'+periodNr+'_end');
				checkInt('period'+periodNr+'_ra', "field R.A.", 0, 360, true, "period "+getValue('period'+periodNr+'_begin')+"-"+getValue('period'+periodNr+'_end'));
				checkInt('period'+periodNr+'_dec', "field declination", -90, +90, true, "period "+getValue('period'+periodNr+'_begin')+"-"+getValue('period'+periodNr+'_end'));
				checkFloat('period'+periodNr+'_f', "F-value", 1, 50, "period "+getValue('period'+periodNr+'_begin')+"-"+getValue('period'+periodNr+'_end'));
				checkFloat('period'+periodNr+'_lm', "limiting magnitude value (Lm)", 0.0, 8.0, "period "+getValue('period'+periodNr+'_begin')+"-"+getValue('period'+periodNr+'_end'));
				checkPeriodShowerValues(periodNr);

				// Error if field of view is below 25 degrees altitude
				if ( hasValue('period'+periodNr+'_begin') && hasValue('period'+periodNr+'_end') && hasValue('period'+periodNr+'_ra') && hasValue('period'+periodNr+'_dec') ) {
					var ra = getValue('period'+periodNr+'_ra');
					var dec = getValue('period'+periodNr+'_dec');
					var year = parseInt( getValue('year'), 10 );
					var month = parseInt( getValue('month'), 10 );
					var day = parseInt( getValue('day'), 10 );
					var lon = getLongitude();
					var lat = getLatitude();
					var hour = parseInt( getValue('period'+periodNr+'_begin').substr(0,2), 10 );
					var minute = parseInt( getValue('period'+periodNr+'_begin').substr(2,2), 10 );
					if ( 25 > getAltitude(year, month, day, hour, minute, 0, lon, lat, ra, dec) ) {
						reportError("period "+getValue('period'+periodNr+'_begin')+"-"+getValue('period'+periodNr+'_end')+": field of view was below 25 degrees altitude at the beginning of this period. Did you enter time and coordinates correctly?");
					} else {
						// ELSE: error if fov is below 25 degrees altitude at the end of the period
						// We do not check if midnight point was crossed (=day+1), this would only have a minimal effect on the altitude
						var hour = parseInt( getValue('period'+periodNr+'_end').substr(0,2), 10 );
						var minute = parseInt( getValue('period'+periodNr+'_end').substr(2,2), 10 );	
						if ( 25 > getAltitude(year, month, day, hour, minute, 0, lon, lat, ra, dec) ) {
							reportError("period "+getValue('period'+periodNr+'_begin')+"-"+getValue('period'+periodNr+'_end')+": field of view was below 25 degrees altitude at the end of this period. Did you enter time and coordinates correctly?");
						}
					}
				}
				
				// Warning if sporadic hourly rate value exceeds 30
				if ( (hasValue('period'+periodNr+'_teff') && hasValue('period'+periodNr+'_f')) && (hasValue('period'+periodNr+'_lm') && hasValue('period'+periodNr+'_shower'+(numberOfShowers-(-1))+'_number')) ) {
					// Only calculate sporadic rate if there is a significant number of sporadic meteors (>5)
					if ( getValue('period'+periodNr+'_shower'+(numberOfShowers-(-1))+'_number') > 5 ) {
						var spoHourlyRate = ( Math.pow(3, (6.5 - getValue('period'+periodNr+'_lm') )) * getValue('period'+periodNr+'_f') * getValue('period'+periodNr+'_shower'+(numberOfShowers-(-1))+'_number')) / getValue('period'+periodNr+'_teff');
						if (spoHourlyRate > 30) {
							reportWarning("period "+getValue('period'+periodNr+'_begin')+"-"+getValue('period'+periodNr+'_end')+": sporadic hourly rate value is unusually high (HR="+Math.round(spoHourlyRate)+").");
						}
					}
				}
				
				// Warning if F is bigger than 3
				if ( hasValue('period'+periodNr+'_f') && (getValue('period'+periodNr+'_f') > 3) ) {
						reportWarning("period "+getValue('period'+periodNr+'_begin')+"-"+getValue('period'+periodNr+'_end')+": F-value is very high. Did you calculate F correctly? (Only consider field of view obstruction!)");
				}
				
				// Validate effective time value (if begin and end value are set)
				if ( hasValue('period'+periodNr+'_begin') && hasValue('period'+periodNr+'_end') ) {
					var beginDate = new Date( 2000, 0, 5, getValue('period'+periodNr+'_begin').substr(0,2), getValue('period'+periodNr+'_begin').substr(2,2), 00);
					var endDate = new Date( 2000, 0, 5, getValue('period'+periodNr+'_end').substr(0,2), getValue('period'+periodNr+'_end').substr(2,2), 00);
					// If endTime < beginTime, add a day to endDate (we assume that the midnight point was passed)
					if (endDate.getTime() < beginDate.getTime()) {
						// Add 86400000 tot the endDate (this is the number of milliseconds in one day)
						endDate.setTime(endDate.getTime() + (86400000));	
					}
					// Calculate and check the maximum effective time value (in decimal hours)
					var maxTeff = (endDate.getTime() - beginDate.getTime()) / (1000 * 3600);
					// Allow Teff-rounding up to 2 decimals 
					maxTeff = Math.ceil( maxTeff * 100 ) / 100;
					checkFloat('period'+periodNr+'_teff', "effective time value (Teff)", 0.001, maxTeff, "period "+getValue('period'+periodNr+'_begin')+"-"+getValue('period'+periodNr+'_end'));
					if ( hasValue('period'+periodNr+'_teff') && (getValue('period'+periodNr+'_teff') < (0.7 * maxTeff)) ) {
						reportWarning("period "+getValue('period'+periodNr+'_begin')+"-"+getValue('period'+periodNr+'_end')+": effective time is less than 70% of the interval length.");
					}
					// Do not allow Teff > 12
					if ( maxTeff > 12 ) {
						reportError("period "+getValue('period'+periodNr+'_begin')+"-"+getValue('period'+periodNr+'_end')+": interval exceeds 12 hours.");
						makeRed('period'+validatedPeriods+'_begin');
						makeRed('period'+validatedPeriods+'_end');
					}
				} else {
					checkFloat('period'+periodNr+'_teff', "effective time value (Teff)", 0, 12, "period "+periodNr);
				}
				
		} else {
			// Make all fields blue if the entire period line is empty
			makeBlue('period'+periodNr+'_begin');
			makeBlue('period'+periodNr+'_end');
			makeBlue('period'+periodNr+'_ra');
			makeBlue('period'+periodNr+'_dec');
			makeBlue('period'+periodNr+'_teff');
			makeBlue('period'+periodNr+'_f');
			makeBlue('period'+periodNr+'_lm');	
			for (var showerNr=1; showerNr <= (1*numberOfShowers+1); showerNr++) {
				makeBlue('period'+periodNr+'_shower'+showerNr+'_method');
				makeBlue('period'+periodNr+'_shower'+showerNr+'_number');
			}
		}
	}
	
	// At least one period shoud be present!!
	if (validatedPeriods == 0) {
		reportError("supply at least one observing period.");	
	} else {
		// If there is at least 1 period present, some additional checks:
		// Observation begin time should match with the begin time of the first period
		if ( hasValue('begin') && hasValue('period1_begin') && (getValue('period1_begin') != getValue('begin')) ) {
			reportError("observation begin time does not match with the begin time of the first period.");
			makeRed('period1_begin');
		}
		// Observation end time should match with the end time of the last period
		if ( hasValue('end') && hasValue('period'+validatedPeriods+'_end') && (getValue('period'+validatedPeriods+'_end') != getValue('end')) ) {
			reportError("observation end time does not match with the end time of the last period.");
			makeRed('period'+validatedPeriods+'_end');
		}
	}	
}



function validateDistributions() {
	
	for (var distributionNr=1; distributionNr <= numberOfDistributions; distributionNr++) {
	
		// The begin time of each distribution should appear in the rates table
		if ( hasValue('distribution'+distributionNr+'_begin') ) {
			mybegin = getValue('distribution'+distributionNr+'_begin');
			pass = false;
			for (var periodNr=1; periodNr <= numberOfPeriods; periodNr++) {
				if ( hasValue('period'+periodNr+'_begin') && getValue('period'+periodNr+'_begin') == mybegin ) {
					pass = true;
				}
			}
			if ( ! pass ) {
				reportError("distribution "+distributionNr+": start time does not appear in the rates table.");
				makeRed('distribution'+distributionNr+'_begin');
			}
		}

		// The end time of each distribution should appear in the rates table
		if ( hasValue('distribution'+distributionNr+'_end') ) {
			myend = getValue('distribution'+distributionNr+'_end');
			pass = false;
			for (var periodNr=1; periodNr <= numberOfPeriods; periodNr++) {
				if ( hasValue('period'+periodNr+'_end') && getValue('period'+periodNr+'_end') == myend ) {
					pass = true;
				}
			}
			if ( ! pass ) {
				reportError("distribution "+distributionNr+": end time does not appear in the rates table.");
				makeRed('distribution'+distributionNr+'_end');
			}
		}
		
		
	}
}



// HELPER FUNCTIONS

/**
* hasValue(id) returns true if value of input field 'id' is not-empty
*/
function hasValue(id) {
	if ( document.getElementById(id).value != "") {
		return true;
	}
	return false;
}

/**
* getValue(id) returns the value of the html input field with id='id'
*/
function getValue(id) {
	return document.getElementById(id).value;
}


/**
* Check period shower values
*/
function checkPeriodShowerValues(periodNr) {
	for (var showerNr=1; showerNr <= (1*numberOfShowers+1); showerNr++) {
		if ( hasValue('period_showercode'+showerNr) ) { 
			checkShowerMethod(periodNr,showerNr);
			if ( getValue('period'+periodNr+'_shower'+showerNr+'_method') == "-" ) {
				makeBlue('period'+periodNr+'_shower'+showerNr+'_number');
				document.getElementById('period'+periodNr+'_shower'+showerNr+'_number').value = "/";
			} else {
				checkInt('period'+periodNr+'_shower'+showerNr+'_number', "shower N", 0, 1000, true, "period "+getValue('period'+periodNr+'_begin')+"-"+getValue('period'+periodNr+'_end'));
				if ( (getValue('period'+periodNr+'_teff') > 0.1) && (getValue('period'+periodNr+'_shower'+showerNr+'_number') > 20) ) {
					reportWarning("period "+getValue('period'+periodNr+'_begin')+"-"+getValue('period'+periodNr+'_end')+": shower '"+getValue('period_showercode'+showerNr)+"' has more than 20 members. Use smaller periods to allow accurate analysis.");
				}
			}

		} else {
			if ( hasValue('period'+periodNr+'_shower'+showerNr+'_method') ) {
				makeRed('period'+periodNr+'_shower'+showerNr+'_method');
			} else {
				makeBlue('period'+periodNr+'_shower'+showerNr+'_method');
			}
			if ( hasValue('period'+periodNr+'_shower'+showerNr+'_number') ) {
				makeRed('period'+periodNr+'_shower'+showerNr+'_number');
			} else {
				makeBlue('period'+periodNr+'_shower'+showerNr+'_number');
			}				
		}
	}
}


// Check a shower's observing method
function checkShowerMethod(periodNr,showerNr) {
	var value = getValue('period'+periodNr+'_shower'+showerNr+'_method');
	if ( value.match(new RegExp('^C$|^P$|^R$|^c$|^p$|^r$|^-$')) ) {
		makeBlue('period'+periodNr+'_shower'+showerNr+'_method');	
	} else if (value == "") {
		makeRed('period'+periodNr+'_shower'+showerNr+'_method');
		missingFields = true;
	} else {
		makeRed('period'+periodNr+'_shower'+showerNr+'_method');
		reportError("period "+getValue('period'+periodNr+'_begin')+"-"+getValue('period'+periodNr+'_end')+": illegal observing method '"+value+"'. Please use 'C' (Counted), 'P' (Plotted), 'R' (coordinates estimated directly) or '-' (not observed during the period).");
	}
}


// Check the validity of a shower code
function checkShowerCode(showerNr) {
	var value = getValue('shower'+showerNr+'_code');
	if ( observedShowers.in_array(value.toUpperCase()) ) {
		makeRed('shower'+showerNr+'_code');
		reportError("shower '"+value+"' added multiple times.");		
	} else if ( value == "" ) {
		makeBlue('shower'+showerNr+'_code');
	} else if ( showers.in_array(value.toUpperCase()) )  {
		makeBlue('shower'+showerNr+'_code');
		observedShowers.push(value.toUpperCase());		
	} else if (value.toUpperCase() == "SPO") {
		makeBlue('shower'+showerNr+'_code');
		observedShowers.push("SPO");
	} else {
		// makeBlue('shower'+showerNr+'_code');
		reportWarning("shower code '"+value+"' is not on the IMO working list. Provide the name and radiant in the comments.");
		observedShowers.push(value.toUpperCase());
	}
}

// Validate a float field
function checkFloat(id, name, min, max, locationString) {
	var value = getValue(id);
	
	// Check expression
	if ( value.match(new RegExp('^[0-9]+$|^[0-9]*[.][0-9]+$')) ) {
		// Give warning if less than 2 decimals
		if (value < 0.1) {
			if ( ! value.match(new RegExp('^[0-9]*[.][0-9][0-9][0-9]+$')) ) {
				reportWarning(locationString+": supply a number with 3 decimals for the "+name+".");
			}			
		} else {
			if ( ! value.match(new RegExp('^[0-9]*[.][0-9][0-9]+$')) ) {
				reportWarning(locationString+": supply a number with 2 decimals for the "+name+".");
			}			
		}
		// Check minimum and maximum values
		if (value < min) {
			reportError(locationString+": "+name+" is too small ( < "+min+").");
			makeRed(id);
		} else if (value > max) {
			reportError(locationString+": "+name+" is too high ( > "+max+").");
			makeRed(id);
		} else {
			makeBlue(id);	
		}
	} else if (value == "") {
		makeRed(id);
		missingFields = true;
	} else {
		makeRed(id);
		reportError(locationString+": '"+value+"' is an illegal "+name+".");
	}
}

// Validate an integer field
function checkInt(id, name, min, max, required, locationString) {
	var value = getValue(id);
	
	// Check expression
	if ( value.match(new RegExp('^[-]?[0-9]+$')) ) {
		
		if (value < min) {
			reportError(locationString+": "+name+" is too small ( < "+min+").");
			makeRed(id);
		} else if (value > max) {
			reportError(locationString+": "+name+" is too high ( > "+max+").");
			makeRed(id);
		} else {
			makeBlue(id);	
		}
	} else if (value == "") {
		if (required) {
			makeRed(id);
			missingFields = true;
		} else {
			makeBlue(id);
		}
	} else {
		makeRed(id);
		reportError(locationString+": '"+value+"' is an illegal "+name+" (should be integer).");
	}
}


// Validate a string field
function checkString(id) {
	if ( hasValue(id) ) {
		makeBlue(id);
	} else {
		makeRed(id);
		missingFields = true;		
	}
}

// Validate a time field (hhmm-string)
function checkTime(id) {
	var value = getValue(id);
	if ( (value.match(new RegExp('^[0-2][0-9][0-5][0-9]$'))) &&  (parseInt(value.substr(0,2), 10) < 24) && (parseInt(value.substr(2,2), 10) < 60)  ) {
		makeBlue(id);	
	} else if (value == "") {
		makeRed(id);
		missingFields = true;
	} else {
		makeRed(id);
		reportError("'"+value+"' is not a valid time value. Please use hhmm-notation.");
	}
}

// Validate a date
function checkDate(year, month, day){	
	// Javascript uses a silly system for months: 0-11
	month = month - 1;
	var beginDate = new Date(year, month, day);

	// Javascript Dates are a little too forgiving and will change the date to a reasonable guess if it's invalid. We'll use this to our advantage by creating the date object and then comparing it to the details we put it. If the Date object is different, then it must have been an invalid date to start with...
	var valid = ((day==beginDate.getDate()) && (month==beginDate.getMonth()) && (year==beginDate.getFullYear()));
	if ( ! valid ) {
		makeRed('local_night_begin');
		makeRed('local_night_end');
		makeRed('local_night_month');
		makeRed('local_night_year');		
		makeRed('day');
		makeRed('month');
		makeRed('year');
		makeRed('day_end');
		makeRed('month_end');
		makeRed('year_end');
		reportError("illegal date.");
	}
}




/**
* Automatically fill out the period-field in the magnitude distribution to be userfriendly...
*/
function completeDistributionInterval(distributionNr) {
	// Disabled this for now because it may lead to errors
	/* if ( hasValue("distribution"+distributionNr+"_code") == false ) {
		document.getElementById("distribution"+distributionNr+"_begin").value = "";
		document.getElementById("distribution"+distributionNr+"_end").value = "";		
	} else if ( (hasValue("distribution"+distributionNr+"_begin") == false) && (hasValue("distribution"+distributionNr+"_end") == false) ) {	
		document.getElementById("distribution"+distributionNr+"_begin").value = getValue("begin");
		document.getElementById("distribution"+distributionNr+"_end").value = getValue("end");
	} */
}

// Live calculation of magnitude distribution totals
function calculateDistributionTotal(distributionNumber) {
	var total = 0;
	var somethingSet = false;
	// Get sum
	for (var i = -6; i < 8; i++) {
		if ( hasValue('distribution'+distributionNumber+'_magnitude'+i) ) {
			total += parseFloat(getValue('distribution'+distributionNumber+'_magnitude'+i));
			somethingSet = true;
		}
	}
	// Print total
	if (somethingSet) {
		document.getElementById('distribution'+distributionNumber+'_total').value = total;
	} else {
		document.getElementById('distribution'+distributionNumber+'_total').value = "";
	}
}



// ERROR HANDLING

// Report an error to the user
function reportError(errorString) {
	document.getElementById('errors').innerHTML += "<b>Error:</b> "+errorString+"<br />";
	fatalErrors = true;
}

// Report a warning to the user
function reportWarning(warningString) {
	document.getElementById('warnings').innerHTML += "<b>Warning:</b> "+warningString+"<br />";
}

// Report a warning to the user
function reportMessage(messageString) {
	document.getElementById('messages').innerHTML += messageString+"<br />";
}

// Make a field red
function makeRed(id) {
	var obj = document.getElementById(id);
	obj.style.backgroundColor = '#F8E0E0'; 
	obj.style.borderColor = '#B70000';
	obj.style.color = '#B70000';	
	fatalErrors = true;
}

// Make a field blue
function makeBlue(id) {
	var obj = document.getElementById(id);
	obj.style.backgroundColor = '#EFEEF7'; 
	obj.style.color = '#0000CD';
	
	obj.style.border = "1px solid #FFFFFF";
	obj.style.borderBottom = "1px solid #0000CD";
}


// EXTEND JAVASCRIPT

// Adds the "in_array" function to the Array type
Array.prototype.in_array = function(value) {
	for(var i in this) {
		if(this[i] == value) {
			return true;
		}
	}
	return false;
}

// Convert degrees to radians
Math.deg2rad = function(degrees) {
        var radians = ((2 * Math.PI) / 360) * degrees;
        return radians;
}

// Convert radians to degrees
Math.rad2deg = function(radians) {
        var degrees = (360 / (2 * Math.PI)) * radians;
        return degrees;
}

		
// Get the location longitude
function getLongitude() {
	var lon = parseFloat(getValue('lon_degree')) + parseFloat(getValue('lon_minute') / 60) + parseFloat(getValue('lon_second') / 3600);
	if ( getValue('lon_ew') == "W" ) {
		return -lon;
	}
	return lon;
}

// Get the location latitude
function getLatitude() {
	var lat = parseFloat(getValue('lat_degree')) + parseFloat(getValue('lat_minute') / 60) + parseFloat(getValue('lat_second') / 3600);
	if ( getValue('lat_ns') == "S" ) {
		return -lat;
	}
	return lat;
}




/**
* ASTRONOMICAL ROUTINES
* EVERYTHING IN DEGREES!!!
*/

// Returns true if the sun is below -10 degrees altitude
function isSunAtLeast10DegreesBelowHorizon(year, month, day, hour, min, sec, longitude, latitude) {
	var sol = getSolarCoordinates(year, month, day, hour, min, sec);
	if ( -10 < getAltitude(year, month, day, hour, min, sec, longitude, latitude, sol[0], sol[1]) ) {
		return false;
	}
	return true;
}


// Get object altitude in degrees
function getAltitude(year, month, day, hour, min, sec, longitude, latitude, ra, dec) {
	// Convert to radians!
	longitude = Math.deg2rad(longitude);
	latitude = Math.deg2rad(latitude);
	ra = Math.deg2rad(ra);
	dec = Math.deg2rad(dec);
	// d: number of days from epoch J2000.0
	var d = getDaysFromJ2000(year, month, day, hour, min, sec);
	// T: number of Julian centuries from J2000.0
	var T = d / 36525;
	// Greenwich Mean Sidereal Time (Meeus formula 11.4)
	var GMST = 280.46061837 + ( 360.98564736629 * d ) + ( 0.000387933 * Math.pow(T,2) ) - ( Math.pow(T,3) / 38710000 );
	// Local Mean Sidereal Time
	var LMST = Math.deg2rad(GMST) + longitude;
	// Hour Agle
	var hourAngle = LMST - ra;
	// Object altitude (Meeus 12.6)
	var altitude = Math.asin( Math.sin(latitude) * Math.sin(dec) + Math.cos(latitude) * Math.cos(dec) * Math.cos(hourAngle) );        
	return Math.rad2deg(altitude);	
}

// Get the number of days from epoch J2000.0
function getDaysFromJ2000(year, month, day, hour, min, sec) {
	var dwhole = 367 * year - Math.floor( 7 * (year + Math.floor( (month + 9) / 12 ) ) / 4) + Math.floor(275 * month / 9) + day - 730531.5;
	var dfrac = (hour + min/60 + sec/3600) / 24;
	return (dwhole + dfrac);		
}


// Get coordinates of the sun
function getSolarCoordinates(year, month, day, hour, min, sec) {
	// d: number of days from epoch J2000.0
	var d = getDaysFromJ2000(year, month, day, hour, min, sec);
	// T: number of Julian centuries from J2000.0
	var T = d / 36525;
	
	// Sun mean longitude
	var SML = 280.46645 + 36000.76983 * T + 0.0003032 * Math.pow(T,2);
	// Sun mean anomaly
	var SMA = 357.52910 + 35999.05030 * T - 0.0001559 * Math.pow(T,2) - 0.00000048 * Math.pow(T,3);
	// The Sun's equation of center C
	var C = ((1.914600 - 0.004817 * T - 0.000014 * Math.pow(T,2)) * Math.sin(Math.deg2rad(SMA)) )
		+ ((0.01993 - 0.000101 * T) * Math.sin(Math.deg2rad(2 * SMA)) )
		+ (0.000290 * Math.sin(Math.deg2rad(3 * SMA)) );
	// True ecliptical longitude of the Sun
	var TEL = SML + C;
	// Obliquity of the ecliptic
	var K = 23.439 - 0.013 * T;
	// RA	
	var RA = Math.rad2deg( Math.atan2( (Math.sin(Math.deg2rad(TEL)) * Math.cos(Math.deg2rad(K))) , Math.cos(Math.deg2rad(TEL))) ); 
	// Declination
	var DEC = Math.rad2deg( Math.asin( Math.sin(Math.deg2rad(RA)) * Math.sin(Math.deg2rad(K)) ) ); 
	var result = new Array(RA, DEC);
	return result;
}





/**
* Automatically complete shower coordinate fields upon entering a shower code (to be userfriendly...)
*/
function completeShower(showerNr) {
	var code = getValue("shower"+showerNr+"_code").toUpperCase();
	var ra = "";
	var dec = "";
	switch (code) {
		case 'AAU': ra= 74; dec= 43; break;
		case 'ABO': ra=218; dec= 19; break;
		case 'ACA': ra=305; dec=-13; break;
		case 'ACE': ra=211; dec=-59; break;
		case 'ACG': ra=315; dec= 48; break;
		case 'ACM': ra=105; dec=-17; break;
		case 'ACN': ra= 95; dec=-54; break;
		case 'ACR': ra=192; dec=-63; break;
		case 'AHY': ra=140; dec=-10; break;
		case 'ALE': ra=159; dec=  6; break;
		case 'AMO': ra=117; dec=  1; break;
		case 'AND': ra= 20; dec= 34; break;
		case 'APY': ra=132; dec=-34; break;
		case 'AQU': ra=330; dec=-10; break;
		case 'ARI': ra= 52; dec= 22; break;
		case 'ASC': ra=240; dec=-22; break;
		case 'AUR': ra= 84; dec= 42; break;
		case 'AVA': ra=205; dec= -9; break;
		case 'AVB': ra=206; dec= -9; break;
		case 'BAQ': ra=325; dec= -4; break;
		case 'BCR': ra=338; dec=-48; break;
		case 'BHY': ra=187; dec=-34; break;
		case 'BPA': ra=308; dec=-63; break;
		case 'BPH': ra= 15; dec=-45; break;
		case 'BRC': ra=337; dec=-47; break;
		case 'CAM': ra=119; dec= 68; break;
		case 'CAP': ra=307; dec=-10; break;
		case 'CAU': ra=284; dec=-40; break;
		case 'CET': ra= 24; dec=-12; break;
		case 'COL': ra= 86; dec=-34; break;
		case 'COM': ra=177; dec= 25; break;
		case 'COR': ra=191; dec=-19; break;
		case 'CSC': ra=248; dec=-14; break;
		case 'DAQ': ra=335; dec=-12; break;
		case 'DAR': ra= 44; dec= 23; break;
		case 'DAU': ra= 88; dec= 49; break;
		case 'DBO': ra=218; dec= 12; break;
		case 'DBT': ra= 86; dec= 19; break;
		case 'DCA': ra=130; dec= 20; break;
		case 'DDP': ra= 62; dec= 23; break;
		case 'DDR': ra=281; dec= 68; break;
		case 'DER': ra= 58; dec= -9; break;
		case 'DLE': ra=168; dec= 16; break;
		case 'DME': ra= 58; dec=-80; break;
		case 'DOR': ra= 69; dec=-56; break;
		case 'DVE': ra=132; dec=-56; break;
		case 'ECA': ra=129; dec=-58; break;
		case 'ECR': ra=160; dec=-60; break;
		case 'EER': ra= 57; dec=-12; break;
		case 'EGE': ra=102; dec= 27; break;
		case 'ELY': ra=287; dec= 44; break;
		case 'ERI': ra= 52; dec=-15; break;
		case 'ETA': ra=338; dec= -1; break;
		case 'FBO': ra=240; dec= 51; break;
		case 'GCA': ra=326; dec=-17; break;
		case 'GCO': ra=185; dec=-18; break;
		case 'GDO': ra= 67; dec=-54; break;
		case 'GEM': ra=112; dec= 33; break;
		case 'GIA': ra=262; dec= 54; break;
		case 'GNO': ra=239; dec=-50; break;
		case 'GPH': ra= 18; dec=-43; break;
		case 'GPU': ra=109; dec=-44; break;
		case 'GSA': ra=272; dec=-28; break;
		case 'HYD': ra=127; dec=  2; break;
		case 'IAQ': ra=330; dec= -5; break;
		case 'ISC': ra=265; dec=-40; break;
		case 'JBO': ra=224; dec= 48; break;
		case 'JLY': ra=278; dec= 35; break;
		case 'JPE': ra=340; dec= 15; break;
		case 'KAQ': ra=339; dec= -2; break;
		case 'KCG': ra=286; dec= 59; break;
		case 'KSC': ra=267; dec=-39; break;
		case 'KSE': ra=230; dec= 18; break;
		case 'LEO': ra=153; dec= 22; break;
		case 'LIB': ra=227; dec=-28; break;
		case 'LMI': ra=162; dec= 37; break;
		case 'LSA': ra=276; dec=-25; break;
		case 'LVL': ra=133; dec=-46; break;
		case 'LYR': ra=271; dec= 34; break;
		case 'MON': ra=100; dec=  8; break;
		case 'MVI': ra=221; dec= -5; break;
		case 'NDA': ra=335; dec= -5; break;
		case 'NEC': ra= 20; dec=-12; break;
		case 'NIA': ra=327; dec= -6; break;
		case 'NOP': ra=249; dec=-14; break;
		case 'NPH': ra= 20; dec=-43; break;
		case 'NPI': ra= 26; dec= 14; break;
		case 'NSC': ra=262; dec=-36; break;
		case 'NTA': ra= 58; dec= 22; break;
		case 'OCC': ra=303; dec=-10; break;
		case 'OCE': ra=177; dec=-56; break;
		case 'OCM': ra=108; dec=-25; break;
		case 'ODR': ra=271; dec= 59; break;
		case 'ORI': ra= 95; dec= 16; break;
		case 'ORN': ra= 82; dec= 23; break;
		case 'ORS': ra= 85; dec= 16; break;
		case 'OSC': ra=243; dec=-22; break;
		case 'PAQ': ra=347; dec= -1; break;
		case 'PAU': ra=341; dec=-30; break;
		case 'PEG': ra=335; dec= 21; break;
		case 'PER': ra= 46; dec= 58; break;
		case 'PHE': ra= 32; dec=-48; break;
		case 'PHO': ra= 18; dec=-53; break;
		case 'PIP': ra=113; dec=-43; break;
		case 'PLE': ra=143; dec= 17; break;
		case 'PPU': ra=110; dec=-45; break;
		case 'PUP': ra=123; dec=-45; break;
		case 'QUA': ra=230; dec= 49; break;
		case 'RSA': ra=293; dec=-17; break;
		case 'SAG': ra=247; dec=-22; break;
		case 'SDA': ra=339; dec=-16; break;
		case 'SEC': ra= 15; dec=-20; break;
		case 'SEX': ra=152; dec=  0; break;
		case 'SIA': ra=334; dec=-15; break;
		case 'SLE': ra=195; dec= -5; break;
		case 'SOP': ra=258; dec=-24; break;
		case 'SOR': ra= 86; dec= -3; break;
		case 'SPE': ra= 60; dec= 47; break;
		case 'SPI': ra=  5; dec= -1; break;
		case 'SPU': ra=102; dec=-45; break;
		case 'STA': ra= 52; dec= 15; break;
		case 'TAQ': ra=343; dec=-12; break;
		case 'TAU': ra= 52; dec= 16; break;
		case 'TCE': ra=210; dec=-40; break;
		case 'THE': ra=228; dec= 39; break;
		case 'TOP': ra=267; dec=-20; break;
		case 'TPU': ra=104; dec=-50; break;
		case 'URS': ra=217; dec= 76; break;
		case 'VEL': ra=128; dec=-45; break;
		case 'VIR': ra=195; dec= -4; break;
		case 'WCA': ra=315; dec=-22; break;
		case 'XOR': ra= 82; dec= 23; break;
		case 'ZPU': ra=123; dec=-43; break;
				
		case 'DRA': ra=262; dec= 54; break;
		case 'CBE': ra=170; dec= 26; break;
	}

	document.getElementById("shower"+showerNr+"_ra").value = ra;
	document.getElementById("shower"+showerNr+"_dec").value = dec;
}
