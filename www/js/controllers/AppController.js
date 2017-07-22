app.controller('AppController', ['$scope','LoginFactory','SessionFactory', function ($scope,LoginFactory,SessionFactory) {
	
	// LoginFactory.isLogin();

	if(SessionFactory.getSession()){
		$scope.isLogin = true;
		console.log($scope.isLogin);
		// var myStarted = document.getElementById('myStarted');
		// return myStarted.resetToPage('html/homepage.html', { animation: 'fade' });
	}else{
		$scope.isLogin = false;
		console.log($scope.isLogin);
		// var myStarted = document.getElementById('myStarted');
		// return myStarted.resetToPage('html/getstarted.html', { animation: 'fade' });
	}
	
}]);