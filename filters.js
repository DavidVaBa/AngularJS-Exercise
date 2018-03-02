var app = angular.module("appModule");

app.filter("emailFilter", function(){
    return function(texto){
        return String(texto).toLowerCase();
    }
});