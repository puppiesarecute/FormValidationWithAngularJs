var app = angular.module("internship");
app.controller("internshipDataEntryController", function ($scope, $state, $stateParams) {
    $scope.visit = $stateParams.internship;

    $scope.saveVisit = function () {
        if ($scope.visitForm.$valid) {
            //$scope.visit.id = $scope.parent.internshipVisits.length + 1;
            console.log($scope.visit.studentId);
            $scope.$parent.internshipVisits.push(
                $scope.visit);
            $state.go("all-internships");
         }
        else {            
        }
        
    };
});