var app = angular.module("appModule", ["ngRoute", "LocalStorageModule"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        controller: "homeController",
        templateUrl: "templates/home.html"
    })
    .when("/info",{
        controller: "infoController",
        templateUrl: "templates/info.html"
    })
    .when("/hobbies",{
        controller: "hobbiesController",
        templateUrl: "templates/hobbies.html"
    })
    .when("/contacts",{
        controller: "contactsController",
        templateUrl: "templates/contacts.html"
    })
    .when("/comments",{
        controller: "commentsController",
        templateUrl: "templates/comments.html"
    })
    .otherwise("/");
});

