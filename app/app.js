'use strict';

angular.module('cdnjs', ['ngMaterial', 'ngRoute'])

.config(['$mdThemingProvider', '$mdIconProvider', '$routeProvider', '$locationProvider', function($mdThemingProvider, $mdIconProvider, $routeProvider, $locationProvider) {

  $routeProvider
   .when('/', {
      templateUrl: 'app/main.html',
      controller: 'mainCtrl'
    })
    .otherwise('/');

  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('red');

  $mdIconProvider
    .icon("menu"       , "resources/menu.svg"        , 24);
}])

.controller('mainCtrl', ['$scope', 'Libs', function($scope, Libs) {

  Libs.query().then(function(res) {
    console.log(res);
    $scope.libs = res.results;
    console.log($scope.libs);
  });
}]);
