(function() {
var app = angular.module("soundscape", ["ngRoute"]);

app.config(function($routeProvider) {
      $routeProvider.when("/", {
        templateUrl: "views/soundscape.html",
        // controller: 'getController'
      
    });
    $routeProvider.when("/scapes", {
        templateUrl: "views/scapes.html",
        // controller: 'returnController'
      
    });
     $routeProvider.when("/add-scape", {
        templateUrl: "views/add-scapes.html",
        // controller: 'returnController'
      
    });

});

})();