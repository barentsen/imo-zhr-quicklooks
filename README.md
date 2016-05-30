IMO Meteor ZHR Quicklook Graphs (2006-2016)
===========================================
This repository contains the [Zenithal Hourly Rate (ZHR) graphs](http://imo.net/zhr) that were available at the website of the [International Meteor Organization](http://imo.net) between 2006 and 2016.
It also contains the code that was used to generate them.

Contents
--------
* `database`: files used to fetch visual observations in XML format from the IMO web server and ingest them into a local PostgreSQL database.
* `graph`: files used to create the ZHR graph for a single meteor shower.
* `output`: output files, i.e. graphs and html pages, created for various meteor showers between 2006 and 2016. They are archived here for future reference.

See also
--------
A more modern, Python-based web application to create meteoroid flux graphs
based on video data is available at [meteorflux.io](meteorflux.io)
and the source code resides at [https://github.com/barentsen/meteor-flux](https://github.com/barentsen/meteor-flux)

Authors
-------
Geert Barentsen, Rainer Arlt.
