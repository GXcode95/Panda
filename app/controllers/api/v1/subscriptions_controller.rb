class Api::V1::SubscriptionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  respond_to :json

  def index
    @subscriptions = Subscription.where(user_id: current_user.id)
  end

  def create 
    @subscription = Subscription.new(user_id: current_user.id, course_id: params[:subscription][:course_id])
    
    if !@subscription.save
      render json: { error: @subscription.errors.full_messages.first }
    end
  end

  def destroy
    @subscription = Subscription.find_by(user_id: current_user.id, course_id: params[:id])
    if @subscription
      @subscription.destroy
      render json: { message: "Inscription annulé." }
    else 
      render json: {error: "Vous n'êtes pas autoriser à faire ça."}
    end

  end

  private
    def subscription_params
      params.require(:subscription).permit(:id, :course_id)
    end

end
