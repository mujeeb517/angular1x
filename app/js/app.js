var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/app/views/home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: '/app/views/about.html',
            controller: 'AboutController'
        })
        .when('/contact', {
            templateUrl: '/app/views/contact.html',
            controller: 'ContactController'
        })
        .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true);

}]);

myApp.controller('AboutController', ['$scope', function ($scope) {
    // About Controller Logic
}]);

myApp.controller('ContactController', ['$scope', function ($scope) {
    // Contact Controller Logic
}]);
