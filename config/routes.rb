Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get "/people", to: 'people#index'
      post "/people", to: 'people#create'
      delete "/people/:id", to: 'people#destroy'
    end
  end


  get "/", to: 'pages#index'
end
