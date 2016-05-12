export default function EmployeeListDirective () {
  let directive = {
    scope: {
      employees: '=employees'
    },
    templateUrl: 'html/employee-list.html',
    restrict: 'EA'
  };
  return directive;
}