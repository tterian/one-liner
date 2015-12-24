class User < ActiveRecord::Base
  has_many :posts,    dependent:   :destroy
  has_many :comments, dependent:   :destroy

  has_many :active_relationships,  class_name:  "Relationship",
                                   foreign_key: "follower_id",
                                   dependent:   :destroy

  has_many :passive_relationships, class_name:  "Relationship",
                                   foreign_key: "followed_id",
                                   dependent:   :destroy
  has_many :following, through: :active_relationships,  source: :followed
  has_many :followers, through: :passive_relationships, source: :follower

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
end
