app.controller('pollSingleSurveyController',['xService','$routeParams', function (xService, $routeParams) {

	var surveyId = $routeParams.surveyId ;
	var main = this ;
	var i = 0 , data ; 	// i is used to keep track of question displayed in the view
	this.disableValue ; // used to enable and disable next button
	this.buttonValue = 'Next' ;
	this.hideStartButton = false ;

	//load a survey
	this.loadSingleSurvey = function(){

		xService.getSingleSurvey(surveyId)
		.then( function successCallback(response){

			console.log('response of load single survey');
			console.log(response.data.data);
			main.singleSurvey = response.data.data ;

		}, function errorCallback(response){

			alert("Error occured. Check console.");
			console.log(response);

		});

	}(); //loadSingleSurvey function

	this.createAnswer = function(questionId , answer){

		data = { selectedOptionNumber : answer };

		xService.postAnswer(questionId , data)
		.then( function(response){

				console.log('Response of createAnswer', answer);
				console.log(response);

			}, function(response){

				alert("Error occured! Check console.");
				console.log(response);

			}); // end of http post request

	} // end of createAnswer function


	// function next button is pressed
	this.loadNextQuestion = function(questionId){

		// like change 0 to 1
		main.answer++ ;
		//checking response

		// questionId is undefined when this function is called first time
		if( questionId !== undefined && questionId !== null){
			main.createAnswer(questionId , main.answer);

		} 	// end of if statement

		main.question = main.questionData[i];

		if( i == main.questionData.length-1 )
			main.buttonValue = 'Finish';

			// to load next question
			i++ ;
			//
			main.answer = undefined ;
			// disable next button again
			main.disableValue = true ;

	} ;



	this.loadQuestions = function(){

		xService.getAllQuestions(surveyId)
		.then( function (response){

			main.questionData = response.data.data ;
			console.log('response of loadQuestions');
			console.log(main.questionData);
			//main.loadNextQuestion();

		} , function(response){

			alert('Error');
			console.log(response);
		});

	}();


	this.startSurvey = function(){

		main.loadNextQuestion();
		main.hideStartButton = true;
		main.showSurvey = true ;
	}


	this.skipQuestion = function(questionId){

		// -1 becomes 0 when answer is incremented in loadNextQuestion() by 1
		main.answer = -1 ;
		main.loadNextQuestion(questionId) ;
	};//end of skipQuestion function


	// it enables next button
	this.changeDisableValue = function(){

		main.disableValue = false ;
	} ;

}]); // controller ends here
