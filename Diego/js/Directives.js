(function(){
var app = angular.module('store-pokemon', []);
	
app.directive("tabController", function(){
		return {
			restrict: 'E',
			templateUrl: 'html/stats-modal.html',
			controller: function() {
				this.tab = 0;
				this.poke = {};
				this.setPokemon = function(pokemon) {
				this.poke = pokemon;
				};
				this.getPokemon = function() {
				return this.poke;
				};	
				this.setTab = function(setTab) {
					this.tab = setTab;
				};
				this.isSelected = function(checkTab) {
					return this.tab == checkTab;
				};
				this.pokemonOut = function(check) {
					if(check === 0 )
					this.tab = 0;
				};
				this.getNumber = function(rate) {
					return new Array(parseInt(rate));
				};
			},
			controllerAs: 'Panel'
		};
	});
app.directive("chooseController", function() {
	return {
		restrict:'E',
		templateUrl: 'html/choose-modal.html',
		controller: function() {
			this.poke = {};
			this.setPokemon = function(pokemon) {
				this.poke = pokemon;
			};
			this.getPokemon = function() {
				return this.poke;
			};	
		},
		controllerAs: 'Modal'
	};
});

})();