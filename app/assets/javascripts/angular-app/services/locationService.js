function Location($resource) {

  var locations = $resource('/api/posts/:postId/locations/:locationId', 
    {
      postId: '@postId',
      locationId: '@locationId',
    });

  var Location = {

    create: function(location) {
      return locations.save(location);
    }

  };
  return Location;

};