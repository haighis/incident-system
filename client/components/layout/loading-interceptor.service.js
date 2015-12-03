angular.module('incidentSystemApp').factory('wsLoadingHttpInterceptor', function($q, $timeout, $rootScope) {

  var queue = [];
  var timerPromiseHide = null;
  var delayIn = 0;
  var delayOut = 500; // Avoid flicker

  $rootScope.isDataLoading = false;

  function processRequest() {
    queue.push({});
    if (queue.length === 1) {
      $timeout(function() {
        if (queue.length) {
          $rootScope.isDataLoading = true;
        }
      }, delayIn);
    }
  }

  function processResponse() {
    queue.pop();
    if (!queue.length) {
      // Since we don't know if another XHR request will be made, pause before
      // hiding the overlay. If another XHR request comes in then the overlay
      // will stay visible which prevents a flicker
      timerPromiseHide = $timeout(function() {
        // Make sure queue is still 0 since a new XHR request may have come in
        // while timer was running
        if (!queue.length) {
          $rootScope.isDataLoading = false;
          if (timerPromiseHide) {
            $timeout.cancel(timerPromiseHide);
          }
        }
      }, delayOut);
    }
  }

  return {
    request: function(config) {
      processRequest();
      return config || $q.when(config);
    },

    response: function(response) {
      processResponse();
      return response || $q.when(response);
    },

    responseError: function(rejection) {
      processResponse();
      return $q.reject(rejection);
    }
  };
});
