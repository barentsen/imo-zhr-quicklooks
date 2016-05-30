IMO Meteor ZHR Quicklook Graphs (2006-2016)
===========================================
This repository contains the [Zenithal Hourly Rate (ZHR) graphs](http://imo.net/zhr) that were available at the website of the [International Meteor Organization](http://imo.net) between 2006 and 2016.
It also contains the code that was used to generate them.

Contents
--------
* `database`: contains the code used to ingest visual observations in XML format, obtained from the IMO web server, into a local PostgreSQL database.
* `graph`: scripts used to create the ZHR report and graphs for a single meteor shower using the local PostgreSQL database.
* `output`: output files, i.e. graphs and html pages, created for various meteor showers between 2006 and 2016. They are archived here for future reference.
* `visualform`: the electronic visual observing report form on the IMO website, and the code used to convert the user input into XML files used to create the ZHR graphs.

See also
--------
A more modern, Python-based web application to create meteoroid flux graphs
based on video data is available at [meteorflux.io](meteorflux.io)
and the source code resides at [https://github.com/barentsen/meteor-flux](https://github.com/barentsen/meteor-flux).
It could conceivably be adapted to produce flux graphs using visual data.

Authors
-------
Geert Barentsen, Rainer Arlt.
