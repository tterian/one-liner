function shareToolbar() {
  var directive = {
    restrict: 'AE',
    replace: 'true',
    controller: ToolbarController,
    templateUrl: 'assets/angular-app/templates/navbar/main.html.erb'
  };

  return directive;
};