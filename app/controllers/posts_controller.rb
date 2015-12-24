class PostsController < ApplicationController
  
  # GET /api/posts
  # Get all the posts
  def index
    posts = Post.all
    render json: posts
  end

  # GET /api/posts/:id
  # Get a specific post
  def show
    post = Post.find(params[:id])
    render json: post
  end

  # POST /api/posts
  # Add a new post
  def create
    post = current_user.posts.create(content: params[:content])

    if post.save
      render json: post
    else
      render json: { error: "Post creating error" }, status: :unprocessable_entity
    end
  end
  
  private

  def post_params
    params.require(:params).permit(:content, :user_id)
  end

end

