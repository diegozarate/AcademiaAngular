(function(){

    //Declaramos nuestro modulo de apliación, llamado store
    //Tiene  'productDirec' como dependencia, donde hemos guardado nuestras directivas

    var app = angular.module('store',['productsDirec']);

    //ESPACIO PARA CONTROLADORES //////////////////////////////////////////////////////////////
    app.controller("storeController", ['$http',function($http){
        var store = this;
        store.productos = [];
        //Leemos el archivo JSON usando el servicio $http (Caso de exito, si está bien escrito JSON)
        $http.get('listGera.json').success(function(data){
            store.productos = data;
        })
        //Y si falla la lectura de JSON
        $http.get('listGera.json').error(function(data){
            console.log("No funciona JSON");
        })
    }]);

    //controlador para almacenar comentarios
    app.controller("reviewController", ['$scope', function($scope){
        this.review = {};
        this.addReview = function(producto) {
            producto.opiniones.push(this.review);
            this.review = {};
            $scope.reviewForm.$setPristine();
       };
    }]);

})();
