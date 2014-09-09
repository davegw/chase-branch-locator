describe('BranchCtrl', function(){
  //mock Application to allow us to inject our own dependencies
  beforeEach(angular.mock.module('chaseApp'));
  //mock the controller for the same reason and include $rootScope and $controller
  var ctrl, scope, httpBackend;

  // Inject the $controller and $rootScope services in the beforeEach block
  beforeEach(angular.mock.inject(function($controller, $rootScope, $httpBackend) {
    httpBackend = $httpBackend;
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('BranchCtrl', {
      $scope: scope
    });
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('Should have a day of week array', function(){
    expect(scope.dayOfWeek).toEqual(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  });
});
