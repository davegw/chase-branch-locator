angular.module('chaseApp')
  .controller('MapCtrl', function ($scope, Map, Branch, $state) {
    var userLocation = Map.geoLocation.coords;
    $scope.userLat = userLocation.latitude;
    $scope.userLng = userLocation.longitude;

    Map.getLocations($scope.userLat, $scope.userLng)
      .then(function(results) {
        $scope.chaseLocations = results.data.locations;
        var current = 'A'.charCodeAt();
        console.log($scope.chaseLocations)
        _.each($scope.chaseLocations, function(item) {
          var letter = String.fromCharCode(current++);
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(item.lat, item.lng),
            icon: 'assets/images/google_map_markers/blue_Marker' + letter + '.png',
            map: map,
            title: 'Chase - ' + item.name,
            info: item
          });
          google.maps.event.addListener(marker, 'click', function() {
            Branch.selectBranch(this.info);
            $state.go('branch');
          });
        })
      });

    var mapOptions = {
      center: new google.maps.LatLng($scope.userLat, $scope.userLng),
      zoom: 15
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    var marker = new google.maps.Marker({
      position: mapOptions.center,
      map: map,
      title: 'Current Location'
    });
  });
