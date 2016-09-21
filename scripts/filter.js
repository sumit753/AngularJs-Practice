// custom filter for file DAY4.1.html
myApp.filter("gender",function(){
			return function(gender)
			{
				switch(gender)
				{
					case 1 :
							return "male";
					case 2 : 
							return "female";
					case 3 :
							return "Unknown";		
				}
			}
		})