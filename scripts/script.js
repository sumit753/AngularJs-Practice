 // module creation, module can be considered as Main method of any program. i.e. Entry point
var myApp = angular.module("myModule",[]);
var myController = function ($scope){
	var employee = { 
					 firstName : "Ram" ,
					 lastName : "Prasad",
					 gender : "male"
				} 
				//attaching the complex object to the scope
				$scope.employee = employee;
}

// registering the Controller
myApp.controller("myController_name",myController);
 
 
