angular.module("internship").controller("allInternshipController",
    function ($scope, $state) {
        console.log("Hi from All internship");

        $scope.editInternship = function (visit) {

            //console.log($scope.visit); undefined
            $state.go("new-internship", { internship: visit });
        };

        $scope.limitItem = 10;
        $scope.viewRange = [5, 10, 15, 20, 25, 30];

        //$scope.studentName = 'hi';
        //$scope.studentNameList = $scope.$parent.internshipVisits;
        //console.log(studentNameList);
        //for (var i = 0; i < Object.keys($scope.$parent.internshipVisits).length; i++) {
        //    $scope.studentNameList.push('hehe');
        //}

    });
