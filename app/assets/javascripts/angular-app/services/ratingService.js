function Rating($resource) {

  var ratings = $resource('/api/ratings/:ratingId', 
    {
      ratingId: '@ratingId'
    });

  var Rating = {
    all: ratings.query(),

    create: function(rating) {
      return ratings.save(rating);
    },


  };
  return Rating;

};