class RelationshipsController < ApplicationController

  # GET /api/relationships
  # Get all the relationships
  def index
    relationships = []
    relationships << { followers: current_user.followers.count }
    relationships << { following: current_user.following.count }
    render json: relationships
  end
  
  # POST /api/relationships
  # Add a new relationship
  def create
    relationship = Relationship.create(follower_id: params[:follower_id], followed_id: params[:followed_id])

    if relationship.save
      render json: relationship
    else
      render json: { error: "Relationship creating error" }, status: :unprocessable_entity
    end
  end

  # DELETE /api/relationships/:id
  # delete a relationship
  def destroy
    relationship = Relationship.where(follower_id: params[:follower_id], followed_id: params[:followed_id])
    relationship.destroy
  end

  
  private

  def relationship_params
    params.require(:params).permit(:follower_id, :followed_id)
  end

end

