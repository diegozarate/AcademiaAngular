(function(){
    //Este archivo contiene SOLO DIRECTIVAS personalizadas, las que hemos creado
    var app = angular.module('productsDirec', []);

    app.directive("productoName", function () {
        return {
            restrict: 'E',
            templateUrl: 'htmls/productoName.html'
        };
    });

    app.directive("productoArtist", function () {
        return {
            restrict: 'E',
            templateUrl: 'htmls/productoArtist.html'
        };
    });

    app.directive("galeriaProductos", function () {
        return {
            restrict: 'E',
            templateUrl: 'htmls/galeriaProductos.html'
        };
    });

    app.directive("productosHeader", function () {
        return {
            restrict: 'E',
            templateUrl: 'htmls/productosHeader.html'
        };
    });

    app.directive("panelesProductos", function() {
        return{
            restrict: 'E',
            templateUrl: 'htmls/PanelesProductos.html',
            controller: function()
            {
                this.tab = 0; //0 -->N o haya tab seleccionado al iniciar
                this.setTab = function(setTab) {
                    this.tab = setTab;
                };
                this.isSelected = function(checkTab){
                    return this.tab === checkTab;
                };
            },
            controllerAs: 'panel'
        };
    });

})();
