# About #

A script we use to track referral sources and map them to acceptable values for Referral Source and Referral Subsource scripts. 

## Usage ##

Add this script to the head tag:

    <script src="/path/to/vftrack.js"></script>

Then initialize the tracker by sending a hostname of the website you are tracking to to the track() method:

    <script>VF_Track.log().track('dev.vivant.eco')</script>

Tip: omit the log() method if you want to prevent logging to console, i.e. just call VF_Track.track(hostname)


### Who do I talk to? ###

* Peter Vukovic
