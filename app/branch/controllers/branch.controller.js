angular.module('chaseApp')
  .controller('BranchCtrl', function ($scope, Branch) {
    // Gets the selected branch information.
    $scope.branch = Branch.getBranch();
    $scope.dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  });
