class Api::V1::SubscriptionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  respond_to :json

  def index
    @subscriptions = Subscription.all
  end

  def create 
    @subscription = Subscription.new(user_id: current_user.id, course_id: params[:subscription][:course_id])
    
    if @subscription.save
      render json: { message: "Inscrit avec success" }, status: :ok
    else
      puts @subscription.errors.messages
      render json: { error: @subscription.errors.full_messages.first }
    end
  end

  private
    def subscription_params
      params.require(:subscription).permit(:course_id)
    end

end
