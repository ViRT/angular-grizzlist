/**
 * Unit Tests for grizzlist.js
 */
describe('Unit: TableCtrl.', function () {
    'use strict';

    beforeEach(module('app'));

    describe('When open page', function () {
        var controller, modalScope, modalInstance;

        beforeEach(inject(function ($controller, $rootScope) {
            modalScope = $rootScope.$new();
            controller = $controller;

            modalInstance = {
                close: jasmine.createSpy('modalInstance.close'),
                dismiss: jasmine.createSpy('modalInstance.dismiss'),
                result: {
                    then: jasmine.createSpy('modalInstance.result.then')
                }
            };

            var ctrlModal = controller('ColumnsCtrl', {
                $scope: modalScope,
                $modalInstance: modalInstance
            });
        }));

        it('user can close modal window without save', function () {
            modalScope.cancel();
            expect(modalInstance.dismiss).toHaveBeenCalled();
        });

        it('user can close modal window with save state', function () {
            modalScope.save();
            expect(modalInstance.close).toHaveBeenCalled();
        });
    });
});