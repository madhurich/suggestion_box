(function(){
  angular.module('SuggestionBox')
        .controller('SuggestionController', suggestCtrlFunc);

  suggestCtrlFunc.$inject = ['$scope','$routeParams','suggestions'];

  function suggestCtrlFunc($scope, $routeParams, suggestions){
    var vm = this;
      // $scope.post = suggestions.posts[$routeParams.id];
     vm.posts = suggestions.posts[$routeParams.id];

      vm.addComment = function() {
       var newcomment = vm.posts;
        newcomment.comments.push({
        body: vm.body,
        upvotes: 0
        });
        vm.body = '';
      };

      vm.upVote = function(index) {
    vm.posts.comments[index].upvotes += 1;
  };
  vm.downVote = function(index) {
    vm.posts.comments[index].downvotes -= 1;
  };
  }
})();

