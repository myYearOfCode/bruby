Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :recipes, only: [:index]
      resources :users, only: [:index]
    end
  end

  get '/dashboard', to: 'dashboard#index'
  get '/dashboard/*path', to: 'dashboard#index'

  get 'API/pico/getRecipe', to: 'get_recipe#index'
  get 'API/pico/register', to: 'register#index'
  get 'API/pico/checkFirmware', to: 'check_firmware#index'
  get 'API/pico/picoChangeState', to: 'pico_change_state#index'
  get 'API/pico/getActionsNeeded', to: 'get_actions_needed#index'
end
