/**
 * Created by Academia on 12/17/2015.
 */
angular.module('Movies')
    .controller('TvShowController', function($routeParams, Tv, $scope){
        $scope.t = {};
        Tv.show($routeParams.id)
            .success(function(data, status, headers, config){
                if (status == 200) {
                    $scope.t = data;
                    console.log($scope.t)
                }else{
                    console.error('Error al cargar la lista')
                }
            })
            .error(function(data, status, headers, config){
                console.error('Error al cargar la lista')
            });
    })