function navbar() {
  var directive = {
    restrict: 'AE',
    replace: 'true',
    controller: NavbarController,
    templateUrl: 'assets/angular-app/templates/navbar/main.html.erb'
  };

  return directive;
};