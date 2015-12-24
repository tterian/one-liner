Rails.application.routes.draw do

  root 'pages#home'
  scope '/api' do
    mount_devise_token_auth_for 'User', at: 'auth', controllers: {
      passwords:          'devise_token_auth/passwords',
      registrations:      'devise_token_auth/registrations',
      sessions:           'devise_token_auth/sessions',
      token_validations:  'devise_token_auth/token_validations'
    }



    resources :posts,         only: [:index, :show, :create] do
      resources :comments,    only: [:index, :show, :create]
    end
    resources :relationships, only: [:create, :destroy]
  end

end
