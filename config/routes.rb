Rails.application.routes.draw do
  root 'application#home'
  resources :entities, only: [:show, :index, :create, :update, :destroy]
  post '/entities/:id/upvote', to: 'entities#upvote', as: 'upvotes'
  post '/entities/:id/downvote', to: 'entities#downvote'
  get '/entities-search/:entity', to: 'entities#search'
  resources :sections
  resources :categories, only: [:show, :index, :create, :update, :destroy]
  resources :general_links, only: [:show, :create, :update]
  resources :general_notes, only: [:show, :create, :update]
  resources :links, only: [:show, :create, :update]
  resources :notes, only: [:show, :create, :update]
  get '/recent-notes', to: 'notes#last50'
  resources :subsections, only: [:show, :create, :update]
  get '/recent/subsections', to: 'subsections#recent'
  resources :entity_categories, only: [:create, :update]
end
