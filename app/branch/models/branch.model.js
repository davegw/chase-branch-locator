angular.module('app.model.branch', [])
  .factory('Branch', function () {
    var branchInstance = {};

    // Set object property to selected branch and store in local storage.
    branchInstance.selectBranch = function(branch) {
      this.currentBranch = branch;

      // Store selected branch in local storage, so object persists if page gets refreshed.
      window.localStorage.setItem('selectedBranch', JSON.stringify(branch));
    };

    // Return the current Branch or search in local storage if branch is not defined.
    branchInstance.getBranch = function(branch) {
      var branch = this.currentBranch || JSON.parse(localStorage.getItem('selectedBranch'));
      return branch;
    };

    return branchInstance;
  });
