// (function() {
var app = angular.module("soundscape", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when("/scapes", {
        templateUrl: "views/scapes.html",
        controller: "setController"
      
    });
    $routeProvider.when("/addScape", {
        templateUrl: "views/addScape.html",
        controller: "getController"
    });
    $routeProvider.otherwise({
        templateUrl: "views/map.html"
          // controller: 'getController'
       
     });

});

// })();