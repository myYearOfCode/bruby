require 'rails_helper'
RSpec.describe PicoChangeStateController, type: :controller do

  feature 'pico accesses the PicoChangeState api endpoint' do
    # As a pico brewing machine
    # I want the server to log my state changes
    # So that the user can see the visualization

    scenario 'send picoChangeState api request' do
      get :index
      expect(response.body).to have_content('##')
    end

  end
end
