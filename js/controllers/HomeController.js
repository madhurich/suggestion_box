(function(){
    angular.module('SuggestionBox')
        .controller('HomeController',  homeCtrlFunc);

homeCtrlFunc.$inject = ['$scope', 'suggestions'];
    
function homeCtrlFunc($scope, suggestions) {
    var vm = this;
    vm.helloWorld = "Hello, AngularJS!";
    vm.posts = suggestions.posts;

    vm.addSuggestion = function() {
         
        //if input empty, don't submit
        if(!vm.title || vm.title === "") {
            return;
        }
         
        //push suggestion posts in suggestions.js
        vm.posts.push({
            title: vm.title,
            upvotes: 0,
            comments: [],
            id: vm.posts.length + 1,
        });
         
        //after submit, clear input
            vm.title = '';
        };
        vm.upVote = function(index) {
            vm.posts[index].upvotes += 1;
        };
        vm.downVote = function(index) {
            vm.posts[index].downvotes -= 1;
        };

}


})();

