Rails.application.routes.draw do
  root "home#index"

  namespace :api do
    namespace :v1 do
      resources :gyms, only: [:get, :index, :show]
    end
  end
end
