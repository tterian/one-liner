Rails.application.routes.draw do

  root 'pages#home'

  get '/profile/*all' => "pages#home"
  get '/settings/account' => "pages#home"
  get '/messages' => "pages#home"
  get '/notifications' => "pages#home"

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

    resources :ratings,       only: [:index, :create, :update]
    resources :posts,         only: [:index, :show, :create]
    resources :relationships, only: [:index, :create, :destroy]
    post '/relationships/follow/:followedId', to: 'relationships#follow'
    post '/relationships/unfollow/:followedId', to: 'relationships#unfollow'

    resources :conversations, only: [:index, :show] do
      member do
        post :reply
      end
    end
    resources :messages, only: [:create]
    resources :notifications,      only: [:index, :update]
  end

end
