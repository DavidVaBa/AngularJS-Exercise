var app = angular.module("appModule");

app.controller("homeController", function($scope){

});

app.controller("infoController", function($scope){

});

app.controller("hobbiesController", function($scope, $http){
    $scope.photos = [];

    $scope.getInfo = function(){
        for(var i = 0; i < 10; i++){
            $scope.photos.push("https://picsum.photos/" + i +"00/" + (i + 1) +"00/?random")
        }
    }
});

app.controller("contactsController",['$scope', 'emailFilter', function($scope, $http, emailFilter){
    $filter('email');

    $scope.getInfo = function(){
        $http.get("https://jsonplaceholder.typicode.com/users")
            .then(function (data) {
                $scope.users = data.data;
            },function (error) {
                console("Error");
            });
    }
}]);

app.controller("commentsController", function($scope, CommentsService){
    $scope.listComments = CommentsService.getAll();

    $scope.comment = {
        name: null,
        text: null
    };
    
    $scope.addComment = function(){
        CommentsService.add($scope.comment);
        $scope.comment = {
            name: null,
            text: null
        };
    };
});