var app = angular.module('viewerApp');

app.controller('secondCTRL', function($scope, madLib){
  $scope.madlib=madLib.getMadLibs();
  console.log($scope.madlib);
});