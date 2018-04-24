var loginapp=angular.module("login", ["ionic","ngCordova","firebase"]);

loginapp.controller("login", function($scope, $state, $firebaseAuth,$window) {

    var fbAuth = $firebaseAuth();

    $scope.login = function(username, password) {

      if(username == null){
        alert("username can not be empty");
      }
      else if(password == null){
        alert("password can not be empty");
      }
      else {
        fbAuth.$signInWithEmailAndPassword(username, password).then(function (authData) {

          $window.location.href = "Home.html";
        }).catch(function (error) {
          alert("Invalid Credentials");
          $window.location.href = "index.html";
          console.error("ERROR: " + error);
        });
      }
    }

    $scope.register = function(username, password) {

      if(username == null){

        alert("username can not be empty");
      }
      else if(password == null){
        alert("password can not be empty");
      }
      else {
        fbAuth.$createUserWithEmailAndPassword(username, password).then(function (userData) {
          alert("you are now registered with Firebase");
          //return fbAuth.$signInWithEmailAndPassword(username, password);


        }).then(function (authData) {

          $window.location.href = "Home.html";
        }).catch(function (error) {
          alert("Unable to register with Firebase");
          console.error("ERROR: " + error);

        });
      }
    }

});




