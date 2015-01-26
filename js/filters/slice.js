'use strict';

angular.module('sliceFilter', []).filter('slice', function() {
    return function(arr, start, end) {
        return (arr || []).slice(start, end);
    };
});