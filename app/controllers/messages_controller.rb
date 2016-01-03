class MessagesController < ApplicationController
  before_action :authenticate_user!

  def create
    recipient = User.where(id: params[:recipient_id]).first
    conversation = current_user.send_message(recipient, params[:content], recipient.name)
    render json: conversation
  end
end