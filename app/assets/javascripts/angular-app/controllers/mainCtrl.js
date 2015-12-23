function MainController($scope, $mdDialog, User, Post) {


  $scope.posts = Post.all;

  $scope.showSignIn = function(ev) {
    $mdDialog.show({
      scope: $scope,
      preserveScope: true,
      escapeToClose: true,
      controller: 'UsersController',
      templateUrl: 'assets/angular-app/templates/user/signin.html.erb',
      targetEvent: ev,
    });
  };

  $scope.showSignUp = function(ev) {
    $mdDialog.show({
      scope: $scope,
      preserveScope: true,
      escapeToClose: true,
      controller: 'UsersController',
      templateUrl: 'assets/angular-app/templates/user/signup.html.erb',
      targetEvent: ev,
    });
  };

  $scope.signOut = function() {
    User.signOut()
  };

  $scope.closeDialog = function(ev) {
    $mdDialog.hide(ev);
  }


};