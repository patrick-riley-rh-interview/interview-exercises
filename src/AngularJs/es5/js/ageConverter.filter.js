(function () {

  angular
    .module('es5.filters.ageConverter', [])
    .filter('ageConverter', ageConverter);

  ageConverter.$inject = [];

  function ageConverter () {
    return function (employees) {
      employees.map(function (e) {
        var ageDiffMs = Date.now() - (e.dob * 1000);
        var ageDate = new Date(ageDiffMs); //time from epoch
        e.age = Math.abs(ageDate.getUTCFullYear() - 1970);
      });

      return employees;
    };
  }
})();