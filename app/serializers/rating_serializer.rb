class RatingSerializer < ActiveModel::Serializer

  attributes :id, :score, :rater_id, :ratee_id

end
