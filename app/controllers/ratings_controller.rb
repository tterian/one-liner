class RatingsController < ApplicationController
  
  # GET /api/ratings
  # Get all the ratings
  def index
    ratings = current_user.ratings
    render json: ratings
  end

  # rating /api/ratings
  # Add a new rating
  def create
    rating = current_user.ratings.create(content: params[:content])

    if rating.save
      render json: rating
    else
      render json: { error: "rating creating error" }, status: :unprocessable_entity
    end
  end

  # GET /api/ratings/:id
  # Get a specific rating
  def update
    rating = rating.find(params[:id])

    if @event.update(event_params)
      render json: @event
    else
      render json: { error: @event.errors }, status: :unprocessable_entity
    end
  end

  
  private

  def rating_params
    params.require(:params).permit(:score, :user_id)
  end

end

