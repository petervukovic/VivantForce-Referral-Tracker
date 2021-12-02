
# About #

Sets and retrieves a VivantForce tracking cookie using last-click attribution method.

The cookie contains the values for several referral fields on the Sales Order object, enabling the sales team to understand where online sales are coming from.


## Usage ##

### 1. Add this before the opening body tag on *every* page of the website

Add this script to the head tag:

    <script src="/js/vftrack.js"></script>    
    <script>VF_Track.track()</script>

### 2. Read the tracking tag as needed

To read the tag, just call

	VF_Track.getTag(); 

This will give you a JSON based result in this format:

    {
       "source":"Paid Search",
       "subsource":"Google",
       "campaignId":"7011t000000DXUXAA4",
       "partnerId":"0011t00000DJW54AAH"
    }

**Result parameters**

| name | description |
|--|--|
| source | Maps to `Referral_Source__c` on Sales Orders in Salesforce. Represents a general source of the visit like `Organic Search`, or `Paid Social`.
| subsource | Maps to `Referral_Subsource__c` on Sales Orders in Salesforce. Represents a specific referrer such as `Google` or `Facebook`.
| campaignId | Maps to `Referral_Campaign__c` on Sales Orders in Salesforce. Equals `utm_campaign_id` query parameter, if present. 
| partnerId | Maps to `Referral_Partner__c` on Sales Orders in Salesforce. Equals `utm_partner_id` query parameter, if present.

## Algorithm ##

1. First, check the source of user's visit
1. If they came with recognized `utm_source` value in query parameters:
    - set a cookie based on `utm_source` mapping
2. If they came directly:
    - In case there is a previous cookie stored, do nothing (last-click attribution)
    - In case there is no previous cookie stored, set cookie for direct visit
3. If they came through paid search:
    - set cookie to paid search
4. If they came through a social network:
    - set cookie to organic social
5. If they came through organic search:
    - set cookie to organic search
6. In all other cases:
    - set the cookie to the value of the referral

The utm_source map is based on this document:

https://docs.google.com/spreadsheets/d/1ET8DEcBOOAYRFXNWSeNTMwkaYZwUQIPc9G3nwCRDnmQ/edit#gid=224900035
## Removing the tag ##

If, for any reason, you need to remove the tag from local storage, call:

 `VF_Track.removeTag()`

## Logging ##

You can enable logging by prepending a log() method to any call, for example:

`VF_Track.log().track()`
## Testing ##

Mocha is used for testing.
All tests are browser-based. 
Opening index.html will run the tests and display the results.


