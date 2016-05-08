(function() {
	'use strict';

	angular
		.module('es5.directives.employee', [])
		.directive('employeeList', EmployeeListDirective);

	EmployeeListDirective.$inject = [];

	function EmployeeListDirective() {
		var directive = {
			scope: {
				employees: '=employees'
			},
			templateUrl: 'html/employee-list.html',
			restrict: 'EA'
		};
		return directive;
	}
})();