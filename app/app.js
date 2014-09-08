var app = angular.module('chaseApp', [
  'ui.bootstrap',
  'ui.router',
  'app.model.map',
  'app.model.branch'
]);

app.config(function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
});
