function ProfilesController($scope, $routeParams, $location, $mdDialog, User, Relationship, Message, Account, Post) {

  $scope.messages = Message.all;
  $scope.relationship = Relationship.all;
  $scope.isFollowed = '0';

  Account.get($routeParams.id).$promise
    .then(function(response) {
      $scope.currentProfile = response;
      $scope.posts = response.posts;

      for ( var i = 0; i < $scope.currentProfile.followers.length; i++ ) {
        if ( $scope.currentProfile.followers[i].id == $scope.user.id ) {
          $scope.isFollowed = '1';
        }
      }
    });


  $scope.deletePost = function(post) {

  }

  $scope.showSignIn = function(ev) {
    $mdDialog.show({
      scope: $scope,
      preserveScope: true,
      escapeToClose: true,
      controller: 'UsersController',
      templateUrl: 'assets/angular-app/templates/user/signin.html.erb',
      targetEvent: ev
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

  $scope.showSendMessage = function(ev) {
    $mdDialog.show({
      scope: $scope,
      preserveScope: true,
      escapeToClose: true,
      controller: 'MessagesController',
      templateUrl: 'assets/angular-app/templates/message/new.html.erb',
      targetEvent: ev
    });    
  }

  $scope.followUser = function(followedId) {
    Relationship.follow(followedId).$promise
      .then(function() {
        $scope.currentProfile.following = $scope.currentProfile.following + 1;
        $scope.isFollowed = '1';
      });
  }

  $scope.unfollowUser = function(followedId) {
    Relationship.unfollow(followedId).$promise
      .then(function() {
        $scope.currentProfile.following = $scope.currentProfile.following - 1;
        $scope.isFollowed = '0';
      });
  }


  $scope.signOut = function() {
    User.signOut();
    $location.path('/');
  };

  $scope.closeDialog = function(ev) {
    $mdDialog.hide(ev);
  }


// Redirects

  $scope.redirectToProfile = function(user) {
//  var userId = user.name.replace(/ /g,"_").toLowerCase();
    var userId = user.id;
    var path = '/profile/'+userId;
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