function UsersController($scope, $mdDialog, User) {

  $scope.signUp = function(user) {
    User.signUp(user)
      .then(function() {
        User.signIn(user);
        $mdDialog.hide();
      });
  };

  $scope.signIn = function(user) {
    User.signIn(user)
      .then(function() {
        $mdDialog.hide();
      });
  };


};