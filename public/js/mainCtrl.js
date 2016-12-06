var app= angular.module('soundscape');

app.controller('getController', function($scope, $location){
  $scope.saveAnswers = function(answers){
    console.log(answers);
//    madLib.saveMadLibs(answers);
    $location.path('viewer');
  };
});