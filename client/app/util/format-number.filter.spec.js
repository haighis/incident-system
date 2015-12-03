'use strict';

describe('Filter: formatNumber', function() {
  var $filter;
  var formatNumber;
  var utils;

  beforeEach(module('incidentSystemApp'));

  beforeEach(function() {
    module(function($provide) {
      $provide.service('utils', function() {
        this.formatNumber = jasmine.createSpy('formatNumber');
      });
    });

    inject(function(_$filter_, _utils_) {
      $filter = _$filter_;
      utils = _utils_;
      formatNumber = $filter('formatNumber');
    });
  });

  it('should call formatNumber() from the utils service with no options by default', function() {
    formatNumber(300);
    expect(utils.formatNumber).toHaveBeenCalledWith(300, null);
  });

  it('should call formatNumber() from the utils service with precision option when supplied', function() {
    formatNumber(300, 3);
    expect(utils.formatNumber).toHaveBeenCalledWith(300, { precision: 3 });
  });

  it('should call formatNumber() from the utils service with 0 precision', function() {
    formatNumber(300.99, 0);
    expect(utils.formatNumber).toHaveBeenCalledWith(300.99, { precision: 0 });
  });
});
