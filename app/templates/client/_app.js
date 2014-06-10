(function (angular) {
  "use strict";
  //TODO: Add Angular Injections here
  angular.module('<%= name %>', [ ,'<%= name %>.main'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('<%= name %>', {
        abstract: true,
        template: '<ui-view></ui-view>'
      });
  })
  .run(function ($state) {
    $state.transitionTo('<%= name %>.main');
  });
}(angular));



