app.controller('allSurveyController',['xService','$route', function(xService, $route ){

	var main = this ;
	this.surveys = [] ;

	// function to load all surveys
	this.loadAllSurveys = function(){

	xService.getAllSurvey()
		.then(function successCallback(response){

			//console.log(response);
			main.surveys = response.data.data ;
			console.log(main.surveys);

		}, function errorCallback(response){

			alert("Error occured! Check console.");
			console.log(response);

		});

	}(); // end of self-invoking loadAllSurveys function


	// function to delete a survey
	this.deleteRequest = function(surveyId){

		xService.deleteSurvey(surveyId)
			.then(function(response){

				console.log("This is success Response",response);

			}, function(response){

				alert("Error console.");
				console.log(response);

		});

	}// end of delete request


	// function  to delete survey
	this.delete = function(surveyId , index){

		var confirmation = confirm("Do you really want to delete this survey? ");

		if(confirmation){
			main.deleteRequest(surveyId , index);
			main.surveys.splice(index , 1);
		}

	};


}]); // end of controller
