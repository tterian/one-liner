class RatingsController < ApplicationController
  
  # GET /api/ratings
  # Get all the ratings
  def index
    ratings = Rating.where(ratee_id: params[:ratee_id])
    render json: ratings
  end

  # GET /api/ratings/:id
  # Get a specific rating
  def show
    rating = Rating.where(rater_id: current_user.id, ratee_id: params[:id]).first
    render json: rating
  end

  # rating /api/ratings
  # Add a new rating
  def create
    rating = Rating.create(score: params[:score], comment: params[:comment], rater_id: current_user.id, ratee_id: params[:ratee_id])

    if rating.save
      render json: rating
    else
      render json: { error: "Rating creating error" }, status: :unprocessable_entity
    end
  end

  # PATCH /api/ratings/:id
  # Update a specific rating
  def update
    rating = Rating.where(rater_id: current_user.id, ratee_id: params[:id]).first

    if rating.update(score: params[:score], comment: params[:comment], rater_id: current_user.id, ratee_id: params[:ratee_id])
      render json: rating
    else
      render json: { error: rating.errors }, status: :unprocessable_entity
    end
  end

  
  private

  def rating_params
    params.require(:params).permit(:id, :score, :comment, :rater_id, :ratee_id)
  end

end

