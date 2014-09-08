angular.module('chaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('map', {
        url: '/',
        templateUrl: 'app/map/views/map.html',
        controller: 'MapCtrl'
      })
  });