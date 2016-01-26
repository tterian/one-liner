function userProfile() {
  var directive = {
    restrict: 'AE',
    replace: 'true',
    controller: ProfilesController,
    templateUrl: 'assets/angular-app/templates/profile/box.html.erb'
  };

  return directive;
};