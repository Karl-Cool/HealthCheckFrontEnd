var app = angular.module('app', []);
app.controller('appCtrl', function ($scope, $http, $interval) {
    var promise;
    $scope.getJSON = function () {
        $scope.stop();
        $scope.stopped = false;
        $http({
            method: "GET",
            url: "https://api.myjson.com/bins/n6d95"
        }).then(function mySuccess(response) {
            if(response.length == 0){
                console.log("no data!");
            }
            $scope.myData = response.data;
        }, function myError(response) {
            $scope.errorMessage = "Något gick fel!";
            $scope.stop();
        });
        $scope.stopped = false;
        $scope.activated = true;
        promise = $interval($scope.getJSON,10000);
    }
    $scope.stop = function() {
        $interval.cancel(promise);
        $scope.activated = false;
        $scope.stopped = true;
      };


});


/* var app = angular.module('app', []);
app.controller('appCtrl', function ($scope, $http) {
    $http.get("https://api.myjson.com/bins/n6d95").then(function (response) {
        $scope.myData = response.data;
    });
}); */