angular.module("internship").controller("allInternshipController",
    function ($scope, $state) {
        console.log("Hi from All internship");

        $scope.editInternship = function (visit) {
            $state.go("new-internship", { internship: visit });
        };
    });
