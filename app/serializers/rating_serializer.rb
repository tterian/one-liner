class RatingSerializer < ActiveModel::Serializer
  attributes :id, :score, :comment, :rater, :ratee_id

  def rater
  	User.find(object.rater_id)
  end
end
