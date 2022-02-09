Rails.application.routes.draw do
  root 'pages#home'
  
  devise_for :users,
              controllers: {
                  sessions: 'users/sessions',
                  registrations: 'users/registrations'
              }
  
  namespace :api do
    namespace :v1 do
      resources :courses, only: [:index]
    end
  end

  get "*path", to: 'pages#home'
   # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
