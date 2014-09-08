angular.module('chaseApp')
  .controller('BranchCtrl', function ($scope, Branch) {
    $scope.branch = Branch.getBranch();
    $scope.dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    console.log($scope.branch)
  });
