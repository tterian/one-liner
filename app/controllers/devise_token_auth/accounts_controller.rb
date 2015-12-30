module DeviseTokenAuth
  class AccountsController < DeviseTokenAuth::ApplicationController
    before_filter :set_user_by_token, :only => [:info]

    def info
      render json: User.find(params[:id]), serializer: AccountSerializer
    end
    
  end
end