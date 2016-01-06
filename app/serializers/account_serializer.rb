class AccountSerializer < ActiveModel::Serializer

  attributes :id, :name, :email, :bio, :image, :rating, :created_at

  has_many :posts
  has_many :followers
  has_many :following
  has_many :raters
  has_many :ratees

  def rating
    if Rating.where(ratee_id: object.id).count == 0
      return 0
    else
      sum = 0
      count = Rating.where(ratee_id: object.id).count
      Rating.where(ratee_id: object.id).each do |rating|
        sum = sum + rating.score.to_i
      end
      return {sum: sum, count: count}
    end
  end
      

end
