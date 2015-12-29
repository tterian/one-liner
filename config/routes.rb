Rails.application.routes.draw do

  root 'pages#home'

  get '/profile/*all' => "pages#home"
  get '/settings/account' => "pages#home"

  scope '/api' do
    mount_devise_token_auth_for 'User', at: 'auth', controllers: {
      passwords:          'devise_token_auth/passwords',
      registrations:      'devise_token_auth/registrations',
      sessions:           'devise_token_auth/sessions',
      token_validations:  'devise_token_auth/token_validations'
    }

    devise_scope :user do
      get '/account/info/:id', to: 'devise_token_auth/accounts#info', as: :info
    end

    resources :posts,         only: [:index, :show, :create] do
      resources :comments,    only: [:index, :show, :create]
    end
    resources :relationships, only: [:create, :destroy]
  end

end
