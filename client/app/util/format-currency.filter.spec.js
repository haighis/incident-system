'use strict';

describe('Filter: formatCurrency', function() {
  var $filter;
  var formatCurrency;
  var utils;

  beforeEach(module('incidentSystemApp'));

  beforeEach(function() {
    module(function($provide) {
      $provide.service('utils', function() {
        this.formatCurrency = jasmine.createSpy('formatCurrency');
      });
    });

    inject(function(_$filter_, _utils_) {
      $filter = _$filter_;
      utils = _utils_;
      formatCurrency = $filter('formatCurrency');
    });
  });

  it('should call formatCurrency() from the utils service with no options by default', function() {
    formatCurrency(300);
    expect(utils.formatCurrency).toHaveBeenCalledWith(300, null);
  });

  it('should call formatCurrency() from the utils service with precision option when supplied', function() {
    formatCurrency(300, 3);
    expect(utils.formatCurrency).toHaveBeenCalledWith(300, { precision: 3 });
  });

  it('should call formatCurrency() from the utils service with 0 precision', function() {
    formatCurrency(300.99, 0);
    expect(utils.formatCurrency).toHaveBeenCalledWith(300.99, { precision: 0 });
  });
});
