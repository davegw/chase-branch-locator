angular.module('chaseApp')
  .controller('BranchCtrl', function ($scope, Branch) {
    $scope.branch = Branch.getBranch();
    $scope.dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Create a map based on branch's location.
    var mapOptions = {
      center: new google.maps.LatLng($scope.branch.lat, $scope.branch.lng),
      zoom: 15
    };
    var map = new google.maps.Map(document.getElementById('map-canvas-sm'), mapOptions);

    // Create marker for branch's location.
    var marker = new google.maps.Marker({
      position: mapOptions.center,
      map: map,
      title: $scope.branch.name
    });
  });
