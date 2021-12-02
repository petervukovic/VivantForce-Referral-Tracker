describe("Custom Visit Tests", function () {
  context("Given a page with utm_source=paid_search_google", function () {
    const expected = {
      source: "Paid Search",
      subsource: "Google",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track(
        "https://vivant.eco?utm_source=paid_search_google",
        "https://www.whatever.com"
      );

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a page with utm_source=paid_search_bing", function () {
    const expected = {
      source: "Paid Search",
      subsource: "Bing",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track(
        "https://vivant.eco?utm_source=paid_search_bing",
        "https://www.whatever.com"
      );

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a page with utm_source=paid_search_yahoo", function () {
    const expected = {
      source: "Paid Search",
      subsource: "Yahoo",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track(
        "https://vivant.eco?utm_source=paid_search_yahoo",
        "https://www.whatever.com"
      );

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a page with utm_source=paid_display_google", function () {
    const expected = {
      source: "Paid Display",
      subsource: "Google",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track(
        "https://vivant.eco?utm_source=paid_display_google",
        "https://www.whatever.com"
      );

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a page with utm_source=paid_display_bing", function () {
    const expected = {
      source: "Paid Display",
      subsource: "Bing",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track(
        "https://vivant.eco?utm_source=paid_display_bing",
        "https://www.whatever.com"
      );

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a page with utm_source=paid_display_yahoo", function () {
    const expected = {
      source: "Paid Display",
      subsource: "Yahoo",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track(
        "https://vivant.eco?utm_source=paid_display_yahoo",
        "https://www.whatever.com"
      );

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a page with utm_source=paid_social_facebook", function () {
    const expected = {
      source: "Paid Social",
      subsource: "Facebook",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track(
        "https://vivant.eco?utm_source=paid_social_facebook",
        "https://www.whatever.com"
      );

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a page with utm_source=paid_social_twitter", function () {
    const expected = {
      source: "Paid Social",
      subsource: "Twitter",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track(
        "https://vivant.eco?utm_source=paid_social_twitter",
        "https://www.whatever.com"
      );

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a page with utm_source=paid_social_linkedin", function () {
    const expected = {
      source: "Paid Social",
      subsource: "LinkedIn",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track(
        "https://vivant.eco?utm_source=paid_social_linkedin",
        "https://www.whatever.com"
      );

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a page with utm_source=paid_referral", function () {
    const expected = {
      source: "Paid Referral",
      subsource: "Other/None",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track(
        "https://vivant.eco?utm_source=paid_referral",
        "https://www.whatever.com"
      );

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a page with utm_source=partner", function () {
    const expected = {
      source: "Partner",
      subsource: "Other/None",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track(
        "https://vivant.eco?utm_source=partner",
        "https://www.whatever.com"
      );

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a page with utm_source=email", function () {
    const expected = {
      source: "Email",
      subsource: "Other/None",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track(
        "https://vivant.eco?utm_source=email",
        "https://www.whatever.com"
      );

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a page with utm_source=content_facebook", function () {
    const expected = {
      source: "Content",
      subsource: "Facebook",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track(
        "https://vivant.eco?utm_source=content_facebook",
        "https://www.whatever.com"
      );

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a page with utm_source=content_twitter", function () {
    const expected = {
      source: "Content",
      subsource: "Twitter",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track(
        "https://vivant.eco?utm_source=content_twitter",
        "https://www.whatever.com"
      );

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a page with utm_source=content_instagram", function () {
    const expected = {
      source: "Content",
      subsource: "Instagram",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track(
        "https://vivant.eco?utm_source=content_instagram",
        "https://www.whatever.com"
      );

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a page with utm_source=content_linkedin", function () {
    const expected = {
      source: "Content",
      subsource: "LinkedIn",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track(
        "https://vivant.eco?utm_source=content_linkedin",
        "https://www.whatever.com"
      );

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a page with an unrecognized utm_source", function () {
    const expected = {
      source: "Organic Search",
      subsource: "Google",
    };
    it("cookie source should be based on referrer", function () {
      VF_Track.removeTag();
      VF_Track.track(
        "https://vivant.eco?utm_source=emails",
        "https://www.google.com"
      );

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });
});

describe("Custom Visit Campaign ID and Partner ID capture test", function () {
  context(
    "Given a page with utm_source=email, utm_campaign_id=123 and utm_partner_id=ABC values",
    function () {
      const expected = {
        source: "Email",
        subsource: "Other/None",
        partnerId: "ABC",
        campaignId: "123",
      };

      it(`cookie source should be ${expected.source} and subsource ${expected.subsource} `, function () {
        VF_Track.removeTag();
        VF_Track.track(
          `https://vivant.eco?utm_source=email&utm_campaign_id=${expected.campaignId}&utm_partner_id=${expected.partnerId}`,
          "https://google.com"
        );

        let cookie = VF_Track.getTag();
        expect(cookie.source).to.equal(expected.source);
        expect(cookie.subsource).to.equal(expected.subsource);
      });
      it(`cookie partnerId should be ${expected.partnerId} and campaignId should be ${expected.campaignId}`, function () {
        VF_Track.removeTag();
        VF_Track.track(
          `https://vivant.eco?utm_source=email&utm_campaign_id=${expected.campaignId}&utm_partner_id=${expected.partnerId}`,
          "https://google.com"
        );

        let cookie = VF_Track.getTag();
        expect(cookie.campaignId).to.equal(expected.campaignId);
        expect(cookie.partnerId).to.equal(expected.partnerId);
      });
    }
  );
});

describe("Direct Visit Test", function () {
  context("Given a referrer is blank", function () {
    const expected = {
      source: "Website",
      subsource: "Other/None",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track("https://vivant.eco", "");

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a referrer is a page from the same domain", function () {
    const expected = {
      source: "Website",
      subsource: "Other/None",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track("https://vivant.eco", "https://live.vivant.eco/whatever");

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });
});

describe("Organic Search Visit Test", function () {
  context("Given a referrer is Google", function () {
    const expected = {
      source: "Organic Search",
      subsource: "Google",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track("https://vivant.eco", "https://google.com");

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a referrer is Yahoo", function () {
    const expected = {
      source: "Organic Search",
      subsource: "Yahoo",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track("https://vivant.eco", "https://www.yahoo.com");

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a referrer is Bing", function () {
    const expected = {
      source: "Organic Search",
      subsource: "Bing",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track("https://vivant.eco", "https://bing.com");

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });
});

describe("Paid Search Referral Test", function () {
  context(
    "Given there is a gclid parameter and referrer is Google",
    function () {
      const expected = {
        source: "Paid Search",
        subsource: "Google",
      };
      it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
        VF_Track.removeTag();
        VF_Track.track("https://vivant.eco?gclid=123", "https://google.com");

        let cookie = VF_Track.getTag();
        expect(cookie.source).to.equal(expected.source);
        expect(cookie.subsource).to.equal(expected.subsource);
      });
    }
  );

  context(
    "Given there is a utm_medium=ppc parameter and referrer is Google",
    function () {
      const expected = {
        source: "Paid Search",
        subsource: "Google",
      };
      it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
        VF_Track.removeTag();
        VF_Track.track(
          "https://vivant.eco?utm_medium=ppc",
          "https://google.com"
        );

        let cookie = VF_Track.getTag();
        expect(cookie.source).to.equal(expected.source);
        expect(cookie.subsource).to.equal(expected.subsource);
      });
    }
  );

  context(
    "Given there is a utm_medium=ppc parameter and referrer is Yahoo",
    function () {
      const expected = {
        source: "Paid Search",
        subsource: "Yahoo",
      };
      it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
        VF_Track.removeTag();
        VF_Track.track(
          "https://vivant.eco?utm_medium=ppc",
          "https://yahoo.com"
        );

        let cookie = VF_Track.getTag();
        expect(cookie.source).to.equal(expected.source);
        expect(cookie.subsource).to.equal(expected.subsource);
      });
    }
  );

  context(
    "Given there is a utm_medium=ppc parameter and referrer is Bing",
    function () {
      const expected = {
        source: "Paid Search",
        subsource: "Bing",
      };
      it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
        VF_Track.removeTag();
        VF_Track.track("https://vivant.eco?utm_medium=ppc", "https://bing.com");

        let cookie = VF_Track.getTag();
        expect(cookie.source).to.equal(expected.source);
        expect(cookie.subsource).to.equal(expected.subsource);
      });
    }
  );

  context(
    "Given there is a utm_medium=ppc parameter and referrer is unknown",
    function () {
      const expected = {
        source: "Paid Search",
        subsource: "Other/None",
      };
      it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
        VF_Track.removeTag();
        VF_Track.track(
          "https://vivant.eco?utm_medium=ppc",
          "https://whatever.com"
        );

        let cookie = VF_Track.getTag();
        expect(cookie.source).to.equal(expected.source);
        expect(cookie.subsource).to.equal(expected.subsource);
      });
    }
  );
});

describe("Organic Social Visit Test", function () {
  context("Given a referrer is Facebook", function () {
    const expected = {
      source: "Organic Social",
      subsource: "Facebook",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track("https://vivant.eco", "https://facebook.com");

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a referrer is Twitter", function () {
    const expected = {
      source: "Organic Social",
      subsource: "Twitter",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track("https://vivant.eco", "https://twitter.com");

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a referrer is Twitter (t.co)", function () {
    const expected = {
      source: "Organic Social",
      subsource: "Twitter",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track("https://vivant.eco", "https://t.co");

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a referrer is Instagram", function () {
    const expected = {
      source: "Organic Social",
      subsource: "Instagram",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track("https://vivant.eco", "https://instagram.com");

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a referrer is LinkedIn", function () {
    const expected = {
      source: "Organic Social",
      subsource: "LinkedIn",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track("https://vivant.eco", "https://www.linkedin.com");

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a referrer is YouTube", function () {
    const expected = {
      source: "Organic Social",
      subsource: "YouTube",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track("https://vivant.eco", "https://www.youtube.com");

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });

  context("Given a referrer is Pinterest", function () {
    const expected = {
      source: "Organic Social",
      subsource: "Pinterest",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track("https://vivant.eco", "https://www.pinterest.com");

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });
});

describe("Organic Referral Visit Test", function () {
  context("Given an unknown referrer", function () {
    const expected = {
      source: "Organic Referral",
      subsource: "Other/None",
    };
    it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
      VF_Track.removeTag();
      VF_Track.track("https://vivant.eco", "https://www.someotherdomain.com");

      let cookie = VF_Track.getTag();
      expect(cookie.source).to.equal(expected.source);
      expect(cookie.subsource).to.equal(expected.subsource);
    });
  });
});

describe("Last Click Attribution Test", function () {
  context(
    "Given there is an existing organic search cookie and the next visit is direct",
    function () {
      const expected = {
        source: "Organic Search",
        subsource: "Google",
      };
      it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
        VF_Track.track("https://vivant.eco", "https://google.com");
        VF_Track.track("https://vivant.eco", "");

        let cookie = VF_Track.getTag();
        expect(cookie.source).to.equal(expected.source);
        expect(cookie.subsource).to.equal(expected.subsource);
      });
    }
  );

  context(
    "Given there is an existing paid social cookie and the next visit is direct",
    function () {
      const expected = {
        source: "Paid Social",
        subsource: "Facebook",
      };
      it(`cookie source should be ${expected.source} and subsource ${expected.subsource}`, function () {
        VF_Track.track(
          "https://vivant.eco?utm_source=paid_social_facebook",
          "https://facebook.com"
        );
        VF_Track.track("https://vivant.eco/somepage", "https://vivant.eco");

        let cookie = VF_Track.getTag();
        expect(cookie.source).to.equal(expected.source);
        expect(cookie.subsource).to.equal(expected.subsource);
      });
    }
  );
});
