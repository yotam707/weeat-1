Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :restaurants, except: [:edit, :new] do
        resources :reviews, except: [:edit, :new]
      end
    end
  end
end