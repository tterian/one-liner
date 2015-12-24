class ApplicationController < ActionController::API
  include ActionController::RequestForgeryProtection
  include ActionController::Serialization
  include ActionView::Layouts
  include ActionController::ImplicitRender
  include DeviseTokenAuth::Concerns::SetUserByToken

  respond_to :json

  before_action :configure_permitted_parameters, if: :devise_controller?

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :name
    devise_parameter_sanitizer.for(:sign_up) << :image
  end

  def default_serializer_options
    {root: false}
  end

end
