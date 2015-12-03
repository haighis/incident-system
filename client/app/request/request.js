'use strict';

angular.module('incidentSystemApp')
  .config(function($stateProvider) {

/*
    $routeProvider
      .when('/:lang/incident', {
        templateUrl: 'app/incident/list.html',
        controller: 'IncidentCtrl',
        controllerAs: 'vm'
      });
*/

 	$stateProvider
      .state('incidents', {
        url: '/:lang/incident',
        templateUrl: 'app/request/list.html',
        controller: 'RequestListCtrl',
        controllerAs: 'vm',
        data: {
          requiresLogin: true
        }
      });

    $stateProvider
      .state('incidents.itemactions', {
        url: '/{requestId}',
        templateUrl: 'app/request/itemactions.html',
        resolve: {
        request: ['$stateParams', 'requestService',
                function($stateParams, requestService) {
				return requestService.getById($stateParams.requestId).then(function(result){
                	return result;
                });
            }]
        }, 
        controller: 'RequestItemActionsCtrl',
        controllerAs: 'vm',
        data: {
          requiresLogin: true
        }
      });

	$stateProvider
      .state('incidents.itemactions.itemdetails', {
        url: '/itemdetails',
        resolve: {
        	request: ['$stateParams', 'requestService',
                function($stateParams, requestService) {
				return requestService.getById($stateParams.requestId).then(function(result){
                	return result;
                });
            }]
        },
        templateUrl: 'app/request/itemdetails.html',
        controller: 'RequestItemDetailsCtrl',
        controllerAs: 'vm',
        data: {
          requiresLogin: true
        }
      });

	$stateProvider
      .state('incidents.itemactions.itemedit', {
        url: '/itemedit',
        resolve: {
            request: ['$stateParams', 'requestService',
                function($stateParams, requestService) {
				return requestService.getById($stateParams.requestId).then(function(result){
                	return result;
                });
            }]
        },
        templateUrl: 'app/request/itemedit.html',
        controller: 'RequestItemEditCtrl',
        controllerAs: 'vm',
        data: {
          requiresLogin: true
        }
      });
  });
