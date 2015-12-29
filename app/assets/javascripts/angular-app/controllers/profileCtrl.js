function ProfilesController($scope, $routeParams, $location, $mdDialog, User, Account, Post) {

  $scope.posts = Post.all;
  $scope.currentUser = Account.get($routeParams.id);
  console.log($scope.currentUser);

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

  $scope.redirectToProfile = function(user) {
    var userId = user.name.replace(/ /g,"_").toLowerCase();
    var path = '/profile/'+userId;
    $location.path(path);
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



  $scope.signOut = function() {
    User.signOut()
  };

  $scope.closeDialog = function(ev) {
    $mdDialog.hide(ev);
  }


};