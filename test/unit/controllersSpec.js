'use strict';

var data = [{
  "destinationCode":"YXX",
  "countryCode":"CA",
  "continentCode":"N_AMER",
  "flightDuration":{"hours":10,"minutes":19},
  "minTemperature":13,"maxTemperature":21,
  "popularity":5,
  "minimumPrice":{"currency":"EUR","displayPrice":820.0},
  "themes":["ACT","SHO","FAM"],
  "coordinates":{"lat":49.05083,"lon":-122.28056},
  "introText": "Laat u verwonderen door de stad aan de voet van de Tafelberg. Boek vliegtickets naar Kaapstad en huur een auto voor uitstapjes naar het bergmassief, prachtige natuurparken en wijngaarden. Ook de witte zandstranden, zoals Camps Bay, mag u niet missen. Voor...",
  "visualUrlSmall": "/travel/en/images/17734610-2305-40C7-AC68-9E99133D1B94_tcm493-438144_300x300_80.jpg",
  "visualUrlMedium": "/travel/en/images/17734610-2305-40C7-AC68-9E99133D1B94_tcm493-438144_600x600_80.jpg",
  "compId": "tcm:501-466680",
  "lastPublished": "2014-03-17T17:04:45+0100",
  "lastChanged": "2013-11-29T12:29:24+0100",
  "destinationLink":"/travel/{country}_{language}/apps/ebt/calendar.htm?application=TIF&country={COUNTRY}&language={language}&origin={origin}&destination=YXX&canModify=ORIGIN%2CDESTINATION&WT.seg_4=TIF_EBT_YXX","pricesLink":"/travel/{country}_{language}/apps/ebt/calendar.htm?application=TIF&country={COUNTRY}&language={language}&origin={origin}&destination=YXX&canModify=ORIGIN%2CDESTINATION&WT.seg_4=TIF_EBT_YXX"
}, {
  "destinationCode":"AAL",
  "countryCode":"DK",
  "continentCode":"EUR",
  "flightDuration":{"hours":1,"minutes":20},
  "minTemperature":12,"maxTemperature":20,
  "popularity":5,
  "minimumPrice":{"currency":"EUR","displayPrice":178.0},
  "themes":["ART","CUL","ROM"],
  "coordinates":{"lat":57.08944,"lon":9.84889},
  "introText": "Zin in zon, zee én cultuur? Boek vliegtickets naar Barcelona en laat u overweldigen door Gaudi's bouwwerken, FC Barcelona en de mooiste winkels. U komt ogen en oren tekort! Want naast Gaudi’s Sagrada Familia, Parc Güell en Casa Mila, vindt u in Barcelona...",
  "visualUrlSmall": "/travel/en/images/0528B72E-201B-472F-8160-42EA1AA9E7E9_tcm493-438267_300x300_80.jpg",
  "visualUrlMedium": "/travel/en/images/0528B72E-201B-472F-8160-42EA1AA9E7E9_tcm493-438267_600x600_80.jpg",
  "compId": "tcm:501-466691",
  "lastPublished": "2014-03-17T17:05:25+0100",
  "lastChanged": "2013-11-29T12:10:24+0100",
  "destinationLink":"/travel/{country}_{language}/apps/ebt/calendar.htm?application=TIF&country={COUNTRY}&language={language}&origin={origin}&destination=AAL&canModify=ORIGIN%2CDESTINATION&WT.seg_4=TIF_EBT_AAL",
  "pricesLink":"/travel/{country}_{language}/apps/ebt/calendar.htm?application=TIF&country={COUNTRY}&language={language}&origin={origin}&destination=AAL&canModify=ORIGIN%2CDESTINATION&WT.seg_4=TIF_EBT_AAL"
}];


/* jasmine specs for controllers go here */
describe('Destination controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });



  beforeEach(module('my-app'));

  /* DESTINATIONS LIST */
  describe('DestinationListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('destinations/destinations.json').respond(data);

      scope = $rootScope.$new();
      ctrl = $controller('DestinationListCtrl', {$scope: scope});

    }));


    it('should create "destinations" model with 2 destinations fetched from xhr', function() {
      expect(scope.destinations).toEqualData([]);
      $httpBackend.flush();

      expect(scope.destinations).toEqualData(data);
    });


    it('should set the default value of orderProp model', function() {
      expect(scope.config.orderProp[0]).toBe('popularity');
    });
  });







  describe('DestinationDetailCtrl', function(){
    var scope, $httpBackend, ctrl,
        xyzPhoneData = function() {
          return {
            "name": "AAL",
            "visualUrlSmall":"/travel/en/images/0528B72E-201B-472F-8160-42EA1AA9E7E9_tcm493-438267_300x300_80.jpg"          }
        };


    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('destinations/AAL.json').respond(xyzPhoneData());

      $routeParams.destinationId = 'AAL';
      scope = $rootScope.$new();
      ctrl = $controller('DestinationDetailCtrl', {$scope: scope});
    }));


    it('should fetch destination detail', function() {
      expect(scope.destination).toEqualData({});
      $httpBackend.flush();

      expect(scope.destination).toEqualData(xyzPhoneData());
    });
  });
});
