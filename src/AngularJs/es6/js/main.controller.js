export default class MainController {
	constructor($scope){
		this.activate($scope);
	}

	activate($scope) {
		$scope.employees = [
			{
				firstName: 'Dave',
				lastName: 'Taylor',
				dob: '-28062000'
			},
			{
				firstName: 'Jeff',
				lastName: 'Phillips',
				dob: '57556800'
			},
			{
				firstName: 'Dan',
				lastName: 'Labrecque',
				dob: '14011200'
			}
		];
	}
}

MainController.$inject = ['$scope'];