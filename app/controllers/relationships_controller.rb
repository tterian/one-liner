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
  def follow
    @relationship = Relationship.create(follower_id: current_user.id, followed_id: params[:followed_id])
    @relationship.create_activity key: 'relationship.follow', owner: current_user, recipient: User.find(params[:followed_id])

    if @relationship.save
      render json: @relationship
    else
      render json: { error: "Relationship creating error" }, status: :unprocessable_entity
    end
  end

  # DELETE /api/relationships
  # delete a relationship
  def unfollow
    @relationship = Relationship.where(follower_id: current_user.id, followed_id: params[:followed_id]).first
    @relationship.create_activity key: 'relationship.unfollow', owner: current_user, recipient: User.find(params[:followed_id])    
    @relationship.destroy
    render json: { message: "Relationship destroyed successfully" }
  end

  
  private

  def relationship_params
    params.require(:params).permit(:followed_id)
  end

end

