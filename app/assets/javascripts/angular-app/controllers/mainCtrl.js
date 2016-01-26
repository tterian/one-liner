function MainController($scope, $location, $mdDialog, User, Relationship, Post) {

  $scope.posts = Post.all;

  // $scope.isFollowedBy = function(userId, followers) {
  //   for ( var i = 0; i < followers.length; i++ ) {
  //     if ( followers[i].id == userId ) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  // $scope.followUser = function(followedId) {
  //   Relationship.follow(followedId).$promise
  //     .then(function() {
  //       $scope.user.following_count = $scope.user.following_count + 1;
  //     });
  // }

  // $scope.unfollowUser = function(followedId) {
  //   Relationship.unfollow(followedId).$promise
  //     .then(function() {
  //       $scope.user.following_count = $scope.user.following_count - 1;
  //     });
  // }

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

  $scope.getStarNumber = function(num) {
    return new Array(Math.round(num * 100) / 100);   
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

};