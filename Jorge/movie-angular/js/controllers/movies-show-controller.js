/**
 * Created by Academia on 12/16/2015.
 */
angular.module('Movies')
.controller('MoviesShowController', function($routeParams, Movie, $scope){
   $scope.m = {};
    Movie.show($routeParams.id)
        .success(function(data, status, headers, config){
            if (status == 200) {
                $scope.m = data;
                console.log($scope.m)
            }else{
                console.error('Error al cargar la lista')
            }
        })
        .error(function(data, status, headers, config){
            console.error('Error al cargar la lista')
        });
})