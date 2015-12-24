module DeviseTokenAuth
  class TokenValidationsController < DeviseTokenAuth::ApplicationController
    skip_before_filter :assert_is_devise_resource!, :only => [:validate_token]
    before_filter :set_user_by_token, :only => [:validate_token]

    def validate_token
      # @resource will have been set by set_user_token concern
      if @resource
        yield if block_given?
        render_validate_token_success
      else
        render_validate_token_error
      end
    end

    protected 

    def render_validate_token_success
      render json: {
        success: true,
        data: @resource.as_json(except: [
          :tokens, :created_at, :updated_at
      ], methods: [
          :post_count, :follower_count, :following_count
      ]) }
    end

    def render_validate_token_error
      render json: {
        success: false,
        errors: [I18n.t("devise_token_auth.token_validations.invalid")]
      }, status: 401
    end
  end
end