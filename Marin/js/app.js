(function()
{

	var app = angular.module('store',['store-product']);
	var car=[];
	app.controller('getting', function()
	{
		this.arreglo=car;
		this.getCar= function(pos)
		{
			return this.arreglo[pos];
		};
	});
	app.controller('StoreController',['$http',function($http)
	{
		var store=this;
		store.cars=[];

		$http.get('list.json').success(function(data)
		{
			console.log(data);
			store.cars=data;
			
		});
		$http.get('list.json').error(function(data)
		{
			console.log("Bye jason");
			
		});
		
	}]);
	app.controller('ReviewController',['$scope', function($scope)
	{
		this.review={};
		this.addReview= function(car)
		{
			
			pos=cars.opiniones.push(this.review);
			f= new Date();
			cars.opiniones[pos-1].fecha=f.getDay() + "/" + (f.getMonth()+1) + "/"+f.getFullYear();		
			this.review={};
			$scope.reviewForm.$setPristine();
		};
	}]);
	
})();
