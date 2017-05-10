app.controller('SuggestionController', ['$scope','$routeParams','suggestions',
  function($scope, $routeParams, suggestions) {
    // $scope.post = suggestions.posts[$routeParams.id];
   $scope.posts = suggestions.posts[$routeParams.id];

    $scope.addComment = function() {
     var newcomment = $scope.posts;
      newcomment.comments.push({
      body: $scope.body,
      upvotes: 0
      });
      $scope.body = '';
    };

    $scope.upVote = function(index) {
  $scope.posts.comments[index].upvotes += 1;
};
$scope.downVote = function(index) {
  $scope.posts.comments[index].downvotes -= 1;
};
  }

  ]);