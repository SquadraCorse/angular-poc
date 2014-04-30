/* global module */

module.exports = function (config) {
    config.set({

        basePath : '../',

        files : [
            'src/app/js/lib/angular.js',
            'src/app/js/lib/angular-route.js',
            'src/app/js/lib/angular-resource.js',
            'src/app/js/lib/angular-animate.js',
            'src/app/js/lib/angular-mocks.js',
            'src/app/js/*.js',
            'test/unit/**/*.js'
        ],
        exclude: [
            // 'src/app/js/lib/*.js'
        ],
        autoWatch : true, // DEVELOPMENT
        // singleRun: true,

        frameworks: ['jasmine'],

        browsers : ['Chrome'],

        // browsers : ['PhantomJS'], // BAMBOO HEADLESS

        plugins : [
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-coverage',
            'karma-junit-reporter'
        ],

        reporters: ['dots', 'coverage', 'junit'],

        preprocessors : {
            'src/app/js/*.js': ['coverage']
        },

        coverageReporter : {
            type : 'lcov',
            dir : 'target/karma-coverage',
            file : 'coverage.html'
        },

        junitReporter : {
            outputFile: 'target/TESTS-unit.xml',
            suite: 'unit'
        }

    });
};