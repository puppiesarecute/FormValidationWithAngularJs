/* INTERNSHIP DATA ENTRY CONTROLLER
var app = angular.module("internship");
app.controller("internshipDataEntryController", function ($scope, $state, $stateParams, $http) {
    $scope.visit = $stateParams.internship;

    $scope.saveVisit = function () {
        if ($scope.visitForm.$valid) {
            //$scope.visit.id = $scope.parent.internshipVisits.length + 1;
            //console.log($scope.visit.studentId);
            if ($scope.visit._id === null) {
                $http({
                    method: "POST",
                    url: "http://angularkea1.azurewebsites.net/api/internships/create",
                    //data: dataToSave
                    data: $scope.visit
                }).success(function () {
                    alert("created!");
                }).error(function () {
                    alert("there's an error while creating data");
                });
            }
            else {
                $http({
                    method: "POST",
                    url: "http://angularkea1.azurewebsites.net/api/internships/update/" + $scope.visit._id,
                    //data: dataToSave
                    data: $scope.visit
                }).success(function () {
                    alert("updated!");
                    console.log($scope.visit);
                }).error(function () {
                    alert("there's an error while updating data");
                });
            }

            //$scope.$parent.internshipVisits.push(
            //    $scope.visit);
            $state.go("all-internships");
        }
        else {
        }

    };

    $scope.deleteVisit = function () {
        // send a request to api to delete
        // in scucess function, delete the delted object
        // id = 4
        // for loop
        // if sentence: look for the id 4
        // splice(index,1)

        ////require installing underscore library to do this

        //var index = _.findIndex($scope.$parents.internshipVisits,
        //    {
        //        id: $scope.visit._id
        //    });
        //$scope.$parents.splice(index, 1);
    }
});
*/