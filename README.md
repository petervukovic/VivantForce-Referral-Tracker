
# About #

**vftrack.js** is a script we use to track the websites users are visiting us from (i.e. referrals) and stored them with Salesforce orders. This allows us to run reports on revenue per referral source and analyze how different referrals impact our online sales performance.

This repository contains a sample website you can run locally to test the script, but all you need to include is a `vftrack.js` file.

## Usage ##


### 1. Add this before the opening body tag on *every* page of the website

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
| source | A general source of the visit, to be used as `Referral_Source__c` on Sales Orders in Salesforce. For example, `Website`, `Paid Search` and `Organic Search` and `Organic Social` are some possible values.
|subsource| A subsource of the visit, to be used as `Referral_Subsource__c` on Sales Orders in Salesforce. This is typically the referring site such as , `Google` or `Facebook`, but can also be `Other/None` if not recognized.
|campaignId| A Salesforce Campaign Id, to be used as `Referral_Campaign__c` on Sales Orders in Salesforce. Equals `utm_campaign_id` query parameter, if present. 
|partnerId| A Salesforce Partner account Id, to be used as `Referral_Partner__c` on Sales Orders in Salesforce. Equals `utm_partner_id` query parameter, if present.
|referrer| The referring site, i.e same as reading `document.referrer`.
|referrerHost| Referring site host.


## How it works ##

The script checks the current page URL (via `window.location.href`) and referring site (via `document.referrer`) to determine the source of the visit.  

Four general sources are recognized:

1. A Custom visit (page URL has `utm_source` parameter with one of the recognized values)
2. Organic visit (`document.referrer` is not blank and differs from the host specified in `track()`, i.e. the user came to our site via a natural link on another site)
3. Direct visit (`document.referrer` is blank, i.e. the user typed in the address to access the site)
4. Internal visit (`document.referrer` host is the same as the host being tracked, i.e. the user is browsing the site)

Custom and Organic visits are further analyzed to determine the proper `source` and `subsource` based on mappings in `CustomSource` and `OrganicSource` classes.
Direct visits are simply reported as source='Website' and subsource='Other/None'.
Internal visits are recognized but not tagged, they are simply skipped (as we are not interested in internal sources).

## Removing the tag ##

If, for any reason, you need to remove the tag from local storage, call `VF_Track.removeTag()`

### Testing ###

You can run very basic tests by calling `VF_Track_Test()` function in js/tests.js file, after including the main script.
These tests do not use any framework, they just validate the tracking behaves as expected for key scenarios.

## More ##

A list of custom sources we recognize based on UTM source:
https://docs.google.com/spreadsheets/d/1ET8DEcBOOAYRFXNWSeNTMwkaYZwUQIPc9G3nwCRDnmQ/edit#gid=224900035