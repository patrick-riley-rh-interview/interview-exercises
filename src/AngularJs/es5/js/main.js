(function () {
	'use strict';

	angular
		.module('es5', [
			'ngRoute',
			'es5.filters.ageConverter',
			'es5.filters.dateConverter',
			'es5.directives.employee',
			'es5.controllers.main'
		])
		.config(config);

	function config($routeProvider, $locationProvider) {

		$locationProvider.html5Mode({
			enabled: false,
			requireBase: false
		});

		$routeProvider
			.when('/exercise-1', {
				templateUrl: 'html/main-ex1.html',
				controller: 'MainController'
			})
			.when('/exercise-2', {
				templateUrl: 'html/main-ex2.html',
				controller: 'MainController'
			})
			.when('/extra-credit', {
				templateUrl: 'html/main-extra-credit.html',
				controller: 'MainController'
			});
	}
}());
