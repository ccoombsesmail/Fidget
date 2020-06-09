Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:index, :show, :update]
    resources :vods, only: [:show, :index, :create]
    resources :follows, only: [:create, :destroy]
    resources :categories, only: [:index, :show]
    resources :streams, only: [:create]
  end

  root to: 'static_pages#root'
  mount ActionCable.server, at: '/cable'
end
