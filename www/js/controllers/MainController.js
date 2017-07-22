app.controller('MainController', function($scope, $http, $sessionStorage){

	$scope.username="";
	$scope.pass="";
	$scope.inputcaptcha="";
	$scope.data="";
	$scope.email="";
	$scope.loged = "jkdsfjf";

	console.log(localStorage);



		var a = Math.floor(100000 + Math.random() * 900000);   
		    a = String(a);
		    a = a.substring(0,3);

		    var text = "";
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

			for (var i = 0; i < 1; i++)
			text += possible.charAt(Math.floor(Math.random() * possible.length));

			$scope.captcha = a+text;
		
		$scope.log=function(index){
			var a = Math.floor(100000 + Math.random() * 900000);   
		    a = String(a);
		    a = a.substring(0,3);

		    var text = "";
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

			for (var i = 0; i < 1; i++)
			text += possible.charAt(Math.floor(Math.random() * possible.length));

			captcha = a+text;

			$scope.captcha=captcha;
		}

		$scope.login=function(index){

			$scope.password=md5($scope.pass);
			console.log($scope.captcha);
			console.log($scope.username);
			console.log($scope.password);
			console.log($scope.pass);

			if ($scope.inputcaptcha != "" || $scope.username != "" || $scope.pass != "") {
				if ($scope.inputcaptcha == $scope.captcha) {
					$http.post("http://112.78.37.121/apig/gmember_phonegap/controller_membernya/login",{'username':$scope.username, 'pass':$scope.pass, 'password':$scope.password, 'type':'1','imei':'0'})
				    .then(function successCallback(response) {
					    console.log(response.data);

						

						// var json = json.toString();

						

						$scope.data = json;
						console.log(response.data);
					    if (response.data != "false") {
					    	// $_SESSION['test'] = json_encode($response.data);
					    	// window.location.href = '#!/red';
					    	var json = response.data;

							var json = json[0];

							console.log(json.username);

					    	// window.location.href = 'app.html';

					    	localStorage.setItem('name', json.username);
							// sessionStorage.setItem('loggedin_id', $scope.user_details.u_id );
							// sessionStorage.setItem('loggedin_phone', $scope.user_details.u_phone);
							// sessionStorage.setItem('loggedin_address', $scope.user_details.u_address);
							// sessionStorage.setItem('loggedin_pincode', $scope.user_details.u_pincode);\\
							window.location.href = '#!/red';

							console.log(localStorage);
					    }else{
					    	window.alert("hahahah");
					    }
					    
				        
					  }, function errorCallback(response) {
					    // called asynchronously if an error occurs
					    // or server returns response with an error status
					    window.alert("cek koneksi");
					  });
				}else{
					window.alert("captcha salah");	
					$scope.log();
				}
				
			}else{

				window.alert("harus diisi semua");
			}
			
		}

		$scope.forget=function(index){
			$http.post("http://112.78.37.121/apig/gmember_phonegap/controller_membernya/forgot_pass",{'username':$scope.username, 'email':$scope.email})
				    .then(function successCallback(response) {
					    console.log(response.data);

						json = response.data;

						json = json;

						// var json = json.toString();

						console.log(json.username);

						$scope.data = json;
						// console.log(json);
					    window.alert($scope.data.id);
					    
				        
					  }, function errorCallback(response) {
					    // called asynchronously if an error occurs
					    // or server returns response with an error status
					    window.alert("cek koneksi");
					  });
		}


		$scope.forget=function(index){
			$http.post("http://112.78.37.121/apig/gmember_phonegap/controller_membernya/forgot_pass",{'username':$scope.username, 'email':$scope.email})
				    .then(function successCallback(response) {
					    console.log(response.data);

						var json = response.data;

						var json = json;

						// var json = json.toString();

						console.log(json.username);

						$scope.data = json;
						// console.log(json);
					    window.alert($scope.data.id);
					    
				        
					  }, function errorCallback(response) {
					    // called asynchronously if an error occurs
					    // or server returns response with an error status
					    window.alert("cek koneksi");
					  });
		}

		
});