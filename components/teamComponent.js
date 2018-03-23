(function () {
var teamComponent = {
  templateUrl: `partials/rosterinfo.html`,
  controller: function (RosterDataService) {
    var $ctrl = this;
    $ctrl.returnedData = RosterDataService.getRosterData(); 
    console.log($ctrl.returnedData)
    }
}



angular
.module("myApp")
.component("teamComponent", teamComponent)

})();
