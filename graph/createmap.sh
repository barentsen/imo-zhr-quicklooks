#!/bin/bash
#
# Shell script to create maps with markers, 
# used to display observing locations.
#
# The locations must be specified in a text file 
# containing lon lat values at each line.
#
# Parameters: $1 = input filename with locations
# Depends on: Generic Mapping Tools (GMT)
# Author: Geert Barentsen
#

INPUT=$1
TARGET=out/
cd $TARGET

# Use Plate Caree projection
PROJ=-JQ0/20c
# Draw soft borders
PEN=0.5p/150/150/150


# Change GMT settings
function init {
	# Resolution properties
	GMT gmtset DOTS_PR_INCH 600
	GMT gmtset PAPER_MEDIA A1
	# Border properties
	GMT gmtset BASEMAP_TYPE PLAIN
	GMT gmtset BASEMAP_FRAME_RGB +70/70/70
	GMT gmtset FRAME_PEN 0.15p
	GMT gmtset TICK_PEN 0.15p
	GMT gmtset ANOT_FONT_SIZE 12
}

# Draw a map
# Usage: draw outname region options starsize
function draw {
	NAME=$1
	REGION=$2
	OPTIONS=$3
	STARSIZE=$4
	# Draw map
	GMT pscoast $PROJ $REGION $OPTIONS -W$PEN -G230 -K > $NAME.ps
	# Add location markers
	GMT psxy $INPUT $PROJ $REGION -Sa$STARSIZE -W8/255/0/0 -O >> $NAME.ps
	#convert -rotate 90 -trim -antialias -density 60x60 $NAME.ps $NAME"_small.png"
	convert -rotate 90 -trim -antialias -density 100x100 $NAME.ps $NAME.jpg
	convert -resize 75% $NAME.jpg $NAME"_small.png"
	rm $NAME.ps
}


# Create maps
init

draw "world" 	"-R-180/180/-86/86" 	"-B90/45 -A50000 -Dc" 		"0.09"
#draw "europe" 	"-R-15/40/32/71" 	"-B30/20 -A2000 -Di -N1" 	"0.11"
#draw "asia" 	"-R30/150/2/70" 	"-B30/20 -A2000 -Di -N1" 	"0.11"
#draw "africa" 	"-R-23/54/-37/40" 	"-B30/20 -A2000 -Dl -N1" 	"0.11"
#draw "australia" "-R90/180/-50/10" 	"-B30/20 -A2000 -Dl -N1" 	"0.11"
#draw "northamerica" "-R190/306/10/75" 	"-B30/20 -A2000 -Di -N1 -N2" 	"0.11"
#draw "southamerica" "-R265/330/-60/17" 	"-B30/20 -A2000 -Dl -N1" 	"0.11"
