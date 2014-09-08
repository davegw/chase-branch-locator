angular.module('chaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('branch', {
        url: '/branch',
        templateUrl: 'app/branch/views/branch.html',
        controller: 'BranchCtrl'
      })
  });