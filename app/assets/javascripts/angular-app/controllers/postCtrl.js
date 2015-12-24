function PostsController($scope, $mdDialog, User, Post) {

  $scope.currentUser = User.currentUser();

  $scope.addPost = function(post) {
    if ($scope.posts.length == 0) {
      var lastPost = 0;
    } else {
      var lastPost = $scope.posts[$scope.posts.length - 1];
    }

    var newPost = {
      id:           lastPost.id + 1,
      content:      post.content,
      user_id:      post.user_id
    };

    Post.create(newPost).$promise
      .then(function() {
        $scope.posts.push(newPost);
        $mdDialog.hide();
      });
  };

};