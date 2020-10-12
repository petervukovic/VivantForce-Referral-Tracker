# About #

**vftrack.js** is a script we use to track referral sources and map them to acceptable values for Referral Source and Referral Subsource scripts. 

## Usage ##

Add this script to the head tag:

    <script src="/path/to/vftrack.js"></script>    
    <script>VF_Track.log().track('dev.vivant.eco')</script>

Tip: omit the `log()` method if you want to prevent logging to console, i.e. just call `VF_Track.track(hostname)`

## How it works ##

The script checks the current page URL (via `window.location.href`) and referring site (via `document.referrer`) to determine the source of the visit.  

Four general sources are recognized:

1. Custom visit (`window.location.href` contains UTM tracking parameters, we don't care about the referrer)
2. Direct visit (`document.referrer` is blank, i.e. the user typed in the address to access the site)
3. Organic visit (`document.referrer` exists, but isn't a host specified in `track()`)
4. Internal visit (`document.referrer` exists and has the same host as specified in `track()`, which means the user is browsing the site)

Only first 3 sources produce a vf_track tag stored via local storage. 

Tagging for internal visits is skipped as we are only capturing external sources.






### Who do I talk to? ###

* Peter Vukovic
