app.controller('MainController', function($scope, $http){

	$scope.username="";
	$scope.password="";

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

			console.log($scope.captcha);
			console.log($scope.username);
			console.log($scope.password);

			$http.post("http://112.78.37.121/apig/gmember_id_bisnis/controller_membernya/login",{'username':$scope.username, 'password':$scope.password, 'type':'1','imei':'0'})
			.then(function(response) {
		        $scope.content = response.data;  

		        console.log($scope.content);    
		    })
		}

		// $scope.insertdata=function(){
		// 	$http.post("input.php",{'id':$scope.id, 'nama':$scope.nama, 'alamat':$scope.alamat,'jenis':$scope.jenis})
		// 	.success(function(){
		// 	$scope.msg="Data Berhasil Disimpan";
		// 	$scope.displayStud();
		// 	})
		// }
		
});