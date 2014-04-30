# TIF demonstration app

## Overview

Demonstration showing benefits using framework like Angular. Current setup:

- Github
- CodeShip (hook to github, doing unit tests and deploy to heroku)
- Travis-ci
- Sauce Labs
- Heroku

<img src="https://travis-ci.org/SquadraCorse/angular-poc.svg?branch=master" /><br />
<img src="https://www.codeship.io/projects/7aef6a10-b206-0131-890f-4214b91a45ce/status" />


## Resources
1. https://github.com/SquadraCorse/angular-poc (source code)
2. https://www.codeship.io/projects/20027 (codeship setup: from commit master to publishing on Heorku)
3. https://travis-ci.org/SquadraCorse/angular-poc (travis: do grunt build (packaging) and unit and e2e testing)
4. http://travel-search.herokuapp.com/ (heroku: deploy app)


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


<iframe src="http://a.svtrd.com/s/135/p/140?clickTracker0=http%3A%2F%2Fad.doubleclick.net%2Fclk%3B277038242%3B104457366%3Bg%3Fhttp%3A%2F%2Fadclick.g.doubleclick.net%2Faclk%3Fsa%3DL%26ai%3DB5fPsCU1hU-GUDoqq-wb-24DoCwAAAAAQASAAOABQqYi9rwZY5a_iGmCRjKCFjBiCAQljYS1nb29nbGWyARB3d3cuZ2VlbnN0aWpsLm5syAEJqAMB4AQCmgUZCLiuWxCtoNgxGLqBk4QBIOWv4hoolKyCAtoFAggBoAYf4AaCrYIC%26num%3D0%26sig%3DAOD64_1ar0qMGpios8_ZPUjhgU2h4XeZ9g%26client%3D%26adurl%3D&amp;locale=gb_en&amp;cb=1398886084338" width="468" height="60" hsapce="0" vspace="0" frameborder="0" bordercolor="#000000" marginwidth="0" marginheight="0" scrolling="no"></iframe>
