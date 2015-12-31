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

};