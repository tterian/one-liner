class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :subject, :created_at, :image

  has_many :receipts
  has_many :messages

  def image
    User.find(object.receipts.first.receiver_id).image
  end

end
