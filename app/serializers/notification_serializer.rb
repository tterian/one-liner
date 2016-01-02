class NotificationSerializer < ActiveModel::Serializer

  attributes :id, :key, :owner, :recipient, :created_at

  def owner
  	User.find(object.owner_id)
  end

  def recipient
  	User.find(object.recipient_id)
  end
  
end
