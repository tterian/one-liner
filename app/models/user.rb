class User < ActiveRecord::Base
  acts_as_messageable
  has_many :posts,    dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :ratings,  dependent: :destroy

  has_many :active_relationships,  class_name:  "Relationship",
                                   foreign_key: "follower_id",
                                   dependent:   :destroy

  has_many :passive_relationships, class_name:  "Relationship",
                                   foreign_key: "followed_id",
                                   dependent:   :destroy
  has_many :following, through: :active_relationships,  source: :followed
  has_many :followers, through: :passive_relationships, source: :follower

  after_create :update_avatar
  after_create :update_score  

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

  def update_score
    self.ratings.create(score: '0')
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
