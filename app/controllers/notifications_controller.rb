class NotificationsController < ApplicationController
  # before_filter :set_user_by_token
  before_action :authenticate_user!

  # GET /api/notifications
  # Get all the notifications
  def index
    notifications = Activity.where(owner_id: current_user.id)
    render json: notifications, each_serializer: NotificationSerializer
  end

  # PATCH /api/notifications/:id
  # Updates a specific notification
  # def update
  #   @notification = Activity.find(params[:id])
  #   if @notification.update(notification_params)
  #     render json: @notification
  #   else
  #     render json: { error: @notification.errors }, status: :unprocessable_entity
  #   end
  # end

  # DELETE /api/notifications/:id
  # Deletes a specific notification
  def destroy
    @notification = Activity.find(params[:id])
    @notification.destroy
  end
  
  private

  def notification_params
    params.require(:params).permit(:id)
  end

end

