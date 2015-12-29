module DeviseTokenAuth
  class AccountsController < DeviseTokenAuth::ApplicationController
    before_filter :set_user_by_token, :only => [:info]

    def info
      render json: User.find(params[:id]).as_json(except: [
          :tokens, :updated_at
      ], methods: [
          :post_count, :follower_count, :following_count
      ])
    end
    
  end
end