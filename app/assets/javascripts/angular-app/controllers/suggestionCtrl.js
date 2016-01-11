function SuggestionsController($scope, $location, $mdDialog, User, Relationship, Suggestion, Post) {

  $scope.posts = Post.all;
  $scope.suggestions = Suggestion.all;

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

  $scope.isFollowedBy = function(userId, followers) {
    for ( var i = 0; i < followers.length; i++ ) {
      if ( followers[i].id == userId ) {
        return true;
      }
    }
    return false;
  }

  $scope.followUser = function(followedId) {
    Relationship.follow(followedId).$promise
      .then(function() {
        $scope.user.following_count = $scope.user.following_count + 1;
      });
  }

  $scope.unfollowUser = function(followedId) {
    Relationship.unfollow(followedId).$promise
      .then(function() {
        $scope.user.following_count = $scope.user.following_count - 1;
      });
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

  $scope.calculateStarNumber = function(rating) {
    if (rating.count == 0) {
      return new Array(0)
    } else {      
      return new Array(Math.round(rating.sum/rating.count * 100) / 100);
    }
  }

  $scope.calculateStarNumberN = function(rating) {
    if (rating.count == 0) {
      return new Array(5)
    } else {      
      return new Array(5 - Math.round(rating.sum/rating.count * 100) / 100);
    }
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