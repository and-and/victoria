FSR.surveydefs = [{
    name: 'checkout',
    invite: false,
    pin: 1,
    pop: {
        when: 'later'
    },
    criteria: {
        sp: 0,
        lf: 1
    },
    include: {
        urls: ['/viewbagaction', '/commerce2/signin/opc', '/commerce2/signin/topc', 'viewBag.vs', '/checkout', '/billingForm.vs']
    },
    tracker: {
        url: 'tracker_ck.html'
    },
    links: {
        cancel: [{
            tag: 'button',
            attribute: 'id',
            patterns: ['placeOrder']
        }, {
            tag: 'img',
            attribute: 'name',
            patterns: ['purchase']
        }, {
            tag: 'input',
            attribute: 'name',
            patterns: ['expressCheckout']
        }],
        attach: [{
            tag: 'button',
            attribute: 'name',
            patterns: ['signinAndCheckoutButton', 'guestCheckout'],
            sp: 50,
            when: 'later'
        }, {
            tag: 'input',
            attribute: 'name',
            patterns: ['guestCheckout', 'signinAndCheckoutButton'],
            sp: 50,
            when: 'later'
        }],
        pause: [{
            tag: 'button',
            attribute: 'name',
            patterns: ['signinAndCheckoutButton', 'guestCheckout']
        }, {
            tag: 'input',
            attribute: 'name',
            patterns: ['guestCheckout', 'signinAndCheckoutButton']
        }]
    }
}, {
    name: 'browse',
    invite: {
        when: 'onentry'
    },
    lock: 1,
    pop: {
        when: 'later'
    },
    criteria: {
        sp: .7,
        lf: 2
    },
    include: {
        urls: ['.']
    },
    links: {
        pause: [{
            tag: 'button',
            attribute: 'name',
            patterns: ['signinAndCheckoutButton', 'guestCheckout']
        }, {
            tag: 'input',
            attribute: 'name',
            patterns: ['guestCheckout', 'signinAndCheckoutButton']
        }]
    }
}];
FSR.properties = {
    repeatdays: 90,
    
    altcookie: {},
    
    language: {
        locale: 'en'
    },
    
    exclude: {
        userAgents: ["Chrome"]
    },
    
    
    invite: {
        content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\"><b><font size=\"3\">We\'d like your feedback.</b></font><br><br>Thank you for visiting victoriassecret.com. You have been randomly selected to participate in a brief customer satisfaction survey about your online shopping experience on our site.<br><br>Since the survey is designed to measure your entire online shopping experience, it will automatically appear at the end of your visit to victoriassecret.com.</b><br><br><font size=\"1\"><i>This survey is being conducted by ForeSee Results, an independent research company.  All input you provide is for research purposes only and will remain strictly confidential.</i></font><br></div></div></BODY></HTML>',
        exclude: {
            local: ['https', 'secure'],
            referrer: []
        },
        include: {
            local: ['.']
        },
        
        width: '500',
        bgcolor: '#333',
        opacity: 0.7,
        x: 'center',
        y: 'center',
        delay: 0,
        timeout: 0,
        buttons: {
            accept: "Yes, I'll give feedback",
            decline: 'No thanks'
        },
        hideOnClick: false,
        css: 'foresee-dhtml.css',
        hide: []
    },
    
    tracker: {
        width: '500',
        height: '400',
        timeout: 4,
        adjust: false,
        pause: 10,
        alert: {
            enabled: false,
            message: 'The survey is now available.'
        },
        url: 'tracker.html'
    },
    
    survey: {
        width: 550,
        height: 600
    },
    
    qualifier: {
        width: '625',
        height: '500',
        bgcolor: '#333',
        opacity: 0.7,
        x: 'center',
        y: 'center',
        delay: 0,
        buttons: {
            accept: 'Continue'
        },
        hideOnClick: false,
        css: false,
        url: 'qualifying.html'
    },
    
    cancel: {
        url: 'cancel.html',
        width: '500',
        height: '300'
    },
    
    pop: {
        what: 'survey',
        after: 'leaving-site',
        pu: false,
        tracker: true
    },
    
    meta: {
        referrer: true,
        terms: true,
        ref_url: true,
        url: true,
        url_params: false
    },
    
    events: {
        enabled: true,
        id: true,
        codes: {
            purchase: 800,
            items: 801,
            dollars: 802
        },
        pd: 7,
        custom: {
            purchase: {
                enabled: true,
                repeat: false,
                source: 'url',
                patterns: ['checkout-submitOrder.vs']
            },
            purchase: {
                enabled: true,
                repeat: false,
                source: 'variable',
                name: 'thankyouActive'
            }
        }
    },
    
    pool: 20,
    
    previous: false,
    
    analytics: {
        google: false
    },
    
    mode: 'first-party'
};
