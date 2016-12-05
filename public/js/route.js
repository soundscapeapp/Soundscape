(function() {
var app = angular.module("soundscape", ["ngRoute"]);

app.config(function($routeProvider) {
      $routeProvider.when("/", {
        templateUrl: "../index.html",
        // controller: 'getController'
      
    });
    $routeProvider.when("/scapes", {
        templateUrl: "../views/scapes.html",
        // controller: 'returnController'
      
    });
     $routeProvider.when("/add-scape", {
        templateUrl: "../views/add-scape.html",
        // controller: 'returnController'
      
    });

});

})();