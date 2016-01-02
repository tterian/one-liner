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
    @receipts = @conversation.receipts_for current_user
    render json: @receipts
  end

  # POST /api/conversations/:id
  # Reply to a conversation
  def reply
    @conversation = @mailbox.conversations.find(params[:id])
    current_user.reply_to_conversation(@conversation, params[:body])
  end

end