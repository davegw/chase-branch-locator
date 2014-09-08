angular.module('chaseApp')
  .controller('MapCtrl', function ($scope, Map) {
    Map.getLocations(40, -83)
      .then(function(results) {
        $scope.locations = results.data.locations;
      })
  });
