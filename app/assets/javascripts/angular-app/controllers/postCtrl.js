function PostsController($scope, $document, $mdDialog, Post) {

  $scope.selectedIndex = -1;

  $scope.lineClicked = function(id) {
    $scope.selectedIndex = id;
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
        $mdDialog.hide();
        $scope.post = '';
      });
  };

  $document.on('click', function(e) {
    elem = angular.element(e.target)
    if(!elem.hasClass('md-post-header')) {
      console.log('aaaa');
      console.log($scope.selectedIndex);
      $scope.selectedIndex = -100;
    }
  });

};