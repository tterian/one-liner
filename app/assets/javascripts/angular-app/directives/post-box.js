function postBox() {
  var directive = {
    restrict: 'AE',
    replace: 'true',
    controller: PostsController,
    templateUrl: 'assets/angular-app/templates/post/box.html.erb'
  };

  return directive;
};