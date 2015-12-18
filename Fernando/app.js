(function (){	
	var app = angular.module('store',['formulario']);

	//Controlador con Funcion del arreglo de objetos
	app.controller("StoreController", ['$http', function ($http){
		var store = this;
		store.booze = [];
		$http.get('list.json').success(function (data){
		store.booze = data;
		});
	}]);

	//Controlador con funciones del Panel



	//Controlador de thumbs
	app.controller("IconController", function(){
		this.icon = 0;
		this.setIcon = function(setIcon){
			this.icon = setIcon;
		};

 		this.isSelected = function(checkIcon){
			return this.iconcon === checkIcon;
		};
	});

	//Controlador que ingresa los nuevos reviews
	app.controller('ReviewController', ['$scope', function($scope){
		this.opinion={};
		this.addReview = function(booze){
			booze.review.push(this.opinion);
		this.opinion={};
		$scope.reviewForm.$setPristine();
		};
	}]);


	//Directivas para encapsular Elementos y Atributos
	app.directive('priceTitle', function(){
		return{
			restrict: 'A',     // 'A' para Atributo .. // 'E' para Elemento    Ej: <price-title> </price-title>
			templateUrl: 'price-title.html'
		};	
	});


	//Arreglo de objetos
	
})();