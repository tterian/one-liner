class MessageSerializer < ActiveModel::Serializer
  attributes :id, :subject, :body, :created_at, :image

  def image
  	User.find(object.sender_id).image
  end

end
