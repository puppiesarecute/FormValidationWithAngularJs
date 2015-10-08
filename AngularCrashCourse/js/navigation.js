angular.module("internship").config(
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("all-internships");

        $stateProvider.state("all-internships", {
            url: "/all-internships",
            templateUrl: "PartialViews/AllInternships.html",
            controller: "allInternshipController"
        })
            .state("all-internships.subview1", {
            url: "/subview1",
            templateUrl: "PartialViews/Subview1.html"
        })
            .state("all-internships.subview2", {
                url: "/subview2",
                templateUrl: "PartialViews/Subview2.html"
            });

        $stateProvider.state("new-internship", {
            url: "/new-internship",
            templateUrl: "PartialViews/FormInput.html",
            controller: "internshipDataEntryController",
            params: { internship: null }
        });

        console.log("Hello from navigation");
    });

