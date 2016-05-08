import AgeConverterFilter from './ageConverter.filter';
import DateConverterFilter from './dateConverter.filter';
import EmployeeListDirective from './employee-list.directive';
import MainController from './main.controller';

(() => {
	'use strict';

	angular
		.module('es6', ['ngRoute'])
		.filter('ageConverter', AgeConverterFilter)
		.filter('dateConverter', DateConverterFilter)
		.directive('employeeList', EmployeeListDirective)
		.controller('MainController', MainController)
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
})();
