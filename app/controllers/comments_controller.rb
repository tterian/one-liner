class CommentsController < ApplicationController
  before_action :authenticate_user!
  before_filter :load_post

  # GET /api/posts/:id/comments
  # Get all the comments
  def index
    @comments = @post.comments
    render json: @comments
  end

  # GET /api/posts/:id/comments/:id
  # Get a specific comment
  def show
    @comment = @post.comments.find(params[:id])
    render json: @comment
  end

  # POST /api/posts/:id/comments
  # Add a new post
  def create
    @comment = @post.comments.create(content: params[:content], user_id: current_user.id)

    if @comment.save
      render json: @comment
    else
      render json: { error: "Comment creating error" }, status: :unprocessable_entity
    end
  end
  
  def load_post
    @post = Post.find(params[:post_id])
  end

  private

  def comment_params
    params.require(:params).permit(:content, :user_id)
  end

end