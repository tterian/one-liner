class ConversationsController < ApplicationController
  before_action :authenticate_user!

  # GET /api/conversations
  # Get all the conversations
  def index
    @conversations = current_user.mailbox.conversations
    render json: @conversations
  end

  # GET /api/conversations/:id
  # Get a conversation
  def show
    @conversation = current_user.mailbox.conversations.find(params[:id])
    render json: @conversation
  end

  # POST /api/conversations/:id
  # Reply to a conversation
  def reply
    @conversation = current_user.mailbox.conversations.find(params[:id])
    render json: current_user.reply_to_conversation(@conversation, params[:body])
  end

end