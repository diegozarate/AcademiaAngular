(function (){
	var app = angular.module('store',['prod']);

	app.controller('storeController', ['$http', function ($http){
		var store = this;
		store.products = [];
		$http.get('list.json').success(function(data){
			store.products = data;
			console.log(data);
		});
		//this.products=gem;
	}]);

	app.controller("commentController",[ '$scope', function($scope){
		this.comm={};
		this.date=new Date();
		this.addComm=function(product){
			product.reviews.push(this.comm);
			this.comm={};
			$scope.reviewForm.$setPristine();			
		};
	}]);
	var gem = [{
		artist: 'Hercules and Love Affair',
		price: 537,
		date: 'January 4, 2016. 21:30 hrs.',
		canPurchase: true,
		soldOut: false,
		pic: 'pics/herc.png',
		seat: 'VIP, General',
		souvenir: 'Mug, T-shirt, Poster',
		services: 'Food, Bathroom, Medical Service',
		reviews: [
			{
				estrellas: 5,
				comentario: "I cant wait to be there",
				autor: "Elisa Mamona",
				date: new Date(99,12,12)
			},
			{
				estrellas: 5,
				comentario: "OMG !!",
				autor: "Oliver Atom",
				date: new Date()
			}
		]
	},
	{
		artist: 'The Bravery',
		price: 583,
		date: 'March 22, 2016. 20 hrs.',
		canPurchase: true,
		soldOut: false,
		pic: 'pics/bravery.jpg',
		seat: 'VIP, General',
		souvenir: 'Mug, T-shirt, Poster',
		services: 'Food, Bathroom, Medical Service',
		reviews: [
			{
				estrellas: 5,
				comentario: "I cant wait to be there",
				autor: "Elisa M",
				date: "12/12/2015"
			},
			{
				estrellas: 5,
				comentario: "OMG !!",
				autor: "Oliver Atom",
				date: "12/12/2015"
			}
		]
	},
	{
		artist: 'Claptone',
		price: 345,
		date: 'December 22, 2015. 22 hrs.',
		canPurchase: true,
		soldOut: false,
		pic: 'pics/claptone.jpg',
		seat: 'VIP, General',
		souvenir: 'Mug, T-shirt, Poster',
		services: 'Food, Bathroom, Medical Service',
		reviews: [
			{
				estrellas: 5,
				comentario: "I cant wait to be there",
				autor: "Elisa M",
				date: "12/12/2015"
			},
			{
				estrellas: 5,
				comentario: "OMG !!",
				autor: "Oliver Atom",
				date: "12/12/2015"
			}
		]
	},
	{
		artist: 'AFI',
		price: 609,
		date: 'December 18, 2015. 23 hrs.',
		canPurchase: true,
		soldOut: false,
		pic: 'pics/AFI.jpg',
		seat: 'VIP, General',
		souvenir: 'Mug, T-shirt, Poster',
		services: 'Food, Bathroom, Medical Service',
		reviews: [
			{
				estrellas: 5,
				comentario: "I cant wait to be there",
				autor: "Elisa M",
				date: "12/12/2015"
			},
			{
				estrellas: 5,
				comentario: "OMG !!",
				autor: "Oliver Atom",
				date: "12/12/2015"
			}
		]
	},
	{
		artist: 'Route 94',
		price: 609,
		date: 'February 4, 2016. 19:30 hrs.',
		canPurchase: true,
		soldOut: false,
		pic: 'pics/route.jpg',
		seat: 'VIP, General',
		souvenir: 'Mug, T-shirt, Poster',
		services: 'Food, Bathroom, Medical Service',
		reviews: [
			{
				estrellas: 5,
				comentario: "I cant wait to be there",
				autor: "Elisa M",
				date: "12/12/2015"
			},
			{
				estrellas: 5,
				comentario: "OMG !!",
				autor: "Oliver Atom",
				date: "12/12/2015"
			}
		]
	}]

})();