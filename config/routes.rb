Rails.application.routes.draw do
  root 'application#home'
  resources :entities, only: [:show, :index, :create, :update, :destroy]
  resources :sections
  resources :categories, only: [:show, :index, :create, :update, :destroy]
  resources :general_links, only: [:show, :create, :update]
  resources :general_notes, only: [:show, :create, :update]
  resources :links, only: [:create, :update]
  resources :notes, only: [:create, :update]
  resources :subsections, only: [:create, :update]
  resources :entity_categories, only: [:create, :update]
end
