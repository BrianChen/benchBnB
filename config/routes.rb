Rails.application.routes.draw do
  root to: 'static_pages#root'
  delete '/api/session'      => 'api/session#destroy'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :session, only: [:create]
  end
end
