function PostsController($scope, $mdDialog, Post) {

  $scope.addPost = function(post) {

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
      user_id:      $scope.user.id,
      created_at:   new Date(),
      comments:     []
    };

    Post.create(newPost).$promise
      .then(function() {
        $scope.posts.push(newPost);
        $mdDialog.hide();
      });
  };

};