angular.module('chaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('root.branch', {
        url: '/branch',
        views: {
          'container@' : {
            templateUrl: 'app/branch/views/branch.html',
            controller: 'BranchCtrl' 
          }
        }
      });
  });