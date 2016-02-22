function Comment($resource) {

  var comments = $resource('/api/posts/:postId/comments', 
    {
      postId: '@postId'
    });

  var Comment = {
    all: function(postId) {
      return comments.query({'postId': postId});
    },

    create: function(postId, comment) {
      return comments.save({'postId': postId}, comment);
    }

  };
  return Comment;

};