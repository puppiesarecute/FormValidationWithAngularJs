var app = angular.module("internship");
app.controller("internshipDataEntryController", function ($scope, $state, $stateParams, $resource) {
    console.log($scope.internshipVisits);
    $scope.visit = angular.copy($stateParams.internship);

    $scope.saveVisit = function () {
        if ($scope.visitForm.$valid) {

            if ($scope.visit._id === undefined) {
                var thisVisit = $scope.visit;
                new $scope.internshipResource(thisVisit).$save(function () {
                    alert("New entry created!");
                    $scope.$parent.internshipVisits.push(
                        $scope.visit);
                    $state.go("all-internships");
                });                
            }
            else {
                new $scope.internshipResource($scope.visit).$update({ id: $scope.visit._id }, function () {
                    alert("Entry has been updated!");

                    //update for local array
                    //var index = _.findIndex($scope.$parents.internshipVisits,
                    //    {
                    //        id: $scope.visit._id
                    //    });
                    //$scope.$parents.splice(index, 1,$scope.visit);
                    $state.go("all-internships");
                });
            }           
            
         }
        else {
            alert("Form not valid, please review");
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