Scripts to create ZHR quicklook reports
=======================================
The files in this directory were used to generate an IMO ZHR "on the fly" page.

Contents
--------
* `run.sh` is the actual script used to produce and upload a ZHR page and graphs.
* `Circular.class.php`: PHP class to create a ZHR report page.
* `generate.php`: the PHP script which creates the ZHR page using `Circular.class.php`.
* `functions.sql`: PostgreSQL database functions which are called by `Circular.class.php`. These functions contain the most important business logic, i.e. the binning of data and the ZHR estimation (in particular, see the `create_circular` function in that file).
* `createmap.sh`: a shell script to create a map of the spatial observer spread. This script is directly called by `run.sh`.
* `zhr.css` the stylesheet for the ZHR html page.

Usage
-----
`run.sh` is the actual script used to produce and upload a ZHR page and graphs.
It will not run out of the box: there are hard-coded configuration parameters inside `run.sh`, `generate.php`, and `../database/Database.class.php` that need to be edited.

Dependencies
------------
Technologies used include PHP, PostgreSQL, GnuPlot, and Generic Mapping Tools (GMT). 
