// creating app module:
var dogApp = angular.module('dogBook', ['ngRoute']);

// Creating router:
dogApp.config(function($routeProvider){

    $routeProvider
    .when("/", {
        templateUrl:"app/home/home.html",
        controller:"homeCtrl"
    })
    .when("/gallery", {
        templateUrl:"app/dogsList/dogsList.html",
        controller:"dogsListCtrl"
    })
    .when("/chosendog/:breedName", {
        templateUrl:"app/chosenDogImages/chosenDogImages.html",
        controller:"chosenDogCtrl"
    })
    .otherwise({
        redirectTo:"/"
    })

});