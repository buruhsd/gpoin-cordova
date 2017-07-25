app.controller('AppController',function($scope) {
	
	// LoginFactory.isLogin();
	$scope.name = localStorage.name;
	$scope.deposite = localStorage.deposite;
	

	console.log(localStorage);

	console.log(localStorage.name);
	
});