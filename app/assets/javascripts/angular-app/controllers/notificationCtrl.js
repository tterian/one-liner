function NotificationsController($scope, $location, $mdDialog, User, Notification, Post) {

  $scope.posts = Post.all;
  $scope.notifications = Notification.all;


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

  $scope.deletePost = function(post) {

  }

  $scope.signIn = function(user) {
    User.signIn(user)
      .then(function() {
        $mdDialog.hide();
      })
      .catch(function(response) {
        $scope.authResponse = response.errors;
      });
  };

  $scope.showSignUp = function(ev) {
    $mdDialog.show({
      scope: $scope,
      preserveScope: true,
      escapeToClose: true,
      controller: 'UsersController',
      templateUrl: 'assets/angular-app/templates/user/signup.html.erb',
      targetEvent: ev
    });
  };

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

  $scope.redirectToProfile = function(user) {
//  var userId = user.name.replace(/ /g,"_").toLowerCase();
    var path = '/profile/'+user.id;
    $location.path(path);
  }

  $scope.redirectToSetting = function(user) {
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

  $scope.redirectToMessages = function(ev) {
    var path = '/messages';
    $location.path(path);
  }

};