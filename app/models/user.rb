class User < ActiveRecord::Base
  # Include default devise modules.

  before_save do
    self.uid = SecureRandom.uuid
  end

  devise :database_authenticatable,
         :registerable,
         :trackable,
         :validatable,
         :omniauthable
  include DeviseTokenAuth::Concerns::User
end
