(function (angular) {
  "use strict";
  //TODO: Add Angular Injections here
  angular.module('dolphin', [ ,'dolphin.main'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('dolphin', {
        abstract: true,
        template: '<ui-view></ui-view>'
      });
  })
  .run(function ($state) {
    $state.transitionTo('dolphin.main');
  });
}(angular));



