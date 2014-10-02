(function() {
	var app = angular.module('tweetSaver', []);
	app.controller('searchCtrl', ['$scope', '$http', function($scope, $http){
		$scope.method = 'JSONP';
		$scope.realTimeData;
		$scope.url;
		$scope.count = 10;
		$scope.search = function() {
			$http({
				method: $scope.method,
				url: 'http://tweetsaver.herokuapp.com/?q=' + $scope.keyword + '&count=' + $scope.count,
				params: {callback: 'JSON_CALLBACK'}
			}).
			success(function(data, status) {
				$scope.realTimeData = data.tweets;
				$scope.status = status;
			}).
			error(function(data, status) {
				$scope.realTimeData = data || "Request failed";
				$scope.status = status;
			});
		};
	}]);
})();