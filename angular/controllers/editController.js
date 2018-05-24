app.controller('editSurveyController',['xService','$location','$routeParams', function(xService , $location , $routeParams){

	var main = this ;
	this.surveyId = $routeParams.surveyId ;


	// function to fill input with all existing data
	this.getSurvey = function(){

		xService.getSingleSurvey(main.surveyId)
		.then( function(response){

			main.title = response.data.data.surveyTitle ;
			main.subtitle = response.data.data.surveySubtitle ;
			main.instructions = response.data.data.instructions ;

		}, function(response){

			alert("Error! Check console");
			console.log(response);
		});

	}(); // end function


	// function to get confirmation for x//
	this.update = function(){

		var data = {

			surveyTitle : main.title ,
			surveySubtitle : main.subtitle ,
			instructions : main.instructions
		};

		if(confirm(" You are about to update this survey.")){

			main.putRequest(data);
		}


	} ; // end function x


	// function to update the survey
	this.putRequest = function(data){

		xService.updateSurvey(main.surveyId , data)
		.then( function(response){

			console.log('Success of edit survey \n',response);
			$location.path('/survey/'+ main.surveyId);

		}, function(response){

			alert("Error! Check console.");
			console.log(response);

		});
	}; // end of putRequest function


	// getting confirmation for x
	this.goBack = function(){

		if(confirm("Do you want to go back? Changes will not be saved!"))
			$location.path('/survey/viewAll');

	};


}]);
