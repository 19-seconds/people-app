(function() {
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope) {

    $scope.people = [
      {
        name: "Bob Marley",
        bio: "Singer from Jamaica",
        bioVisible: false
      },
      {
        name: "Chris Brown",
        bio: "Singer with a bad past",
        bioVisible: false
      },
      {
        name: "Ivan Buravan",
        bio: "Singer from Rwanda!",
        bioVisible: false
      }
    ]

    $scope.toggleBio = function(person) {
      person.bioVisible = !person.bioVisible;
    }

    $scope.addPerson = function(name, bio) {
      $scope.people.push({name: name, bio: bio, bioVisible: false});
    }

    $scope.deletePerson = function(index) {
      $scope.people.splice(index, 1);
    }


    window.$scope = $scope;

  });
})();