<?xml version="1.0"?>
<!-- 
	Description: xsl to transform a visual rate observation xml files from www.imo.net into SQL INSERT statements.
	Author: Geert Barentsen
	Version: 2006-12-10
-->

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:imo="http://www.imo.net" version="1.0">

<xsl:template name="visualsummary">

	<xsl:for-each select="imo:visualsummary">
		<!-- Use old observation id if it was set -->
		<xsl:variable name='observation_id_first'>			
			<xsl:choose> 
				<xsl:when test="count(@id) = 0">nextval('meta.observation_observation_id_seq')</xsl:when>
				<xsl:otherwise><xsl:value-of select="@id" /></xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name='observation_id'>			
			<xsl:choose> 
				<xsl:when test="count(@id) = 0">currval('meta.observation_observation_id_seq')</xsl:when>
				<xsl:otherwise><xsl:value-of select="@id" /></xsl:otherwise>
			</xsl:choose>
		</xsl:variable>	
	
		
		INSERT INTO meta.observation 
			(observation_id, observer_id, location_id, type_id) 
		VALUES (
			<xsl:value-of select="$observation_id_first" />,
			meta.get_observer_id(
				<xsl:value-of select='imo:testNULL(count(imo:observer/imo:code) = 0, imo:pgText(imo:observer/imo:code))' />,
				<xsl:value-of select='imo:testNULL(count(imo:observer/imo:firstname) = 0, imo:pgText(imo:observer/imo:firstname))' />,
				<xsl:value-of select='imo:testNULL(count(imo:observer/imo:middlename) = 0, imo:pgText(imo:observer/imo:middlename))' />,
				<xsl:value-of select='imo:testNULL(count(imo:observer/imo:lastname) = 0, imo:pgText(imo:observer/imo:lastname))' />,
				<xsl:value-of select='imo:testNULL(count(imo:observer/imo:city) = 0, imo:pgText(imo:observer/imo:city))' />,
				<xsl:value-of select='imo:testNULL(count(imo:observer/imo:country) = 0, imo:pgText(imo:observer/imo:country))' />),
			meta.get_location_id(
				<xsl:value-of select='imo:testNULL(count(imo:location/imo:code) = 0, imo:pgText(imo:location/imo:code))' />,
				<xsl:value-of select='imo:testNULL(count(imo:location/imo:name) = 0, imo:pgText(imo:location/imo:name))' />,
				<xsl:value-of select='imo:testNULL(count(imo:location/imo:country) = 0, imo:pgText(imo:location/imo:country))' />,
				<xsl:value-of select='imo:testNULL(count(imo:location/imo:latitude) = 0, imo:location/imo:latitude)' />,
				<xsl:value-of select='imo:testNULL(count(imo:location/imo:longitude) = 0, imo:location/imo:longitude)' />,
				<xsl:value-of select='imo:testNULL(count(imo:location/imo:height) = 0, imo:location/imo:height)' />),
			(SELECT type_id FROM meta.observation_type WHERE lower(name) = 'visualsummary')
		);
		
		
		INSERT INTO meta.observation_report
			(observation_id, reporter_id, received, contact, remarks)
		VALUES (
			<xsl:value-of select="$observation_id" />,
			<xsl:value-of select='imo:testNULL(count(imo:report/imo:reporter) = 0, concat("(SELECT observer_id FROM meta.observer WHERE code = upper(&apos;", imo:report/imo:reporter, "&apos;)"))' />,
			<xsl:value-of select='imo:testNULL(count(imo:report/imo:received) = 0, imo:pgText(imo:report/imo:received))' />,	
			<xsl:value-of select='imo:testNULL(count(imo:report/imo:contact) = 0, imo:pgText(imo:report/imo:contact))' />,
			<xsl:value-of select='imo:testNULL(count(imo:report/imo:remarks) = 0, imo:pgText(imo:report/imo:remarks))' />
		);

	
		
			<!-- Run over rate periods -->
			<xsl:for-each select="imo:periodlist/imo:rate">
			<xsl:sort select="imo:start" order="ascending" />
		
				INSERT INTO meta.period
					(period_id, observation_id, start, stop)
				VALUES (
					nextval('meta.period_period_id_seq'),
					<xsl:value-of select="$observation_id" />,
					'<xsl:value-of select="imo:start" />',
					'<xsl:value-of select="imo:stop" />'
				);
		
				INSERT INTO visualsummary.rate_period 
					(period_id, teff, lm, fov_center_ra, fov_center_dec, fov_obstruction)
				VALUES ( 
					currval('meta.period_period_id_seq'),
					<xsl:value-of select="imo:teff" />,
					<xsl:value-of select="imo:lm" />,
					<xsl:value-of select='imo:testNULL(count(imo:fov/imo:ra) = 0, imo:fov/imo:ra)' />,
					<xsl:value-of select='imo:testNULL(count(imo:fov/imo:dec) = 0, imo:fov/imo:dec)' />,
					<xsl:value-of select="imo:obstruction" />
				);
				
				
				<!-- Run over the showers -->
				<xsl:for-each select="imo:showerlist/imo:shower">
				
					INSERT INTO visualsummary.rate_shower
						(period_id, shower_id, method, number)
					VALUES ( 
						currval('meta.period_period_id_seq'),
						(SELECT shower_id FROM meta.shower WHERE upper(code) = upper(<xsl:value-of select="imo:pgText(imo:code)" />) ),
						upper('<xsl:value-of select="imo:method" />'),
						<xsl:value-of select="imo:number" />
					); 

				</xsl:for-each>
				
			</xsl:for-each>

			
			<!-- Run over magnitude periods -->
			<xsl:for-each select="imo:periodlist/imo:magnitude">
			<xsl:sort select="imo:start" order="ascending" />
		
				INSERT INTO meta.period
					(period_id, observation_id, start, stop)
				VALUES (
					nextval('meta.period_period_id_seq'),
					<xsl:value-of select="$observation_id" />,
					'<xsl:value-of select="imo:start" />',
					'<xsl:value-of select="imo:stop" />'
				);
		
				INSERT INTO visualsummary.magnitude_period 
					(period_id, lm)
				VALUES ( 
					currval('meta.period_period_id_seq'),
					<xsl:value-of select="imo:lm" />
				);
				
				
				<!-- Run over the showers -->
				<xsl:for-each select="imo:showerlist/imo:shower">
				
					INSERT INTO visualsummary.magnitude_shower
						(period_id, shower_id, magmin6, magmin5, magmin4, magmin3, magmin2, magmin1, mag0, mag1, mag2, mag3, mag4, mag5, mag6, mag7)
					VALUES ( 
						currval('meta.period_period_id_seq'),
						(SELECT shower_id FROM meta.shower WHERE upper(code) = upper(<xsl:value-of select="imo:pgText(imo:code)" />) ),
						<xsl:value-of select="imo:magmin6" />,
						<xsl:value-of select="imo:magmin5" />,
						<xsl:value-of select="imo:magmin4" />,
						<xsl:value-of select="imo:magmin3" />,
						<xsl:value-of select="imo:magmin2" />,
						<xsl:value-of select="imo:magmin1" />,
						<xsl:value-of select="imo:mag0" />,
						<xsl:value-of select="imo:mag1" />,
						<xsl:value-of select="imo:mag2" />,
						<xsl:value-of select="imo:mag3" />,
						<xsl:value-of select="imo:mag4" />,
						<xsl:value-of select="imo:mag5" />,
						<xsl:value-of select="imo:mag6" />,
						<xsl:value-of select="imo:mag7" />
					); 

				</xsl:for-each>
				
			</xsl:for-each>
			
	</xsl:for-each>

</xsl:template>
</xsl:stylesheet>   
