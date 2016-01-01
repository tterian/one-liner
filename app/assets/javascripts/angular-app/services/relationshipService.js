function Relationship($resource) {

  var relationships = $resource('/api/relationships')

  var relationshipsFollow = $resource('/api/relationships/follow/:followed_id', 
    {
      followed_id: '@followed_id'
    });

  var relationshipsUnfollow = $resource('/api/relationships/unfollow/:followed_id', 
    {
      followed_id: '@followed_id'
    });

  var Relationship = {
    all: relationships.query(),

    follow: function(followedId) {
      return relationshipsFollow.save({'followed_id': followedId});
    },

    unfollow: function(followedId) {
      return relationshipsUnfollow.save({'followed_id': followedId});
    }

  };
  return Relationship;

};