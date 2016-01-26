function followSuggestions() {
  var directive = {
    restrict: 'AE',
    replace: 'true',
    controller: SuggestionsController,
    templateUrl: 'assets/angular-app/templates/suggestion/box.html.erb'
  };

  return directive;
};