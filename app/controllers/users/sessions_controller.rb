class Users::SessionsController < Devise::SessionsController
  skip_before_action :verify_authenticity_token
  # This prevent to get redirected when request for signin
  prepend_before_action :require_no_authentication

  respond_to :json
  private
  def respond_with(resource, _opts = {})
    current_user ? log_in_success : log_in_failure
  end
  def log_in_success
    render json: { message: 'Logged.', user: current_user }, status: :ok
  end
  def log_in_failure
    render json: { message: 'Fail to log in.'}, status: :unauthorized
  end
  def respond_to_on_destroy
    current_user ? log_out_success : log_out_failure
  end
  def log_out_success
    render json: { message: "Logged out." }, status: :ok
  end
  def log_out_failure
    render json: { message: "Logged out failure."}, status: :unauthorized
  end
end