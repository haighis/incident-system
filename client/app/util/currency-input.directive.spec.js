'use strict';

describe('Directive: currencyInput', function() {
  var $compile;
  var $rootScope;
  var element;
  var scope;
  var ngModel;
  var utils;

  beforeEach(module('incidentSystemApp'));

  function createDirective() {
    scope.myNumber = 0;
    element = angular.element('<input currency-input ng-model="myNumber"></input>');
    element = $compile(element)(scope);
    ngModel = element.controller('ngModel');
    scope.$apply();
  }

  beforeEach(function() {
    module(function($provide) {
      $provide.service('utils', function() {
        this.formatCurrency = jasmine.createSpy('formatCurrency');
        this.parseCurrency = jasmine.createSpy('parseCurrency');
      });
    });

    inject(function(_$compile_, _$rootScope_, _$q_, _utils_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      scope = _$rootScope_.$new();
      utils = _utils_;
    });
  });

  it('should call utils.formatCurrency() onload to format the initial value', function() {
    createDirective();
    expect(utils.formatCurrency).toHaveBeenCalled();
  });

  it('should call utils.parseCurrency() when the value changes', function() {
    createDirective();
    ngModel.$setViewValue('$30');
    $rootScope.$digest();
    expect(utils.parseCurrency).toHaveBeenCalledWith('$30');
  });

  it('should call $render() on blur for valid currency values', function() {
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
