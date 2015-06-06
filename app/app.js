'use strict';

angular.module('cdnjs', ['ngMaterial', 'ngRoute', 'zeroclipboard'])

.config(['$mdThemingProvider', '$mdIconProvider', '$routeProvider', '$locationProvider', 'uiZeroclipConfigProvider', function($mdThemingProvider, $mdIconProvider, $routeProvider, $locationProvider, uiZeroclipConfigProvider) {

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

  uiZeroclipConfigProvider.setZcConf({
      swfPath: '../bower_components/zeroclipboard/dist/ZeroClipboard.swf'
    });
}])

.controller('mainCtrl', ['$scope', 'Libs', function($scope, Libs) {

  $scope.tagTpl1 = '<script type="text/javascript" src="';
  $scope.tagTpl2 = '"></script>';

  $scope.getTagStr = function(url) {
    if (/\.js$/.test(url)) {
      return '<script type="text/javascript" src="' + url + '"></script>';
    } else if (/\.css$/.test(url)) {
      return '<link rel="stylesheet" href=" ' + url + '" />';
    }

  };

  Libs.query().then(function(res) {
    $scope.libs = res.results;
  });
}]);
