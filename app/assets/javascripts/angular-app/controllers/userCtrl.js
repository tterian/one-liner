function UsersController($scope, $mdDialog, $mdToast, User) {

  $scope.signIn = function(user) {
    User.signIn(user)
      .then(function() {
        $mdDialog.hide();
      })
      .catch(function(response) {
        $mdToast.show(
          $mdToast.simple()
            .textContent(response.errors[0])
            .position("bottom right")
            .hideDelay(3000)
        );
      });
  };

  $scope.signUp = function(user) {
    User.signUp(user)
      .then(function() {
        User.signIn(user);
        $mdDialog.hide();
      })
      .catch(function(response) {
        $mdToast.show(
          $mdToast.simple()
            .textContent(response.errors[0])
            .position("bottom right")
            .hideDelay(3000)
        );
      });
  };

  $scope.showSignUp = function(ev) {
    $mdDialog.show({
      scope: $scope,
      preserveScope: true,
      escapeToClose: true,
      controller: 'UsersController',
      templateUrl: 'assets/angular-app/templates/user/signup.html.erb',
      targetEvent: ev
    });
  };


};