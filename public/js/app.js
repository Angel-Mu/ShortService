	// create the module and name it ShortApp
	var ShortApp = angular.module('ShortApp', ['ngRoute']);

	// configure our routes
	ShortApp.config(function($routeProvider) {
		$routeProvider

		// route for the home page
		.when('/', {
			templateUrl: 'pages/app.html',
			controller: 'MainController'
		})
	});

	// create the controller and inject Angular's $scope
	ShortApp.controller('MainController', function($scope, ShortenServices) {
		// create a message to display in our view
		// $scope.message = 'Everyone come and see how good I look!';
		$scope.origin = location.origin;
		$scope.resetInput = function(){
			delete $scope.message;
		}

		$scope.goTo = function(){
			window.open($scope.origin + '/' + $scope.url.shortened, '_blank', "", true);
		}

		$scope.callService = function() {
			ShortenServices.postURL(function(err, data){
				if(err){
					$scope.message = err.message || err;
				}else{
					$scope.url = data;
					$scope.message = "Url short " + data.shortened;
				}
			}, $scope.original);
		}
	});

	ShortApp.controller('AdminController', function($scope) {
	});

	ShortApp.service('ShortenServices', function($http) {
		this.postURL = function(callback, original) {
			$http.post('/api/shorten', {
					original: original
				})
				.success(function(data, status, headers, config) {
					callback(null, data);
				})
				.error(function(data, status, headers, config) {
					if (status == 0 && !data) {
						data = {};
						data.err = "No hay conexión.";
					} else {
						data = {};
						data.err = "Ha ocurrido un erro al tratar de acortar url " + original;
					}
					callback(data, null);
				});
		}
	})
