app.controller('createQuestionController',['xService', '$location', '$routeParams', function( xService , $location , $routeParams){

	var main = this ;
	var surveyId = $routeParams.surveyId ;
	var data ;

	this.create = function(){

		data = {questionText : main.questionText };

		xService.postQuestion(surveyId , data)
		.then( function(response){

			console.log("Success for quetion x", response);
			$location.path('/survey/' + surveyId);

		}, function(response){

			alert(' Check console');
			console.log(response);
		}) ;

	} ;

}]); // end of controller
