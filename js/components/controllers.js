/*** Controllers ***/
define(['app'], function(app){
	app.controller('MainCtrl', ['$scope', function($scope){
		$scope.msg = 'Hello World';
	}]);
});