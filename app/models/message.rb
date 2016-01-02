class Message < ActiveRecord::Base
  include PublicActivity::Model
  tracked only:       [:create],
          owner:      Proc.new{ |controller, model| controller.current_user },
          recipient:  :sender

  belongs_to :sender, class_name: "User"
  belongs_to :recipient, class_name: "User"

end
