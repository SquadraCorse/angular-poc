/* global app*/
'use strict';

/**
 * DESTINATIONS OVERVIEW
 */
app.controller('DestinationListCtrl', ['$scope', 'DestinationService',
function ($scope, DestinationService) {

    $scope.filteredDestinations = null;                 // CURRENT FILTERED ITEMS
    $scope.destinations = DestinationService.query();   // ALL DESTINATIONS
    $scope.max = 0;

    // Get filtering items from model/collection
    $scope.continents = ['EUR', 'AFRICA', 'ASIA', 'OCEANI'];
    $scope.countries = ['NL', 'DK', 'CA', 'GB', 'CI'];
    $scope.themes = ['GOL', 'CUL', 'HIS', 'MUS', 'NAT', 'BEA', 'DIV'];
    $scope.budget = 999999;

    // CONFIGURATION
    $scope.config = {};
    $scope.config.limit = 10;
    $scope.orderProp = 'popularity';
    $scope.config.orderProp = ['popularity', 'destinationCode'];
    $scope.config.reverse = false;
    $scope.config.isLoading = false;

    // DEMO FILTERING
    // TODO: ITEMS SHOULD BE IN OUR MODEL
    $scope.filter = {};
    $scope.filter.continents = ['EUR', 'AFRICA', 'ASIA', 'OCEANI'];
    $scope.filter.countries = [];
    $scope.filter.themes = ['GOL', 'CUL', 'HIS', 'MUS', 'NAT', 'BEA', 'DIV'];

    // USER CAN SWITCH CONTINENTS
    $scope.toggleContinent = function toggle(country) {
        var idx = $scope.filter.continents.indexOf(country);
        if (idx > -1) {
            $scope.filter.continents.splice(idx, 1);
        } else {
            $scope.filter.continents.push(country);
        }
    };

    // USER CAN SWITCH COUNTRIES
    $scope.toggleCountry = function toggle(country) {
        var idx = $scope.filter.countries.indexOf(country);
        if (idx > -1) {
            $scope.filter.countries.splice(idx, 1);
        } else {
            $scope.filter.countries.push(country);
        }
    };

    // USER CAN SHOW THEMES
    $scope.toggleTheme = function toggle(theme) {
        var idx = $scope.filter.themes.indexOf(theme);
        if (idx > -1) {
            $scope.filter.themes.splice(idx, 1);
        } else {
            $scope.filter.themes.push(theme);
        }
    };

    // WOW: GOTO HELPER
    function intersect(a, b) {
        var t;
        if (b.length > a.length) {
            t = b, b = a, a = t; // indexOf to loop over shorter
        }
        return a.filter(function (e) {
            if (b.indexOf(e) !== -1) {
                return true;
            }
        });
    }

    // FILTERING DESTINATIONS IN OUR COLLECTION
    $scope.filterFunction = function (item) {

        return ($scope.filter.countries.indexOf(item.countryCode) > -1 ||
            $scope.filter.continents.indexOf(item.continentCode) > -1) &&
            intersect($scope.filter.themes, item.themes || []).length;

    };



    // ORDERING USING SPECIFIC WHISHES
    // FUGLY
    $scope.$watch('orderProp', function(value) {

        $scope.config.limit = 10;

        if (value === 'popularity') {
            $scope.config.orderProp = ['popularity', 'destinationCode'];
            $scope.config.reverse = false;
        }
        if (value === 'destinationCode') {
            $scope.config.orderProp = 'destinationCode';
            $scope.config.reverse = false;
        }

   });


    // ITEMS IN OUR FILTERED COLLECTION
    $scope.$watchCollection("filteredDestinations",
        function( newValue, oldValue ) {
            if (newValue !== oldValue) {
                $scope.max = newValue.length;
            }
        }
    );

}]);

