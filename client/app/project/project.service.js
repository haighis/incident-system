(function (app) {

  'use strict';

  app.service('projectService', projectService);

  /* ngInject */
  function projectService(CONFIG, $q, $http) {
    var svc = this;

    _.assign(svc, {
      getAll: getAll,
      getById: getById,
      update: update,
      add: add
    });

    var apiEndpoint = 'projects';

    function getAll() {
      return $http.get('/api/' + apiEndpoint).then(function(response) {
        return response.data;
      });
    }

    function getById(id) {
      return $http.get('/api/' + apiEndpoint + id).then(function(resp) {
        return resp.data;
      });
    }

    function update(request) {
       return $http.put('/api/' + apiEndpoint + request._id, request).then(function(resp) {
        return resp.data;
      });
    }

    function add(request) {
      return $http.post('/api/' + apiEndpoint, request).then(function(resp) {
        return resp.data;
      });
    }

    function destroy(request) {
      return $http.delete('/api/' + apiEndpoint + request._id, request).then(function(resp) {
        return resp.data;
      });  
    }
  }

}(angular.module('incidentSystemApp')));
