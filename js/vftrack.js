(function() {

  /* Instatitates a new DirectSource */

  class DirectSource {
    constructor() {
       this.source = 'Website';
       this.subsource = 'Other/None';
    }
  }

  /* Instatiates a new OrganicSource */

  class OrganicSource {

    constructor (trackingParamsInstance) {

        let organicSource = this.findByHost(extractHostname(trackingParamsInstance.referrer));

        this.source = organicSource.source;
        this.subsource = organicSource.subsource;

    }

    getKnownSources() {
      return [{
            name: 'Organic Search',
            subsources: [{
                name: 'Google',
                hosts: ['google.com', 'www.google.com'],
              },
              {
                name: 'Yahoo',
                hosts: ['yahoo.com', 'www.yahoo.com'],
              },
              {
                name: 'Bing',
                hosts: ['bing.com', 'www.bing.com'],
              }
            ]
          },
          {
            name: 'Organic Social',
            subsources: [{
                name: 'Facebook',
                hosts: ['facebook.com', 'l.facebook.com', 'www.facebook.com'],
              },
              {
                name: 'Instagram',
                hosts: ['instagram.com', 'www.instagram.com']
              },
              {
                name: 'Twitter',
                hosts: ['twitter.com', 't.co']
              },
              {
                name: 'LinkedIn',
                hosts: ['linkedin.com', 'www.linkedin.com']
              },
              {
                name: 'YouTube',
                hosts: ['youtube.com', 'www.youtube.com']
              }
            ]
          }
        ];
    }

 

   findByHost(host) {

      let sources = this.getKnownSources();

      for (let i = 0; i < sources.length; i++) {
        let source = sources[i];
        let subsources = source.subsources;


        for (let j = 0; j < subsources.length; j++) {
          let subsource = subsources[j];
          if (subsource.hosts.indexOf(host) > -1) return {
            source: source.name,
            subsource: subsource.name
          }
        }

      }
      /* Default value if no match was found */
      return {
        source: 'Organic Referral',
        subsource: 'Other/None'
      }
    }




  }


  /* Instatiates a new CustomSource */

  class CustomSource {

    constructor(trackingParamsInstance) {

        const UTM = parseUTM(trackingParamsInstance.URL);
        if (!UTM.source) return;


        let customSource = this.find(UTM.source);
        if (!customSource) {
          console.warn('VF Track: UTM data found but not valid for custom source tracking:', UTM);
          return;
        }

        this.source = customSource.source;
        this.subsource = customSource.subsource;
        this.campaign = UTM.campaign;
        this.campaignId = UTM.campaignId;
        this.referrer = trackingParamsInstance.referrer;
        this.referrerHost = extractHostname(trackingParamsInstance.referrer);

    }


    getAllowedSources() {
        return [{
            name: 'Paid Search',
            subsources: [{
                name: 'Google',
                utmSource: 'paid_search_google'
              },
              {
                name: 'Bing',
                utmSource: 'paid_search_bing'
              },
              {
                name: 'Yahoo',
                utmSource: 'paid_search_yahoo'
              }
            ]
          },
          {
            name: 'Paid Display',
            subsources: [{
                name: 'Google',
                utmSource: 'paid_display_google'
              },
              {
                name: 'Bing',
                utmSource: 'paid_display_bing'
              },
              {
                name: 'Yahoo',
                utmSource: 'paid_display_yahoo'
              },
              {
                name: 'YouTube',
                utmSource: 'paid_display_youtube'
              }
            ]
          },
          {
            name: 'Paid Social',
            subsources: [{
                name: 'Facebook',
                utmSource: 'paid_social_facebook'
              },
              {
                name: 'Twitter',
                utmSource: 'paid_social_twitter'
              },
              {
                name: 'Instagram',
                utmSource: 'paid_social_instagram'
              },
              {
                name: 'LinkedIn',
                utmSource: 'paid_social_linkedin'
              }
            ]
          },
          {
            name: 'Paid Referral',
            subsources: [{
              name: 'Other/None',
              utmSource: 'paid_referral'
            }]
          },
          {
            name: 'Partner',
            subsources: [{
              name: 'Other/None',
              utmSource: 'partner'
            }]
          },
          {
            name: 'Email',
            subsources: [{
              name: 'Other/None',
              utmSource: 'email'
            }]
          },
          {
            name: 'Content',
            subsources: [{
                name: 'Facebook',
                utmSource: 'content_facebook'
              },
              {
                name: 'Twitter',
                utmSource: 'content_twitter'
              },
              {
                name: 'Instagram',
                utmSource: 'content_instagram'
              },
              {
                name: 'LinkedIn',
                utmSource: 'content_linkedin'
              }
            ]
          },
        ];

    }

    find (utmSource) {

      let allowedSources = this.getAllowedSources();

      for (let i = 0; i < allowedSources.length; i++) {
        let source = allowedSources[i];

        for (let j = 0; j < source.subsources.length; j++) {
          let subsource = source.subsources[j];
          if (subsource.utmSource == utmSource) return {
            source: source.name,
            subsource: subsource.name
          }
        }

      }
    }

  }

  const parseUTM = (URLpath) => {
  
    const URLobject = new URL(URLpath);
    const urlParams = new URLSearchParams(URLobject.search);
    return {
      source: urlParams.get('utm_source'),
      medium: urlParams.get('utm_medium'),
      campaign: urlParams.get('utm_campaign'),
      campaignId: urlParams.get('utm_campaign_id'),
      partnerId: urlParams.get('utm_partner_id'),

    }
  }

  const extractHostname = (url) => {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
      hostname = url.split('/')[2];
    } else {
      hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
  }



  const isCustomSource = (trackingParamsInstance) => {
    return new CustomSource(trackingParamsInstance).hasOwnProperty('source');
  }

  const isDirectSource = (trackingParamsInstance) => {
    return trackingParamsInstance.referrer == '';
  }

  const isInternalSource = (trackingParamsInstance) => {
    return hostMatches(trackingParamsInstance.hostname, trackingParamsInstance.referrer);
  }

  const SOURCES = {
    INTERNAL: 0,
    CUSTOM: 1,
    DIRECT_VISIT: 2,
    ORGANIC: 3
  }

  const identifyVisitSource = (trackingParamsInstance) => {
    if (isInternalSource(trackingParamsInstance)) {
      return SOURCES.INTERNAL
    } else if (isCustomSource(trackingParamsInstance)) {
      return SOURCES.CUSTOM
    } else if (isDirectSource(trackingParamsInstance)) {
      return SOURCES.DIRECT_VISIT
    } else {
      return SOURCES.ORGANIC
    }
  }

  const Tag = {

    get: () => {
      return JSON.parse(localStorage.getItem('vf_track'));
    },

    set: (value) => {
      localStorage.setItem('vf_track', JSON.stringify(value));
      log('Tracking tag set:');
      log(value);
    },

    remove: () => {
      localStorage.removeItem('vf_track');
      log('Tracking tag removed');
    }
  }

  let loggingIsOn; 

  const log = (value) => {
    if (!loggingIsOn) return;

    let prefix = 'VF Track: ';

    if (typeof value === 'string') {
      console.log(prefix + value);
    } else {
      console.log(value)
    }
    
  }

  const getTrackingResult = (trackingParamsInstance) => {

    let sourceType = identifyVisitSource(trackingParamsInstance);
    let result;

    switch (sourceType) {

      case SOURCES.INTERNAL:
        log('Source identified as INTERNAL.');
        break;

      case SOURCES.CUSTOM:
        log('Source identified as CUSTOM.');
        result = new CustomSource(trackingParamsInstance);
        break;

      case SOURCES.DIRECT_VISIT:
        log('Source identified as DIRECT');
        result = new DirectSource();
        break;

      case SOURCES.ORGANIC:
        log('Source identified as ORGANIC.');
        result = new OrganicSource(trackingParamsInstance);
        break;
    }

    return result;

  }


  /* 
   * Instantiates tracking parameters with defaults. 
   * Referrer and and currentURL are typically supplied only for testing purposes. 
   */

  class TrackingParams {
    constructor (hostname, referrer,currentURL) {

      if (referrer === undefined) referrer = document.referrer;   
      if (currentURL === undefined) currentURL = window.location.href;

      if (!hostMatches(hostname, currentURL)) throw 'VF Track: Cannot instantiate tracking parameters for URL: ' + currentURL + ' because the host does not match ' + hostname;

      this.hostname = hostname;
      this.referrer = referrer;
      this.URL = currentURL;
    }
  }

  /* Returns true if the supplied URL path matches the hostnames */

  const hostMatches = (hostnames, path) => {
    if (!path) return false;
    let pathHost = new URL(path).host;
    return hostnames.indexOf(pathHost) > -1;
  }


  /* Identifies visit source and saves the result to the tracking tag */

  const track = (hostname, referrer, currentURL) => {
    if (!hostname) throw 'hostname is required.';

    let trackingParams = new TrackingParams(hostname, referrer, currentURL);
    log ('Created tracking params:')
    log(trackingParams);   

    let result = getTrackingResult(trackingParams);

    if (!result) {
      log('Tagging skipped.');
      return;
    }

    Tag.set(result);

  }


  window.VF_Track = {
    log: () => { loggingIsOn = true; return VF_Track},
    track: track,
    getTag: () => { return Tag.get() },
    removeTag: () => {return Tag.remove()}
  }

 
})();

