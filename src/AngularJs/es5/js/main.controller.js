(function () {

  angular
    .module('es5.controllers.main', [])
    .controller('MainController', MainController);

  MainController.inject = ['$scope'];

  function MainController ($scope) {

    activate();

    function activate () {
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
})();