class AccountSerializer < ActiveModel::Serializer

  attributes :id, :name, :email, :bio, :image, :created_at

  has_many :posts
  has_many :followers
  has_many :following

end
