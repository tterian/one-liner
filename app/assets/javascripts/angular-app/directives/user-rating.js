function userRating() {
  var directive = {
    restrict: 'AE',
    replace: 'true',
    controller: ProfilesController,
    templateUrl: 'assets/angular-app/templates/rating/box.html.erb'
  };

  return directive;
};