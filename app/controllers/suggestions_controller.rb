class SuggestionsController < ApplicationController
  
  # GET /api/suggestions
  # Get the list of users to follow
  def index
    suggestions = User.all.order("created_at DESC")
    render json: suggestions, each_serializer: AccountSerializer
  end

  # GET /api/suggestions/:id
  # Get the first chunk of users
  def show
    post = Post.find(params[:id])
    render json: post
  end
  
  private

  def suggestion_params
    params.require(:params).permit(:chunk_id)
  end

end