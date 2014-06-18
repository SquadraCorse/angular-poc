exports.config = {

    allScriptsTimeout: 11000,

    chromeDriver: 'node_modules/grunt-protractor-runner/node_modules/protractor/selenium/chromedriver',
    
    specs: [
        'e2e/*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    browsers: ['Chrome'],

    baseUrl: 'http://localhost:8000/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        // isVerbose: true,
        // showColors: true,
        includeStackTrace: true
    }
};
