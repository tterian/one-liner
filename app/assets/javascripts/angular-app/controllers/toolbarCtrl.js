function ToolbarController($scope, $location, $mdDialog, User, Post) {


  $scope.showEditProfile = function(ev) {
    $mdDialog.show({
      scope: $scope,
      preserveScope: true,
      escapeToClose: true,
      controller: 'UsersController',
      templateUrl: 'assets/angular-app/templates/user/edit.html.erb',
      targetEvent: ev
    });
  };

  $scope.showPost = function(ev) {
    $mdDialog.show({
      scope: $scope,
      preserveScope: true,
      escapeToClose: true,
      controller: 'PostsController',
      templateUrl: 'assets/angular-app/templates/post/new.html.erb',
      targetEvent: ev
    });
  };

  $scope.signOut = function() {
    User.signOut().then(function() {
        $location.path('/');
        // $window.location.reload();
      });

  };

  $scope.closeDialog = function(ev) {
    $mdDialog.hide(ev);
  }


// Redirects

  $scope.redirectToProfile = function(userId) {
//  var userId = user.name.replace(/ /g,"_").toLowerCase();
    var path = '/profile/' + userId;
    $location.path(path);
  }

  $scope.redirectToSetting = function(ev) {
    var path = '/settings/account';
    $location.path(path);
  }

  $scope.redirectToHome = function(ev) {
    var path = '/';
    $location.path(path);
  }

  $scope.redirectToNotifications = function(ev) {
    var path = '/notifications';
    $location.path(path);
  }

  $scope.redirectToSuggestions = function(ev) {
    var path = '/suggestions';
    $location.path(path);
  }

  $scope.redirectToMessages = function(ev) {
    var path = '/messages';
    $location.path(path);
  }

};