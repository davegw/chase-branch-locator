describe('BranchCtrl', function(){
  var ctrl, scope;

  //Mock application to allow us to inject our own dependencies
  beforeEach(angular.mock.module('chaseApp'));
  
  // Inject the $controller and $rootScope services in the beforeEach block
  beforeEach(angular.mock.inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('BranchCtrl', {
      $scope: scope
    });
  }));

  it('Should have a branch property', function(){
    expect(scope.branch).toBeDefined();
  });  
  it('Should have a dayOfWeek property', function(){
    expect(scope.dayOfWeek).toBeDefined();
  });  
  it('dayOfWeek array should contain each day of the week', function(){
    expect(scope.dayOfWeek).toEqual(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  });
});
