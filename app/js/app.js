'use strict';


// Declare app level module which depends on filters, and services
angular.module('demoApp', [
    'ngRoute',
    'demoApp.directives',
    'demoApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/demo', {templateUrl: 'partials/demo.html', controller: 'demoCtrl'});
  $routeProvider.otherwise({redirectTo: '/demo'});
}]);
