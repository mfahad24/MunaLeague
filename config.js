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
    .when("/roster2", {
      template: "<team-two-component></team--two-component>"
    })
    .otherwise({
      redirectTo: "/home"
    });
  })
})();
