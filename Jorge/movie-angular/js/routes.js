/**
 * Created by Academia on 12/16/2015.
 */
angular.module('Movies')
.config(function($routeProvider){
    $routeProvider.when('/movies', {
        templateUrl: 'templates/pages/movies/index.html',
        controller: 'MoviesIndexController'
    })
        .when('/', {
            templateUrl: 'templates/pages/movies/index.html',
            controller: 'MoviesIndexController'
        })
        .when('/movies/:id',{
            templateUrl: 'templates/pages/movies/show.html',
            controller: 'MoviesShowController'
        })
        .when('/tv', {
            templateUrl: 'templates/pages/tv/index.html',
            controller: 'TvIndexController'
        })
        .when('/tv/:id', {
            templateUrl: 'templates/pages/tv/show.html',
            controller: 'TvShowController'
        })
        .otherwise({ redirectTo: '/'})
});