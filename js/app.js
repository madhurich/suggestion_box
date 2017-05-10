(function(){

	angular.module('SuggestionBox', ['ngRoute'])
		.config(configFunc);

		configFunc.$inject = ['$routeProvider'];

		function configFunc($routeProvider){
		$routeProvider
		.when('/',{
			controller: "HomeController",
			controllerAs: 'hc',
			templateUrl: "views/Home.html"
		})
		 .when('/suggestion/:id', {
	    	controller: 'SuggestionController',
	    	controllerAs: 'sc',
	    	templateUrl: 'views/suggestion.html'
	  	})
		 .otherwise({
		 	redirectTo: '/'
		 });
	
	}

})();


