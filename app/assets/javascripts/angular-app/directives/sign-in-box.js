function signInBox() {
  var directive = {
    restrict: 'AE',
    replace: 'true',
    controller: UsersController,
    templateUrl: 'assets/angular-app/templates/user/signin-box.html.erb'
  };

  return directive;
};