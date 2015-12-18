/**
 * Created by Academia on 12/17/2015.
 */
angular.module('Movies')
    .controller("TvIndexController", function($scope, Tv){
        // $scope.movies = [];
        Tv.all()
            .success(function(data, status, headers, config){
                if (status == 200) {
                    $scope.tvs = data.results;
                    console.log($scope.tvs)
                }else{
                    console.error('Error al cargar la lista')
                }
            })
            .error(function(data, status, headers, config){
                console.error('Error al cargar la lista')
            });
    });
