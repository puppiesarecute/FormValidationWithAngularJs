var app = angular.module("internship");
app.controller("internshipDataEntryController", function ($scope) {
    $scope.visit = {};
    $scope.saveVisit = function () {
        if ($scope.visitForm.$valid) {
            alert("Yes!");
        }
        else {
            //alert("Not valid!");
        }
        console.log($scope.visit);
        //$scope.visit.initials = "Frank is a nerd";
    };
});