function Relationship($resource) {

  var relationships = $resource('/api/relationships');

  var Relationship = {
    all: relationships.query(),

    follow: function(followerId, followedId) {
      var f = {
        follower_id: followerId,
        followed_id: followedId
      }
      return relationships.save(f);
    },

    unfollow: function(post) {
      return relationships.delete({}, {'postId': postId});
    }

  };
  return Relationship;

};