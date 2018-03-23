(function (){
  angular
  .module("myApp")
  .config(function($routeProvider) {
    $routeProvider
    .when("/roster", {
      template: "<roster-component></roster-component>"
    })
    .when("/roster1", {
      template: "<team-component></team-component>"
    })
    .otherwise({
      redirectTo: "/home"
    });
  })
})();
