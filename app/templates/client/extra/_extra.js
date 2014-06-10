angular.module('<%= name %>.main.extra', ['ngRoute'])

.config(function (<%= providers %>) {
  $routeProvider
    .when('/extra', {
      templateUrl: 'extra/extra.tpl.html',
      controller: 'ExtraController'
    });
})
.controller('ExtraController', function ($scope) {
  $scope.notes = [];
});