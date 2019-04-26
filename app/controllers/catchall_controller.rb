class CatchallController < ApplicationController
  def index
    # in_uri = URI.parse(request.url)
    # base_url="https://arcane-atoll-28308.herokuapp.com"
    path = "#{request.url}"
    # if path == 'api/pico/getRecipe'
    #   puts "CatchallController #{path}"
    #   render :get_recipe
    # end
      # get 'api/pico/register', to: 'register#index'
      # get 'api/pico/checkFirmware', to: 'check_firmware#index'
      # # get 'api/pico/getFirmware', to: 'get_firmware#index'
      # get 'api/pico/picoChangeState', to: 'pico_change_state#index'
      # get 'api/pico/getActionsNeeded', to: 'get_actions_needed#index'
    puts "CatchallController #{path}"
    render plain: path
  end
end
