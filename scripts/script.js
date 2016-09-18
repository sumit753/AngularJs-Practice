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
 
 // creating second Controller & doing all the above process in one line

 myApp.controller("SecondController",function($scope){
 			var desh = {     Name : "India" ,
 							capital : "Delhi",
 							flag : "images/india.jpg" }
 							$scope.desh = desh;
 });

// ####day2 ,"for ng-repeat" example

// creating new controller and attaching it to "myApp" module

	myApp.controller("ThirdController",function($scope){
		var countries = [
							{
								name : "UK",
								cities: [	
											{ name:"London" },
											{ name:"Birmingham" },
											{ name : "Manchester" }
										]
							} ,

							{
								name : "USA",
								cities: [{name : "Chichago"},{name:"New York"}]
							} ,
							{
								name : "India",
								cities: [{name:"Mumbai"},{name:"Chennai"},{name : "Delhi"},{name : "Indore"}]
							} 
					];
					$scope.countries = countries;
		
	});


	// ###controller for event handling

	myApp.controller("fourthController",function($scope){
			var technologies = [

									{	name:"C#",	likes:0,	Dislikes:0	},
									{	name:"Java",	likes:0,	Dislikes:0	},
									{	name:"Python",	likes:0,	Dislikes:0	},
									{	name:"Asp.net",	likes:0,	Dislikes:0	}
								];
								$scope.technologies = technologies;

						// creating increament & decreament function
						$scope.increamentLikes = function(technology)
						{
							technology.likes++;
						}

						$scope.decreamentLikes = function(technology)
						{
							technology.Dislikes++;
						}

	});

	