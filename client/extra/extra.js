angular.module('dolphin.main.extra', ['ngRoute'])

.config(function ($stateProvider) {
  $routeProvider
    .when('/extra', {
      templateUrl: 'extra/extra.tpl.html',
      controller: 'ExtraController'
    });
})
.controller('ExtraController', function ($scope) {
  $scope.notes = [];
});