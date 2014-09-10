angular.module('chaseApp')
  .directive('myPhoneStyle', function () {
    return {
      restrict: 'A',
      scope: {
        phone: '=phone'
      },
      link: function (scope) {
        scope.phone = phoneFormatter(scope.phone);

        // Convert raw number to formatted phone number
        function phoneFormatter(phoneNumber) {
          if (!phoneNumber || phoneNumber.length !== 10) return;
          var phoneSection1 = phoneNumber.substring(0,3);
          var phoneSection2 = phoneNumber.substring(3,6);
          var phoneSection3 = phoneNumber.substring(6);
          return '(' + phoneSection1 + ') ' + phoneSection2 + '-' + phoneSection3;
        }
      }
    }
  });
