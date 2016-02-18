class PostSerializer < ActiveModel::Serializer

  attributes :id, :content, :user_id, :poster, :created_at

  def poster
    object.user
  end

end
