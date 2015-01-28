'use strict';

var grizzlist = angular.module('grizzlist', ['ui.bootstrap']);

grizzlist.controller('TableCtrl', ['$scope', '$http', '$modal', 'localStorageService',
    function ($scope, $http, $modal, localStorageService) {
        $scope.limit = 2;
        $scope.totalItems = 4;
        $scope.column = localStorageService.get('column') || {};
        $scope.currentPage = localStorageService.get('page') || 1;
        $scope.order = localStorageService.get('order') || 'name';
        $scope.reverse = localStorageService.get('reverse') || false;

        $scope.orderBy = function (field) {
            $scope.order = field;
            $scope.reverse = !$scope.reverse;

            localStorageService.set('order', $scope.order);
            localStorageService.set('reverse', $scope.reverse);
        };

        $scope.$watch('currentPage', function () {
            localStorageService.set('page', $scope.currentPage);
        });

        $scope.$watch('column', function () {
            localStorageService.set('column', $scope.column);
        }, true);

        $http.get('data/members.json').success(function (data) {
            $scope.members = data;
            $scope.totalItems = data.length;
        });

        $scope.editColumns = function () {
            $modal.open({
                templateUrl: 'template/modal/editcolumns.html',
                controller: 'ColumnsCtrl',
                scope: $scope
            });
        };
    }]);