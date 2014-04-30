/* global app*/
'use strict';


/**
 * Lazy load Destination images
 * Show image when it is shown in pageview user
 * Listen on scroll
 * TODO: listen on changing collection?
 */
app.directive('tifLazyImage', ['$window', function ($window) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            // CONFIGURATION VARS
            var loaded = false;
            var scrollDistance = 0;
            $window = angular.element($window);

            var image = attrs.tifLazyImage;

            // ON SCROLL, CHECK IF ELEMENT IS IN VIEWPORT
            var handler = function () {
                // LOCAL CONFIG VARS
                var elementBottom, remaining, shouldLoad, windowBottom;

                windowBottom = $window.height() + $window.scrollTop();
                elementBottom = element.offset().top + element.height();
                remaining = elementBottom - windowBottom;

                // DO WE ACTUALLY NEED TO SET THE IMAGE TAG AND FORCE LOADING IMAGE
                shouldLoad = remaining <= $window.height() * scrollDistance;

                // DO IT ONCE
                if (shouldLoad && !loaded) {

                    loaded = true;
                    // SET NEW IMAGE
                    // TODO: GET SRCSET ATTRIBUTES AND COLLECT RIGHT IMAGE TO PLACE
                    // TODO: FOR DEMO WE NOW ONLY HAVE ONE, SO MAKE HELPER FUNCTION FOR SRCSET!!
                    var img = '<img alt="" src="' + image + '" />';
                    element.append(img);

                    // ELEMENT WILL NOT HAVE TO LISTEN TO SCROLL ANYMORE
                    $window.off('scroll', handler);
                }

            };

            // SET HANDLER ON SCROLL
            $window.on('scroll', handler);

            // WHEN SCOPE IS DESTROYED REMOVE HANDLER
            scope.$on('$destroy', function () {
                return $window.off('scroll', handler);
            });

            return handler();

        }
    };

}]);





/**
 * BUTTON: MORE DESTINATIONS
 */
app.directive('moreDestinations', [function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            // STYLING CLASS FOR BUTTON
            var className = 'g-btn-disabled';

            // VISUAL STATE BUTTON
            var buttonState = function() {

                if (scope.config.limit < scope.max) {
                    // DON'T DISABLE BUTTON
                    element.removeClass(className);
                    attrs.$set('disabled', false);
                } else {
                    // DISABLE BUTTON
                    element.addClass(className);
                    attrs.$set('disabled', true);
                }

            };

            // SET DELEGATION ON CLICKING OF BUTTON
            element.on('click', function (event) {

                if (scope.config.limit < scope.max) {
                    scope.config.limit = scope.config.limit + 10;
                }

                buttonState();

                scope.$apply();
            });

            // WHEN OUR FILTERED COLLECTION CHANGES, SEE IF BUTTON STATE MUST BE CHANGED
            scope.$watch('max', buttonState);

        }
    };

}]);
