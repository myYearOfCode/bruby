Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get 'api/pico/getRecipe', to: 'get_recipe#index'
  get 'api/pico/register', to: 'register#index'
  get 'api/pico/checkFirmware', to: 'check_firmware#index'
  # get 'api/pico/getFirmware', to: 'get_firmware#index'
  get 'api/pico/picoChangeState', to: 'pico_change_state#index'
  get 'api/pico/getActionsNeeded', to: 'get_actions_needed#index'

  # namespace :api do
  #   namespace :pico do
# /API/pico/getRecipe?uid=f91dc3e8cfa484a6d37911d951ac0a72&rfid=04134a6aec4a81&ibu=-1&abv=-1.0

# /API/pico/getActionsNeeded?uid=f91dc3e8cfa484a6d37911d951ac0a72

# /API/pico/register?uid=f91dc3e8cfa484a6d37911d951ac0a72

# /API/pico/picoChangeState?picoUID=f91dc3e8cfa484a6d37911d951ac0a72&state=2

# /API/pico/getFirmware?uid=f91dc3e8cfa484a6d37911d951ac0a72&version=0.1.4

# /API/pico/checkFirmware?uid=f91dc3e8cfa484a6d37911d951ac0a72&version=0.1.4

  #   end
  # end
end
