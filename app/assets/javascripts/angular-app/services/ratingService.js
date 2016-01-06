function Rating($resource) {

  var ratings = $resource('/api/ratings/:ratingId', 
    {
      ratingId: '@ratingId'
    },
    {
      'update': { method: 'PUT' }
    });

  var Rating = {
    all: ratings.query(),

    get: function(ratingId) {
      return ratings.get({'ratingId': ratingId});
    },

    create: function(rating) {
      return ratings.save(rating);
    },

    update: function(rating, ratingId) {
      return ratings.update({'ratingId': ratingId}, rating)
    }


  };
  return Rating;

};