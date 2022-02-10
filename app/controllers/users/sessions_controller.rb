class Users::SessionsController < Devise::SessionsController
  skip_before_action :verify_authenticity_token
  # This prevent to get redirected when request for signin
  skip_before_action :require_no_authentication, only: [:new, :create]

  respond_to :json
  private
  def respond_with(resource, _opts = {})
    current_user ? log_in_success : log_in_failure
  end
  def log_in_success
    render json: { message: 'Connecté !', user: current_user }, status: :ok
  end
  def log_in_failure
    render json: { error: 'Email ou mot de passe incorrect'}, status: :unauthorized
  end
  def respond_to_on_destroy
    current_user ? log_out_success : log_out_failure
  end
  def log_out_success
    render json: { message: "Déconnecté !" }, status: :ok
  end
  def log_out_failure
    render json: { error: "Impossible de se déconnecter."}, status: :unauthorized
  end
end