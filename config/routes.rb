Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
      root 'chat_space#index'
      get 'chat_space' => 'chat_space#index'
      resources :users
      # resources :users, only: [:edit, :update]
      resources :groups
end
