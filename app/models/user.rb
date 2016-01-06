class User < ActiveRecord::Base
  acts_as_messageable
  has_many :posts,    dependent: :destroy
  has_many :comments, dependent: :destroy

  has_many :active_relationships,  class_name:  "Relationship",
                                   foreign_key: "follower_id",
                                   dependent:   :destroy

  has_many :passive_relationships, class_name:  "Relationship",
                                   foreign_key: "followed_id",
                                   dependent:   :destroy

  has_many :following, through: :active_relationships,  source: :followed
  has_many :followers, through: :passive_relationships, source: :follower


  has_many :active_ratings,  class_name:  "Rating",
                             foreign_key: "rater_id",
                             dependent:   :destroy

  has_many :passive_ratings, class_name:  "Rating",
                             foreign_key: "ratee_id",
                             dependent:   :destroy

  has_many :raters, through: :active_ratings,  source: :rater
  has_many :ratees, through: :passive_ratings, source: :ratee

  after_create :update_avatar

  before_save do
    self.uid = SecureRandom.uuid
  end

  devise :database_authenticatable,
         :registerable,
         :trackable,
         :validatable
  include DeviseTokenAuth::Concerns::User

  def post_count
    self.posts.count
  end

  def follower_count
    self.followers.count
  end

  def following_count
    self.following.count
  end

  def update_avatar
    self.image = "assets/placeholder.png"
    save
  end

  # Follows a user.
  def follow(other_user)
    active_relationships.create(followed_id: other_user.id)
  end

  # Unfollows a user.
  def unfollow(other_user)
    active_relationships.find_by(followed_id: other_user.id).destroy
  end

  # Returns true if the current user is following the other user.
  def following?(other_user)
    following.include?(other_user)
  end

end
