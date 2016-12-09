// (function() {
var app = angular.module("soundscape", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when("/scapes", {
        templateUrl: "views/scapes.html",
        controller: "modalController"
      
    });
    $routeProvider.when("/addScape", {
        templateUrl: "views/addScape.html",
        controller: "addScapeController"
    });
    $routeProvider.otherwise({
        templateUrl: "views/map.html"
       
     });

});

// })();