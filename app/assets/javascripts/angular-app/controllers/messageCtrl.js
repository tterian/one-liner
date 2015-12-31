function MessagesController($scope, $location, $mdDialog, User, Message) {

  $scope.posts = Post.all;
  $scope.messages = Message.all;

  $scope.addPost = function(post) {
    if ($scope.posts.length == 0) {
      var lastPost = 0;
    } else {
      var lastPost = $scope.posts[$scope.posts.length - 1];
    }

    var newPost = {
      id:           lastPost.id + 1,
      content:      post.content,
      user_id:      $scope.user.id,
      user:         $scope.user,
      created_at:   new Date(),
      comments:     []
    };

    Post.create(newPost).$promise
      .then(function() {
        $scope.posts.push(newPost);
        $scope.post = '';
      });
  };

  $scope.deletePost = function(post) {

  }

  $scope.sendMessage = function(message) {
    var m = {
      sender_id:  $scope.user.id,
      user_id:    $scope.currentProfile.id,
      content:    message.content,
      created_at: new Date(),
      sender: {
        id:    $scope.user.id,
        name:  $scope.user.name,
        image: $scope.user.image,
      }
    }
    console.log(m)
    Message.create(m).$promise
      .then(function() {
        $scope.messages.push(m);
        $mdDialog.hide();
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