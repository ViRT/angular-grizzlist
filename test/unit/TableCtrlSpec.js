/**
 * Unit Tests for grizzlist.js
 */
describe('Unit: TableCtrl.', function () {
    'use strict';

    beforeEach(module('app'));

    describe('When open page', function () {
        var controller, listScope, localStorage, httpBackend, modalInstance, modal;

        beforeEach(inject(function ($controller, $httpBackend, $rootScope, $http, $modal, localStorageService) {
            listScope = $rootScope.$new();
            controller = $controller;
            localStorage = localStorageService;
            httpBackend = $httpBackend;
            modal = $modal;

            var ctrl = controller('TableCtrl', {
                $scope: listScope,
                $http: $http,
                $modal: modal,
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

        it('user can load list of members', function () {
            var response = [
                {
                    "name": "Ernest Yang",
                    "sex": "M",
                    "profession": "manager",
                    "phone": "+380997652916",
                    "country": "US"
                },
                {
                    "name": "Jack Daniels",
                    "sex": "M",
                    "profession": "director",
                    "phone": "+380673250900",
                    "country": "NO"
                }
            ];

            httpBackend.when('GET', 'data/members.json').respond(response);
            listScope.loadList();
            httpBackend.flush();

            expect(listScope.totalItems).toEqual(2);
            expect(listScope.members).toEqual(response);
        });

        it('user can close modal window', function () {
            spyOn(modal, 'open').andReturn({
                result: {then: function (callback) {
                    callback({name: true, sex: false});
                }}
            });

            listScope.editColumns();
            expect(localStorage.get('column')).toEqual({name: true, sex: false});
        });
    });
});