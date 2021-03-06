(function() {
  function RosterDataService($http) {
    var rosterData;
console.log(rosterData);

    return {
      getRosterData: getRosterData,
      returnData: returnData
    }

    function getRosterData() {
      var baseUrl = "https://sheets.googleapis.com/v4/spreadsheets/1_ruxo2ClEjT7XEDl4g53wYLn9pxv9ReNwWqnXmf7iLk/values/TeamA?valueRenderOption=FORMATTED_VALUE&key=AIzaSyD-wsGiTggef7kLCHtptNTBCPfZv2fryTI";

      return $http({
        method: "GET",
        url: baseUrl
      }).then(function(response){

        return response.data;
        console.log(rosterData);
      });
    }

    function returnData (){
      return rosterData;
      console.log(rosterData);
    }
  }

  angular
    .module("myApp")
    .factory("RosterDataService", RosterDataService)

})();
