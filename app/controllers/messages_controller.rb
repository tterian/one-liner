class MessagesController < ApplicationController
  # before_filter :set_user_by_token
  before_action :authenticate_user!

  # GET /api/messages
  # Get all the messages
  def index
    messages = Message.where(sender_id: current_user.id)
    render json: messages
  end

  # message /api/messages
  # Add a new message
  def create
    message = Message.create(content: params[:content], recipient_id: params[:recipient_id], sender_id: current_user.id)

    if message.save
      render json: message
    else
      render json: { error: "message creating error" }, status: :unprocessable_entity
    end
  end

  # DELETE /api/messages/:id
  # Delete a specific message
  def destroy
    message = Message.find(params[:id])
    message.destroy
  end

  
  private

  def message_params
    params.require(:params).permit(:recipient_id, :content)
  end

end

