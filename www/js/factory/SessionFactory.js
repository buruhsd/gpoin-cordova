app.factory('SessionFactory', function ($window, $http) {
	var session = {};

	session.setSession = function(session){
		if (session) {
			$window.localStorage.setItem('session', JSON.stringify(session));
		}else{
			$window.localStorage.removeItem('session');
		}
	};

	session.getSession = function(){
		return $window.localStorage.getItem('session');
	};

	return session;

});