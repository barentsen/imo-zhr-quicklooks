# Run this script to create and upload an IMO ZHR quicklook page.
# This script is typically ran as a cronjob.

# Configure long and short directory and file prefixes here:
LONG=geminids2015
SHORT=gem2015

# Create the ZHR report page and graphs using the local webserver
echo "Starting"
date
cd /export/imozhr/${LONG}
wget -q http://vmo.imo.net/imozhr/${LONG}/generate.php -O index.html
echo "Done generating page"
date

# Create a smaller version of the ZHR graph
convert -geometry 500 out/${SHORT}overview.png out/${SHORT}small.png

# Create a world map showing the location of all observers
./createmap.sh /tmp/${SHORT}.locations

# Upload the results to the IMO webserver
ncftpput -V -m -R -u xxxxxxx -p xxxxxxx www.imo.net live/${LONG} index.html zhr.css immy_bullet.png out/

# We're done
echo "Finished"
date
