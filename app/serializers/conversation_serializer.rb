class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :subject, :created_at, :messages

  def messages
    Mailboxer::Notification.where(conversation_id: object.id)
  end

end
