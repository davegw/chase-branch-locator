angular.module('chaseApp')
  .controller('MapCtrl', function ($scope, Map) {
    $scope.geoLocation = Map.geoLocation.coords;

    Map.getLocations($scope.geoLocation.latitude, $scope.geoLocation.longitude)
      .then(function(results) {
        $scope.chaseLocations = results.data.locations;
      });
  });
