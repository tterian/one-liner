class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :created_at, :recipient, :sender 

  def sender
  	User.find(object.sender_id)
  end

  def recipient
  	User.find(object.recipient_id)
  end

end
