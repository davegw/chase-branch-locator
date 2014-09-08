angular.module('app.model.branch', [])
  .factory('Branch', function () {
    var branchInstance = {};

    branchInstance.selectBranch = function(branch) {
      this.currentBranch = branch;
    };

    branchInstance.getBranch = function(branch) {
      return this.currentBranch;
    };

    return branchInstance;
  });
