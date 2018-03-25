(function () {
var teamTwoComponent = {
  templateUrl: `partials/teamtwo.html`, 
  controller: function (RosterDataService) {
    var $ctrl = this;

    $ctrl.returned = RosterDataService.getRosterData();
  console.log($ctrl.returned);


}
}



angular
.module("myApp")
.component("teamTwoComponent", teamTwoComponent)

})();
