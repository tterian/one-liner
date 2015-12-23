Rails.application.routes.draw do

  root 'pages#home'
  scope '/api' do
    mount_devise_token_auth_for 'User', at: '/auth'
    resources :posts,         only: [:index, :show, :create] do
      resources :comments,    only: [:index, :show, :create]
    end
    resources :relationships, only: [:create, :destroy]
  end

end
