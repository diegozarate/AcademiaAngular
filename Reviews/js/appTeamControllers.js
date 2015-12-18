(function(){

    //Declaramos nuestro modulo de apliación, llamado appTeamControllers
    //Tiene 'teamDirectives' como dependencia, donde hemos guardado directivas personalizadas
    var app = angular.module('appTeamControllers',['teamDirectives']);

    app.controller("personasController", ['$http',function($http){
        var arreglo = this;
        arreglo.personas = [];
        //Leemos el archivo JSON usando el servicio $http (Caso de exito, si está bien escrito JSON)
        $http.get('/team.json').success(function(data){
            arreglo.personas = data;
        })
        //Y si falla la lectura de JSON
        $http.get('/team.json').error(function(data){
            console.log("No funciona JSON");
        })
    }]);

    //controlador para almacenar comentarios
    app.controller("reviewController", ['$scope', function($scope){
        this.review = {};
        this.addReview = function(producto) {
            personas.opiniones.push(this.review);
            ////////limpiar campos//////////
            this.review = {};
            $scope.reviewForm.$setPristine();
            /////////////////////////////////
       };
    }]);

})();
