Rails.application.routes.draw do
  root 'application#home'
  resources :entities, only: [:show, :index, :create, :update, :destroy]
  resources :sections
  resources :categories, only: [:show, :index, :create, :update, :destroy]
end
