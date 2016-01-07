function MainController($scope, $location, $mdDialog, User, Post) {

  $scope.posts = Post.all;

  $scope.addPost = function(post) {
    var user = $scope.user;

    if ($scope.posts.length == 0) {
      var lastPost = 0;
    } else {
      var lastPost = $scope.posts[$scope.posts.length - 1];
    }

    var newPost = {
      id:           lastPost.id + 1,
      content:      post.content,
      poster: {
        image: $scope.user.image,
        name:  $scope.user.name
      },
      rating: {
        count: $scope.user.reviews,
        score: $scope.user.average_rating
      },
      user_id:      $scope.user.id,
      location:     post.location,
      created_at:   new Date()
    };

    Post.create(newPost).$promise
      .then(function() {
        $scope.posts.push(newPost);
        $scope.post = '';
      });
  };

  $scope.deletePost = function(post) {

  }

  $scope.getStarNumber = function(num) {
    return new Array(Math.round(num * 100) / 100);   
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

  $scope.redirectToMessages = function(ev) {
    var path = '/messages';
    $location.path(path);
  }

};