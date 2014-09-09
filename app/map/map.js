angular.module('chaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('root',{
        url: '',
        abstract: true,
        views: {
          'header': {
            templateUrl: 'app/common/views/header.html'
          }
        }
      })
      .state('root.map', {
        url: '/',
        views: {
          'container@': {
            templateUrl: 'app/map/views/map.html',
            controller: 'MapCtrl'
          }
        },
        resolve: {
          locationInit: function(Map) {
            return Map.getGeoLocation();
          }
        }
      });
  });