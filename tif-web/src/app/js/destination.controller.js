/* global app*/
'use strict';

/**
 * DESTINATIONS DETAIL PAGE
 */
app.controller('DestinationDetailCtrl', ['$scope', '$routeParams', 'DestinationService',
function ($scope, $routeParams, DestinationService) {

	// GET ALL DETAILS ABOUT THIS DESTINATION
    $scope.destination = DestinationService.get({destinationId: $routeParams.destinationId}, function (destination) {
    	// TODO: SIMPLE DEMO
        $scope.image = destination.visualUrlSmall;
    });

    // TODO: NOT USED
    $scope.setImage = function (imageUrl) {
        $scope.image = imageUrl;
    };

}]);
