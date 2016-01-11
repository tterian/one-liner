class MessagesController < ApplicationController
  before_action :authenticate_user!

  def create
    recipient = User.where(id: params[:recipient_id]).first
    conversation = current_user.send_message(recipient, params[:content], recipient.name)

    Activity.create(trackable_type: "Message", key: 'message.sent', owner_id: current_user.id, recipient_id: params[:recipient_id])

    render json: conversation
  end
end