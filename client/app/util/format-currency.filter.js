angular.module('incidentSystemApp').filter('formatCurrency', function(utils) {
  return function(input, precision) {
    var opts = null;

    if (precision === 0 || precision) {
      opts = {
        precision: precision
      };
    }

    return utils.formatCurrency(input, opts);
  };
});
