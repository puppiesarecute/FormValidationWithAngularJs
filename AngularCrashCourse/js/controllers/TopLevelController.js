angular.module("internship").controller("topLevelController",
    function ($scope) {
        console.log("Hello from TopLevelController");

        $scope.internshipVisits = [];
        console.log($scope.internshipVisits);
    }
);
