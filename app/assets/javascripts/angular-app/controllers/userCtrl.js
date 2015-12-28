function UsersController($scope, $mdDialog, User) {

  $scope.signUp = function(user) {
    console.log(user);
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