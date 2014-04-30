/* global app*/
'use strict';

/**
 * Truncate string
 * @return {string} String truncated at x characters showing... or not.
 */
app.filter('truncate', function () {
	return function (input, length) {
		if (input === undefined) {
            return '';
        }
		return input.length > length ? input.substring(0, length) + '...' : input;
	};
});
