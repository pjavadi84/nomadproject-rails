Rails.application.routes.draw do
  resources :images
  resources :galleries
  root to: 'gallery#index'
end

