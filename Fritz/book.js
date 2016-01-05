(function(){
	var app = angular.module('store-book', []);

	app.directive('bookOrdering', function(){
		return {
			restrict: 'E',
			templateUrl: 'book-ordering.html'
		};
	});

	app.directive('book', function(){
		return {
			restrict: 'E',
			templateUrl: 'book.html',
			controller: function(){
				this.reviews;
				this.stars;
				this.saveReviews = function(review){
					this.reviews = review;
				}
				this.returnReviews = function(){
					return this.reviews;
				}
				this.showStars = function(stars){
					return new Array(stars);
				}
			},
			controllerAs: 'revCont'
		};
	});

	app.directive('bookImg', function(){
		return {
			restrict: 'E',
			templateUrl: 'book-img.html'
		};
	});
	
	app.directive('bookTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'book-title.html'
		};
	});

	app.directive('bookButton', function(){
		return {
			restrict: 'E',
			templateUrl: 'book-button.html'
		};
	});

	app.directive('bookDescription', function(){
		return {
			restrict: 'E',
			templateUrl: 'book-description.html'
		};
	});
	
})();