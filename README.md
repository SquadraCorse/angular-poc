# TIF demonstration app

## Overview

Demonstration showing benefits using framework like Angular

### Running the app during development

1. Run `npm start`
2. navigate your browser to `http://localhost:8000/src/app/index.html` to see the app running in your browser.

### Running unit tests

We recommend using [Jasmine][jasmine] and [Karma][karma] for your unit tests/specs, but you are free
to use whatever works for you.

- Ensure the tools are installed: run `npm install`.
- Start Karma with `grunt test:unit`
  - A browser will start and connect to the Karma server. Chrome is the default browser, others can
  be captured by loading the same url as the one in Chrome.
- Karma will sit and watch your application and test JavaScript files. To run or re-run tests just
  change any of your these files.


### End to end testing

We recommend using [Jasmine][jasmine] and [Protractor][protractor] for end-to-end testing.

Requires a webserver that serves the application. See Running the app during development, above.

- Ensure that the tools are installed: run `npm install`.
- Start the end2end tests with: `grunt e2e:dev`. Protractor will execute the
  end2end test scripts against the web application itself.
  - The configuration is set up to run the tests on Chrome directly. If you want to run against
    other browsers then you must install the webDriver, `npm run update-webdriver`.
  - Currently integration with Sauce Labs is done in order to test multiple browsers

