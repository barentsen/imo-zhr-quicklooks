Contents
========
* `ingest-observations.php` ran every 10 minutes. It fetches visual observations from the IMO webserver in XML format and ingests them into a local PostgreSQL database for analysis.
* `sql.xsl` and `sql.visualsummary.xsl` are XSL templates which were used by the above php script to convert the XML-formatted visual observations into SQL INSERT statements. (Because XSL was hip in 2006.)
