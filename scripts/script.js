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
// ###controller for filter Example
myApp.controller("fifthController",function($scope){
	var people = [
	{	name:"Ram",	gender : "male", dob : new Date("November 23,1989") ,salary : 10500 },
	{	name:"Shayam",gender :"male",dob:new Date("December 24,1990"), salary : 15000.25 },
	{	name:"Tom",	gender :"male",dob:new Date("March 24,1990"), salary : 151000.256 },
	{	name:"Roma",gender :"female",dob:new Date("February 30,1987"), salary : 12000 },
	{	name:"Sheela",	gender :"female",dob:new Date("May 24,1992"), salary : 80000 }
	];

	$scope.people = people;
	$scope.rowLimit = 3 ;
});


angular.module("myModule2",[]).controller("sixthController",function($scope){
	var AamAdmi = [
	{	name:"Ram",	gender : "male", dob : new Date("November 23,1989") ,salary : 10500 },
	{	name:"Shayam",gender :"male",dob:new Date("December 24,1990"), salary : 15000.25 },
	{	name:"Tom",	gender :"male",dob:new Date("March 24,1990"), salary : 151000.256 },
	{	name:"Roma",gender :"female",dob:new Date("February 30,1987"), salary : 12000 },
	{	name:"Sheela",	gender :"female",dob:new Date("May 24,1992"), salary : 80000 }
	];

	$scope.AamAdmi = AamAdmi;
	$scope.sortColumn = "name" ;
});

// ##### clickable table header for sorting 
myApp.controller("seventhController",function($scope){
	var AamAdmi = [
	{	name:"Ram",	gender : "male", dob : new Date("November 23,1989") ,salary : 10500 },
	{	name:"Shayam",gender :"male",dob:new Date("December 24,1990"), salary : 15000.25 },
	{	name:"Tom",	gender :"male",dob:new Date("March 24,1990"), salary : 151000.256 },
	{	name:"Roma",gender :"female",dob:new Date("February 30,1987"), salary : 12000 },
	{	name:"Sheela",	gender :"female",dob:new Date("May 24,1992"), salary : 80000 }
	];

	$scope.AamAdmi = AamAdmi;
	$scope.sortColumn = "name" ;
	$scope.reverseSort = "false";

	$scope.sortData = function(column){
		$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
		$scope.sortColumn = column;
	}

	$scope.getSortClass = function(column)
	{
		if($scope.sortColumn == column)
		{
			return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
		}
		return ' ';
	}
});
