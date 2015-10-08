angular.module("internship").controller("topLevelController",
    ['$scope','$http','$resource',
    function ($scope, $http, $resource) {
        console.log("Hello from TopLevelController");

        $scope.internshipResource = $resource("http://angularkea.azurewebsites.net/api/internships/:id",
        { id: "@id" }, { update: { method: "PUT" }});

        $scope.internshipVisits = $scope.internshipResource.query();

        //update:
        //new $scope.internshipResource($scope.visit).$supdate({ id: $scope.visit._id }, function () {
            // update the data or ....

        //});

        //$http(
        //    {
        //        method: "GET",
        //        url: "http://angularkea1.azurewebsites.net/api/internships/getall",
        //        //data: dataToSave
        //        data: $scope.visit
        //    }).success(function (data) {
        //        $scope.internshipVisits = data;
        //        console.log(data);
        //    }).error(function () {
        //        alert("error");
        //    });
    }]
    );
