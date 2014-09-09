angular.module('chaseApp')
  .controller('MapCtrl', function ($scope, Map, Branch, $state) {
    var userLocation = Map.geoLocation.coords;
    $scope.userLat = userLocation.latitude;
    $scope.userLng = userLocation.longitude;

    // Get nearby branches based on user location and set them on the scope.
    Map.getLocations($scope.userLat, $scope.userLng)
      .then(function(results) {
        identifyNearbyBranches(results.data.locations);
      });

    // Create a map based on user's location.
    var mapOptions = {
      center: new google.maps.LatLng($scope.userLat, $scope.userLng),
      zoom: 15
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    // Create marker for user's location.
    var marker = new google.maps.Marker({
      position: mapOptions.center,
      map: map,
      title: 'Current Location'
    });

    // For each nearby branch create a google marker and click event listener.
    function identifyNearbyBranches(branchArray) {
      $scope.chaseLocations = branchArray;
      var current = 'A'.charCodeAt();
      console.log($scope.chaseLocations);

      _.each($scope.chaseLocations, function(branch) {
        var letter = String.fromCharCode(current++);
        var marker = createBranchMarker(branch, letter);
        branchMarkerClickHandler(marker);
      });
    };

    // Create a marker for each branch location.
    function createBranchMarker(branch, letter) {
      return new google.maps.Marker({
        position: new google.maps.LatLng(branch.lat, branch.lng),
        icon: 'assets/images/google_map_markers/blue_Marker' + letter + '.png',
        map: map,
        title: 'Chase - ' + branch.name,
        info: branch
      });
    }

    // Click event handler for each marker.
    function branchMarkerClickHandler(branchMarker) {
      google.maps.event.addListener(branchMarker, 'click', function() {
        // Persist the selected Branch info using the Branch factory.
        Branch.selectBranch(this.info);
        $state.go('root.branch');
      });
    }
  });
