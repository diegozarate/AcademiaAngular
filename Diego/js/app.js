(function(){
	var app = angular.module('store',['store-pokemon']);	

	app.directive("pageTitle", function() {
		return {
			restrict: 'A',
			templateUrl: 'html/title.html'
		}
	});

	app.controller('StoreController', ['$http', function($http){
		var store = this;
		store.items = [];
		$http.get('data/data2.json').success(function(data) { 
			store.items = data;
		});

		this.getPokemon = function(generacion) {
			return generacion.starters;
		};

	}]);


/*
	app.controller("TabController", function(){
		this.tab = 0;

		this.setTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
		this.pokemonOut = function(check) {
			if(check === 0 )
				this.tab = 0;
		};
		this.getNumber = function(rate) {
			return new Array(parseInt(rate));
		};
	});
*/
	app.controller('ReviewController', ['$scope', function($scope){
		this.review = {};
		this.addReview = function(item) {
			console.log(this.review.rate);
			this.review.rate = parseInt(this.review.rate); 
			item.opiniones.push(this.review);
			this.review = {};
			$scope.reviewForm.$setPristine();
			this.review.rate = 0;
		};
	}]);

})();
