describe('Branch Model', function(){
  var Branch;
  //mock Application to allow us to inject our own dependencies
  beforeEach(angular.mock.module('app.model.branch'));
  //mock the controller for the same reason and include $rootScope and $controller
  beforeEach(angular.mock.inject(function(_Branch_, _$httpBackend_) {
    Branch = _Branch_;
  }));

  // tests start here
  it('Should have a selectBranch method', function(){
    expect(Branch.selectBranch).toBeDefined();
  });
  it('Should have a getBranch method', function(){
    expect(Branch.getBranch).toBeDefined();
  });
  describe('getBranch and selectBranch methods', function() {
    var sampleBranch = {
      name: 'Sample Branch',
      address: '123 Fake St',
      city: 'San Francisco',
      state: 'CA'
    };
    beforeEach(function() {
      Branch.selectBranch(sampleBranch);
    });
    afterEach(function() {
      localStorage.clear();
    })
    it('should return the correct information', function(){
      var branch = Branch.getBranch();
      expect(branch.name).toEqual(sampleBranch.name);
      expect(branch.address).toEqual(sampleBranch.address);
      expect(branch.city).toEqual(sampleBranch.city);
      expect(branch.state).toEqual(sampleBranch.state);
    });
    it('should return the correct branch information from local storage', function(){
      var local = JSON.parse(localStorage.getItem('selectedBranch'));
      expect(local.name).toEqual(sampleBranch.name);
      expect(local.address).toEqual(sampleBranch.address);
      expect(local.city).toEqual(sampleBranch.city);
      expect(local.state).toEqual(sampleBranch.state);
    })
  });
});
