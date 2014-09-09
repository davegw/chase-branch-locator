angular.module('app.model.branch', [])
  .factory('Branch', function () {
    var branchInstance = {};

    branchInstance.selectBranch = function(branch) {
      this.currentBranch = branch;

      // Store selected branch in local storage in case page gets refreshed.
      window.localStorage.setItem('selectedBranch', JSON.stringify(branch));
    };

    branchInstance.getBranch = function(branch) {
      // Return the current Branch or search in local storage if branch is not defined.
      var branch = this.currentBranch || JSON.parse(localStorage.getItem('selectedBranch'));
      return branch;
    };

    return branchInstance;
  });
