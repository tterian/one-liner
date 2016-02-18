class CommentsController < ApplicationController
  before_action :authenticate_user!

  # GET /api/posts/:id/comments
  # Get all the comments
  def index
    @post = Post.find(params[:post_id])
    @comments = @post.comments
    render json: @comments
  end

  # GET /api/posts/:id/comments/:id
  # Get a specific comment
  def show
    @post = Post.find(params[:post_id])
    @comment = @post.comments.find(params[:id])
    render json: @comment
  end

  # POST /api/posts/:id/comments
  # Add a new post
  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.create(content: params[:content], user_id: current_user.id)

    if @comment.save
      render json: @comment
    else
      render json: { error: "Comment creating error" }, status: :unprocessable_entity
    end
  end
  
  private

  def comment_params
    params.require(:params).permit(:content, :user_id)
  end

end