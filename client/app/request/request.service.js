(function (app) {

  'use strict';

  app.service('requestService', requestService);

  /* ngInject */
  function requestService(CONFIG, $q, $http) {
    var svc = this;

    var _defaultSearchParams = {
      quoteNumber: null,
      timePeriod: -1,
      createdAfter: null,
      createdBefore: null,
      ownerLastName: null,
      customerLastName: null,
      pageIndex: 0,
      pageSize: 10
    };

    _.assign(svc, {
      rootUrl: getApiUrl(),
      search: search,
      getAll: getAll,
      getById: getById,
      update: update,
      add: add,
      getDefaultSearchParams: getDefaultSearchParams
    });

    function getApiUrl() {
     
      return [
        CONFIG.searchApiRootUrl,
        //brand.key,
       // CONFIG.name,
        'documents'
      ].join('/');
    }

    // Public accessory for default search parameters
    function getDefaultSearchParams() {
      return {
        quoteNumber: null,
        timePeriod: -1,
        createdAfter: null,
        createdBefore: null,
        ownerLastName: null,
        customerLastName: null,
        pageIndex: 0,
        pageSize: 10
      };
    }

    function buildRequestConfig(params) {
      return {
        params: params,
        headers: {
          Authorization: 'Bearer ' + authService.getAccessToken()
        }
      };
    }

    function getAll() {
      return $http.get('/api/requests').then(function(response) {
        return response.data;
      });
    }

    function getById(id) {
      return $http.get('/api/requests/' + id).then(function(resp) {
        return resp.data;
      });
    }

    function update(request) {
       return $http.put('/api/requests/' + request._id, request).then(function(resp) {
        return resp.data;
      });
    }

    function add(request) {
      return $http.post('/api/requests/', request).then(function(resp) {
        return resp.data;
      });
    }

    function destroy(request) {
      return $http.delete('/api/requests/' + request._id, request).then(function(resp) {
        return resp.data;
      });  
    }

    // Search quotes on the server
    function search(params) {
      params = _.assign(_defaultSearchParams, params || {});

      // Map JS properties to search params
      var query = {
        CreatedAfter: params.createdAfter,
        CreatedBefore: params.createdBefore,
        QuoteNumber: params.quoteNumber,
        CustomerLastName: params.customerLastName,
        OwnerLastName: params.ownerLastName,
        PageIndex: params.pageIndex,
        PageSize: params.pageSize
      };

      return $http.get(getApiUrl(), buildRequestConfig(query)).then(function (resp) {        
        return resp.data;
      });
    }
  }

}(angular.module('incidentSystemApp')));
