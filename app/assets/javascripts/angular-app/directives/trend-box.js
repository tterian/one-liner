function trendBox() {
  var directive = {
    restrict: 'AE',
    replace: 'true',
    controller: TrendsController,
    templateUrl: 'assets/angular-app/templates/trend/box.html.erb'
  };

  return directive;
};