'use strict';

describe('Directive: numericInput', function() {
  var $compile;
  var $rootScope;
  var element;
  var scope;
  var ngModel;
  var utils;

  beforeEach(module('incidentSystemApp'));

  function createDirective() {
    scope.myNumber = 0;
    element = angular.element('<input numeric-input ng-model="myNumber"></input>');
    element = $compile(element)(scope);
    ngModel = element.controller('ngModel');
    scope.$apply();
  }

  beforeEach(function() {
    module(function($provide) {
      $provide.service('utils', function() {
        this.formatNumber = jasmine.createSpy('formatNumber');
        this.parseNumber = jasmine.createSpy('parseNumber');
      });
    });

    inject(function(_$compile_, _$rootScope_, _$q_, _utils_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      scope = _$rootScope_.$new();
      utils = _utils_;
    });
  });

  describe('activation', function() {
    it('should call utils.formatNumber', function() {
      createDirective();
      expect(utils.formatNumber).toHaveBeenCalled();
    });

    it('should call utils.parseNumber() when the value changes', function() {
      createDirective();
      ngModel.$setViewValue('30');
      $rootScope.$digest();
      expect(utils.parseNumber).toHaveBeenCalledWith('30', { precision: 0 });
    });

    it('should call $render() on blur for valid values', function() {
      createDirective();
      spyOn(ngModel, '$render');
      element.trigger('blur');
      $rootScope.$digest();
      expect(ngModel.$render).toHaveBeenCalled();
    });

    it('should not call $render on blur for an invald value', function() {
      createDirective();
      spyOn(ngModel, '$render');
      ngModel.$setViewValue('aaa');
      element.trigger('blur');
      $rootScope.$digest();
      expect(ngModel.$render).not.toHaveBeenCalled();
    });
  });
});
