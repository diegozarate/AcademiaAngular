/**
 * Created by Academia on 12/15/2015.
 */
    angular.module('Movies')
    .controller("MoviesIndexController", function($scope, Movie){
       // $scope.movies = [];
        Movie.all()
            .success(function(data, status, headers, config){
                if (status == 200) {
                    $scope.movies = data.results;
                    console.log($scope.movies)
                }else{
                    console.error('Error al cargar la lista')
                }
            })
            .error(function(data, status, headers, config){
                console.error('Error al cargar la lista')
            });
    });
