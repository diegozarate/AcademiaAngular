/**
 * Created by Academia on 12/15/2015.
 */
angular.module("Movies")
.factory("Movie", ['$http', function MovieFactory ($http) {

    return{
        all: function(){
            var url = "https://api.themoviedb.org/3/movie/popular?api_key=a7ec4df65d557dd27df7c831fd851256";
            return $http({method: "GET" , url: url});
        },
        show: function (id) {
            var url = "https://api.themoviedb.org/3/movie/"+ id +"?api_key=a7ec4df65d557dd27df7c831fd851256";
            return $http({method: "GET" , url: url});
        }
    }
}]);