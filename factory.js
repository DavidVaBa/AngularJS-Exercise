var app = angular.module("appModule");

app.factory("CommentsService",['localStorageService',function(localStorageService) {
    var commentsService = {};
      commentsService.key = "angular-todoList";
      
      if(localStorageService.get(commentsService.key)){
          commentsService.comments = localStorageService.get(commentsService.key);
      }else{
          commentsService.comments = [];
      }

      commentsService.add = function(comment){
          commentsService.comments.push(comment);
          commentsService.refresh();
      }

      commentsService.refresh = function(){
          localStorageService.set(commentsService.key,commentsService.comments)
      }
      
      commentsService.getAll = function(){
          return commentsService.comments;
      }

      return commentsService;
  }]);