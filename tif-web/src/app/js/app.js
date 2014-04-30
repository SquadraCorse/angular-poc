'use strict';

/* OUR MAIN APPLICATION */
var app = angular.module('my-app', ['ngRoute', 'ngAnimate', 'ngResource']);

/* ROUTING */
app.config(['$routeProvider',
    function ($routeProvider) {

    // OUR SEARCH PAGE
    $routeProvider.when('/destinations', {
        templateUrl: 'partials/tif-destinations-list.html',
        controller: 'DestinationListCtrl'
    // OUR DESTINATION PAGE
    }).when('/destinations/:destinationId', {
        templateUrl: 'partials/tif-destination-detail.html',
        controller: 'DestinationDetailCtrl'
    // FALLBACK URL TO SEARCH PAGE
    }).otherwise({
        redirectTo: '/destinations'
    });
}]);
