(function () {
var teamComponent = {
  templateUrl: `partials/teamone.html`, 
  controller: function (RosterDataService) {
    var $ctrl = this;

    $ctrl.returned = RosterDataService.getRosterData();
  console.log($ctrl.returned);


}
}



angular
.module("myApp")
.component("teamComponent", teamComponent)

})();
