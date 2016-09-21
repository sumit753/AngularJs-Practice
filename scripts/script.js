// module creation, module can be considered as Main method of any program. i.e. Entry point
var myApp = angular.module("myModule", []);
var myController = function ($scope) {
    var employee = {
        firstName: "Ram",
        lastName: "Prasad",
        gender: "male"
    }
    //attaching the complex object to the scope
    $scope.employee = employee;
}

// registering the Controller
myApp.controller("myController_name", myController);

// creating second Controller & doing all the above process in one line

myApp.controller("SecondController", function ($scope) {
    var desh = {
        Name: "India",
        capital: "Delhi",
        flag: "images/india.jpg"
    }
    $scope.desh = desh;
});

// ####day2 ,"for ng-repeat" example

// creating new controller and attaching it to "myApp" module

myApp.controller("ThirdController", function ($scope) {
    var countries = [
	{
	    name: "UK",
	    cities: [
		{ name: "London" },
		{ name: "Birmingham" },
		{ name: "Manchester" }
	    ]
	},

	{
	    name: "USA",
	    cities: [{ name: "Chichago" }, { name: "New York" }]
	},
	{
	    name: "India",
	    cities: [{ name: "Mumbai" }, { name: "Chennai" }, { name: "Delhi" }, { name: "Indore" }]
	}
    ];
    $scope.countries = countries;

});


// ###controller for event handling

myApp.controller("fourthController", function ($scope) {
    var technologies = [

    { name: "C#", likes: 0, Dislikes: 0 },
    { name: "Java", likes: 0, Dislikes: 0 },
    { name: "Python", likes: 0, Dislikes: 0 },
    { name: "Asp.net", likes: 0, Dislikes: 0 }
    ];
    $scope.technologies = technologies;

    // creating increament & decreament function
    $scope.increamentLikes = function (technology) {
        technology.likes++;
    }

    $scope.decreamentLikes = function (technology) {
        technology.Dislikes++;
    }

});
// ###controller for filter Example
myApp.controller("fifthController", function ($scope) {
    var people = [
	{ name: "Ram", gender: "male", dob: new Date("November 23,1989"), salary: 10500 },
	{ name: "Shayam", gender: "male", dob: new Date("December 24,1990"), salary: 15000.25 },
	{ name: "Tom", gender: "male", dob: new Date("March 24,1990"), salary: 151000.256 },
	{ name: "Roma", gender: "female", dob: new Date("February 30,1987"), salary: 12000 },
	{ name: "Sheela", gender: "female", dob: new Date("May 24,1992"), salary: 80000 }
    ];

    $scope.people = people;
    $scope.rowLimit = 3;
});

//Sorting Example
angular.module("myModule2", []).controller("sixthController", function ($scope) {
    var AamAdmi = [
	{ name: "Ram", gender: "male", dob: new Date("November 23,1989"), salary: 10500 },
	{ name: "Shayam", gender: "male", dob: new Date("December 24,1990"), salary: 15000.25 },
	{ name: "Tom", gender: "male", dob: new Date("March 24,1990"), salary: 151000.256 },
	{ name: "Roma", gender: "female", dob: new Date("February 30,1987"), salary: 12000 },
	{ name: "Sheela", gender: "female", dob: new Date("May 24,1992"), salary: 80000 }
    ];

    $scope.AamAdmi = AamAdmi;
    $scope.sortColumn = "name";

    //for searching more the two specific column field by single textbox

    $scope.search = function ($item) {
        if ($scope.searchText == undefined) {
            return true;
        }
        else {
            if ($item.name.toLowerCase().indexOf(scope.searchText.toLowerCase() != -1)
             || ($item.gender.toLowerCase().indexOf(scope.searchText.toLowerCase() != -1)))
                return true;
        }
        return false;
    }
});

// ##### clickable table header for sorting 
myApp.controller("seventhController", function ($scope) {
    var AamAdmi = [
	{ name: "Ram", gender: "male", dob: new Date("November 23,1989"), salary: 10500 },
	{ name: "Shayam", gender: "male", dob: new Date("December 24,1990"), salary: 15000.25 },
	{ name: "Tom", gender: "male", dob: new Date("March 24,1990"), salary: 151000.256 },
	{ name: "Roma", gender: "female", dob: new Date("February 30,1987"), salary: 12000 },
	{ name: "Sheela", gender: "female", dob: new Date("May 24,1992"), salary: 80000 }
    ];

    $scope.AamAdmi = AamAdmi;
    $scope.sortColumn = "name";
    $scope.reverseSort = "false";

    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
        $scope.sortColumn = column;
    }

    $scope.getSortClass = function (column) {
        if ($scope.sortColumn == column) {
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
        }
        return ' ';
    }
});


// ##for custom filters

myApp.controller("customFilterController", function ($scope) {
    var employees = [{ name: "Ram", gender: 1, city: "Varansi" },
    { name: "Shayam", gender: 1, city: "Lucknow" },
    { name: "Tom", gender: 3, city: "Mumbai" },
    { name: "Roma", gender: 2, city: "Indore" },
    { name: "Sheela", gender: 2, city: "Kolkata" }
    ];
    $scope.employees = employees;
});

// $log used for debugging purpose
// example of web service
myApp.controller("webServiceController", function ($scope, $http, $log) {
    // for $http.get method to work we need to add following code in web.config file 
    // <system.web>
    //     <webServices>
    //        <protocols>
    //           <add name="HttpGet"/>
    //        </protocols>
    //      </webServices>
    //   </system.web>

    //$http.get('EmployeeService.asmx/getAllEmployee')
    //    .then(function (response) {
    //        $scope.empData = response.data;
    //    });
    // the above code('ShotCut') can be written this way also
    $http({
        method: 'GET',
        url: 'EmployeeService.asmx/getAllEmployee'
    }).then(function (response) {
        $scope.empData = response.data;
        $log.info(response);
    }, function (reason) {
        //this "reason" property is used to see reason for error
        $scope.error = reason.data;
        $log.info(reason);
    });
});

//custom service example
//as we can see that our controller code as become complex so we need to separate this code.
//We can make custom service.By making custom service we can use reuse any number of times in 
// in different modules & also it will be easy to maintain the code.
//myApp.controller("customServiceController", function ($scope) {
//    $scope.transfromTheString = function (input) {

//        if (!input) {
//            return input;
//        }
//        var output = "";

//        for (var i = 0 ; i < input.length; i++) {
//            if( i>0 && input[i] == input[i].toUpperCase())
//            {
//                output = output + " ";
//            }
//            output = output + input[i];
//        }
//        $scope.output = output;
//    }
  
//});
//solution of above 
myApp.controller("customServiceController", function ($scope , stringService) {
    $scope.transfromTheString = function (input) {
        $scope.output = stringService.processString(input);
        }
       
});

 // anchorScroll method demo

 var demoApp = angular.module("anchorModule",[]);

 demoApp.controller("demoAnchorController",function($scope,$location,$anchorScroll){
    $scope.scrollTo = function(scrollTolocation)
    {
            $location.hash(scrollTolocation);
            $anchorScroll.yOffset = 20;
            $anchorScroll();
    }
 });


