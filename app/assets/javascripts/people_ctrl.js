(function() {
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope, $http) {

    $scope.setup = function() {
      $http.get("/api/v1/people.json").then(function(response) {
        $scope.people = response.data;
      });
    }    

    $scope.toggleBio = function(person) {
      person.bioVisible = !person.bioVisible;
    }

    $scope.addPerson = function(name, bio) {
      var person = {
        name: name,
        bio: bio
      };
      $http.post("/api/v1/people.json", person).then(function(response) {
        $scope.people.push(response.data);
      });
    }

    $scope.updatePerson = function(person) {
      $http.patch("/api/v1/people/" + person.id + ".json", person).then(function(response) {
        var index = $scope.people.indexOf(person);
        $scope.people[index] = response.data;
      });
    }

    $scope.deletePerson = function(person, index) {
      $http.delete("/api/v1/people/" + person.id + ".json").then(function(response){
        $scope.people.splice(index, 1);
      });
    }


    window.$scope = $scope;

  });
})();