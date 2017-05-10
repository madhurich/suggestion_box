app.controller('HomeController', ['$scope','suggestions', function($scope, suggestions) {
$scope.helloWorld = "Hello, AngularJS!";
$scope.posts = suggestions.posts;

$scope.addSuggestion = function() {
     
    //if input empty, don't submit
    if(!$scope.title || $scope.title === "") {
    return;
    }
     
    //push suggestion posts in suggestions.js
    $scope.posts.push({
    title: $scope.title,
    upvotes: 0,
    comments: [],
    id: $scope.posts.length + 1,
    });
     
    //after submit, clear input
    $scope.title = '';
    };
$scope.upVote = function(index) {
	$scope.posts[index].upvotes += 1;
};
$scope.downVote = function(index) {
	$scope.posts[index].downvotes -= 1;
};

}]);

