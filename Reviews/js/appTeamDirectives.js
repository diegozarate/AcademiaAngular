(function(){

  var app = angular.module('teamDirectives' ,[]);

  app.directive("contentPage", function(){
    return{
      restrict: 'E',
      templateUrl: '/contentPage.html'
    };
  });

})();
