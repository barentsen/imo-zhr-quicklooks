-- jd_decimal(timestamp) returns the decimal julian day value for a given timestamp
-- Strange implementation because of PostgreSQL limitations
-- Author: Geert Barentsen
-- Version: 2006-12-06
CREATE OR REPLACE FUNCTION meta.jd_decimal(timestamp) RETURNS numeric AS $$
	SELECT to_char(($1 - '12:00:00'::interval), 'J')::numeric 
			+ ( to_char(($1 - '12:00:00'::interval), 'SSSS')::numeric / 86400 );
$$ LANGUAGE SQL;


-- Calculation of the altitude of a given point in the sky (coordinates in DECIMAL DEGREES!)
-- Parameters: sky_ra, sky_dec, earth_lon, earth_lat, timestamp
-- Author: Geert Barentsen
-- Version: 2006-12-06
CREATE OR REPLACE FUNCTION meta.altitude(numeric, numeric, numeric, numeric, timestamp) RETURNS numeric AS $$
DECLARE
	sky_ra numeric := $1;
	sky_dec numeric := $2;
	earth_lon numeric := $3;
	earth_lat numeric := $4;
	jd numeric := meta.jd_decimal($5);
	d numeric;
	T numeric;
	GMST numeric;
	LMST numeric;
	hourAngle numeric;
	altitude numeric;
BEGIN
	d := JD - 2451545.0;
	T := d / 36525;
	-- Greenwich Mean Sidereal Time (Meeus formula 11.4)
	GMST := 280.46061837 + ( 360.98564736629 * d ) + ( 0.000387933 * pow(T,2) ) - ( pow(T,3) / 38710000 );
	-- Local Mean Sidereal Time
	LMST := RADIANS(GMST) + RADIANS(earth_lon);
	-- Hour Angle
	hourAngle := LMST - RADIANS(sky_ra);
	-- Return object altitude in RADIANS (Meeus 12.6)
	RETURN DEGREES(asin( sin(RADIANS(earth_lat)) * sin(RADIANS(sky_dec)) + cos(RADIANS(earth_lat)) * cos(RADIANS(sky_dec)) * cos(hourAngle) ));  
END;
$$ LANGUAGE plpgsql;




CREATE TYPE meta.coordinate as (
	ra numeric,
	dec numeric
);

-- Calculation of the solar coordinates at a given time (output in DECIMAL DEGREES)
-- Parameters: timestamp (given time)
-- Author: Geert Barentsen
-- Version: 2006-12-06
CREATE OR REPLACE FUNCTION meta.solar_coordinates(timestamp) RETURNS meta.coordinate AS $$
DECLARE
	jd numeric := meta.jd_decimal($1);
	d numeric;
	T numeric;
	SML numeric;
	SMA numeric;
	C numeric;
	TEL numeric;
	K numeric;
	ra numeric;
	dec numeric;
	result meta.coordinate;
	
BEGIN
	-- d: number of days from epoch J2000.0
	d := JD - 2451545.0;
	-- T: number of Julian centuries from J2000.0
	T := d / 36525;
	
	-- Sun mean longitude
	SML := 280.46645 + 36000.76983 * T + 0.0003032 * pow(T,2);
	-- Sun mean anomaly
	SMA := 357.52910 + 35999.05030 * T - 0.0001559 * pow(T,2) - 0.00000048 * pow(T,3);
	-- The Sun's equation of center C
	C := ((1.914600 - 0.004817 * T - 0.000014 * pow(T,2)) * sin(radians(SMA)) )
		+ ((0.01993 - 0.000101 * T) * sin(radians(2 * SMA)) )
		+ (0.000290 * sin(radians(3 * SMA)) );
	-- True ecliptical longitude of the Sun
	TEL := radians(SML + C);
	-- Obliquity of the ecliptic
	K := radians(23.439 - 0.013 * T);
	-- Right Ascension	
	ra := atan2( (sin(TEL) * cos(K)) , cos(TEL) ); 
	-- Declination
	dec := asin( sin(ra) * sin(K) );
	-- Result
	result.ra = DEGREES(ra);
	result.dec = DEGREES(dec);
	RETURN result;
END;
$$ LANGUAGE plpgsql;




-- Get the IMO radiant altitude correction factor for a given shower radiant at a given location
-- Returns NULL if the shower radiant is below the horizon!
-- Parameters: integer (database shower ID), integer (database location ID), timestamp (given time)
-- Author: Geert Barentsen
-- Version: 2006-12-06
CREATE OR REPLACE FUNCTION meta.radiant_zhrfactor(integer, integer, timestamp) RETURNS numeric AS $$
DECLARE
	altitudeResult numeric;
BEGIN
	-- Get the altitude into altitudeResult (RADIANS!)
	SELECT INTO altitudeResult meta.altitude( 
		(SELECT radiant_ra FROM meta.shower WHERE shower_id = $1)::numeric, 
		(SELECT radiant_dec FROM meta.shower WHERE shower_id = $1)::numeric, 
		(SELECT longitude FROM meta.location WHERE location_id = $2)::numeric, 
		(SELECT latitude FROM meta.location WHERE location_id = $2)::numeric,
		$3);  
	-- Return 1/sin(altitude) if the radiant was above the horizon, else return NULL
	IF altitudeResult > 0 THEN
		RETURN ( 1 / sin(RADIANS(altitudeResult)) );
	ELSE
		RETURN NULL;
	END IF;
END
$$ LANGUAGE plpgsql;



-- Calculation of the solar longitude with an accuracy of about .003 deg (based on Jean Meeus' "Astronomical Algorithms" and an article by C. Steyaert)
-- Parameter: timestamp
-- Returns: solar longitude in DECIMAL DEGREES
-- Original version: 1995 Jan 28 Rainer Arlt, translated to plpgsql by Geert Barentsen in 2004
CREATE OR REPLACE FUNCTION meta.sollon(timestamp) RETURNS numeric AS $$
DECLARE
	jd numeric;
	TWOPI numeric := 2.0 * PI();
	T numeric;
	result numeric;
	-- If you wonder about these numbers, see "Astronomical Algorithms" (Jean Meeus) pp 205
	a0 numeric[] = '{334166.0, 3489.0, 350.0, 342.0, 314.0, 268.0, 234.0, 132.0, 127.0, 120.0, 99.0, 90.0, 86.0, 78.0, 75.0, 51.0, 49.0, 36.0, 32.0, 28.0, 27.0, 24.0, 21.0, 21.0, 20.0, 16.0, 13.0, 13.0}';
	b0 numeric[] = '{4.669257, 4.6261, 2.744, 2.829, 3.628, 4.418, 6.135, 0.742, 2.037, 1.11, 5.233, 2.045, 3.508, 1.179, 2.533, 4.58, 4.21, 2.92, 5.85, 1.90, 0.31, 0.34, 4.81, 1.87, 2.46, 0.83, 3.41, 1.08}';
	c0 numeric[] = '{6283.07585, 12566.1517, 3753.385, 3.523, 77713.771, 7860.419, 3930.210, 11506.77, 529.691, 1577.344, 5884.927, 26.298, 398.149, 5223.694, 5507.553, 18849.23, 775.52, 0.07, 11790.63, 796.30, 10977.08, 5486.78, 2544.31, 5573.14, 6069.78, 213.30, 2942.46, 20.78}';
	a1 numeric[] = '{20606.0, 430.0, 43.0}';
	b1 numeric[] = '{2.67823, 2.635, 1.59}';
	s0 numeric := 0;
	s1 numeric := 0;
	s2 numeric := 0;
	s3 numeric := 0;
	angle numeric;
	angle1 numeric;

BEGIN
	jd := meta.jd_decimal($1); 	
	T := (jd - 2451545) / 365250.0;
	result := 4.8950627 + T * (6283.0758500 - T * 0.0000099);
	
	-- Calculate s0
	FOR n IN 1..28 LOOP
		angle := b0[n] + c0[n] * T;
		s0 := s0 + a0[n] * cos(angle);
	END LOOP;

	-- Calculate s1
	FOR n IN 1..3 LOOP
	  angle := b1[n] + c0[n] * T;
	  s1 := s1 + a1[n] * cos(angle);
	END LOOP;

	-- Calculate s2
	angle := 1.073 + c0[1] * T;
	angle1 := 0.44 + c0[2] * T;
	s2 := 872.0 * cos(angle) + 29 * cos(angle1);
	
	-- Calculate s3
	angle := 5.84 + c0[1] * T;
	s3 := 29.0 * cos(angle);
	
	-- The required longitude in radians is given by:
	result := result + ( s0 + T * ( s1 + T * ( s2 + T * s3 ) ) ) * 1e-7;
	
	-- Normalize the angle
	WHILE result > TWOPI LOOP
		result := result - TWOPI;
	END LOOP;
	WHILE result < 0 LOOP
		result := result + TWOPI;
	END LOOP;
	
	-- Return the result (DEGREES!)
	RETURN DEGREES(result);
END;
$$ LANGUAGE plpgsql;








CREATE TYPE visualsummary.zhr_circular as (
	time timestamp without time zone,
	solarlon numeric,
	zhr integer,
	error integer,
	meteors integer,
	teff numeric,
	periods_used integer,
	periods_dropped integer
);

-- Basic ZHR circular routine  (don't use for sporadics)
-- Author: Geert Barentsen
-- Version: 2006-12-06
-- (different algorithm with multiple passes will be needed to simulate actual VMDB algorithm)
-- Parameter 1: IMO shower code (text)
-- Parameter 2: population index (numeric)
-- Parameter 2: analysis start (timestamp)
-- Parameter 3: analysis stop (timestamp)
-- Parameter 4: optimum meteor number
-- Parameter 5: minimum interval length
-- Parameter 6: maximum interval length
-- Parameter 7: maximal correction factor
-- Parameter 8: minimal limiting magnitude
CREATE OR REPLACE FUNCTION visualsummary.create_circular(text, numeric, timestamp, timestamp, integer, interval, interval, numeric, numeric) RETURNS setof visualsummary.zhr_circular AS $$
DECLARE
	analysis_shower ALIAS FOR $1;
	analysis_popindex ALIAS FOR $2;
	analysis_start ALIAS FOR $3;
	analysis_stop ALIAS FOR $4;
	min_meteors ALIAS FOR $5;
	min_interval ALIAS FOR $6;
	max_interval ALIAS FOR $7;
	max_correction ALIAS FOR $8;
	min_lm ALIAS FOR $9;
	myperiod RECORD;
	zhrDivider numeric := 0;
	total_meteors integer := 0;
	total_teff numeric := 0;
	total_offset interval := 0;
	total_used integer := 0;
	total_dropped integer := 0;
	firstPeriod boolean := true;
	intervalstart timestamp without time zone;
	interval visualsummary.zhr_circular;
BEGIN
	-- Return combined intervals based on a meteor and timespan threshold
	-- Basic query for visual data
	FOR myperiod IN (	
		SELECT 
			rate_shower.period_id, 
			teff, 
			lm, 
			number as meteors, 
			start + ((stop-start) / 2) as mid, 
			(100 / (100 - fov_obstruction)) as f,
			pow(2.5, 6.5 - lm) as c,
			meta.radiant_zhrfactor(shower_id, location_id, start + ((stop - start) / 2)) as z 
		FROM visualsummary.rate_shower
		JOIN visualsummary.rate_period ON rate_period.period_id = rate_shower.period_id
		JOIN meta.period ON period.period_id = rate_shower.period_id
		JOIN meta.observation ON observation.observation_id = period.observation_id
		WHERE 
			start + ((stop-start) / 2) > analysis_start
			AND start + ((stop-start) / 2) < analysis_stop
			AND shower_id = (SELECT shower_id FROM meta.shower WHERE upper(code) = upper(analysis_shower))
		ORDER BY mid) LOOP
				
		-- Return ZHR row if meteor threshold or timespan threshold has been reached
		IF ( (total_meteors >= min_meteors AND (myperiod.mid - intervalstart) >= min_interval) OR (myperiod.mid - intervalstart) >= max_interval)
			AND total_used > 0 THEN
			interval.meteors := total_meteors;
			interval.teff := round(total_teff, 2);
			interval.periods_used := total_used;
			interval.periods_dropped := total_dropped;
			-- use sum of offsets from the first myperiod.mid to find average myperiod.mid for the interval
			interval.time := intervalstart + (total_offset / total_used);
			interval.solarlon := round( meta.sollon( interval.time )::numeric, 3);
			-- Calculate the ZHR and error
			IF zhrDivider = 0 THEN
				interval.zhr := NULL;
				interval.error := NULL;
			ELSE
				-- ZHR=(sum(meteors)+1)/sum(teff/cor)
				interval.zhr := round( ( total_meteors + 1 ) / zhrDivider );
				interval.error := round( interval.zhr / sqrt(1 + total_meteors) );
			END IF;
			-- Reset vars
			zhrDivider := 0;
			total_meteors := 0;
			total_teff := 0;
			total_offset := 0;
			total_used := 0;
			total_dropped := 0;
			firstPeriod := true;
			-- Actual row return
			RETURN NEXT interval;
		END IF;
		
		-- Data selection
		IF firstPeriod THEN
			intervalstart := myperiod.mid;
			firstPeriod := false;
		END IF;
		-- Accept periods with lm above minimal_lm and zhr correction factor below max_correction
		IF (myperiod.lm >= min_lm) AND (myperiod.f * myperiod.c * myperiod.z) < max_correction THEN
			zhrDivider := zhrDivider + (myperiod.teff / (myperiod.f*myperiod.c*myperiod.z));
			total_meteors := total_meteors + myperiod.meteors;
			total_teff := total_teff + myperiod.teff;
			total_used := total_used + 1;
			-- make sum of offsets from the first myperiod.mid to average all myperiod.mid's later on   
			total_offset := total_offset + (myperiod.mid - intervalstart); 
		ELSE
			total_dropped := total_dropped + 1;
		END IF;
	END LOOP;
	RETURN;
END;
$$ LANGUAGE plpgsql;


-- demo:
SELECT * FROM visualsummary.create_circular('LEO', 2.5, '2006-11-15'::timestamp, '2006-11-21'::timestamp, 200, '0:30:00'::interval, '3:00:00'::interval, 20.0, 4.5);





-- Generate an observer code for a new observer
-- Arguments: firstname, lastname
CREATE OR REPLACE FUNCTION meta.generate_observer_code(text, text) RETURNS text AS $$
DECLARE
	first_name ALIAS FOR $1;
	last_name ALIAS FOR $2;
	first text;
	last text;
	newcode text;
	cnt integer;
BEGIN
	-- Remove whitespaces from first and lastname
	first := replace(first_name, ' ', '');
	last := replace(last_name, ' ', '');
	-- Remove silly characters from first and lastname (can be improved?)
	first := translate(lower(first), 'ëéèêäáàâüúùûç', 'eeeeaaaauuuuc');
	last := translate(lower(last), 'ëéèêäáàâüúùûç', 'eeeeaaaauuuuc');

	-- Generate initial code, take short last name into account
	IF length(last) < 3 THEN
		newcode := upper(substring(last from 1 for 3) || substring(first from 1 for (5 - length(last)) ));
	ELSE
		newcode := upper(substring(last from 1 for 3) || substring(first from 1 for 2));
	END IF;

	-- Test if code exists, generate alternatives if required
	SELECT INTO cnt COUNT(*) FROM meta.observer WHERE code = newcode;
	-- Alternative 1: replace the last char with other letters from the firstname
	IF cnt > 0 THEN
		FOR i IN 3..length(first) LOOP
			newcode := upper(substring(newcode from 1 for 4) || substring(first from i for 1));	
			SELECT INTO cnt COUNT(*) FROM meta.observer WHERE code = newcode;
			IF cnt = 0 THEN
				EXIT;
			END IF;
		END LOOP;
	END IF;
	-- Alternative 2: replace the last char with any letter
	IF cnt > 0 THEN
		FOR i IN 0..25 LOOP
			newcode := upper(substring(newcode from 1 for 4) || CHR(ASCII('A')+i));	
			SELECT INTO cnt COUNT(*) FROM meta.observer WHERE code = newcode;
			IF cnt = 0 THEN
				EXIT;
			END IF;
		END LOOP;
	END IF;	
	-- If no unique code was generated, give a temporary code
	WHILE cnt > 0 LOOP
		newcode := 'TMP' || ROUND(RANDOM()*9999);
		SELECT INTO cnt COUNT(*) FROM meta.observer WHERE code = newcode;
	END LOOP;
	
	RETURN newcode;
END;
$$ LANGUAGE plpgsql;

SELECT meta.generate_observer_code('Geert', 'De Keyzer');



-- Get the ID for an observer
-- Create a new ID if required
CREATE OR REPLACE FUNCTION meta.get_observer_id(text, text, text, text, text, text) RETURNS integer AS $$
DECLARE
	code_in ALIAS FOR $1;
	first_in ALIAS FOR $2;
	middle_in ALIAS FOR $3;
	last_in ALIAS FOR $4;
	city_in ALIAS FOR $5;
	country_in ALIAS FOR $6;
	newcode text;
	countryid integer;
	id integer;
BEGIN
	IF code_in IS NOT NULL THEN
		-- Code given, check if correct
		SELECT INTO id observer_id FROM meta.observer WHERE code = code_in;
		IF FOUND THEN
			RETURN id; 
		END IF;
	END IF;
	
	newcode := meta.generate_observer_code(first_in, last_in);
	SELECT INTO countryid COALESCE((SELECT country_id FROM meta.country WHERE upper(name) = upper(country_in)), (SELECT country_id FROM meta.country WHERE lower(name) = 'unknown'));
	INSERT INTO meta.observer (code, first_name, middle_name, last_name, city, country_id, time_created)
		VALUES (newcode, first_in, middle_in, last_in, city_in, countryid, now());
	SELECT INTO id observer_id FROM meta.observer WHERE code = newcode;
	RETURN id;
END;
$$ LANGUAGE plpgsql;


SELECT meta.get_observer_id('BARGE', 'Geert', '', 'Barentsen', 'Lier', 1);



-- Generate a location code
CREATE OR REPLACE FUNCTION meta.generate_location_code(text, text) RETURNS text AS $$
DECLARE
	place_name ALIAS FOR $1;
	country_name ALIAS FOR $2;
	newcode text;
	cnt integer;
BEGIN
	cnt := 1;
	-- For now, we generate a unique random 5-digit integer
	WHILE cnt > 0 LOOP
		newcode := ROUND(RANDOM()*99999);
		SELECT INTO cnt COUNT(*) FROM meta.location WHERE code = newcode;
	END LOOP;	
	RETURN newcode;
END;
$$ LANGUAGE plpgsql;

SELECT meta.generate_location_code('Lier', 'Belgium');



-- Get a location id, or create one for a new location
CREATE OR REPLACE FUNCTION meta.get_location_id(text, text, text, double precision, double precision, double precision) RETURNS integer AS $$
DECLARE
	code_in ALIAS FOR $1;
	name_in ALIAS FOR $2;
	country_in ALIAS FOR $3;
	latitude_in ALIAS FOR $4;
	longitude_in ALIAS FOR $5;
	height_in ALIAS FOR $6;
	newcode text;
        countryid integer;
	id integer;
BEGIN
	IF code_in IS NOT NULL THEN
		-- Code given, check if correct
		SELECT INTO id location_id FROM meta.location WHERE code = code_in;
		IF FOUND THEN
			RETURN id; 
		END IF;
	END IF;
	
	newcode := meta.generate_location_code(name_in, country_in);
	SELECT INTO countryid COALESCE((SELECT country_id FROM meta.country WHERE upper(name) = upper(country_in)), (SELECT country_id FROM meta.country WHERE lower(name) = 'unknown'));
	INSERT INTO meta.location (code, name, country_id, latitude, longitude, height, time_created)
		VALUES (newcode, name_in, countryid, latitude_in, longitude_in, height_in, now());
	SELECT INTO id location_id FROM meta.location WHERE code = newcode;
	RETURN id;
END;
$$ LANGUAGE plpgsql;

