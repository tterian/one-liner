function PostsController($scope, $document, $mdDialog, Post, Comment) {

  $scope.selectedIndex = -1;

  $scope.setPost = function(id, postId) {
    $scope.selectedIndex = id;
    $scope.comments = Comment.all(postId);
  };

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
      created_at:   new Date()
    };

    Post.create(newPost).$promise
      .then(function() {
        $scope.posts.push(newPost);
        $mdDialog.hide();
        $scope.post = '';
      });
  };

  $scope.addComment = function(comment) {
    console.log(comment)
    Comment.create(comment).$promise
      .then(function() {
        $scope.comments.push(comment);
      });

  };


};