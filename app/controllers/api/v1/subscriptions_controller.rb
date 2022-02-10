class Api::V1::SubscriptionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  respond_to :json

  def index
    @subscriptions = Subscription.where(user_id: current_user.id)
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

  def destroy
    puts "3"*100
    @subscription = Subscription.find(params[:id])
    if current_user.id === @subscription.user.id
      @subscription.destroy
      render json: {message: "Inscription annulé."}
    else 
      render json: {error: "Vous n'êtes pas autoriser à faire ça."}
    end
    puts "3"*100

  end

  private
    def subscription_params
      params.require(:subscription).permit(:id, :course_id)
    end

end
