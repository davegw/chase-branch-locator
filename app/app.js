var app = angular.module('chaseApp', [
  'ui.bootstrap',
  'ui.router'
]);

app.config(function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
});
