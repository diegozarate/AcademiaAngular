(function ()
{
	var app = angular.module('store-product',[]);
	app.directive('productTitle',function()
	{
		return{
			restrict:'E',
			templateUrl:'carritos.html'
		}
	});
	app.directive('imgCarro', function()
	{
		return{
			restrict:'E',
			templateUrl: 'img.html'
		}
	});
	app.directive('infoCarro', function()
	{
		return{
			restrict:'E',
			templateUrl: 'infocarro.html',
			controller: function()
			{
				this.tab=1;
				this.setTab=function(setTab)
				{
					this.tab=setTab;
				};
				this.isSelected=function(chechTab)
				{
					return this.tab=== chechTab;
				};
			},
			controllerAs: 'panel'
		}
	});
})();