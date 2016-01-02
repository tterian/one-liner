class MessagesController < ApplicationController
  before_action :authenticate_user!

  def create
    recipient = User.where(id: params[:recipient_id])
    conversation = current_user.send_message(recipient, params[:content], params[:subject])
    render json: conversation
  end
end