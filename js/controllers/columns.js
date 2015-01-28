'use strict';

var columns = angular.module('columns', ['ui.bootstrap']);

columns.controller('ColumnsCtrl', ['$scope', '$modalInstance', 'localStorageService',
    function ($scope, $modalInstance, localStorageService) {
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);