(function (angular) {
  "use strict";
  angular.module('<%= name %>.main', ['ngRoute', '<%= name %>.main.extra'])
  .config(function ($stateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main/main.tpl.html',
        controller: 'MainController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('MainController', function ($scope) {
    $scope.things = [];
  });
}(angular));
