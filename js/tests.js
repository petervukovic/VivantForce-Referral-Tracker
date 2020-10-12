(function(){

    function logTestResult(testName, result) {

        let color = 'red';
        if (result) color = 'green';
        console.log(testName + ' passed: ' + '%c ' + result, 'color:' + color);
    
    }
    
    function testDirectVisit() {
    
        VF_Track.log().track('wikipedia.org', '', 'https://wikipedia.org');
        let tag = VF_Track.getTag();
        let passed = tag.source == 'Website' && tag.subsource == 'Other/None';
    
        logTestResult('Direct Visit Test', passed);
    
    }
    
    function testOrganicVisit() {
    
        VF_Track.log().track('wikipedia.org', 'https://www.google.com', 'https://wikipedia.org');
        let tag = VF_Track.getTag();
        let passed = tag.source == 'Organic Search' && tag.subsource == 'Google';
    
        logTestResult('Organic Visit Test', passed);
    
    }
    
    
    function testCustomVisitPaidSearchGoogle() {
    
        VF_Track.track('wikipedia.org', 'https://www.google.com', 'https://wikipedia.org?utm_source=paid_search_google&utm_medium=ppc&utm_campaign=Hello world&utm_campaign_id=2131317127&utm_partner_id=2121321312');
    
        let tag = VF_Track.getTag();
        let passed = tag.source == 'Paid Search' && tag.subsource == 'Google';
    
        logTestResult('Custom Visit - Paid Search Google', passed);
    
    }
    
    function testCustomVisitPaidSearchBing() {
    
        VF_Track.track('wikipedia.org', 'https://www.google.com', 'https://wikipedia.org?utm_source=paid_search_bing&utm_medium=ppc&utm_campaign=Hello world&utm_campaign_id=2131317127&utm_partner_id=2121321312');
    
        let tag = VF_Track.getTag();
        let passed = tag.source == 'Paid Search' && tag.subsource == 'Bing';
    
        logTestResult('Custom Visit - Paid Search Bing', passed);
    
    }
    
    function testCustomVisitPaidSearchYahoo() {
    
        VF_Track.track('wikipedia.org', 'https://www.google.com', 'https://wikipedia.org?utm_source=paid_search_yahoo&utm_medium=ppc&utm_campaign=Hello world&utm_campaign_id=2131317127&utm_partner_id=2121321312');
    
        let tag = VF_Track.getTag();
        let passed = tag.source == 'Paid Search' && tag.subsource == 'Yahoo';
    
        logTestResult('Custom Visit - Paid Search Yahoo', passed);
    
    }
    
    function testCustomVisitPaidDisplayGoogle() {
    
        VF_Track.track('wikipedia.org', 'https://www.google.com', 'https://wikipedia.org?utm_source=paid_display_google&utm_medium=ppc&utm_campaign=Hello world&utm_campaign_id=2131317127&utm_partner_id=2121321312');
    
        let tag = VF_Track.getTag();
        let passed = tag.source == 'Paid Display' && tag.subsource == 'Google';
    
        logTestResult('Custom Visit - Paid Display Google', passed);
    
    }
    
    
    function testCustomVisitPaidDisplayBing() {
    
        VF_Track.track('wikipedia.org', 'https://www.google.com', 'https://wikipedia.org?utm_source=paid_display_bing&utm_medium=ppc&utm_campaign=Hello world&utm_campaign_id=2131317127&utm_partner_id=2121321312');
    
        let tag = VF_Track.getTag();
        let passed = tag.source == 'Paid Display' && tag.subsource == 'Bing';
    
        logTestResult('Custom Visit - Paid Display Bing', passed);
    
    }
    
    function testCustomVisitPaidDisplayYahoo() {
    
        VF_Track.track('wikipedia.org', 'https://www.google.com', 'https://wikipedia.org?utm_source=paid_display_yahoo&utm_medium=ppc&utm_campaign=Hello world&utm_campaign_id=2131317127&utm_partner_id=2121321312');
    
        let tag = VF_Track.getTag();
        let passed = tag.source == 'Paid Display' && tag.subsource == 'Yahoo';
    
        logTestResult('Custom Visit - Paid Display Yahoo', passed);
    
    }
    
    
    function testCustomVisitPaidSocialFacebook() {
    
        VF_Track.track('wikipedia.org', 'https://www.google.com', 'https://wikipedia.org?utm_source=paid_social_facebook&utm_medium=ppc&utm_campaign=Hello world&utm_campaign_id=2131317127&utm_partner_id=2121321312');
    
        let tag = VF_Track.getTag();
        let passed = tag.source == 'Paid Social' && tag.subsource == 'Facebook';
    
        logTestResult('Custom Visit - Paid Social Facebook', passed);
    
    }
    
    function testCustomVisitPaidSocialTwitter() {
    
        VF_Track.track('wikipedia.org', 'https://www.google.com', 'https://wikipedia.org?utm_source=paid_social_twitter&utm_medium=ppc&utm_campaign=Hello world&utm_campaign_id=2131317127&utm_partner_id=2121321312');
    
        let tag = VF_Track.getTag();
        let passed = tag.source == 'Paid Social' && tag.subsource == 'Twitter';
    
        logTestResult('Custom Visit - Paid Social Twitter', passed);
    
    }
    
    
    function testCustomVisitPaidSocialInstagram() {
    
        VF_Track.track('wikipedia.org', 'https://www.google.com', 'https://wikipedia.org?utm_source=paid_social_instagram&utm_medium=ppc&utm_campaign=Hello world&utm_campaign_id=2131317127&utm_partner_id=2121321312');
    
        let tag = VF_Track.getTag();
        let passed = tag.source == 'Paid Social' && tag.subsource == 'Instagram';
    
        logTestResult('Custom Visit - Paid Social Instagram', passed);
    
    }
    
    function testCustomVisitPaidSocialLinkedIn() {
    
        VF_Track.track('wikipedia.org', 'https://www.google.com', 'https://wikipedia.org?utm_source=paid_social_linkedin&utm_medium=ppc&utm_campaign=Hello world&utm_campaign_id=2131317127&utm_partner_id=2121321312');
    
        let tag = VF_Track.getTag();
        let passed = tag.source == 'Paid Social' && tag.subsource == 'LinkedIn';
    
        logTestResult('Custom Visit - Paid Social LinkedIn', passed);
    
    }
    
    function testCustomVisitPaidReferral() {
    
        VF_Track.track('wikipedia.org', 'https://www.google.com', 'https://wikipedia.org?utm_source=paid_referral&utm_medium=ppc&utm_campaign=Hello world&utm_campaign_id=2131317127&utm_partner_id=2121321312');
    
        let tag = VF_Track.getTag();
        let passed = tag.source == 'Paid Referral' && tag.subsource == 'Other/None';
    
        logTestResult('Custom Visit - Paid Referral', passed);
    
    }
    
    function testCustomVisitPartner() {
    
        VF_Track.track('wikipedia.org', 'https://www.google.com', 'https://wikipedia.org?utm_source=partner&utm_medium=ppc&utm_campaign=Hello world&utm_campaign_id=2131317127&utm_partner_id=2121321312');
    
        let tag = VF_Track.getTag();
        let passed = tag.source == 'Partner' && tag.subsource == 'Other/None';
    
        logTestResult('Custom Visit - Partner', passed);
    
    }
    
    
    function testCustomVisitEmail() {
    
        VF_Track.track('wikipedia.org', 'https://www.google.com', 'https://wikipedia.org?utm_source=email&utm_medium=ppc&utm_campaign=Hello world&utm_campaign_id=2131317127&utm_partner_id=2121321312');
    
        let tag = VF_Track.getTag();
        let passed = tag.source == 'Email' && tag.subsource == 'Other/None';
    
        logTestResult('Custom Visit - Email', passed);
    
    }
    
    function testCustomVisitContentFacebook() {
    
        VF_Track.track('wikipedia.org', 'https://www.google.com', 'https://wikipedia.org?utm_source=content_facebook&utm_medium=ppc&utm_campaign=Hello world&utm_campaign_id=2131317127&utm_partner_id=2121321312');
    
        let tag = VF_Track.getTag();
        let passed = tag.source == 'Content' && tag.subsource == 'Facebook';
    
        logTestResult('Custom Visit - Content Facebook', passed);
    
    }
    
    
    function testCustomVisitContentTwitter() {
    
        VF_Track.track('wikipedia.org', 'https://www.google.com', 'https://wikipedia.org?utm_source=content_twitter&utm_medium=ppc&utm_campaign=Hello world&utm_campaign_id=2131317127&utm_partner_id=2121321312');
    
        let tag = VF_Track.getTag();
        let passed = tag.source == 'Content' && tag.subsource == 'Twitter';
    
        logTestResult('Custom Visit - Content Twitter', passed);
    
    }
    
    function testCustomVisitContentInstagram() {
    
        VF_Track.track('wikipedia.org', 'https://www.google.com', 'https://wikipedia.org?utm_source=content_instagram&utm_medium=ppc&utm_campaign=Hello world&utm_campaign_id=2131317127&utm_partner_id=2121321312');
    
        let tag = VF_Track.getTag();
        let passed = tag.source == 'Content' && tag.subsource == 'Instagram';
    
        logTestResult('Custom Visit - Content Instargram', passed);
    
    }
    
    function testCustomVisitContentLinkedIn() {
    
        VF_Track.track('wikipedia.org', 'https://www.google.com', 'https://wikipedia.org?utm_source=content_linkedin&utm_medium=ppc&utm_campaign=Hello world&utm_campaign_id=2131317127&utm_partner_id=2121321312');
    
        let tag = VF_Track.getTag();
        let passed = tag.source == 'Content' && tag.subsource == 'LinkedIn';
    
        logTestResult('Custom Visit - Content LinkedIn', passed);
    
    }
    
    
    
    function runTests() {
    
    testDirectVisit();
    testOrganicVisit();
    testCustomVisitPaidSearchGoogle();
    testCustomVisitPaidSearchBing();
    testCustomVisitPaidSearchYahoo();
    
    
    testCustomVisitPaidDisplayGoogle();
    testCustomVisitPaidDisplayBing();
    testCustomVisitPaidDisplayYahoo();
    
    testCustomVisitPaidSocialFacebook();
    testCustomVisitPaidSocialTwitter(); 
    testCustomVisitPaidSocialInstagram();
    testCustomVisitPaidSocialLinkedIn();
    
    testCustomVisitPaidReferral();
    
    testCustomVisitPartner();
    testCustomVisitEmail();
    
    testCustomVisitContentFacebook();
    testCustomVisitContentTwitter();
    testCustomVisitContentInstagram();
    testCustomVisitContentLinkedIn();
    
    }
    
    runTests();
    

})()





