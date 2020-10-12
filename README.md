
# About #

**vftrack.js** is a script we use to track referral sources and map them to acceptable values for Referral Source and Referral Subsource scripts. 

This repository contains a sample website you can run locally to test the script, but all you need to include is a `vftrack.js` file.

## Usage ##


### 1. Add this before the opening body tag

Add this script to the head tag, replacing the `www.mydomain.com` with the actual hostname of the domain you are tracking:

    <script src="/js/vftrack.js"></script>    
    <script>VF_Track.log().track('www.mydomain.com')</script>

**Tip #1:** omit the `log()` method if you want to prevent logging to console, i.e. just call `VF_Track.track(hostname)`

**Tip #2:**  to track mutiple hostnames as a single site, pass an array:  `VF_Track.track(['site.com', 'www.mysite.com'])`

### 2. Read the tracking tag as needed

To read the tag, just call

	VF_Track.getTag(); 

This will give you a JSON based result in this format:

    {
       "source":"Paid Search",
       "subsource":"Google",
       "campaignId":"7011t000000DXUXAA4",
       "partnerId":"0011t00000DJW54AAH",
       "referrer":"https://www.google.com",
       "referrerHost":"www.google.com"
    }

**Result parameters**

| name | description |
|--|--|
| source | A generally recognized category of source. Can be Website, Paid Search, Paid Display, Organic Search, Organic Social or Paid Social  |
|subsource| A specific subsource, for example: Google
|campaignId| A salesforce campaign Id. Read from `utm_campaign_id` query parameter, if present. 
|partnerId| A salesforce partner account Id. ead from `utm_partner_id` query parameter, if present.
|referrer| The referring site, i.e same as reading `document.referrer`
|referrerHost| Referring site host


## How it works ##

The script checks the current page URL (via `window.location.href`) and referring site (via `document.referrer`) to determine the source of the visit.  

Four general sources are recognized:

1. A custom-tagged visit (`window.location.href` has one of the recognized  `utm_source` parameters )
2. Direct visit (`document.referrer` is blank, i.e. the user typed in the address to access the site)
3. Organic visit (`document.referrer` exists, but isn't the same as host specified in `track()`, i.e. the user came to our site via a link on another site)
4. Internal visit (`document.referrer` exists and has the same host as specified in `track()`, which means the user is browsing the site)

Only first 3 sources are captured and stored as a `vf_track` tag in local storage, that can be read at any time via `VF_Track.getTag()`


### Testing ###

You can run very basic tests by calling `VF_Track_Test()` function in js/tests.js file, after including the main script.
These tests do not use any framework, they just validate the tracking behaves as expected for key scenarios.
