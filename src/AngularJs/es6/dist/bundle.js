(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AgeConverterFilter;
function AgeConverterFilter() {
  return function (employees) {
    employees.map(function (e) {
      var ageDiffMs = Date.now() - e.dob * 1000;
      var ageDate = new Date(ageDiffMs); //time from epoch
      e.age = Math.abs(ageDate.getUTCFullYear() - 1970);
    });

    return employees;
  };
}

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DateConverterFilter;
function DateConverterFilter() {
  return function (employees) {
    employees.map(function (e) {
      if (e.dob) {
        e.date = new Date(e.dob * 1000);
      }
    });

    return employees;
  };
}

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EmployeeListDirective;
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

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainController = function () {
  function MainController($scope) {
    _classCallCheck(this, MainController);

    this.activate($scope);
  }

  _createClass(MainController, [{
    key: 'activate',
    value: function activate($scope) {
      $scope.employees = [{
        firstName: 'Dave',
        lastName: 'Taylor',
        dob: '-28062000'
      }, {
        firstName: 'Jeff',
        lastName: 'Phillips',
        dob: '57556800'
      }, {
        firstName: 'Dan',
        lastName: 'Labrecque',
        dob: '14011200'
      }];
    }
  }]);

  return MainController;
}();

exports.default = MainController;


MainController.$inject = ['$scope'];

},{}],5:[function(require,module,exports){
'use strict';

var _ageConverter = require('./ageConverter.filter');

var _ageConverter2 = _interopRequireDefault(_ageConverter);

var _dateConverter = require('./dateConverter.filter');

var _dateConverter2 = _interopRequireDefault(_dateConverter);

var _employeeList = require('./employee-list.directive');

var _employeeList2 = _interopRequireDefault(_employeeList);

var _main = require('./main.controller');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {

  angular.module('es6', ['ngRoute']).filter('ageConverter', _ageConverter2.default).filter('dateConverter', _dateConverter2.default).directive('employeeList', _employeeList2.default).controller('MainController', _main2.default).config(config);

  function config($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });

    $routeProvider.when('/exercise-1', {
      templateUrl: 'html/main-ex1.html',
      controller: 'MainController'
    }).when('/exercise-2', {
      templateUrl: 'html/main-ex2.html',
      controller: 'MainController'
    }).when('/extra-credit', {
      templateUrl: 'html/main-extra-credit.html',
      controller: 'MainController'
    });
  }
})();

},{"./ageConverter.filter":1,"./dateConverter.filter":2,"./employee-list.directive":3,"./main.controller":4}]},{},[5]);
