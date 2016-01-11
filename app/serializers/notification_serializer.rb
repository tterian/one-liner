class NotificationSerializer < ActiveModel::Serializer

  attributes :id, :key, :owner, :recipient, :created_at, :content

  def owner
    User.find(object.owner_id)
  end

  def recipient
    User.find(object.recipient_id)
  end

  def content
    case object.key
    when 'message.sent'
      return "#{recipient.name} has sent you a message"
    when 'relationship.follow'
      return "#{recipient.name} has followed you"
    when 'relationship.unfollow'
      return "#{recipient.name} has unfollowed you"
    else
      return "action isn't recognized"
    end
  end
      

end
