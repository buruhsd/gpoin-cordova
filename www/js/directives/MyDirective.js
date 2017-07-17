app.directive('myDirective', function(){
	return{
		restrict:'EAC',
		template:'hello {{dunia}}'
	};
});