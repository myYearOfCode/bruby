require 'rails_helper'
RSpec.describe CheckFirmwareController, type: :controller do

  feature 'pico accesses the checkFirmware api endpoint' do
    # As a pico brewing machine
    # I want the server to check my firmware version
    # So that I can know when there is a firmware update

    scenario 'send checkFirmware api request' do
      get :index
      expect(response.body).to have_content('#F#')
    end

  end
end
