(function(){
	var app = angular.module("prod",[]);
	app.directive("valData", function(){
		return{
			restrict: 'E',
			templateUrl: 'autor.html'
		}
	});
	app.directive("panelsInfo",function(){
		return{
			restrict: 'E',
			templateUrl: 'panels.html',
			controller: function(){
				this.tab= 0;
				this.setTab=function(setTab){
					this.tab=setTab;
				};

				this.isSelected = function(checkTab){
					return this.tab===checkTab;
				};
			},
			controllerAs: 'panels'
		};
	});
})();