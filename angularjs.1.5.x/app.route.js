"use strict";

app.config(function($routeProvider) {
	$routeProvider
		.when("/employees", {
			templateUrl: "employee.tpl.html",
			controller: "EmployeeCtrl"
		})
		.when("/departments", {
			templateUrl: "department.tpl.html",
			controller: "DepartmentCtrl"
		})
		.otherwise({
			redirectTo: "/"
		});
});