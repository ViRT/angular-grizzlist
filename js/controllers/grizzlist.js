'use strict';

var grizzlist = angular.module('grizzlist', ['ui.bootstrap']);

grizzlist.controller('TableCtrl', ['$scope', '$http', '$modal', 'localStorageService',
    function ($scope, $http, $modal, localStorageService) {
        $scope.fields = ["name", "sex", "profession", "phone", "country"];
        $scope.limit = 2;
        $scope.totalItems = 0;
        $scope.column = localStorageService.get('column') || {};
        $scope.order = localStorageService.get('order') || 'name';
        $scope.reverse = localStorageService.get('reverse') === 'true';

        $scope.orderBy = function (field) {
            if ($scope.order != field) {
                $scope.order = field;
                $scope.reverse = false;
            } else {
                $scope.reverse = !$scope.reverse;
            }

            localStorageService.set('order', $scope.order);
            localStorageService.set('reverse', $scope.reverse);
        };

        $scope.pageChanged = function () {
            localStorageService.set('page', $scope.currentPage);
        };

        $scope.loadList = function () {
            $http.get('data/members.json').success(function (data) {
                $scope.members = data;
                $scope.totalItems = data.length;
                $scope.currentPage = parseInt(localStorageService.get('page')) || 1;
            });
        };

        $scope.editColumns = function () {
            var modalInstance = $modal.open({
                templateUrl: 'template/modal/editcolumns.html',
                controller: 'ColumnsCtrl',
                scope: $scope
            });

            modalInstance.result.then(function (selectedItem) {
                localStorageService.set('column', selectedItem);
            });
        };
    }]);