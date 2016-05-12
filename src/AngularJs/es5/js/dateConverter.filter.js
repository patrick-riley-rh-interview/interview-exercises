(function () {

  angular
    .module('es5.filters.dateConverter', [])
    .filter('dateConverter', dateConverter);

  dateConverter.$inject = [];

  function dateConverter () {
    return function (employees) {
      employees.map(function (e) {
        if (e.dob) {
          e.date = new Date(e.dob * 1000);
        }
      });

      return employees;
    };
  }
})();