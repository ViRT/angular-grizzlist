'use strict';

var columns = angular.module('columns', ['ui.bootstrap']);

columns.controller('ColumnsCtrl', ['$scope', '$modalInstance',
    function ($scope, $modalInstance) {
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        $scope.save = function () {
            $modalInstance.close($scope.column);
        };
    }]);