'use strict';

/**
 * @ngdoc function
 * @name ctlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ctlApp
 */
angular.module('ctlApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
