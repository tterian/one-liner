class PostSerializer < ActiveModel::Serializer

  attributes :id, :content, :user_id, :poster, :created_at

  has_many :comments

  def poster
    object.user
  end

end
