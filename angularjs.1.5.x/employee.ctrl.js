"use strict";

// var app = angular.module("collectionBindingApp", []);

app.controller("EmployeeCtrl", ["$scope", function ($scope) {
	var Employee = function(name, age) {
		this.name = name; 
		this.age = age;
	};
	
	var getEmployees = function() {
		return [
			new Employee("Ryan Poplin", 25),
			new Employee("Byrdann Fox", 26),
			new Employee("Vredes Byrda", 35)
		];
	};
	
	$scope.employeeData = {
		employees: getEmployees()
	};
}]);