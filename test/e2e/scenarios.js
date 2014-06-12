/* global describe, it */
'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('DESTINATION SEARCH:', function () {

    it('should redirect index.html to index.html#/destinations', function () {
        browser.get('src/app/index.html');
        browser.getLocationAbsUrl().then(function (url) {
            expect(url.split('#')[1]).toBe('/destinations');
        });
    });


    describe('LISTVIEW', function () {

        beforeEach(function () {
            browser.get('src/app/index.html#/destinations');
        });


        it('should filter the destination list as user types into the search box', function () {

            var destinationsList = element.all(by.repeater('destination in (filteredDestinations = (destinations | filter: filterFunction | filter:query | orderBy:config.orderProp:config.reverse)) | limitTo:config.limit'));
            var query = element(by.model('query'));

            expect(destinationsList.count()).toBe(10);

            query.sendKeys('BCN');
            expect(destinationsList.count()).toBe(1);

            query.clear();
            query.sendKeys('CPT');
            expect(destinationsList.count()).toBe(1);

        });


        it('should be possible to control destination order via the drop down select box', function () {

            var destinationCode = element.all(by.repeater('destination in (filteredDestinations = (destinations | filter: filterFunction | filter:query | orderBy:config.orderProp:config.reverse)) | limitTo:config.limit').column('{{destination.destinationCode}}'));

            var query = element(by.model('query'));

            function getNames() {
                return destinationCode.map(function (elm) {
                    return elm.getText();
                });
            }

            query.sendKeys('AB'); //let's narrow the dataset to make the test assertions shorter



            
            element(by.css('option[value="destinationCode"]')).click();

            expect(getNames()).toEqual([
                'ABJ', 'ABV', 'ABZ', 'ADD', 'ALG', 'BGO', 'BIA', 'BOM', 'BRS', 'BSL'
            ]);


            element(by.css('option[value="popularity"]')).click();

            expect(getNames()).toEqual([
                'CPT', 'KUL', 'NBO', 'ABZ', 'BOM', 'EDI', 'FLR', 'GLA', 'GOT', 'GVA'
            ]);


        });


        it('should render destination specific links', function () {
            var query = element(by.model('query'));
            query.sendKeys('BCN');
            element(by.css('.tif-destination .tif-search-image')).click();

            browser.getLocationAbsUrl().then(function (url) {
                expect(url.split('#')[1]).toBe('/destinations/BCN');
            });
        });
    });

});


describe('DESTINATION DETAILS:', function () {

    describe('Destination detail view', function () {

        beforeEach(function () {
            browser.get('src/app/index.html#/destinations/AAL');
        });

        it('should display AAL page', function () {
            expect(element(by.binding('destination.destinationCode')).getText()).toBe('AAL');
        });

        it('should display the first Destination image as the main image', function () {
            expect(element(by.css('img.tif-image')).getAttribute('src')).toMatch(/http:\/\/www.klm.com\/travel\/en\/images\/C3FD604F-73A4-455B-911D-0E7E059EC45D_tcm493-492470_300x300_80.jpg/);
        });


    });
});
