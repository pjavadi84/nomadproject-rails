Rails.application.routes.draw do
  resources :galleries do 
    resources :images do 
    end
  end

  root to: 'galleries#index'
end

