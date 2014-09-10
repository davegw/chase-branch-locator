angular.module('chaseApp')
  .directive('myMap', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/common/views/my-map.html',
      scope: {
        latitude: '=lat',
        longitude: '=lng'
      },
      link: function (scope) {
        // Create a map based on branch's location.
        var mapOptions = {
          center: new google.maps.LatLng(scope.latitude, scope.longitude),
          zoom: 15
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        // Create marker for branch's location.
        var marker = new google.maps.Marker({
          position: mapOptions.center,
          map: map,
          title: scope.$parent.branch.name
        }); 
      }
    }
  });
