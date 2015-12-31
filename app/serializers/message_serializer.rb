class MessageSerializer < ActiveModel::Serializer

  attributes :id, :user_id, :content, :sender, :created_at

  def sender
  	User.find(object.sender_id)
  end

end
