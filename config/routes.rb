Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:index, :create, :show, :update] do 
      # then videos index to be displayed on user's profile?
    end 
    resource :session, only: [:create, :destroy]

    resources :videos,  only: [:create, :show, :update, :destroy]
  end
end
