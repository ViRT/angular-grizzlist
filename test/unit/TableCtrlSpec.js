/**
 * Unit Tests for grizzlist.js
 */
describe('Unit: TableCtrl.', function () {
    'use strict';

    beforeEach(module('app'));

    describe('When open page', function () {
        var controller, listScope, localStorage, httpBackend;

        beforeEach(inject(function ($controller, $httpBackend, $rootScope, $http, $modal, localStorageService) {
            listScope = $rootScope.$new();
            controller = $controller;
            localStorage = localStorageService;
            httpBackend = $httpBackend;

            var ctrl = controller('TableCtrl', {
                $scope: listScope,
                $http: $http,
                $modal: $modal,
                localStorageService: localStorage
            });

        }));

        it('table headers should be initialize', function () {
            expect(listScope.column).toEqual({});
        });

        it('user can change sort ordering', function () {
            expect(listScope.reverse).toEqual(false);
            expect(listScope.order).toEqual('name');

            listScope.orderBy('sex');
            expect(listScope.reverse).toEqual(false);
            expect(listScope.order).toEqual('sex');

            listScope.orderBy('sex');
            expect(listScope.reverse).toEqual(true);
            expect(listScope.order).toEqual('sex');
        });

        it('user can change list page', function () {
            expect(listScope.currentPage).toEqual(undefined);
            expect(localStorage.get('page')).toEqual(undefined);

            listScope.currentPage = 1;
            expect(localStorage.get('page')).toEqual(undefined);

            listScope.pageChanged();
            expect(listScope.currentPage).toEqual(1);
            expect(localStorage.get('page')).toEqual(1);

        });
    });
});