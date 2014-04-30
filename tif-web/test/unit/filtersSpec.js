/* describe, beforeEach, module, inject */
'use strict';

/* jasmine specs for filters go here */

describe('filter', function () {

	beforeEach(module('my-app'));

	it('truncate: less then 10 characters should not have "..." while more should',
		// this is how we inject a filter by appending Filter to the end of the filter name
		inject(function (truncateFilter) {
			expect(truncateFilter('abcdefghijklmnopq', 10).length).toBe(13);
			expect(truncateFilter('abcdefghij', 10).length).toBe(10);
			expect(truncateFilter(undefined, 10).length).toBe(0);
		})
	);

});
