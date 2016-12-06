var app = angular.module('viewerApp');

app.factory('madLib', function(){

    var madlibs = {};

    function saveMadLibs(answers){
      madlibs = answers;
    }

    function getMadLibs(){
      return madlibs;
    }

    return {
      getMadLibs:getMadLibs,
      saveMadLibs: saveMadLibs
    }
});