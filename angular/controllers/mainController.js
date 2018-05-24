app.controller('mainController',['$rootScope', '$scope' , function( $rootScope , $scope){

	// storing some username and password for logging in
	var userDetails = [

						{ userName : 'YOgex' , password : 'YOgesh@xxo'} ,

						{ userName : 'x' , password : 'xx12'} ,

						{ userName : 't' , password : '12'} ,

						{ userName : 'p' , password : '12'},

						{ userName : 'o' , password : '12'}

					] ;


	$scope.logMeIn = function(userName , password){
		userDetails.forEach(function(element){
			if( userName == element.userName && password == element.password ){
				$rootScope.loggedIn = true ;
			}
		}) ; // end of forEach

		if(!$rootScope.loggedIn){
			alert("Incorrect username or password!\n Please try again.\n");
		}

	}; // end of logMeIn function

}]) ; // end of controller
