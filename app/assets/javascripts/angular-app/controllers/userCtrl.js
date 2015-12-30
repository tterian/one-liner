function UsersController($scope, $mdDialog, User) {

  $scope.signUp = function(user) {
    User.signUp(user)
      .then(function() {
        User.signIn(user);
        $mdDialog.hide();
      })
      .catch(function(response) {
        $scope.authResponse = response.data.errors;
      });
  };

  $scope.signIn = function(user) {
    User.signIn(user)
      .then(function() {
        $mdDialog.hide();
      })
      .catch(function(response) {
        $scope.authResponse = response.errors;
      });
  };

};