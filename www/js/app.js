var app=angular.module('FirstApp',["ngRoute", "ngStorage"]);

app.filter('rupiah',	function(){
	return	function	toRp(angka){
		var	rev		=	parseInt(angka,	10).toString().split('').reverse().join('');
		var	rev2 	=	'';
		for(var	i 	= 0; i < rev.length; i++){
			rev2 += rev[i];
			if((i + 1) % 3 === 0 &&	i !== (rev.length - 1)){
				rev2 +=	'.';
			}
		}
		return	'Rp. ' + rev2.split('').reverse().join('') + ',00';
	}
});

// var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/red", {
        templateUrl : "app.html"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});