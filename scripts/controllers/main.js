'use strict';

angular.module('todoListApp')
.controller('mainCtrl', function ($scope, dataService) {

  $scope.addTodo = function() {
    var todo = {name: "this is a new todo."};
    $scope.todos.unshift(todo);
  };

  $scope.helloConsole = dataService.helloConsole;

  $scope.helloWorld = function() {
    console.log("Hello there! This is the helloWorld controller function, in the mainCtrl!");
  };

  dataService.getTodos(function(response) {
    console.log(response.data);
    $scope.todos = response.data;
  });

  $scope.deleteTodo = function(todo, $index) {
    dataService.deleteTodo(todo);
    $scope.todos.splice($index, 1);
  };

  $scope.saveTodos = function() {
    var filteredTodos = $scope.todos.filter(function(todo) {
      if(todo.edited) {
        return todo;
    };
    })
    dataService.saveTodos(filteredTodos);
  };
})
