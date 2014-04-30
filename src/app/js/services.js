/* global app */
'use strict';

/**
 * BASIC SERVICES REST
 */
app.service('DestinationService', ['$resource',
  function ($resource) {

    // QUERY API FOR GETTING DESTINATION(S)
    // TODO: MAKE IT MORE FLEXIBLE
    return $resource('destinations/:destinationId.json', {}, {
        // TODO MAKE IT LIKE PS ADMIN
        query: {
            method: 'GET',
            params: {
                destinationId: 'destinations'
            },
            isArray: true
        }
    });

}]);
