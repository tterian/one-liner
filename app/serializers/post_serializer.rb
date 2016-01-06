class PostSerializer < ActiveModel::Serializer

  attributes :id, :content, :user_id, :poster, :rating, :created_at

  has_many :comments

  def poster
    object.user
  end

  def rating
    return { score: object.user.average_rating, count: object.user.reviews }
  end

end
