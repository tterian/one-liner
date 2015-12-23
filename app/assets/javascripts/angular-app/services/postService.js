function Post($resource) {

	var posts = $resource('/api/posts/:postId', 
		{
			postId: '@postId'
		});

	var Post = {
		all: posts.query(),

		get: function(post) {
			return posts.get({'postId': postId});
		},

		create: function(post) {
			return posts.save(post);
		},

		destroy: function(post) {
			return posts.delete({}, {'postId': postId});
		}

	};
	return Post;

};